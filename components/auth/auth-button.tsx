"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"

interface AuthButtonProps extends ButtonProps {
  authView?: "login" | "register" | "forgot-password"
  authenticatedText?: string
  unauthenticatedText?: string
}

export function AuthButton({
  authView = "login",
  authenticatedText = "Continue",
  unauthenticatedText = "Login",
  ...props
}: AuthButtonProps) {
  const { isAuthenticated, openAuthDialog } = useAuth()

  const handleClick = () => {
    if (!isAuthenticated) {
      openAuthDialog(authView)
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {isAuthenticated ? authenticatedText : unauthenticatedText}
    </Button>
  )
}
