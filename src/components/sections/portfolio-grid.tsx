"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const portfolioProjects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
    image: STOCK_IMAGES.portfolio.ecommerce,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    results: "+250% Sales Increase",
    link: "#",
    featured: true
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive mobile banking application with biometric authentication.",
    image: STOCK_IMAGES.portfolio.mobile_app,
    technologies: ["React Native", "Firebase", "Biometrics"],
    results: "1M+ Downloads",
    link: "#",
    featured: false
  },
  {
    title: "Analytics Dashboard",
    category: "Web Application",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: STOCK_IMAGES.portfolio.dashboard,
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    results: "+400% Efficiency",
    link: "#",
    featured: false
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    description: "Professional corporate website with modern design and CMS integration.",
    image: STOCK_IMAGES.portfolio.website,
    technologies: ["Next.js", "Tailwind", "Sanity CMS"],
    results: "+180% Traffic",
    link: "#",
    featured: false
  },
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete brand identity design including logo, guidelines, and marketing materials.",
    image: STOCK_IMAGES.portfolio.branding,
    technologies: ["Adobe Creative Suite", "Figma"],
    results: "+300% Recognition",
    link: "#",
    featured: false
  },
  {
    title: "SaaS Platform",
    category: "Web Application",
    description: "Comprehensive SaaS platform with subscription management and analytics.",
    image: STOCK_IMAGES.portfolio.webapp,
    technologies: ["React", "Express", "AWS", "Stripe"],
    results: "$2M+ ARR",
    link: "#",
    featured: true
  }
]

const categories = ["All", "Web Development", "Mobile Development", "Web Application", "Branding"]

export function PortfolioGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="muted" id="projects">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses across various industries achieve
            their digital transformation goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-background overflow-hidden">
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                        <Github className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Result: </span>
                      <span className="font-semibold text-green-600">{project.results}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button size="lg" variant="outline">
            Load More Projects
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
