import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Filter, Search, Star } from "lucide-react"

export default function CoursesPage() {
  // Dummy data for courses
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
    {
      id: 7,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps with Flutter and Dart.",
      instructor: "Alex Chen",
      price: "$94.99",
      originalPrice: "$189.99",
      rating: 4.8,
      students: 7654,
      category: "Development",
      level: "Intermediate",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: false,
    },
    {
      id: 8,
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into advanced JavaScript concepts like closures, prototypes, and async programming.",
      instructor: "Emily Rodriguez",
      price: "$79.99",
      originalPrice: "$159.99",
      rating: 4.9,
      students: 6789,
      category: "Development",
      level: "Advanced",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: true,
    },
    {
      id: 9,
      title: "Content Creation for Social Media",
      description: "Learn to create engaging content for various social media platforms.",
      instructor: "Michael Brown",
      price: "$49.99",
      originalPrice: "$99.99",
      rating: 4.6,
      students: 5432,
      category: "Marketing",
      level: "Beginner",
      image: "/placeholder.svg?height=220&width=400",
      bestseller: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Clear All
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <div className="space-y-2">
                    {["Development", "Business", "Design", "Marketing", "Photography", "Data Science"].map(
                      (category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category.toLowerCase()}`} />
                          <Label htmlFor={`category-${category.toLowerCase()}`} className="text-sm font-normal">
                            {category}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Level</h3>
                  <div className="space-y-2">
                    {["Beginner", "Intermediate", "Advanced", "All Levels"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={`level-${level.toLowerCase()}`} />
                        <Label htmlFor={`level-${level.toLowerCase()}`} className="text-sm font-normal">
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Rating</h3>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="text-sm font-normal flex items-center">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                          {rating} & up
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Price</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[100]} max={200} step={1} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">$0</span>
                      <span className="text-sm">$200</span>
                    </div>
                    <div className="space-y-2">
                      {["Free", "Paid", "Discounted"].map((price) => (
                        <div key={price} className="flex items-center space-x-2">
                          <Checkbox id={`price-${price.toLowerCase()}`} />
                          <Label htmlFor={`price-${price.toLowerCase()}`} className="text-sm font-normal">
                            {price}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search courses..." className="pl-8" />
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="highest">Highest Rated</SelectItem>
                    <SelectItem value="lowest">Lowest Price</SelectItem>
                    <SelectItem value="highest-price">Highest Price</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Results Count */}
              <div>
                <p className="text-sm text-muted-foreground">Showing {courses.length} results</p>
              </div>

              {/* Course Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{course.category}</Badge>
                          <Badge variant="secondary">{course.level}</Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-1">{course.title}</CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">By {course.instructor}</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{course.rating}</span>
                            <span className="ml-1 text-xs text-muted-foreground">
                              ({course.students.toLocaleString()})
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/50 p-4">
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

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    ...
                  </Button>
                  <Button variant="outline" size="sm">
                    10
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
