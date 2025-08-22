import { Metadata } from "next"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Get in Touch Today",
  description: "Ready to transform your business? Contact our expert team for a free consultation. We're here to help you achieve your goals with premium solutions.",
  keywords: ["contact", "consultation", "business solutions", "get in touch", "support"],
  url: "/contact",
})

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
