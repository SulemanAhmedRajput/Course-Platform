import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  adminRoutes,
  apiAuthPrefix,
  authPublicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  studentRoutes,
  instructorRoutes,
} from "./routes";

// Define a type for the expected decoded JWT payload
type DecodedToken = {
  role?: string;
  [key: string]: any; // In case there are other properties
};

// Helper function to decode JWT token (basic implementation)
function decodeJwtToken(token: string): DecodedToken | null {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

// Helper function to check if user has access to a specific route based on role
function hasRouteAccess(userRole: string, pathname: string): boolean {
  if (studentRoutes.includes(pathname)) {
    return userRole === "student" || userRole === "admin";
  }
  if (instructorRoutes.includes(pathname)) {
    return userRole === "instructor" || userRole === "admin";
  }
  if (adminRoutes.includes(pathname)) {
    return userRole === "admin";
  }
  return true;
}

// Helper function to get redirect URL based on user role
function getRoleBasedRedirect(userRole: string): string {
  switch (userRole) {
    case "admin":
      return "/admin/dashboard";
    case "student":
      return "/student/dashboard";
    case "instructor":
      return "/instructor/dashboard";
    default:
      return DEFAULT_LOGIN_REDIRECT;
  }
}

// Middleware function
export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname: string = nextUrl.pathname;
  const authToken: string = request.cookies.get("accessToken")?.value || "";
  const isLoggedIn: boolean = !!authToken;
  const refreshToken: string = request.cookies.get("refreshToken")?.value || "";

  console.log("Middleware-AuthToken", { authToken, refreshToken });

  // Decode token to get user role
  let userRole: string | null = null;
  if (isLoggedIn && authToken) {
    const decodedToken = decodeJwtToken(authToken);
    console.log("Decoded token:", decodedToken);
    userRole = decodedToken?.role || null; // Default to null if role is not found
    console.log("User role:", userRole);
  }

  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);
  const isAuthPublicRoute = authPublicRoutes.includes(pathname);

  // Allow access to API auth routes (logged in or not)
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  // Redirect logged-in users from auth routes to their role-based dashboard
  if (isAuthRoute) {
    if (isLoggedIn && userRole) {
      const callbackUrl = nextUrl.searchParams.get("callbackUrl") || getRoleBasedRedirect(userRole);
      return NextResponse.redirect(new URL(callbackUrl, nextUrl));
    }
    return NextResponse.next();
  }

  // Handle authenticated public routes
  if (isAuthPublicRoute) {
    if (!isLoggedIn) {
      let callback = pathname;
      if (nextUrl.search) {
        callback += nextUrl.search;
      }
      const encodedCallbackUrl = encodeURIComponent(callback);
      return NextResponse.redirect(
        new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
      );
    }
    return NextResponse.next();
  }

  // Role-based access control for protected routes
  if (isLoggedIn && userRole) {
    if (!hasRouteAccess(userRole, pathname)) {
      const redirectUrl = getRoleBasedRedirect(userRole);
      console.log(`Access denied for ${userRole} to ${pathname}, redirecting to ${redirectUrl}`);
      return NextResponse.redirect(new URL(redirectUrl, nextUrl));
    }
    return NextResponse.next();
  }

  // Redirect unauthenticated users from non-public routes
  if (!isLoggedIn && !isPublicRoute) {
    let callback = pathname;
    if (nextUrl.search) {
      callback += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callback);
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return NextResponse.next();
}

// Middleware path matcher configuration
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
