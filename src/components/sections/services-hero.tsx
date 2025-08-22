"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, TrendingUp, Users, Zap, Globe } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const serviceHighlights = [
  {
    icon: Code,
    title: "Web Development",
    count: "200+ Projects"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    count: "150+ Apps"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    count: "300+ Campaigns"
  },
  {
    icon: Users,
    title: "Consulting",
    count: "500+ Clients"
  }
]

export function ServicesHero() {
  return (
    <Section padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src={STOCK_IMAGES.technology.coding}
          alt="Technology and development background"
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
              <Zap className="w-4 h-4 mr-2" />
              Comprehensive Digital Solutions
            </Badge>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Services That{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Business
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              From cutting-edge web development to strategic digital marketing, 
              we offer comprehensive solutions designed to accelerate your business growth 
              and establish your digital presence.
            </motion.p>
          </div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 backdrop-blur border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{service.title}</div>
                    <div className="text-xs text-muted-foreground">{service.count}</div>
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
              src={STOCK_IMAGES.office.collaboration}
              alt="Team working on digital solutions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Service Cards */}
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-blue-600">Global Reach</div>
                <div className="text-xs text-muted-foreground">25+ Countries</div>
              </div>
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-green-600">Success Rate</div>
                <div className="text-xs text-muted-foreground">98% Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
