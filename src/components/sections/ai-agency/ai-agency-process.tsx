"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Search, Brain, Code, Rocket, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We analyze your business processes, identify automation opportunities, and define AI agent requirements.",
    duration: "1-2 weeks",
    deliverables: ["Business analysis", "AI strategy roadmap", "Technical requirements"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Brain,
    title: "AI Model Design",
    description: "Our experts design and train custom AI models tailored to your specific use cases and data patterns.",
    duration: "2-4 weeks",
    deliverables: ["Model architecture", "Training datasets", "Performance benchmarks"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Development & Integration",
    description: "We build and integrate AI agents into your existing systems with robust APIs and seamless workflows.",
    duration: "3-6 weeks",
    deliverables: ["AI agent deployment", "System integration", "Quality assurance"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "We deploy your AI agents, monitor performance, and continuously optimize for maximum efficiency.",
    duration: "1 week + ongoing",
    deliverables: ["Production deployment", "Performance monitoring", "Continuous optimization"],
    gradient: "from-orange-500 to-red-500"
  }
]

export function AIAgencyProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Our AI Development{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we follow a proven methodology that ensures 
              your AI agents deliver exceptional results from day one.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-full transform -translate-y-1/2 opacity-30" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                      <CardContent className="p-6 text-center space-y-6">
                        {/* Step Number & Icon */}
                        <div className="relative">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.gradient} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 text-sm font-bold">
                            {index + 1}
                          </div>
                          
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${step.gradient} mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                        </div>
                        
                        {/* Content */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {step.title}
                          </h3>
                          <div className="text-sm text-cyan-400 font-medium mb-3">
                            Duration: {step.duration}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Deliverables */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-white text-sm">Key Deliverables:</h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-center space-x-2 text-xs">
                                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50"
          >
            {[
              { value: "6-12 weeks", label: "Average Project Timeline" },
              { value: "99.2%", label: "On-time Delivery Rate" },
              { value: "24/7", label: "Post-launch Support" },
              { value: "ROI", label: "Guaranteed within 6 months" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-medium">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>Ready to start your AI transformation journey?</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
