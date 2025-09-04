"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Play, Pause, BarChart3, MessageSquare, Bot, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const showcaseItems = [
  {
    id: 1,
    title: "Customer Service AI in Action",
    description: "Watch our AI agent handle complex customer inquiries with natural language understanding and emotional intelligence.",
    icon: MessageSquare,
    gradient: "from-blue-500 to-cyan-500",
    metrics: [
      { label: "Response Time", value: "< 2 seconds" },
      { label: "Resolution Rate", value: "94%" },
      { label: "Customer Satisfaction", value: "4.8/5" }
    ],
    demoType: "chat"
  },
  {
    id: 2,
    title: "Business Intelligence Dashboard",
    description: "Real-time analytics and predictive insights powered by our advanced AI algorithms.",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    metrics: [
      { label: "Data Processing", value: "1M+ records/sec" },
      { label: "Prediction Accuracy", value: "97.3%" },
      { label: "Cost Reduction", value: "45%" }
    ],
    demoType: "dashboard"
  },
  {
    id: 3,
    title: "Autonomous Sales Agent",
    description: "AI-powered sales agent that qualifies leads, schedules meetings, and follows up automatically.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    metrics: [
      { label: "Lead Qualification", value: "85% accuracy" },
      { label: "Conversion Rate", value: "+32%" },
      { label: "Time Saved", value: "20 hrs/week" }
    ],
    demoType: "sales"
  }
]

export function AIAgencyShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [activeDemo, setActiveDemo] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-slate-800/50">
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
              See AI Agents{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                In Action
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our AI agents through interactive demonstrations 
              and real-world performance metrics.
            </p>
          </motion.div>

          {/* Demo Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {showcaseItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  onClick={() => setActiveDemo(item.id)}
                  variant={activeDemo === item.id ? "default" : "outline"}
                  className={`${
                    activeDemo === item.id
                      ? `bg-gradient-to-r ${item.gradient} text-white border-0`
                      : "border-slate-600 text-gray-300 hover:bg-slate-700"
                  } transition-all duration-300`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                </Button>
              )
            })}
          </motion.div>

          {/* Active Demo */}
          {showcaseItems.map((item) => {
            const Icon = item.icon
            return (
              activeDemo === item.id && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Demo Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Live Demo
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {item.metrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="text-center p-4 bg-slate-700/50 rounded-xl border border-slate-600/50"
                        >
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <Button 
                      size="lg" 
                      className={`bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white`}
                    >
                      Try This AI Agent
                    </Button>
                  </div>

                  {/* Demo Video/Interface */}
                  <div className="relative">
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-0">
                        {/* Demo Interface Mockup */}
                        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                          {/* Play Button Overlay */}
                          <motion.button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {isPlaying ? (
                              <Pause className="w-8 h-8 text-white" />
                            ) : (
                              <Play className="w-8 h-8 text-white ml-1" />
                            )}
                          </motion.button>

                          {/* Demo Type Indicator */}
                          <div className="absolute top-4 left-4">
                            <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-0`}>
                              {item.demoType.toUpperCase()} DEMO
                            </Badge>
                          </div>

                          {/* Animated Elements */}
                          <div className="absolute inset-0 opacity-30">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                style={{
                                  left: `${20 + i * 15}%`,
                                  top: `${30 + (i % 2) * 40}%`,
                                }}
                                animate={{
                                  opacity: [0.3, 1, 0.3],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Floating Stats */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-xl p-3"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-medium">Active</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            )
          })}
        </div>
      </div>
    </section>
  )
}
