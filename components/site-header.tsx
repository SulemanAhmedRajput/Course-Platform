"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { ShoppingCart, Menu, X, Search, Bell, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth/auth-provider"

export function SiteHeader() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isAuthenticated, user, openAuthDialog, logout } = useAuth()

  // Check if we're on a course content page
  const isCoursePage = pathname?.startsWith("/course/") && pathname?.includes("/learn")

  if (isCoursePage) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center space-x-2 mr-4">
            <span className="text-xl font-bold">LearnHub</span>
          </Link>
          <div className="flex-1 flex items-center">
            <span className="text-sm font-medium truncate">Web Development Bootcamp: Complete Guide</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Course Content
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-6">
            <span className="text-xl font-bold">LearnHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/courses"
              className={`text-sm font-medium ${pathname === "/courses" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}
            >
              Courses
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground/70 hover:text-foreground">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/category/development" className="w-full">
                    Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/category/business" className="w-full">
                    Business
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/category/design" className="w-full">
                    Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/category/marketing" className="w-full">
                    Marketing
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/teach"
              className={`text-sm font-medium ${pathname === "/teach" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}
            >
              Teach
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-4">
          {isSearchOpen ? (
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for courses..."
                className="w-full"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-muted-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="mr-2 h-4 w-4" />
              Search for courses...
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
          </Button>
          <ModeToggle />

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user?.name || "User"} />
                    <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => openAuthDialog("login")}>
                Login
              </Button>
              <Button size="sm" onClick={() => openAuthDialog("register")}>
                Sign Up
              </Button>
            </div>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>LearnHub</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <nav className="flex flex-col gap-4">
                  <Link href="/courses" className="text-sm font-medium">
                    Courses
                  </Link>
                  <Link href="/category/development" className="text-sm font-medium">
                    Development
                  </Link>
                  <Link href="/category/business" className="text-sm font-medium">
                    Business
                  </Link>
                  <Link href="/category/design" className="text-sm font-medium">
                    Design
                  </Link>
                  <Link href="/teach" className="text-sm font-medium">
                    Teach
                  </Link>
                  {!isAuthenticated && (
                    <>
                      <Button
                        variant="link"
                        className="justify-start p-0 h-auto text-sm font-medium"
                        onClick={() => openAuthDialog("login")}
                      >
                        Login
                      </Button>
                      <Button
                        variant="link"
                        className="justify-start p-0 h-auto text-sm font-medium"
                        onClick={() => openAuthDialog("register")}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {isSearchOpen && (
        <div className="md:hidden p-4 border-t">
          <Input type="search" placeholder="Search for courses..." className="w-full" autoFocus />
        </div>
      )}
    </header>
  )
}
