"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a vision to transform how businesses operate in the digital age."
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a game-changing solution."
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25+ team members and opened our second office location."
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded internationally and served clients across 15+ countries."
  },
  {
    year: "2022",
    title: "Innovation Award",
    description: "Recognized as 'Digital Innovation Company of the Year' by Tech Excellence Awards."
  },
  {
    year: "2024",
    title: "500+ Clients",
    description: "Reached the milestone of serving over 500 satisfied clients worldwide."
  }
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and building strong partnerships with our clients.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We're committed to continuous learning and helping our clients achieve sustainable growth.",
    color: "from-purple-500 to-violet-500"
  }
]

export function AboutStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" id="our-story">
      <div ref={ref} className="space-y-20">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014 with a simple yet powerful vision: to bridge the gap between 
                traditional business practices and the digital future. What started as a small 
                team of passionate technologists has grown into a global force for digital transformation.
              </p>
              
              <p>
                We&apos;ve had the privilege of working with startups that became unicorns,
                established enterprises that needed to reinvent themselves, and everything in between. 
                Each project has taught us something new and made us better at what we do.
              </p>
              
              <p>
                Today, we&apos;re proud to be trusted partners to over 500 businesses worldwide,
                helping them navigate the complexities of digital transformation with confidence and clarity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src={STOCK_IMAGES.office.workspace}
                alt="Our modern workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to global impact - here are the key milestones 
              that have shaped our company and defined our mission.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-purple-600 rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work 
              with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                    <CardHeader className="space-y-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
