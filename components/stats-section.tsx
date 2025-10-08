"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Database } from "lucide-react"

// STATISTICS CONFIGURATION - UPDATED AS REQUESTED
// CUSTOMIZABLE: Modify statistics here
const stats = [
  {
    icon: Database,
    label: "Data Points Analyzed",
    value: 400000,
    suffix: "+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: TrendingUp,
    label: "Performance",
    sublabel: "Through Data-Driven Decision Making",
    value: 50,
    suffix: "%",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    label: "Projects Completed",
    value: 60,
    suffix: "+",
    color: "from-purple-400 to-pink-400",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-white">Impact by </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>

          {/* SECTION DESCRIPTION - SMALLER FONT */}
          {/* CUSTOMIZABLE: Update description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
            Delivering measurable results through data-driven insights
          </p>
        </motion.div>

        {/* STATS GRID - 3 CARDS AS REQUESTED */}
        {/* RESPONSIVE: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// STAT CARD COMPONENT
// CUSTOMIZABLE: Modify card design and animations
function StatCard({ stat, index }: { stat: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  // ANIMATED COUNTER EFFECT
  // CUSTOMIZABLE: Adjust animation duration and easing
  useEffect(() => {
    if (isInView) {
      const duration = 2000 // Animation duration in milliseconds
      const steps = 60 // Number of animation steps
      const increment = stat.value / steps
      const stepDuration = duration / steps

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.value) {
          setCount(stat.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* CARD CONTAINER */}
      <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 lg:p-8 text-center hover:border-zinc-600/50 transition-all duration-300">
        {/* ICON */}
        {/* CUSTOMIZABLE: Adjust icon styling */}
        <div
          className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-full h-full text-white" />
        </div>

        {/* ANIMATED NUMBER */}
        {/* CUSTOMIZABLE: Modify number formatting */}
        <div className="mb-2">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{count.toLocaleString()}</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">{stat.suffix}</span>
        </div>

        {/* STAT LABEL - SMALLER FONT */}
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{stat.label}</h3>

        {/* STAT SUBLABEL - SMALLER FONT */}
        {stat.sublabel && <p className="text-xs sm:text-sm text-zinc-400">{stat.sublabel}</p>}

        {/* HOVER GLOW EFFECT */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}
