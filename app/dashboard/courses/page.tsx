import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, Star, Users } from "lucide-react"
import Link from "next/link"

export default function MyCourses() {
  // Dummy data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      instructor: "John Doe",
      progress: 65,
      lastAccessed: "2 days ago",
      image: "/placeholder.svg?height=150&width=250",
      rating: 4.8,
      category: "Development",
      level: "Beginner",
      nextLesson: "CSS Flexbox and Grid",
      totalLessons: 285,
      completedLessons: 185,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Jane Smith",
      progress: 32,
      lastAccessed: "1 week ago",
      image: "/placeholder.svg?height=150&width=250",
      rating: 4.7,
      category: "Data Science",
      level: "Intermediate",
      nextLesson: "Introduction to Pandas",
      totalLessons: 210,
      completedLessons: 67,
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Sarah Williams",
      progress: 18,
      lastAccessed: "3 days ago",
      image: "/placeholder.svg?height=150&width=250",
      rating: 4.9,
      category: "Design",
      level: "Beginner",
      nextLesson: "User Research Methods",
      totalLessons: 175,
      completedLessons: 31,
    },
  ]

  // Dummy data for teaching courses
  const teachingCourses = [
    {
      id: 101,
      title: "Advanced JavaScript Concepts",
      students: 1245,
      rating: 4.9,
      revenue: "$12,450",
      status: "Published",
      lastUpdated: "1 month ago",
      image: "/placeholder.svg?height=150&width=250",
      category: "Development",
      level: "Advanced",
    },
    {
      id: 102,
      title: "React & Redux Masterclass",
      students: 876,
      rating: 4.8,
      revenue: "$8,760",
      status: "Published",
      lastUpdated: "2 weeks ago",
      image: "/placeholder.svg?height=150&width=250",
      category: "Development",
      level: "Intermediate",
    },
    {
      id: 103,
      title: "Node.js API Development",
      students: 543,
      rating: 4.7,
      revenue: "$5,430",
      status: "Draft",
      lastUpdated: "3 days ago",
      image: "/placeholder.svg?height=150&width=250",
      category: "Development",
      level: "Intermediate",
    },
  ]

  // Dummy data for wishlist courses
  const wishlistCourses = [
    {
      id: 201,
      title: "Machine Learning A-Z",
      instructor: "Andrew Ng",
      price: "$94.99",
      originalPrice: "$189.99",
      rating: 4.9,
      students: 12543,
      image: "/placeholder.svg?height=150&width=250",
      category: "Data Science",
      level: "All Levels",
    },
    {
      id: 202,
      title: "Complete Python Bootcamp",
      instructor: "Jose Portilla",
      price: "$84.99",
      originalPrice: "$169.99",
      rating: 4.8,
      students: 9876,
      image: "/placeholder.svg?height=150&width=250",
      category: "Development",
      level: "Beginner",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">Manage your learning and teaching journey</p>
      </div>

      <Tabs defaultValue="learning">
        <TabsList>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="teaching">Teaching</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        {/* Learning Tab */}
        <TabsContent value="learning" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Enrolled Courses</h2>
            <Button variant="outline">Browse Courses</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>By {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Next Lesson:</span> {course.nextLesson}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t flex justify-between">
                  <div className="text-xs text-muted-foreground">Last accessed {course.lastAccessed}</div>
                  <Button asChild>
                    <Link href={`/course/${course.id}/learn/1`}>Continue Learning</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {enrolledCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">You haven't enrolled in any courses yet</h3>
              <p className="text-muted-foreground mt-1">Browse our catalog to find courses that interest you</p>
              <Button className="mt-4">Browse Courses</Button>
            </div>
          )}
        </TabsContent>

        {/* Teaching Tab */}
        <TabsContent value="teaching" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Courses</h2>
            <Button asChild>
              <Link href="/dashboard/create-course">Create New Course</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachingCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge variant={course.status === "Published" ? "default" : "secondary"}>{course.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>Last updated {course.lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold">{course.students}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold flex items-center justify-center">
                        {course.rating} <Star className="h-4 w-4 ml-1 fill-yellow-500 text-yellow-500" />
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{course.revenue}</div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t flex justify-between">
                  <Button variant="outline" size="sm">
                    <Link href={`/dashboard/courses/${course.id}/edit`}>Edit Course</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href={`/dashboard/courses/${course.id}/manage`}>Manage</Link>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {teachingCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">You haven't created any courses yet</h3>
              <p className="text-muted-foreground mt-1">Share your knowledge by creating your first course</p>
              <Button className="mt-4">Create Course</Button>
            </div>
          )}
        </TabsContent>

        {/* Wishlist Tab */}
        <TabsContent value="wishlist" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Saved for Later</h2>
            <Button variant="outline">Browse Courses</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlistCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>By {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="ml-1 text-xs text-muted-foreground">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t flex justify-between">
                  <div>
                    <div className="font-bold">{course.price}</div>
                    <div className="text-xs text-muted-foreground line-through">{course.originalPrice}</div>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                    <Button size="sm">Enroll Now</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {wishlistCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">Your wishlist is empty</h3>
              <p className="text-muted-foreground mt-1">Save courses you're interested in for later</p>
              <Button className="mt-4">Browse Courses</Button>
            </div>
          )}
        </TabsContent>

        {/* Archived Tab */}
        <TabsContent value="archived" className="space-y-6">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No archived courses</h3>
            <p className="text-muted-foreground mt-1">Courses you archive will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
