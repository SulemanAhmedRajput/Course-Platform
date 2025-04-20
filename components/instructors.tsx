import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Development Instructor",
      bio: "10+ years of experience in full-stack development. Former senior engineer at Google.",
      courses: 12,
      students: 34500,
      rating: 4.8,
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Data Science Instructor",
      bio: "PhD in Computer Science with specialization in Machine Learning. Author of 3 books on AI.",
      courses: 8,
      students: 28700,
      rating: 4.9,
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Business & Marketing Instructor",
      bio: "MBA from Harvard. Founded 3 successful startups. Expert in digital marketing strategies.",
      courses: 15,
      students: 42300,
      rating: 4.7,
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Design Instructor",
      bio: "Award-winning designer with experience at top creative agencies. Specializes in UI/UX.",
      courses: 10,
      students: 31200,
      rating: 4.9,
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Top Instructors</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Learn from industry experts who are passionate about teaching
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={instructor.avatar || "/placeholder.svg"}
                  alt={instructor.name}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground">{instructor.role}</p>
                <p className="mt-2 text-xs line-clamp-3">{instructor.bio}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-medium">{instructor.courses}</span> courses
                  </div>
                  <div className="text-xs">
                    <span className="font-medium">{(instructor.students / 1000).toFixed(1)}k</span> students
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="mr-1 text-yellow-500">★</span>
                    <span className="font-medium">{instructor.rating}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-3">
                  <Link href={instructor.social.twitter} className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href={instructor.social.linkedin} className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href={instructor.social.facebook} className="text-muted-foreground hover:text-foreground">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
