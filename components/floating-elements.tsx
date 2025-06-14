"use client"

import { motion } from "framer-motion"
import { Database, BarChart3, TrendingUp, Brain, Zap, Code } from "lucide-react"

const floatingIcons = [
  { Icon: Database, color: "text-blue-400", size: "w-6 h-6" },
  { Icon: BarChart3, color: "text-green-400", size: "w-5 h-5" },
  { Icon: TrendingUp, color: "text-purple-400", size: "w-7 h-7" },
  { Icon: Brain, color: "text-pink-400", size: "w-6 h-6" },
  { Icon: Zap, color: "text-yellow-400", size: "w-5 h-5" },
  { Icon: Code, color: "text-cyan-400", size: "w-6 h-6" },
]

interface FloatingElementsProps {
  sectionId?: string
}

export default function FloatingElements({ sectionId = "home" }: FloatingElementsProps) {
  // Only render floating elements for the hero section
  if (sectionId !== "home") {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(12)].map((_, i) => {
        const iconData = floatingIcons[i % floatingIcons.length]
        const Icon = iconData.Icon

        // Fixed positions and slower, predictable animations
        const startX = (i % 4) * 300 + 100
        const startY = Math.floor(i / 4) * 200 + 100
        const endX = startX + (i % 2 === 0 ? 250 : -150)
        const endY = startY + (i % 3 === 0 ? 100 : -100)

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: startX,
              y: startY,
              opacity: 0.2,
              scale: 0.8,
            }}
            animate={{
              x: [startX, endX, startX],
              y: [startY, endY, startY],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 15 + i * 2, // Slower, staggered durations
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5, // Staggered start times
            }}
          >
            <Icon className={`${iconData.size} ${iconData.color} drop-shadow-lg`} />
          </motion.div>
        )
      })}
    </div>
  )
}
