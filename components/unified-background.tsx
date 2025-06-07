"use client"

import { useEffect, useState } from "react"
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
  BarChartIcon as ChartBar,
  Network,
  Cpu,
  Workflow,
  Binary,
  Sigma,
  Infinity,
  Microscope,
  Atom,
  Braces,
  Hash,
  Gauge,
  BarChart,
  BarChart2,
  BarChart4,
  PieChartIcon as PieChart2,
  LineChartIcon as LineChart2,
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
  ChartBar,
  Network,
  Cpu,
  Workflow,
  Binary,
  Sigma,
  Infinity,
  Microscope,
  Atom,
  Braces,
  Hash,
  Gauge,
  BarChart,
  BarChart2,
  BarChart4,
  PieChart2,
  LineChart2,
]

export default function UnifiedBackground() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate number of icons based on screen size
  const iconCount = Math.max(50, Math.floor((dimensions.width * dimensions.height) / 20000))

  // Calculate number of shapes based on screen size
  const shapeCount = Math.max(30, Math.floor((dimensions.width * dimensions.height) / 30000))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Static positioned icons with simple animations */}
      <div className="absolute inset-0">
        {[...Array(iconCount)].map((_, i) => {
          const Icon = backgroundIcons[i % backgroundIcons.length]
          const size = 24 + (i % 5) * 8 // Fixed sizes: 24, 32, 40, 48, 56
          const isOrange = i % 5 === 0 // Every 5th icon is orange

          // Calculate positions to cover the entire screen evenly
          // Create a grid-like distribution but with some variation
          const cols = Math.ceil(Math.sqrt(iconCount) * 1.5)
          const rows = Math.ceil(iconCount / cols)

          const colIndex = i % cols
          const rowIndex = Math.floor(i / cols)

          // Calculate base position
          const baseX = (dimensions.width / cols) * colIndex
          const baseY = (dimensions.height / rows) * rowIndex

          // Add some variation to avoid perfect grid alignment
          const variationX = ((i * 13) % 100) - 50
          const variationY = ((i * 17) % 100) - 50

          const x = baseX + variationX
          const y = baseY + variationY

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
        {[...Array(shapeCount)].map((_, i) => {
          const shapes = ["circle", "square", "triangle"]
          const shape = shapes[i % shapes.length]
          const size = 6 + (i % 4) * 3 // Fixed sizes: 6, 9, 12, 15
          const isOrange = i % 6 === 0

          // Calculate positions to cover the entire screen evenly
          const cols = Math.ceil(Math.sqrt(shapeCount) * 1.5)
          const rows = Math.ceil(shapeCount / cols)

          const colIndex = i % cols
          const rowIndex = Math.floor(i / cols)

          // Calculate base position with offset from icons
          const baseX = (dimensions.width / cols) * colIndex + 50
          const baseY = (dimensions.height / rows) * rowIndex + 50

          // Add some variation
          const variationX = ((i * 19) % 100) - 50
          const variationY = ((i * 23) % 100) - 50

          const x = baseX + variationX
          const y = baseY + variationY

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
