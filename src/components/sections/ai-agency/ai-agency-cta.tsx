"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Calendar, MessageSquare, Bot, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ctaOptions = [
  {
    icon: Calendar,
    title: "Schedule AI Consultation",
    description: "Book a free 30-minute consultation to discuss your AI needs",
    action: "Book Now",
    gradient: "from-cyan-500 to-blue-500",
    popular: true
  },
  {
    icon: MessageSquare,
    title: "Start with AI Chatbot",
    description: "Get a custom AI chatbot deployed in just 2 weeks",
    action: "Get Started",
    gradient: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    icon: Bot,
    title: "Custom AI Agent",
    description: "Build a bespoke AI solution tailored to your business",
    action: "Learn More",
    gradient: "from-green-500 to-emerald-500",
    popular: false
  }
]

export function AIAgencyCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-16">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Future?
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join hundreds of businesses that have transformed their operations 
                with our intelligent AI agents. Start your AI journey today.
              </p>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-12 py-6 text-xl group"
              >
                <Zap className="mr-3 h-6 w-6" />
                Start Building AI Agents
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-12 py-6 text-xl"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Consultation
              </Button>
            </div>
          </motion.div>

          {/* CTA Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {ctaOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <Card className={`h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group ${
                    option.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}>
                    <CardContent className="p-8 text-center space-y-6">
                      {/* Icon */}
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${option.gradient} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${option.gradient} mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                      </div>
                      
                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {option.description}
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        className={`w-full group/btn ${
                          option.popular 
                            ? `bg-gradient-to-r ${option.gradient} hover:opacity-90 text-white` 
                            : 'bg-slate-700 hover:bg-slate-600 text-white'
                        }`}
                        size="lg"
                      >
                        <span>{option.action}</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center space-y-6 pt-8 border-t border-slate-700/50"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>ROI Guarantee</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Join 500+ businesses already using our AI agents. No setup fees, 
              no long-term contracts, and full money-back guarantee within 30 days.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
