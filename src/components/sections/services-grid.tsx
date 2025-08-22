"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Search,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    image: STOCK_IMAGES.technology.coding,
    features: ["Responsive Design", "Modern Frameworks", "Performance Optimized", "SEO Ready"],
    pricing: "Starting at $5,000",
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    image: STOCK_IMAGES.technology.mobile,
    features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"],
    pricing: "Starting at $15,000",
    color: "from-green-500 to-emerald-500",
    popular: true
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to increase your online presence and drive qualified leads.",
    image: STOCK_IMAGES.blog.digital_marketing,
    features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"],
    pricing: "Starting at $2,000/month",
    color: "from-purple-500 to-violet-500",
    popular: false
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration, inventory management, and conversion optimization.",
    image: STOCK_IMAGES.portfolio.ecommerce,
    features: ["Payment Gateway", "Inventory System", "Order Management", "Mobile Optimized"],
    pricing: "Starting at $8,000",
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Advanced SEO strategies to improve your search rankings and drive organic traffic to your website.",
    image: STOCK_IMAGES.technology.analytics,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    pricing: "Starting at $1,500/month",
    color: "from-yellow-500 to-orange-500",
    popular: false
  },
  {
    icon: Users,
    title: "Business Consulting",
    description: "Strategic consulting services to help you navigate digital transformation and optimize business processes.",
    image: STOCK_IMAGES.business.strategy,
    features: ["Digital Strategy", "Process Optimization", "Technology Audit", "Growth Planning"],
    pricing: "Starting at $200/hour",
    color: "from-indigo-500 to-purple-500",
    popular: false
  }
]

export function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="muted" id="services">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to help your 
            business thrive in the modern digital landscape.
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
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-background overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Pricing Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold text-gray-900">{service.pricing}</span>
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <div className="pt-4 border-t border-border/50">
                      <Button 
                        className="w-full group/btn" 
                        variant={service.popular ? "default" : "outline"}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
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
          className="text-center space-y-6 pt-8 border-t border-border/50"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every business is unique. Let&apos;s discuss your specific needs and create
              a tailored solution that drives results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Custom Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
