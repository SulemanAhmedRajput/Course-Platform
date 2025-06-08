"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, Lock, User, Eye, EyeOff, Github, Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useFontStore } from "@/hooks/use-font"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema, loginSchema, RegisterSchema, registerSchema } from "@/schemas/auth-schema"
import { useLoginMutation } from "@/api/mutations/login-mutation"
import { useRegisterMutation } from "@/api/mutations/register-mutation"
import { FormInput } from "../reuseable/form-input"
import { FormCheckbox } from "../reuseable/form-checkbox"
import { FormRadioGroup } from "../reuseable/form-radio-group"
import { FormButton } from "../reuseable/form-button"
import { FormMessages } from "../form/form-messages"
import { useAuth } from "./auth-provider"

interface AuthDialogProps {
  isOpen: boolean
  onClose: () => void
  initialView?: "login" | "register" | "forgot-password"
}

export function AuthDialog({ isOpen, onClose, initialView = "login" }: AuthDialogProps) {
  const { selectedFont } = useFontStore()
  const { login } = useAuth()
  const [view, setView] = useState<"login" | "register" | "forgot-password">(initialView)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // For forgot-password, as it's not hooked up to a mutation yet
  const [email, setEmail] = useState("") // For forgot-password email
  const [resetEmailSent, setResetEmailSent] = useState(false)

  // Login form setup
  const { mutate: loginMutation, isPending: isLoginPending } = useLoginMutation()
  const loginMethods = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  })
  const [loginSuccessMessage, setLoginSuccessMessage] = useState<string | null>(null)
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(null)

  const handleLoginSubmit = (data: LoginSchema) => {
    setLoginSuccessMessage(null)
    setLoginErrorMessage(null)
    loginMutation(data, {
      onSuccess: (responseData: any) => {
        setLoginSuccessMessage("Login successful!")
        loginMethods.reset()
        onClose() // Close dialog on successful login
        login({
          email: responseData?.data?.email || "",
          name: responseData?.data?.name || "",
          role: responseData?.data?.role || "",
        })
      },
      onError: (error: any) => {
        setLoginErrorMessage(error.response?.data?.message || "Login failed. Please try again.")
      },
    })
  }

  // Register form setup
  const { mutate: registerMutation, isPending: isRegisterPending } = useRegisterMutation()
  const registerMethods = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema),
  })
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState<string | null>(null)
  const [registerErrorMessage, setRegisterErrorMessage] = useState<string | null>(null)

  const handleRegisterSubmit = (data: RegisterSchema) => {
    setRegisterSuccessMessage(null)
    setRegisterErrorMessage(null)
    registerMutation(data, {
      onSuccess: (responseData: any) => {
        setRegisterSuccessMessage("Registration successful!")
        registerMethods.reset()
        setView("login") // Redirect to login after successful registration
        login({
          email: responseData?.data?.email || "",
          name: responseData?.data?.name || "",
          role: responseData?.data?.role || "",
        })
      },
      onError: (error: any) => {
        setRegisterErrorMessage(error.response?.data?.message || "Registration failed. Please try again.")
      },
    })
  }

  // Reset state when dialog opens/closes or view changes
  useEffect(() => {
    if (isOpen) {
      setView(initialView)
      setResetEmailSent(false)
      setLoginSuccessMessage(null)
      setLoginErrorMessage(null)
      setRegisterSuccessMessage(null)
      setRegisterErrorMessage(null)
      loginMethods.reset()
      registerMethods.reset()
    }
  }, [isOpen, initialView, loginMethods, registerMethods])

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call for forgot password (not yet hooked to mutation)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setResetEmailSent(true)
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
    // Implement social login logic
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={cn("sm:max-w-md  p-0 max-h-[calc(100vh-40px)] overflow-auto scrollbar-hide", selectedFont)}>
        <AnimatePresence mode="wait">
          {view === "login" && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Welcome back</h2>
                <p className="text-sm text-muted-foreground mt-1">Enter your credentials to access your account</p>
              </div>

              <FormProvider {...loginMethods}>
                <form onSubmit={loginMethods.handleSubmit(handleLoginSubmit)} className="space-y-4">
                  <FormMessages successMessage={loginSuccessMessage} errorMessage={loginErrorMessage} />
                  <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="m@example.com"
                    disabled={isLoginPending}
                    icon={Mail}
                  />
                  <FormInput
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    disabled={isLoginPending}
                    icon={Lock}
                  />
                  <div className="flex items-center justify-between">
                    <FormCheckbox
                      name="remember"
                      label="Remember me for 30 days"
                      disabled={isLoginPending}
                    />
                    <Button
                      type="button"
                      variant="link"
                      className="p-0 h-auto text-xs"
                      onClick={() => setView("forgot-password")}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <FormButton type="submit" className="w-full" isPending={isLoginPending}>
                    Login
                  </FormButton>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button" onClick={() => handleSocialLogin("google")} disabled={isLoginPending}>
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" type="button" onClick={() => handleSocialLogin("github")} disabled={isLoginPending}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>

                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Button variant="link" type="button" className="p-0 h-auto" onClick={() => setView("register")}>
                      Sign up
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </motion.div>
          )}

          {view === "register" && (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Create an account</h2>
                <p className="text-sm text-muted-foreground mt-1">Enter your information to create an account</p>
              </div>

              <FormProvider {...registerMethods}>
                <form onSubmit={registerMethods.handleSubmit(handleRegisterSubmit)} className="space-y-4">
                  <FormMessages successMessage={registerSuccessMessage} errorMessage={registerErrorMessage} />
                  <FormInput
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    disabled={isRegisterPending}
                    icon={User}
                  />
                  <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="m@example.com"
                    disabled={isRegisterPending}
                    icon={Mail}
                  />
                  <FormInput
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    disabled={isRegisterPending}
                    icon={Lock}
                  />
                  <FormInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    disabled={isRegisterPending}
                    icon={Lock}
                  />
                  <FormRadioGroup
                    name="role"
                    label="Account Type"
                    options={[
                      { label: "Student", value: "student" },
                      { label: "Instructor", value: "instructor" },
                    ]}
                    disabled={isRegisterPending}
                  />
                  <FormCheckbox
                    name="terms"
                    label="I agree to the"
                    links={[
                      { text: "Terms of Service", href: "/terms" },
                      { text: "Privacy Policy", href: "/privacy" },
                    ]}
                    disabled={isRegisterPending}
                  />
                  <FormButton type="submit" className="w-full" isPending={isRegisterPending}>
                    Create Account
                  </FormButton>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button" onClick={() => handleSocialLogin("google")} disabled={isRegisterPending}>
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" type="button" onClick={() => handleSocialLogin("github")} disabled={isRegisterPending}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>

                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Button variant="link" type="button" className="p-0 h-auto" onClick={() => setView("login")}>
                      Login
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </motion.div>
          )}

          {view === "forgot-password" && (
            <motion.div
              key="forgot-password"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Reset your password</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {resetEmailSent
                    ? "Check your email for a reset link"
                    : "Enter your email and we'll send you a reset link"}
                </p>
              </div>

              {resetEmailSent ? (
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="rounded-full bg-green-100 p-3 mb-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-center">
                      We've sent a password reset link to <span className="font-medium">{email}</span>
                    </p>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => setView("login")}>
                    Back to login
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="m@example.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading} // Disable during loading
                      />
                    </div>
                  </div>

                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send reset link"
                    )}
                  </Button>

                  <Button className="w-full" variant="outline" type="button" onClick={() => setView("login")} disabled={isLoading}>
                    Back to login
                  </Button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
