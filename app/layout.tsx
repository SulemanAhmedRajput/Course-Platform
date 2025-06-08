import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { QueryProvider } from "@/providers/query-provider"
import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans, Playfair_Display, Poppins, Roboto } from "next/font/google"
import type React from "react"
import "./globals.css"
import { AuthProvider } from "@/components/auth/auth-provider"




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
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
