import { Metadata } from "next"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AIAgencyHero } from "@/components/sections/ai-agency/ai-agency-hero"
import { AIAgencyFeatures } from "@/components/sections/ai-agency/ai-agency-features"
import { AIAgencyServices } from "@/components/sections/ai-agency/ai-agency-services"
import { AIAgencyShowcase } from "@/components/sections/ai-agency/ai-agency-showcase"
import { AIAgencyProcess } from "@/components/sections/ai-agency/ai-agency-process"
import { AIAgencyTestimonials } from "@/components/sections/ai-agency/ai-agency-testimonials"
import { AIAgencyCTA } from "@/components/sections/ai-agency/ai-agency-cta"

export const metadata: Metadata = generateSEOMetadata({
  title: "AI Agents Development Agency - Custom AI Solutions",
  description: "Leading AI agents development agency specializing in custom AI solutions, intelligent automation, and cutting-edge machine learning applications for businesses.",
  keywords: ["AI agents", "artificial intelligence", "machine learning", "AI development", "automation", "custom AI solutions"],
  url: "/ai-agency",
})

export default function AIAgencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main>
        <AIAgencyHero />
        <AIAgencyFeatures />
        <AIAgencyServices />
        <AIAgencyShowcase />
        <AIAgencyProcess />
        <AIAgencyTestimonials />
        <AIAgencyCTA />
      </main>
      <Footer />
    </div>
  )
}
