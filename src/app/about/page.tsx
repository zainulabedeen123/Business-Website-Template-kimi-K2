import { Metadata } from "next"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutStory } from "@/components/sections/about-story"
import { TeamSection } from "@/components/sections/team-section"
import { AboutValues } from "@/components/sections/about-values"

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Our Story & Team",
  description: "Learn about our mission, values, and the expert team behind our success. Discover how we're transforming businesses with innovative solutions.",
  keywords: ["about us", "our team", "company story", "mission", "values", "leadership"],
  url: "/about",
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <TeamSection />
        <AboutValues />
      </main>
      <Footer />
    </div>
  )
}
