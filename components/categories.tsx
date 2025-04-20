import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Code, PenTool, BarChart, BookOpen, Camera, Briefcase, Megaphone, Lightbulb } from "lucide-react"

export function Categories() {
  const categories = [
    {
      name: "Development",
      icon: Code,
      description: "Web, Mobile, Game Development",
      slug: "development",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-500 dark:text-blue-300",
    },
    {
      name: "Design",
      icon: PenTool,
      description: "UI/UX, Graphic Design, 3D",
      slug: "design",
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-500 dark:text-purple-300",
    },
    {
      name: "Business",
      icon: Briefcase,
      description: "Entrepreneurship, Management",
      slug: "business",
      color: "bg-amber-100 dark:bg-amber-900",
      textColor: "text-amber-500 dark:text-amber-300",
    },
    {
      name: "Marketing",
      icon: Megaphone,
      description: "Digital, Social Media, SEO",
      slug: "marketing",
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-500 dark:text-green-300",
    },
    {
      name: "Photography",
      icon: Camera,
      description: "Digital, Portrait, Commercial",
      slug: "photography",
      color: "bg-rose-100 dark:bg-rose-900",
      textColor: "text-rose-500 dark:text-rose-300",
    },
    {
      name: "Data Science",
      icon: BarChart,
      description: "Analytics, Machine Learning, AI",
      slug: "data-science",
      color: "bg-cyan-100 dark:bg-cyan-900",
      textColor: "text-cyan-500 dark:text-cyan-300",
    },
    {
      name: "Personal Development",
      icon: Lightbulb,
      description: "Productivity, Leadership, Skills",
      slug: "personal-development",
      color: "bg-orange-100 dark:bg-orange-900",
      textColor: "text-orange-500 dark:text-orange-300",
    },
    {
      name: "Academics",
      icon: BookOpen,
      description: "Math, Science, Languages",
      slug: "academics",
      color: "bg-emerald-100 dark:bg-emerald-900",
      textColor: "text-emerald-500 dark:text-emerald-300",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse Categories</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore our wide range of courses across different categories
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={`rounded-full p-3 ${category.color} ${category.textColor} mb-3`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
