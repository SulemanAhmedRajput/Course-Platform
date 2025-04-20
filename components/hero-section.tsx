import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Learn Without Limits
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Start, switch, or advance your career with over 5,000 courses from world-class instructors and leading
                universities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" size="lg">
                  Join for Free
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Join over 10 million learners already on LearnHub</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="Students learning online"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                width={550}
                height={550}
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-background p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center text-primary-foreground">
                    5K+
                  </div>
                  <div className="text-sm font-medium">Courses Available</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 rounded-lg bg-background p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center text-primary-foreground">
                    24/7
                  </div>
                  <div className="text-sm font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
