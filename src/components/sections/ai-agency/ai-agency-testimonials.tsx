"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, TrendingUp, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    content: "The AI agents developed by this team have revolutionized our customer service. We've seen a 300% increase in efficiency and our customers love the instant, accurate responses.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "SC",
    result: "+300% Efficiency",
    industry: "SaaS",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    content: "Their business intelligence AI has transformed how we make decisions. The predictive analytics have helped us reduce costs by 45% while increasing revenue by 60%.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "DataDriven Corp",
    avatar: "MR",
    result: "+60% Revenue",
    industry: "Analytics",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    content: "The custom AI agent they built for our e-commerce platform has increased our conversion rate by 85%. The personalization engine is incredibly sophisticated.",
    author: "Emily Watson",
    role: "Head of Digital",
    company: "RetailMax",
    avatar: "EW",
    result: "+85% Conversions",
    industry: "E-commerce",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    content: "Working with this AI agency was seamless. They delivered our document processing AI ahead of schedule, and it's saving us 20 hours per week in manual work.",
    author: "David Kim",
    role: "Operations Director",
    company: "LegalTech Pro",
    avatar: "DK",
    result: "20 hrs/week saved",
    industry: "Legal Tech",
    gradient: "from-orange-500 to-red-500"
  }
]

const stats = [
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average ROI Increase",
    description: "Clients see significant returns"
  },
  {
    icon: Users,
    value: "500+",
    label: "AI Agents Deployed",
    description: "Across various industries"
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime Achieved",
    description: "Enterprise-grade reliability"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Satisfaction",
    description: "Consistently high ratings"
  }
]

export function AIAgencyTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI agents have transformed businesses across different industries, 
              delivering measurable results and exceptional ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-slate-700/50 text-gray-300 border-slate-600/50">
                        {testimonial.industry}
                      </Badge>
                      <Badge className={`bg-gradient-to-r ${testimonial.gradient} text-white border-0`}>
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote className="text-gray-300 leading-relaxed text-lg">
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.author}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">5.0</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI agents can transform your business 
              and deliver similar results for your organization.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
