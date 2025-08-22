"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"

export function PortfolioCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="primary" id="portfolio-cta">
      <div ref={ref} className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our portfolio of successful projects. Let's discuss how we can help 
            you achieve similar results for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Link href="/services">
              View Our Services
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
