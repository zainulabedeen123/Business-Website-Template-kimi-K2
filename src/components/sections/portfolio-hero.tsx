"use client"

import { motion } from "framer-motion"
import { Award, Eye, TrendingUp, Users } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const portfolioStats = [
  {
    icon: Award,
    value: "500+",
    label: "Projects Completed",
    description: "Successful deliveries"
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    description: "Satisfied customers"
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI",
    description: "Client growth"
  },
  {
    icon: Eye,
    value: "15+",
    label: "Industry Awards",
    description: "Recognition received"
  }
]

export function PortfolioHero() {
  return (
    <Section padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src={STOCK_IMAGES.portfolio.dashboard}
          alt="Portfolio showcase background"
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge variant="secondary" className="px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Projects
            </Badge>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>{" "}
              of Success
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Explore our collection of successful projects that have transformed businesses 
              and delivered exceptional results. From startups to enterprises, see how we&apos;ve
              helped our clients achieve their digital goals.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {portfolioStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
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

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <OptimizedImage
              src={STOCK_IMAGES.portfolio.webapp}
              alt="Portfolio showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Project Cards */}
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
            className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-green-100"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
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
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-100"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-xs text-muted-foreground">Awards Won</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
