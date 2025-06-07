"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, TrendingUp, Database, Brain } from "lucide-react"
import ScrollTriggeredAnimation from "./scroll-triggered-animation"
import SectionTransition from "./section-transition"

const projects = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue optimization across multiple regions.",
    tech: ["Power BI", "SQL", "Python"],
    icon: BarChart3,
    image: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning model using Python and scikit-learn to predict customer churn with 89% accuracy, helping reduce customer loss by 23%.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    icon: Brain,
    image: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial Market Analysis",
    description:
      "Comprehensive analysis of stock market trends using MATLAB and statistical modeling to identify investment opportunities.",
    tech: ["MATLAB", "Excel", "Tableau"],
    icon: TrendingUp,
    image: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-commerce Data Pipeline",
    description:
      "Automated ETL pipeline on AWS processing 1M+ daily transactions, with real-time analytics and anomaly detection.",
    tech: ["AWS", "SQL", "Python"],
    icon: Database,
    image: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  return (
    <>
      <section id="projects" className="py-20 px-6 relative overflow-hidden">
        {/* Modern background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.02)_0deg,transparent_60deg,rgba(255,255,255,0.02)_120deg,transparent_180deg,rgba(255,255,255,0.02)_240deg,transparent_300deg,rgba(255,255,255,0.02)_360deg)] bg-[size:100px_100px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollTriggeredAnimation animation="fadeUp" className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                Featured{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <p className="text-xl bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent max-w-2xl mx-auto">
              Showcasing real-world data analysis projects that deliver measurable business impact
            </p>
          </ScrollTriggeredAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <ScrollTriggeredAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                  <motion.div whileHover={{ y: -15, scale: 1.02 }} className="perspective-1000">
                    <Card className="group h-full bg-black/20 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden shadow-2xl transform-gpu">
                      <div className="aspect-video bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-orange-500/20 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl"
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent text-xl">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-black/30 backdrop-blur-xl text-orange-400 text-xs rounded-full border border-orange-500/20"
                              whileHover={{ scale: 1.1, y: -2 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black rounded-full flex items-center gap-2 shadow-2xl"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </a>
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 bg-black/20 backdrop-blur-xl text-zinc-300 hover:text-white hover:border-orange-500/30 rounded-full flex items-center gap-2"
                              asChild
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                                Code
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollTriggeredAnimation>
              )
            })}
          </div>

          <ScrollTriggeredAnimation animation="fadeUp" delay={0.4} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-black/20 backdrop-blur-xl text-zinc-300 hover:text-white hover:border-orange-500/30 rounded-full px-8 py-4 shadow-2xl"
                asChild
              >
                <a href="https://github.com/CaioSeniuk" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub
                </a>
              </Button>
            </motion.div>
          </ScrollTriggeredAnimation>
        </div>
      </section>

      {/* Section transition */}
      <SectionTransition direction="down" color="green" />
    </>
  )
}
