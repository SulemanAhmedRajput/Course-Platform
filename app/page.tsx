import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { Categories } from "@/components/categories"
import { Testimonials } from "@/components/testimonials"
import { Instructors } from "@/components/instructors"
import { Newsletter } from "@/components/newsletter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <Categories />
        <FeaturedCourses />
        <Testimonials />
        <Instructors />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
