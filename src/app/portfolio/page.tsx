import { Metadata } from "next"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"
import { PortfolioStats } from "@/components/sections/portfolio-stats"
import { PortfolioCTA } from "@/components/sections/portfolio-cta"

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Portfolio - Successful Projects & Case Studies",
  description: "Explore our portfolio of successful web development, mobile app, and digital marketing projects. See how we've helped businesses achieve their goals.",
  keywords: ["portfolio", "case studies", "web development projects", "mobile apps", "success stories"],
  url: "/portfolio",
})

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioStats />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  )
}
