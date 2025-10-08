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

  const [isVisible, setIsVisible] = useState(false)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const isMobile = dimensions.width < 768
  const isTablet = dimensions.width >= 768 && dimensions.width < 1024
  const isDesktop = dimensions.width >= 1024

  const densityMultipliers = {
    mobile: 0.3,
    tablet: 0.6,
    desktop: 1.0,
  }

  const currentMultiplier = isMobile
    ? densityMultipliers.mobile
    : isTablet
      ? densityMultipliers.tablet
      : densityMultipliers.desktop

  const baseIconCount = Math.floor((dimensions.width * dimensions.height) / 15000)
  const iconCount = Math.max(isMobile ? 20 : 40, Math.floor(baseIconCount * currentMultiplier))

  const shapeCount = Math.max(isMobile ? 10 : 20, Math.floor(iconCount * 0.6))

  const sizeConfig = {
    mobile: {
      iconBase: 16,
      iconVariation: 4,
      shapeBase: 4,
      shapeVariation: 2,
    },
    tablet: {
      iconBase: 20,
      iconVariation: 6,
      shapeBase: 5,
      shapeVariation: 3,
    },
    desktop: {
      iconBase: 24,
      iconVariation: 8,
      shapeBase: 6,
      shapeVariation: 3,
    },
  }

  const currentSizeConfig = isMobile ? sizeConfig.mobile : isTablet ? sizeConfig.tablet : sizeConfig.desktop

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {isVisible && (
        <div className="absolute inset-0">
          {[...Array(iconCount)].map((_, i) => {
            const Icon = backgroundIcons[i % backgroundIcons.length]
            const size = currentSizeConfig.iconBase + (i % 5) * currentSizeConfig.iconVariation
            const isOrange = i % 5 === 0

            const cols = Math.ceil(Math.sqrt(iconCount) * 1.5)
            const rows = Math.ceil(iconCount / cols)

            const colIndex = i % cols
            const rowIndex = Math.floor(i / cols)

            const baseX = (dimensions.width / cols) * colIndex
            const baseY = (dimensions.height / rows) * rowIndex

            const variationRange = isMobile ? 30 : 50
            const variationX = ((i * 13) % (variationRange * 2)) - variationRange
            const variationY = ((i * 17) % (variationRange * 2)) - variationRange

            const x = Math.max(0, Math.min(dimensions.width - size, baseX + variationX))
            const y = Math.max(0, Math.min(dimensions.height - size, baseY + variationY))

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
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: isMobile ? 20 : 15 + (i % 3) * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              >
                <Icon className={`w-full h-full ${isOrange ? "text-orange-500/40" : "text-zinc-600/30"}`} />
              </motion.div>
            )
          })}
        </div>
      )}

      {isVisible && (
        <div className="absolute inset-0">
          {[...Array(shapeCount)].map((_, i) => {
            const shapes = ["circle", "square", "triangle"]
            const shape = shapes[i % shapes.length]
            const size = currentSizeConfig.shapeBase + (i % 4) * currentSizeConfig.shapeVariation
            const isOrange = i % 6 === 0

            const cols = Math.ceil(Math.sqrt(shapeCount) * 1.5)
            const rows = Math.ceil(shapeCount / cols)

            const colIndex = i % cols
            const rowIndex = Math.floor(i / cols)

            const baseX = (dimensions.width / cols) * colIndex + (isMobile ? 25 : 50)
            const baseY = (dimensions.height / rows) * rowIndex + (isMobile ? 25 : 50)

            const variationRange = isMobile ? 20 : 40
            const variationX = ((i * 19) % (variationRange * 2)) - variationRange
            const variationY = ((i * 23) % (variationRange * 2)) - variationRange

            const x = Math.max(0, Math.min(dimensions.width - size, baseX + variationX))
            const y = Math.max(0, Math.min(dimensions.height - size, baseY + variationY))

            return (
              <motion.div
                key={`shape-${i}`}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: shape === "square" ? [0, 45, 0] : 0,
                }}
                transition={{
                  duration: isMobile ? 18 : 12 + (i % 2) * 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.2,
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
      )}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_70%)]" />
    </div>
  )
}
