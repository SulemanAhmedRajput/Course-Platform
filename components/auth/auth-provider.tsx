"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { AuthDialog } from "@/components/auth/auth-dialog"
import { destroyAdminSession } from "@/actions/save-token"
import Cookies from 'js-cookie'

type AuthView = "login" | "register" | "forgot-password"

interface UserSessionData {
  email: string;
  role: string;
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean
  user: UserSessionData | null
  openAuthDialog: (view?: AuthView) => void
  closeAuthDialog: () => void
  login: (userData: UserSessionData) => void
  register: (userData: UserSessionData) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserSessionData | null>(null)
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const [authDialogView, setAuthDialogView] = useState<AuthView>("login")

  useEffect(() => {
    const userEmail = Cookies.get('userEmail')
    const userRole = Cookies.get('userRole')
    const userName = Cookies.get('userName')

    if (userEmail && userRole && userName) {
      setIsAuthenticated(true)
      setUser({
        email: userEmail,
        role: userRole,
        name: userName,
      })
    } else {
      setIsAuthenticated(false)
      setUser(null)
    }
  }, [])

  const openAuthDialog = (view: AuthView = "login") => {
    setAuthDialogView(view)
    setIsAuthDialogOpen(true)
  }

  const closeAuthDialog = () => {
    setIsAuthDialogOpen(false)
  }

  const login = (userData: UserSessionData) => {
    setIsAuthenticated(true)
    setUser(userData)
    closeAuthDialog()
  }

  const register = (userData: UserSessionData) => {
    setIsAuthenticated(true)
    setUser(userData)
    // For register, we usually want to redirect to login or dashboard, not necessarily close the dialog right away.
    // The AuthDialog component itself handles the view change to 'login' on successful registration.
    // So, we don't call closeAuthDialog() here.
  }

  const logout = async () => {
    await destroyAdminSession() // Call the server action to destroy cookies
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
