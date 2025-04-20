import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function StudentsPage() {
  // Dummy data for students
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      enrolledCourses: 3,
      lastActive: "2 hours ago",
      progress: 68,
      status: "Active",
      joined: "Jan 15, 2023",
      country: "United States",
      courses: [
        { id: 1, title: "Web Development Bootcamp", progress: 75 },
        { id: 2, title: "Advanced JavaScript Concepts", progress: 45 },
        { id: 3, title: "React & Redux Masterclass", progress: 12 },
      ],
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      enrolledCourses: 2,
      lastActive: "1 day ago",
      progress: 42,
      status: "Active",
      joined: "Feb 3, 2023",
      country: "Canada",
      courses: [
        { id: 1, title: "Web Development Bootcamp", progress: 32 },
        { id: 2, title: "UI/UX Design Principles", progress: 89 },
      ],
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      enrolledCourses: 1,
      lastActive: "3 days ago",
      progress: 91,
      status: "Active",
      joined: "Mar 22, 2023",
      country: "Singapore",
      courses: [
        { id: 2, title: "Advanced JavaScript Concepts", progress: 91 },
      ],
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      enrolledCourses: 4,
      lastActive: "5 hours ago",
      progress: 23,
      status: "Active",
      joined: "Apr 10, 2023",
      country: "Mexico",
      courses: [
        { id: 1, title: "Web Development Bootcamp", progress: 15 },
        { id: 2, title: "Advanced JavaScript Concepts", progress: 28 },
        { id: 3, title: "React & Redux Masterclass", progress: 5 },
        { id: 4, title: "Node.js API Development", progress: 45 },
      ],
    },
    {
      id: 5,
      name: "David Kim",
      email: "david.kim@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      enrolledCourses: 2,
      lastActive: "2 weeks ago",
      progress: 0,
      status: "Inactive",
      joined: "May 5, 2023",
      country: "South Korea",
      courses: [
        { id: 2, title: "Advanced JavaScript Concepts", progress: 0 },
        { id: 3, title: "React & Redux Masterclass", progress: 0 },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Students</h1>
        <p className="text-muted-foreground">Manage and track your students' progress</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search students..."
              className="pl-8 w-full sm:w-[300px]"
            />
          </div>
          <Select defaultValue="all-courses">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-courses">All Courses</SelectItem>
              <SelectItem value="web-dev">Web Development Bootcamp</SelectItem>
              <SelectItem value="js">Advanced JavaScript Concepts</SelectItem>
              <SelectItem value="react">React & Redux Masterclass</SelectItem>
              <SelectItem value="node">Node.js API Development</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>Add Student</Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle>Student List</CardTitle>
                <CardDescription>Total: {students.length} students</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {/* Student list content will go here */}
            </CardContent>
          </Card>
        </TabsContent>

\
