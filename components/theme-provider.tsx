"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({
  children,
  themes = ["light", "dark"],
  ...props
}: ThemeProviderProps & { themes?: string[] }) {
  return (
    <NextThemesProvider themes={themes} {...props}>
      {children}
    </NextThemesProvider>
  )
}
