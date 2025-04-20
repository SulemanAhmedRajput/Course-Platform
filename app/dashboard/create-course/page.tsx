"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function CreateCoursePage() {
  const [activeTab, setActiveTab] = useState("basic")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Course</h1>
        <p className="text-muted-foreground">Fill in the details to create your new course</p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>Provide the basic information about your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input id="title" placeholder="e.g. Complete Web Development Bootcamp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn in this course"
                  className="min-h-[120px]"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <Select>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="all">All Levels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Course Thumbnail</Label>
                <div className="flex items-center gap-4">
                  <div className="h-32 w-56 rounded-md border bg-muted flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Thumbnail Preview</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Upload Image
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 1280x720 pixels (16:9 ratio)</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button onClick={() => setActiveTab("curriculum")}>Continue to Curriculum</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="curriculum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <CardDescription>Organize your course content into sections and lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Section 1: Introduction</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="rounded-md bg-muted p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox id="lecture-1" />
                        <Label htmlFor="lecture-1" className="font-normal">
                          Welcome to the Course
                        </Label>
                      </div>
                      <div className="text-xs text-muted-foreground">5:30</div>
                    </div>
                    <div className="rounded-md bg-muted p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox id="lecture-2" />
                        <Label htmlFor="lecture-2" className="font-normal">
                          Course Overview
                        </Label>
                      </div>
                      <div className="text-xs text-muted-foreground">10:15</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  + Add New Section
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("basic")}>
                Back
              </Button>
              <Button onClick={() => setActiveTab("pricing")}>Continue to Pricing</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Pricing</CardTitle>
              <CardDescription>Set the pricing options for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input id="price" type="number" placeholder="e.g. 49.99" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sale" />
                  <Label htmlFor="sale">Enable Sale Price</Label>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sale-price">Sale Price ($)</Label>
                  <Input id="sale-price" type="number" placeholder="e.g. 39.99" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sale-end">Sale End Date</Label>
                  <Input id="sale-end" type="date" disabled />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("curriculum")}>
                Back
              </Button>
              <Button onClick={() => setActiveTab("settings")}>Continue to Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Settings</CardTitle>
              <CardDescription>Configure additional settings for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="drip" />
                  <Label htmlFor="drip">Enable Drip Content</Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Release course content on a schedule instead of all at once
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="certificate" />
                  <Label htmlFor="certificate">Enable Course Certificate</Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Students will receive a certificate upon course completion
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="forum" />
                  <Label htmlFor="forum">Enable Course Forum</Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Allow students to discuss course content in a dedicated forum
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("pricing")}>
                Back
              </Button>
              <Button>Publish Course</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
