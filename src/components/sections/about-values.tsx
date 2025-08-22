"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Heart, Zap, Globe, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our business dealings.",
    stats: "100% Transparent"
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We put our clients' needs at the heart of everything we do.",
    stats: "98% Satisfaction"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    stats: "50+ Technologies"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're committed to making a positive impact on businesses and communities worldwide.",
    stats: "25+ Countries"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project and continuously raise the bar for quality.",
    stats: "15+ Awards"
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We believe in the power of collaboration and building strong, lasting relationships.",
    stats: "50+ Team Members"
  }
]

const achievements = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries"
  },
  {
    number: "98%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust and results"
  },
  {
    number: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence and innovation"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance for our clients"
  }
]

export function AboutValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="muted" id="values">
      <div ref={ref} className="space-y-20">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
              &quot;To empower businesses with innovative digital solutions that drive growth,
              enhance efficiency, and create lasting value for all stakeholders.&quot;"
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that technology should be a catalyst for human potential, 
              not a barrier to it. That&apos;s why we focus on creating solutions that are
              not just powerful, but also intuitive and accessible.
            </p>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">What Drives Us</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values aren&apos;t just words on a wall - they&apos;re the principles that guide
              our decisions, shape our culture, and define our relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-background">
                    <CardContent className="p-8 text-center space-y-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {value.stats}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <OptimizedImage
              src={STOCK_IMAGES.business.success}
              alt="Team success celebration"
              fill
              className="object-cover opacity-10"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20" />
          </div>

          <div className="relative z-10 p-12 lg:p-16 text-center space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and the trust 
                our clients place in us every day.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center space-y-8 pt-8 border-t border-border/50"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let&apos;s discuss how our values align with your vision and create
              something extraordinary together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </motion.a>
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
