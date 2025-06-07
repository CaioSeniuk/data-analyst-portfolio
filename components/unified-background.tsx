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
  Calculator,
  Target,
  Layers,
  GitBranch,
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
  Calculator,
  Target,
  Layers,
  GitBranch,
]

export default function UnifiedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Static positioned icons with simple animations */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => {
          const Icon = backgroundIcons[i % backgroundIcons.length]
          const size = 12 + (i % 4) * 4 // Fixed sizes: 12, 16, 20, 24
          const isOrange = i % 5 === 0 // Every 5th icon is orange

          // Fixed positions based on index
          const x = (i % 10) * 120 + 50 + (i % 3) * 30
          const y = Math.floor(i / 10) * 100 + 50 + (i % 2) * 40

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
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 15 + (i % 3) * 5, // 15, 20, or 25 seconds
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.3, // Staggered start
              }}
            >
              <Icon className={`w-full h-full ${isOrange ? "text-orange-500/40" : "text-zinc-600/30"}`} />
            </motion.div>
          )
        })}
      </div>

      {/* Static geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const shapes = ["circle", "square", "triangle"]
          const shape = shapes[i % shapes.length]
          const size = 4 + (i % 3) * 2 // Fixed sizes: 4, 6, 8
          const isOrange = i % 6 === 0

          // Fixed positions
          const x = (i % 6) * 200 + 80 + (i % 2) * 50
          const y = Math.floor(i / 6) * 120 + 80 + (i % 3) * 30

          return (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: x,
                top: y,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.1, 0.3, 0.1],
                rotate: shape === "square" ? [0, 45, 0] : 0,
              }}
              transition={{
                duration: 12 + (i % 2) * 6, // 12 or 18 seconds
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              {shape === "circle" && (
                <div
                  className={`rounded-full ${isOrange ? "bg-orange-500/20" : "bg-zinc-600/20"}`}
                  style={{ width: size, height: size }}
                />
              )}
              {shape === "square" && (
                <div
                  className={`${isOrange ? "bg-orange-500/20" : "bg-zinc-600/20"}`}
                  style={{ width: size, height: size }}
                />
              )}
              {shape === "triangle" && (
                <div
                  className={`w-0 h-0 border-l-[${size / 2}px] border-r-[${size / 2}px] border-b-[${size}px] border-l-transparent border-r-transparent ${
                    isOrange ? "border-b-orange-500/20" : "border-b-zinc-600/20"
                  }`}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_70%)]" />
    </div>
  )
}
