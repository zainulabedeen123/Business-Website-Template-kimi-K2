"use client"

import { motion } from "framer-motion"
import { MessageSquare, Clock, Users, Award } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    icon: MessageSquare,
    value: "< 2 hours",
    label: "Response Time"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available"
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction Rate"
  }
]

export function ContactHero() {
  return (
    <Section padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="px-4 py-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Start a Conversation
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our expert team today. We're here to understand your needs, 
            answer your questions, and help you achieve your business goals with our 
            premium solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
