"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Heart } from "lucide-react"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Team Members",
    description: "Expert professionals"
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    description: "Industry leadership"
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global presence"
  },
  {
    icon: Heart,
    value: "500+",
    label: "Happy Clients",
    description: "Satisfied customers"
  }
]

export function AboutHero() {
  return (
    <Section padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src={STOCK_IMAGES.office.modern}
          alt="Modern office space"
          fill
          className="opacity-5 object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              We&apos;re Building the{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Business
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Founded with a vision to transform how businesses operate in the digital age, 
              we combine cutting-edge technology with human-centered design to deliver 
              solutions that drive real results.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <OptimizedImage
              src={STOCK_IMAGES.office.meeting}
              alt="Team collaboration in modern office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-100"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 8, 0],
              x: [0, -3, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-green-100"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
