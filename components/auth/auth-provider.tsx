"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { AuthDialog } from "@/components/auth/auth-dialog"

type AuthView = "login" | "register" | "forgot-password"

interface AuthContextType {
  isAuthenticated: boolean
  user: any | null
  openAuthDialog: (view?: AuthView) => void
  closeAuthDialog: () => void
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any | null>(null)
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const [authDialogView, setAuthDialogView] = useState<AuthView>("login")

  const openAuthDialog = (view: AuthView = "login") => {
    setAuthDialogView(view)
    setIsAuthDialogOpen(true)
  }

  const closeAuthDialog = () => {
    setIsAuthDialogOpen(false)
  }

  const login = async (email: string, password: string) => {
    // This would be replaced with actual authentication logic
    console.log("Logging in with", email, password)

    // Simulate successful login
    setIsAuthenticated(true)
    setUser({
      id: "1",
      name: "John Doe",
      email,
      role: "student",
    })

    closeAuthDialog()
  }

  const register = async (userData: any) => {
    // This would be replaced with actual registration logic
    console.log("Registering user", userData)

    // Simulate successful registration and login
    setIsAuthenticated(true)
    setUser({
      id: "1",
      name: userData.name,
      email: userData.email,
      role: userData.accountType,
    })

    closeAuthDialog()
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        openAuthDialog,
        closeAuthDialog,
        login,
        register,
        logout,
      }}
    >
      {children}
      <AuthDialog isOpen={isAuthDialogOpen} onClose={closeAuthDialog} initialView={authDialogView} />
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
