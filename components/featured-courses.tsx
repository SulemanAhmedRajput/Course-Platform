import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack developer.",
      instructor: "John Doe",
      price: "$99.99",
      originalPrice: "$199.99",
      rating: 4.8,
      students: 12543,
      category: "Development",
      level: "Beginner",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: true,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master the basics of data analysis, visualization, and machine learning.",
      instructor: "Jane Smith",
      price: "$89.99",
      originalPrice: "$149.99",
      rating: 4.7,
      students: 8765,
      category: "Data Science",
      level: "Intermediate",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: false,
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      description: "Learn SEO, social media marketing, email campaigns, and more.",
      instructor: "Mike Johnson",
      price: "$79.99",
      originalPrice: "$129.99",
      rating: 4.6,
      students: 6543,
      category: "Marketing",
      level: "All Levels",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: true,
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      description: "Create stunning user interfaces and improve user experience.",
      instructor: "Sarah Williams",
      price: "$69.99",
      originalPrice: "$119.99",
      rating: 4.9,
      students: 5432,
      category: "Design",
      level: "Beginner",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: false,
    },
    {
      id: 5,
      title: "Photography Masterclass",
      description: "Learn professional photography techniques and editing skills.",
      instructor: "David Brown",
      price: "$59.99",
      originalPrice: "$99.99",
      rating: 4.5,
      students: 4321,
      category: "Photography",
      level: "All Levels",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: false,
    },
    {
      id: 6,
      title: "Business Leadership",
      description: "Develop leadership skills to manage teams and drive business growth.",
      instructor: "Lisa Johnson",
      price: "$89.99",
      originalPrice: "$149.99",
      rating: 4.7,
      students: 3210,
      category: "Business",
      level: "Advanced",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: true,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Courses</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore our most popular courses and start learning today.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link key={course.id} href={`/course/${course.id}`}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                  {course.bestseller && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Bestseller</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">By {course.instructor}</p>
                    <div className="flex items-center">
                      <span className="mr-1 text-sm text-yellow-500">★</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="ml-1 text-xs text-muted-foreground">({course.students.toLocaleString()})</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="font-bold">{course.price}</p>
                      <p className="text-xs text-muted-foreground line-through">{course.originalPrice}</p>
                    </div>
                    <Button size="sm">Enroll Now</Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/courses">
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
