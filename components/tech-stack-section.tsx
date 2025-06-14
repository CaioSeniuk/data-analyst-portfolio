"use client"

import { table } from "console"
import { motion } from "framer-motion"
import {
  Database,
  BarChart3,
  Cloud,
  Server,
  Code,
  FileSpreadsheet,
  Activity,
  TrendingUp,
  Calculator,
  Network,
  Target,
  Settings,
  Monitor,
  HardDrive,
  Play,
  Brain,
  Table,
} from "lucide-react"

// TECH STACK CONFIGURATION
// CUSTOMIZABLE: Add, remove, or modify technologies here
const techStack = [
  // DATA ANALYSIS & VISUALIZATION
  { name: "Python", icon: Code, color: "from-blue-400 to-blue-400" },
  { name: "R", icon: BarChart3, color: "from-blue-500 to-blue-600" },
  { name: "Pandas", icon: Brain, color: "from-purple-400 to-pink-400" },
  { name: "Tableau", icon: Activity, color: "from-blue-400 to-orange-400" },
  { name: "Power BI", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
  { name: "Excel", icon: Table, color: "from-purple-400 to-pink-400" },

  // { name: "NumPy", icon: Brain, color: "from-blue-400 to-cyan-400" },

  // DATABASES
  { name: "SQL", icon: Server, color: "from-blue-500 to-orange-500" },
  // { name: "PostgreSQL", icon: HardDrive, color: "from-blue-400 to-blue-600" },
  // { name: "MongoDB", icon: Layers, color: "from-green-400 to-green-600" }, // COMMENTED OUT AS REQUESTED

  // CLOUD PLATFORMS
  { name: "AWS", icon: Cloud, color: "from-orange-400 to-orange-600" },
  { name: "Azure", icon: Cloud, color: "from-blue-400 to-blue-600" },
  { name: "Google Cloud", icon: Server, color: "from-blue-400 to-green-400" },

  // MACHINE LEARNING
  // { name: "Scikit-learn", icon: Brain, color: "from-orange-400 to-blue-400" }, // COMMENTED OUT AS REQUESTED
  // { name: "TensorFlow", icon: Cpu, color: "from-orange-400 to-orange-600" }, // COMMENTED OUT AS REQUESTED
  // { name: "PyTorch", icon: Zap, color: "from-red-400 to-orange-400" }, // COMMENTED OUT AS REQUESTED

  // TOOLS & PLATFORMS
  { name: "Jupyter", icon: Monitor, color: "from-orange-400 to-gray-400" },
  { name: "Docker", icon: Settings, color: "from-blue-400 to-blue-600" },
  // { name: "Apache Spark", icon: Workflow, color: "from-orange-400 to-red-400" }, // COMMENTED OUT AS REQUESTED
  // { name: "Airflow", icon: GitBranch, color: "from-blue-400 to-cyan-400" }, // COMMENTED OUT AS REQUESTED
  { name: "Excel", icon: FileSpreadsheet, color: "from-green-400 to-green-600" },
  { name: "MATLAB", icon: Target, color: "from-orange-400 to-red-500" },
  { name: "Statistics", icon: TrendingUp, color: "from-purple-400 to-pink-400" },
  { name: "Data Mining", icon: Network, color: "from-cyan-400 to-blue-400" },
  { name: "Power Automate", icon: Play, color: "from-blue-500 to-purple-500" }, // ADDED AS REQUESTED
]

export default function TechStackSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          {/* SECTION DESCRIPTION - SMALLER FONT */}
          {/* CUSTOMIZABLE: Update description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver data-driven solutions
          </p>
        </motion.div>

        {/* INFINITE CAROUSEL */}
        {/* CUSTOMIZABLE: Adjust carousel speed and spacing */}
        <div className="relative overflow-hidden">
          {/* GRADIENT MASKS */}
          {/* Creates fade effect on carousel edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* CAROUSEL CONTAINER - SLOWER SPEED AS REQUESTED */}
          <motion.div
            className="flex gap-6 sm:gap-8 md:gap-10"
            animate={{
              x: [0, -250 * techStack.length], // CUSTOMIZABLE: Adjust scroll distance
            }}
            transition={{
              duration: 60, // SLOWER SPEED (60 seconds instead of 30)
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              width: `${250 * techStack.length * 2}px`, // Double width for seamless loop
            }}
          >
            {/* FIRST SET OF CARDS */}
            {techStack.map((tech, index) => (
              <TechCard key={`first-${index}`} tech={tech} index={index} />
            ))}
            {/* DUPLICATE SET FOR SEAMLESS LOOP */}
            {techStack.map((tech, index) => (
              <TechCard key={`second-${index}`} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// TECH CARD COMPONENT
// CUSTOMIZABLE: Modify card design and animations
function TechCard({ tech, index }: { tech: any; index: number }) {
  const Icon = tech.icon

  return (
    <motion.div
      className="flex-shrink-0 w-56 sm:w-64 md:w-72 h-40 sm:h-44 md:h-48"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* CARD CONTAINER */}
      <div className="relative h-full bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center group transition-all duration-300">
        {/* ICON CONTAINER */}
        {/* CUSTOMIZABLE: Adjust icon size and styling */}
        <div
          className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-full h-full text-white" />
        </div>

        {/* TECH NAME - SMALLER FONT */}
        {/* CUSTOMIZABLE: Modify text styling */}
        <h3 className="text-base sm:text-lg font-semibold text-white text-center">{tech.name}</h3>

        {/* HOVER GLOW EFFECT */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}
