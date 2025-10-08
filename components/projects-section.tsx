"use client"
import {Card, CardBody} from "@heroui/react";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, Database, Brain, TrendingUp, PieChart, LineChart } from "lucide-react"
import Image from "next/image"

// PROJECTS CONFIGURATION
// CUSTOMIZABLE: Add, remove, or modify projects here


const projects = []
  // {
  //   title: "Sales Analytics Dashboard",
  //   description:
  //     "Comprehensive dashboard analyzing sales performance across multiple regions with predictive forecasting and trend analysis.",
  //   tech: ["Python", "Tableau", "SQL", "Machine Learning"],
  //   icon: BarChart3,
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Business Intelligence",
  // },
  // {
  //   title: "Customer Segmentation Analysis",
  //   description:
  //     "Advanced clustering analysis to identify customer segments and optimize marketing strategies using machine learning algorithms.",
  //   tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  //   icon: Database,
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Machine Learning",
  // },
  // {
  //   title: "Predictive Maintenance System",
  //   description:
  //     "AI-powered system for predicting equipment failures and optimizing maintenance schedules to reduce downtime.",
  //   tech: ["Python", "TensorFlow", "AWS", "Docker"],
  //   icon: Brain,
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "AI/ML",
  // },
  // {
  //   title: "Financial Risk Assessment",
  //   description:
  //     "Comprehensive risk analysis model for financial portfolios with real-time monitoring and alert systems.",
  //   tech: ["R", "Power BI", "Azure", "SQL Server"],
  //   icon: TrendingUp,
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Finance",
  // },
  // {
  //   title: "Market Research Analytics",
  //   description:
  //     "Deep dive analysis of market trends and consumer behavior patterns using advanced statistical methods.",
  //   tech: ["Python", "Jupyter", "Plotly", "PostgreSQL"],
  //   icon: PieChart,
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Market Research",
  // },
  // {
  //   title: "Supply Chain Optimization",
  //   description:
  //     "Data-driven optimization of supply chain operations resulting in 25% cost reduction and improved efficiency.",
  //   tech: ["Python", "Apache Spark", "Tableau", "MongoDB"],
  //   icon: LineChart,
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Operations",
  // },


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* RESPONSIVE CONTAINER */}
      {/* Optimized for 1920x1080 with full responsivity */}
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* SECTION TITLE - SMALLER FONT */}
          {/* CUSTOMIZABLE: Modify section title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* SECTION DESCRIPTION - SMALLER FONT */}
          {/* CUSTOMIZABLE: Update description */}          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
            Showcasing impactful data analysis projects that drive business value
          </p>
        </motion.div>

        {/* COMING SOON CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-zinc-400">New exciting projects are in development. Stay tuned!</p>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        {/* RESPONSIVE: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// PROJECT CARD COMPONENT
// CUSTOMIZABLE: Modify card design and animations
function ProjectCard({ project, index }: { project: any; index: number }) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* CARD CONTAINER */}
      <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zinc-600/50 transition-all duration-300">
        {/* PROJECT IMAGE */}
        {/* CUSTOMIZABLE: Replace with actual project images */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* CATEGORY BADGE */}
          <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
            {project.category}
          </div>

          {/* ICON OVERLAY */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-orange-500" />
          </div>
        </div>

        {/* CARD CONTENT */}
        <div className="p-6">
          {/* PROJECT TITLE - SMALLER FONT */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
            {project.title}
          </h3>

          {/* PROJECT DESCRIPTION - SMALLER FONT */}
          <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">{project.description}</p>

          {/* TECH STACK TAGS - SMALLER FONT */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="text-xs font-medium bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3">
            {/* LIVE DEMO BUTTON */}
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 transition-all duration-300"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>

            {/* GITHUB BUTTON */}
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
       
        {/* HOVER GLOW EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}
