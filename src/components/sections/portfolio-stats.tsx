"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrendingUp, Users, Award, Globe } from "lucide-react"
import { Section } from "@/components/layout/section"

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI Increase",
    description: "Our clients see significant returns on their investment"
  },
  {
    icon: Users,
    value: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across industries"
  },
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence and innovation"
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global reach with local expertise"
  }
]

export function PortfolioStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" id="stats">
      <div ref={ref} className="text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Results That{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our portfolio demonstrates consistent success across diverse projects and industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
