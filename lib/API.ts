export const APIS = {
    auth: {
        register: "/auth/register",
        login: "/auth/login",
        logout: "/auth/logout",
        verifyEmail: "/auth/verify-email",
        resetPassword: "/auth/reset-password",
        verifyOtp: "/auth/verify",
    },
    categories: {
        create: "/categories",       // Create category
        get: (id: number) => `/categories/${id}`,  // Get a single category by ID
        getAll: "/categories",      // Get all categories
        update: (id: number) => `/categories/${id}`,  // Update category
        delete: (id: number) => `/categories/${id}`,  // Delete category
    },
    admin: {
        dashboard: "/api/admin/dashboard",
    },
    student: {
        dashboard: "/api/student/dashboard",
    },
    instructor: {
        dashboard: "/api/instructor/dashboard",
    },
}

