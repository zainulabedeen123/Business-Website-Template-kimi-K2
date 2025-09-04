"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Cpu,
  Network,
  Eye
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "Advanced Machine Learning",
    description: "Cutting-edge ML algorithms that learn and adapt to your business needs in real-time.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Sophisticated NLP capabilities for human-like conversations and text understanding.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.1
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "AI-powered insights that forecast trends and optimize decision-making processes.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with encrypted data processing and compliance standards.",
    gradient: "from-orange-500 to-red-500",
    delay: 0.3
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast AI responses with sub-second processing for critical operations.",
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.4
  },
  {
    icon: Cpu,
    title: "Multi-Agent Systems",
    description: "Coordinated AI agents that work together to solve complex business challenges.",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.5
  },
  {
    icon: Network,
    title: "API Integration",
    description: "Seamless integration with existing systems through robust API connections.",
    gradient: "from-teal-500 to-cyan-500",
    delay: 0.6
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced image and video analysis for visual intelligence applications.",
    gradient: "from-rose-500 to-pink-500",
    delay: 0.7
  }
]

export function AIAgencyFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-slate-900/50 backdrop-blur-sm">
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
              Powered by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Advanced AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI agents leverage state-of-the-art technologies to deliver 
              intelligent solutions that transform how businesses operate.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: feature.delay }}
                >
                  <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                    <CardContent className="p-6 text-center space-y-4">
                      {/* Icon */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                      </div>
                      
                      {/* Content */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-medium">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>All features included in every AI agent deployment</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
