"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Check, Palette, Type, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FontClass,  useFontStore } from "@/hooks/use-font"

type FontOption = {
  name: string
  value: string
  className: string
}

type ThemeOption = {
  name: string
  value: string
  color: string
  bgColor: string
}

const fontOptions: FontOption[] = [
  { name: "Inter", value: "font-inter", className: "font-sans" },
  { name: "Roboto", value: "font-roboto", className: "font-roboto" },
  { name: "Open Sans", value: "font-open-sans", className: "font-open-sans" },
  { name: "Poppins", value: "font-poppins", className: "font-poppins" },
  { name: "Montserrat", value: "font-montserrat", className: "font-montserrat" },
  { name: "Playfair Display", value: "font-playfair", className: "font-playfair" },
]

const themeOptions: ThemeOption[] = [
  { name: "Light", value: "light", color: "#000000", bgColor: "#ffffff" },
  { name: "Dark", value: "dark", color: "#ffffff", bgColor: "#09090b" },
  { name: "Blue", value: "blue", color: "#ffffff", bgColor: "#1e40af" },
  { name: "Green", value: "green", color: "#ffffff", bgColor: "#15803d" },
  { name: "Purple", value: "purple", color: "#ffffff", bgColor: "#7e22ce" },
  { name: "Orange", value: "orange", color: "#ffffff", bgColor: "#ea580c" },
  { name: "Red", value: "red", color: "#ffffff", bgColor: "#b91c1c" },
  { name: "Yellow", value: "yellow", color: "#000000", bgColor: "#eab308" },
  { name: "Pink", value: "pink", color: "#ffffff", bgColor: "#be185d" },
  { name: "Gray", value: "gray", color: "#ffffff", bgColor: "#4b5563" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"colors" | "fonts">("colors")
  const {setFont, selectedFont} = useFontStore()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, load the saved font preference
  useEffect(() => {
    setMounted(true)
    const savedFont = localStorage.getItem("selectedFont") || "font-inter"
    setFont(savedFont as FontClass)
    document.documentElement.className = savedFont
  }, [])

  // Handle font change
  const handleFontChange = (font: FontClass) => {
    setFont(font)
    document.documentElement.className = font
    localStorage.setItem("selectedFont", font)
  }

  // If not mounted yet, don't render to avoid hydration mismatch
  if (!mounted) return null

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-background shadow-md"
                onClick={() => setOpen(true)}
              >
                <Palette className="h-5 w-5" />
                <span className="sr-only">Open theme settings</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Customize theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 bottom-16 z-50 w-72 h-[calc(100vh-80px)] overflow-y-auto rounded-lg border bg-background shadow-lg"
          >
            <div className="flex items-center sticky top-0 justify-between border-b p-3 bg-background"> 
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <h3 className="font-medium">Appearance</h3>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="p-4">
              <div className="flex items-center space-x-1 rounded-md bg-muted p-1 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn("flex-1 rounded-sm", activeTab === "colors" && "bg-background shadow-sm")}
                  onClick={() => setActiveTab("colors")}
                >
                  <Palette className="mr-2 h-4 w-4" />
                  Colors
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn("flex-1 rounded-sm", activeTab === "fonts" && "bg-background shadow-sm")}
                  onClick={() => setActiveTab("fonts")}
                >
                  <Type className="mr-2 h-4 w-4" />
                  Fonts
                </Button>
              </div>

              {activeTab === "colors" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-2">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        className={cn(
                          "h-8 w-8 rounded-full border-2 flex items-center justify-center",
                          theme === option.value ? "border-primary" : "border-transparent",
                        )}
                        style={{ backgroundColor: option.bgColor }}
                        onClick={() => setTheme(option.value)}
                        title={option.name}
                      >
                        {theme === option.value && <Check className="h-4 w-4" style={{ color: option.color }} />}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current theme:</span>
                      <span className="font-medium">
                        {themeOptions.find((opt) => opt.value === theme)?.name || "System"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {themeOptions.map((option) => (
                        <button
                          key={option.value}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                            theme === option.value ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                          )}
                          onClick={() => setTheme(option.value)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: option.bgColor }} />
                            <span>{option.name}</span>
                          </div>
                          {theme === option.value && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                      <button
                        className={cn(
                          "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                          theme === "system" ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                        )}
                        onClick={() => setTheme("system")}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-black to-white" />
                          <span>System</span>
                        </div>
                        {theme === "system" && <Check className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "fonts" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current font:</span>
                      <span className="font-medium">
                        {fontOptions.find((opt) => opt.value === selectedFont)?.name || "Inter"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1">
                      {fontOptions.map((option) => (
                        <button
                          key={option.value}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                            selectedFont === option.value ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                            option.className,
                          )}
                          onClick={() => handleFontChange(option.value as FontClass)}
                        >
                          <span>{option.name}</span>
                          {selectedFont === option.value && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-md border p-3 overflow-hidden">
                    <p className={cn("text-sm", selectedFont)}>The quick brown fox jumps over the lazy dog.</p>
                    <p className={cn("text-sm font-bold mt-1", selectedFont)}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className={cn("text-sm mt-1", selectedFont)}>0123456789 !@#$%^&*()</p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t p-3 text-xs text-muted-foreground">
              <p>Your preferences are saved automatically and will be applied to this browser only.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
