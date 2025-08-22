"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play, Star, CheckCircle, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const stats = [
  {
    label: "Happy Clients",
    value: "500+",
    icon: Users,
    description: "Satisfied customers worldwide"
  },
  {
    label: "Projects Completed",
    value: "1,200+",
    icon: CheckCircle,
    description: "Successful deliveries"
  },
  {
    label: "Years Experience",
    value: "10+",
    icon: Award,
    description: "Industry expertise"
  },
  {
    label: "Team Members",
    value: "50+",
    icon: Zap,
    description: "Expert professionals"
  },
]

const features = [
  "Enterprise-grade security",
  "24/7 premium support",
  "99.9% uptime guarantee",
  "Global CDN network"
]

export function Hero() {
  return (
    <Section padding="xl" className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src={STOCK_IMAGES.backgrounds.gradient}
          alt="Professional business background"
          fill
          className="opacity-5"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/20 to-primary/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              Trusted by 500+ businesses worldwide
            </Badge>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Business
              </span>{" "}
              with Premium Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              We deliver cutting-edge digital solutions that drive growth, enhance
              customer experience, and position your business for long-term success
              in the digital age.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 max-w-2xl"
            >
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center lg:text-left group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
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
          <div className="relative aspect-[4/3] max-w-2xl mx-auto">
            {/* Main Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <OptimizedImage
                src={STOCK_IMAGES.hero.main}
                alt="Modern business team collaboration"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>

            {/* Floating Success Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-green-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600">Project Complete</div>
                  <div className="text-xs text-muted-foreground">+$2.4M Revenue</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Analytics Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600">Growth Rate</div>
                  <div className="text-xs text-muted-foreground">+247% This Year</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Team Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/2 -left-8 bg-white rounded-xl shadow-lg p-3 border border-purple-100"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <OptimizedImage
                    src={STOCK_IMAGES.testimonials.client1}
                    alt="Team member"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                  <OptimizedImage
                    src={STOCK_IMAGES.testimonials.client2}
                    alt="Team member"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                  <OptimizedImage
                    src={STOCK_IMAGES.testimonials.client3}
                    alt="Team member"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold">Expert Team</div>
                  <div className="text-xs text-muted-foreground">50+ Professionals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
