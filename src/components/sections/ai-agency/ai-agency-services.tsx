"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Bot, 
  MessageCircle, 
  TrendingUp, 
  Search, 
  FileText, 
  ShoppingCart,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: MessageCircle,
    title: "Customer Service AI",
    description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like interactions.",
    features: ["Multi-language support", "Sentiment analysis", "Escalation handling", "CRM integration"],
    pricing: "From $2,999/month",
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence AI",
    description: "Advanced analytics agents that transform raw data into actionable insights and predictive forecasts.",
    features: ["Real-time analytics", "Predictive modeling", "Automated reporting", "Custom dashboards"],
    pricing: "From $4,999/month",
    popular: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Search,
    title: "Content Generation AI",
    description: "AI agents that create high-quality content, from marketing copy to technical documentation.",
    features: ["SEO optimization", "Brand voice matching", "Multi-format content", "Plagiarism detection"],
    pricing: "From $1,999/month",
    popular: false,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: FileText,
    title: "Document Processing AI",
    description: "Intelligent document analysis and processing for automated workflows and data extraction.",
    features: ["OCR technology", "Data extraction", "Workflow automation", "Compliance checking"],
    pricing: "From $3,499/month",
    popular: false,
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce AI",
    description: "Personalized shopping experiences with recommendation engines and dynamic pricing optimization.",
    features: ["Product recommendations", "Price optimization", "Inventory management", "Customer segmentation"],
    pricing: "From $5,999/month",
    popular: false,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Bespoke AI solutions tailored to your specific business needs and industry requirements.",
    features: ["Custom development", "Industry expertise", "Scalable architecture", "Ongoing support"],
    pricing: "Custom pricing",
    popular: false,
    gradient: "from-cyan-500 to-blue-500"
  }
]

export function AIAgencyServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
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
              AI Agent{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our specialized AI agents or let us build a custom solution 
              that perfectly fits your business requirements.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group ${
                    service.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}>
                    <CardHeader className="space-y-4">
                      {/* Icon */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                      </div>
                      
                      <div>
                        <CardTitle className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.pricing}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Features */}
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <Button 
                        className={`w-full group/btn ${
                          service.popular 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600' 
                            : 'bg-slate-700 hover:bg-slate-600 text-white'
                        }`}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
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
            className="text-center space-y-6 pt-8 border-t border-slate-700/50"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Need Something Different?</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every business is unique. Let&apos;s discuss your specific AI requirements 
                and build a custom solution that delivers exceptional results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                Schedule AI Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
