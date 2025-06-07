"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Database,
  TrendingUp,
  Brain,
  Code,
  FileSpreadsheet,
  Activity,
  Cloud,
  Server,
  Zap,
  PieChart,
  LineChart,
} from "lucide-react"

const backgroundIcons = [
  BarChart3,
  Database,
  TrendingUp,
  Brain,
  Code,
  FileSpreadsheet,
  Activity,
  Cloud,
  Server,
  Zap,
  PieChart,
  LineChart,
]

export default function UnifiedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Static scattered icons with simple animations */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const Icon = backgroundIcons[i % backgroundIcons.length]
          const size = 16 + (i % 3) * 4 // Fixed sizes: 16, 20, 24
          const isOrange = i % 4 === 0 // Every 4th icon is orange

          // Fixed positions based on index for consistent layout
          const x = (i % 6) * 200 + 50 + (i % 3) * 50
          const y = Math.floor(i / 6) * 150 + 50 + (i % 2) * 75

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: x,
                top: y,
                width: size,
                height: size,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 15 + (i % 3) * 5, // 15, 20, or 25 seconds
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.5, // Staggered start
              }}
            >
              <Icon className={`w-full h-full ${isOrange ? "text-orange-500/30" : "text-zinc-600/20"}`} />
            </motion.div>
          )
        })}
      </div>

      {/* Static geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const shapes = ["circle", "square"]
          const shape = shapes[i % shapes.length]
          const size = 4 + (i % 2) * 2 // Fixed sizes: 4 or 6
          const isOrange = i % 5 === 0 // Every 5th shape is orange

          // Fixed positions
          const x = (i % 5) * 240 + 100 + (i % 2) * 60
          const y = Math.floor(i / 5) * 180 + 80 + (i % 3) * 40

          return (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: x,
                top: y,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 12 + (i % 2) * 6, // 12 or 18 seconds
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              {shape === "circle" && (
                <div
                  className={`rounded-full ${isOrange ? "bg-orange-500/20" : "bg-zinc-600/15"}`}
                  style={{ width: size, height: size }}
                />
              )}
              {shape === "square" && (
                <div
                  className={`${isOrange ? "bg-orange-500/20" : "bg-zinc-600/15"}`}
                  style={{ width: size, height: size }}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Static grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

      {/* Static radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.03),transparent_70%)]" />

      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
    </div>
  )
}
