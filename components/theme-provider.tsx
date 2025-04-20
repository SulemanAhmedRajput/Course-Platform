"use client"

import { useFontStore } from "@/hooks/use-font";
import { cn } from "@/lib/utils";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  themes = ["light", "dark"],
  ...props
}: ThemeProviderProps & { themes?: string[] }) {
  const {selectedFont, setFont} = useFontStore()
  return (
    <NextThemesProvider themes={themes} {...props}>
     <div className={cn("font-sans", selectedFont)}>

     {children}
     </div>
    </NextThemesProvider>
  )
}
