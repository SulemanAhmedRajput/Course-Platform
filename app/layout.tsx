import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth/auth-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Inter, Roboto, Open_Sans, Poppins, Montserrat, Playfair_Display } from "next/font/google"
import { getSelectedFontServer, getSelectedThemeServer } from "@/actions/theme-action"




export const metadata: Metadata = {
  title: "LearnHub - Online Learning Platform",
  description: "Learn new skills with our online courses",
  generator: 'v0.dev'
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({ subsets: ["latin"], weight: "400", variable: "--font-roboto" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
const poppins = Poppins({ subsets: ["latin"], weight: "400", variable: "--font-poppins" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`font-inter ${inter.variable} ${roboto.variable} ${openSans.variable} ${poppins.variable} ${montserrat.variable} ${playfair.variable}`}
      >
       <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={[
            "light",
            "dark",
            "blue",
            "green",
            "red",
            "purple",
            "orange",
            "yellow",
            "pink",
            "gray",
          ]}
        >
          <AuthProvider>{children}</AuthProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
