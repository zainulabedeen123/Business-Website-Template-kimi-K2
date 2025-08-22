import { Metadata } from "next"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ServicesPricing } from "@/components/sections/services-pricing"
import { ServicesProcess } from "@/components/sections/services-process"
import { ServicesCTA } from "@/components/sections/services-cta"

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Services - Digital Solutions & Consulting",
  description: "Comprehensive digital services including web development, mobile apps, digital marketing, and consulting. Transform your business with our expert solutions.",
  keywords: ["web development", "mobile apps", "digital marketing", "consulting", "e-commerce", "SEO"],
  url: "/services",
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesPricing />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
