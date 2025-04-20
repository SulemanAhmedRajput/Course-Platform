import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "LearnHub has completely transformed my career. I went from knowing nothing about web development to landing a job as a full-stack developer in just 6 months.",
      author: "Alex Johnson",
      role: "Software Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      content:
        "The quality of instructors on LearnHub is exceptional. They explain complex concepts in a way that's easy to understand and provide practical examples.",
      author: "Sarah Williams",
      role: "UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      content:
        "I've tried many online learning platforms, but LearnHub stands out with its interactive exercises and community support. It's worth every penny.",
      author: "Michael Chen",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      content:
        "As someone who works full-time, the flexibility of LearnHub courses has been invaluable. I can learn at my own pace and apply new skills immediately in my job.",
      author: "Emily Rodriguez",
      role: "Marketing Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Students Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Thousands of students have achieved their goals with LearnHub
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
