import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, FileText, Globe, PlayCircle, Star, Users } from "lucide-react";
import Link from "next/link";
import { AuthButton } from "@/components/auth/auth-button";

export default function CoursePage({ params }: { params: { id: string } }) {
  // Dummy course data
  const course = {
    id: Number.parseInt(params.id),
    title: "Web Development Bootcamp: Complete Guide",
    description:
      "Learn web development from scratch. This comprehensive bootcamp covers HTML, CSS, JavaScript, React, Node.js, and more. By the end of this course, you'll be able to build complete web applications and launch your career as a web developer.",
    longDescription:
      "This comprehensive web development bootcamp is designed to take you from beginner to professional developer. You'll learn all the tools and technologies you need to build full-stack web applications, including front-end and back-end development. The course starts with the basics of HTML, CSS, and JavaScript, then progresses to advanced topics like React, Node.js, Express, and MongoDB. You'll work on real-world projects that you can add to your portfolio, and you'll gain the skills and confidence to apply for web development jobs or start freelancing.",
    instructor: {
      name: "John Doe",
      bio: "Senior Web Developer with 10+ years of experience. Former lead developer at Google and instructor at Coding Bootcamp.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    price: "$99.99",
    originalPrice: "$199.99",
    discount: "50% off",
    rating: 4.8,
    reviewsCount: 2547,
    studentsCount: 12543,
    lastUpdated: "April 2023",
    language: "English",
    level: "Beginner to Advanced",
    duration: "40 hours",
    lectures: 285,
    category: "Development",
    subcategory: "Web Development",
    image: "/placeholder.svg?height=400&width=720",
    bestseller: true,
    whatYouWillLearn: [
      "Build 25+ websites and web apps with HTML, CSS, JavaScript, React, Node.js, and more",
      "Master front-end development with HTML5, CSS3, and modern JavaScript",
      "Learn back-end programming with Node.js, Express, and MongoDB",
      "Create responsive, mobile-first websites with Bootstrap and Flexbox",
      "Build real-world projects for your portfolio",
      "Deploy your applications to the web",
      "Implement authentication and authorization in web applications",
      "Understand how to connect to APIs and create your own RESTful APIs",
    ],
    requirements: [
      "No programming experience needed - I'll teach you everything you need to know",
      "A computer with access to the internet",
      "No paid software required - all tools used in this course are free",
      "I'll walk you through, step-by-step how to get all the software installed",
    ],
    sections: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lectures: 15,
        duration: "2 hours",
        content: [
          { id: 1, title: "Welcome to the Course", duration: "5:30", type: "video", preview: true },
          { id: 2, title: "Course Overview", duration: "10:15", type: "video", preview: true },
          { id: 3, title: "Setting Up Your Development Environment", duration: "15:20", type: "video" },
          { id: 4, title: "Web Development Basics", duration: "12:45", type: "video" },
          { id: 5, title: "How the Internet Works", duration: "8:30", type: "video" },
        ],
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        lectures: 20,
        duration: "3 hours",
        content: [
          { id: 6, title: "Introduction to HTML", duration: "12:10", type: "video" },
          { id: 7, title: "HTML Document Structure", duration: "14:25", type: "video" },
          { id: 8, title: "Working with Text Elements", duration: "18:30", type: "video" },
          { id: 9, title: "HTML Lists and Tables", duration: "20:15", type: "video" },
          { id: 10, title: "HTML Forms and Inputs", duration: "25:40", type: "video" },
        ],
      },
      {
        id: 3,
        title: "CSS Styling",
        lectures: 25,
        duration: "4 hours",
        content: [
          { id: 11, title: "Introduction to CSS", duration: "15:20", type: "video" },
          { id: 12, title: "Selectors and Properties", duration: "18:45", type: "video" },
          { id: 13, title: "Box Model and Layout", duration: "22:30", type: "video" },
          { id: 14, title: "Flexbox and Grid", duration: "28:15", type: "video" },
          { id: 15, title: "Responsive Design", duration: "24:50", type: "video" },
        ],
      },
      {
        id: 4,
        title: "JavaScript Basics",
        lectures: 30,
        duration: "5 hours",
        content: [
          { id: 16, title: "Introduction to JavaScript", duration: "14:30", type: "video" },
          { id: 17, title: "Variables and Data Types", duration: "16:45", type: "video" },
          { id: 18, title: "Control Flow and Loops", duration: "22:10", type: "video" },
          { id: 19, title: "Functions and Scope", duration: "25:30", type: "video" },
          { id: 20, title: "DOM Manipulation", duration: "28:15", type: "video" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Sarah M.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "March 15, 2023",
        comment:
          "This course is amazing! I had no prior experience in web development, and now I'm building my own websites. The instructor explains everything clearly and the projects are fun and challenging.",
      },
      {
        id: 2,
        user: "Michael T.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "February 28, 2023",
        comment:
          "Great course with lots of practical examples. I especially enjoyed the sections on React and Node.js. The only reason I'm giving 4 stars instead of 5 is that some of the content could be more up-to-date.",
      },
      {
        id: 3,
        user: "Jessica L.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "April 2, 2023",
        comment:
          "I've taken several web development courses, and this is by far the best one. The instructor is knowledgeable and engaging, and the course covers everything you need to know to become a full-stack developer.",
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Course Header */}
        <div className="bg-muted py-8">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant="outline">{course.subcategory}</Badge>
                  {course.bestseller && <Badge className="bg-yellow-500 hover:bg-yellow-600">Bestseller</Badge>}
                </div>
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <p className="text-lg">{course.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <span className="ml-1 font-medium">{course.rating}</span>
                    <span className="ml-1 text-muted-foreground">({course.reviewsCount.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-1" />
                    <span>{course.studentsCount.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div>Last updated: {course.lastUpdated}</div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    {course.language}
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration} on-demand video
                  </div>
                  <div>{course.lectures} lectures</div>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Created by {course.instructor.name}</p>
                  </div>
                </div>
              </div>
              <div>
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-[red] w-full overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">{course.price}</div>
                        <div className="text-muted-foreground line-through">{course.originalPrice}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{course.discount}</div>
                    </div>
                    <div className="space-y-3">
                      <AuthButton
                        className="w-full"
                        size="lg"
                        authView="login"
                        authenticatedText="Enroll Now"
                        unauthenticatedText="Login to Enroll"
                      />
                      <Button variant="outline" className="w-full" size="lg">
                        Add to Cart
                      </Button>
                    </div>
                    <div className="mt-4 text-center text-sm text-muted-foreground">30-Day Money-Back Guarantee</div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Full lifetime access</span>
                        <CheckCircle2 className="shrink-0 h-4 w-4 text-primary" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Access on mobile and TV</span>
                        <CheckCircle2 className="shrink-0 h-4 w-4 text-primary" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Certificate of completion</span>
                        <CheckCircle2 className="shrink-0 h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap overflow-auto justify-center space-x-4">
                      <Button variant="ghost" size="sm">
                        Share
                      </Button>
                      <Button variant="ghost" size="sm">
                        Gift this course
                      </Button>
                      <Button variant="ghost" size="sm">
                        Apply Coupon
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* Course Content */}
        <div className="container py-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="w-full overflow-y-auto justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="overview"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="curriculum"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
              >
                Curriculum
              </TabsTrigger>
              <TabsTrigger
                value="instructor"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
              >
                Instructor
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-muted-foreground">{course.longDescription}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="shrink-0 h-5 w-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {course.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div className="text-sm text-muted-foreground">
                  {course.sections.length} sections • {course.lectures} lectures • {course.duration} total length
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {course.sections.map((section) => (
                  <AccordionItem key={section.id} value={`section-${section.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex flex-1 items-center justify-between pr-4">
                        <div className="font-medium">{section.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {section.lectures} lectures • {section.duration}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {section.content.map((lecture) => (
                          <div
                            key={lecture.id}
                            className="flex items-center justify-between p-2 hover:bg-muted rounded-md"
                          >
                            <div className="flex items-center space-x-2">
                              <PlayCircle className="h-5 w-5 text-primary" />
                              <span>{lecture.title}</span>
                              {lecture.preview && (
                                <Badge variant="outline" className="ml-2">
                                  Preview
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{lecture.duration}</div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="instructor" className="space-y-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{course.instructor.name}</h2>
                  <p className="text-muted-foreground">{course.instructor.bio}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Instructor Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Reviews</span>
                      <span className="font-medium">4.8 average rating</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students</span>
                      <span className="font-medium">45,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Courses</span>
                      <span className="font-medium">12</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Other Courses by {course.instructor.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link href="#" className="block hover:underline">
                      Advanced JavaScript: From Fundamentals to Functional JS
                    </Link>
                    <Link href="#" className="block hover:underline">
                      React & Redux: Build Modern Web Applications
                    </Link>
                    <Link href="#" className="block hover:underline">
                      Node.js: The Complete Guide to Building RESTful APIs
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Student Reviews</h2>
                <AuthButton
                  authView="login"
                  authenticatedText="Write a Review"
                  unauthenticatedText="Login to Review"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Rating Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <div className="w-12 text-sm">{rating} stars</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{
                                width: `${rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 3 : rating === 2 ? 1 : 1}%`,
                              }}
                            />
                          </div>
                          <div className="w-12 text-sm text-right">
                            {rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 3 : rating === 2 ? 1 : 1}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Review Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Star className="h-8 w-8 fill-yellow-500 text-yellow-500" />
                      <div>
                        <div className="text-2xl font-bold">{course.rating} out of 5</div>
                        <div className="text-muted-foreground">
                          {course.reviewsCount.toLocaleString()} global ratings
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="flex justify-between text-sm">
                        <span>Course content</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Instructor</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Value for money</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                {course.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.user} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{review.user}</div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="mt-4">{review.comment}</div>
                      <div className="mt-4 flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          Helpful
                        </Button>
                        <Button variant="ghost" size="sm">
                          Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}