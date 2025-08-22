"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Globe
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized performance with cutting-edge technology for blazing fast load times and smooth user experience.",
    benefits: ["99.9% uptime", "Sub-second loading", "Global CDN"],
    image: STOCK_IMAGES.technology.analytics,
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with advanced encryption, secure authentication, and comprehensive data protection.",
    benefits: ["SSL encryption", "2FA authentication", "GDPR compliant"],
    image: STOCK_IMAGES.technology.security,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description: "Responsive design that works perfectly on all devices, from smartphones to desktop computers.",
    benefits: ["Responsive design", "Touch optimized", "Cross-platform"],
    image: STOCK_IMAGES.technology.mobile,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights and reporting to track performance and make data-driven decisions.",
    benefits: ["Real-time data", "Custom reports", "ROI tracking"],
    image: STOCK_IMAGES.technology.analytics,
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools that enable seamless teamwork and efficient project management.",
    benefits: ["Role management", "Real-time sync", "Team workspace"],
    image: STOCK_IMAGES.office.collaboration,
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide infrastructure and support to scale your business across international markets.",
    benefits: ["Multi-language", "Global CDN", "Local support"],
    image: STOCK_IMAGES.technology.cloud,
    color: "from-indigo-500 to-blue-500"
  },
]

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="muted" id="features">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Modern Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, grow, and scale your business with confidence. 
            Our comprehensive suite of tools and features is designed for success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80`} />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + benefitIndex * 0.05 }}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="pt-4 border-t border-border/50">
                      <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 group/link">
                        <span>Learn more</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button size="lg" className="group">
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
