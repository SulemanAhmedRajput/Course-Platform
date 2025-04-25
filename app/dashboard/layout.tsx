"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Library,
  Settings,
  Users,
  FileText,
  CreditCard,
  MessageSquare,
  Heart,
  BadgeIcon as Certificate,
  Bell,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  const userRole = "instructor" // Replace with dynamic value later

  return (
    <div className="flex h-screen w-full overflow-hidden">

      <SidebarProvider>
        <Sidebar  collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl">LearnHub</span>
              </Link>
            </div>
          </SidebarHeader>

          <SidebarContent className="scrollbar-hide overflow-auto group-data-[collapsible=icon]:overflow-auto" >
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Overview"} asChild isActive={isActive("/dashboard")}>
                      <Link href="/dashboard">
                        <LayoutDashboard />
                        <span>Overview</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"My Courses"} asChild isActive={isActive("/dashboard/my-courses")}>
                      <Link href="/dashboard/my-courses">
                        <BookOpen />
                        <span>My Courses</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Analytics"} asChild isActive={isActive("/dashboard/analytics")}>
                      <Link href="/dashboard/analytics">
                        <BarChart3 />
                        <span>Analytics</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Certificates"} asChild isActive={isActive("/dashboard/certificates")}>
                      <Link href="/dashboard/certificates">
                        <Certificate />
                        <span>Certificates</span>
                        <Badge className="ml-auto">New</Badge>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {userRole === "instructor" && (
              <SidebarGroup>
                <SidebarGroupLabel>Instructor</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip={"Create Case"} asChild isActive={isActive("/dashboard/create-course")}>
                        <Link href="/dashboard/create-course">
                          <Library />
                          <span>Create Course</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip={"Manage Courses"} asChild isActive={isActive("/dashboard/manage-courses")}>
                        <Link href="/dashboard/manage-courses">
                          <FileText />
                          <span>Manage Courses</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip={"Students"} asChild isActive={isActive("/dashboard/students")}>
                        <Link href="/dashboard/students">
                          <Users />
                          <span>Students</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip={"Earnings"} asChild isActive={isActive("/dashboard/earnings")}>
                        <Link href="/dashboard/earnings">
                          <CreditCard />
                          <span>Earnings</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}

            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Profile"} asChild isActive={isActive("/dashboard/profile")}>
                      <Link href="/dashboard/profile">
                        <Users />
                        <span>Profile</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Notifications"} asChild isActive={isActive("/dashboard/notifications")}>
                      <Link href="/dashboard/notifications">
                        <Bell />
                        <span>Notifications</span>
                        <Badge className="ml-auto">5</Badge>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Messages"} asChild isActive={isActive("/dashboard/messages")}>
                      <Link href="/dashboard/messages">
                        <MessageSquare />
                        <span>Messages</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={"Wishlist"} asChild isActive={isActive("/dashboard/wishlist")}>
                      <Link href="/dashboard/wishlist">
                        <Heart />
                        <span>Wishlist</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={"Settings"} asChild isActive={isActive("/dashboard/settings")}>
                  <Link href="/dashboard/settings">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <div className="flex items-center justify-between gap-2 p-2">
                <div className="flex gap-4">
                <Avatar className="h-8 w-8 group-data-[collapsible=icon]:w-6 group-data-[collapsible=icon]:h-6 transition-opacity duration-100">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex group-data-[collapsible=icon]:hidden flex-col ">
                    <span className="text-sm font-medium whitespace-nowrap">John Doe</span>
                    <span className="text-xs group-data-[collapsible=icon]:hidden text-muted-foreground">
                      {userRole === "instructor" ? "Instructor" : "Student"}
                    </span>
                  </div>
                </div>
                  <ModeToggle />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">View Site</Link>
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6 bg-background">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>

  )
}
