"use client"

import { motion } from "framer-motion"

interface SectionTransitionProps {
  direction?: "up" | "down"
  color?: "orange" | "blue" | "purple" | "green"
}

const colorVariants = {
  orange: "from-orange-500/20 via-orange-400/10 to-transparent",
  blue: "from-blue-500/20 via-blue-400/10 to-transparent",
  purple: "from-purple-500/20 via-purple-400/10 to-transparent",
  green: "from-green-500/20 via-green-400/10 to-transparent",
}

export default function SectionTransition({ direction = "down", color = "orange" }: SectionTransitionProps) {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      {/* Wave SVG */}
      <motion.div
        className="absolute inset-0"
        initial={{ y: direction === "down" ? -50 : 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            transform: direction === "up" ? "rotate(180deg)" : "none",
          }}
        >
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249,115,22,0.1)" />
              <stop offset="50%" stopColor="rgba(249,115,22,0.05)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0.1)" />
            </linearGradient>
          </defs>

          {/* Multiple wave layers for depth */}
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill={`url(#gradient-${color})`}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <motion.path
            d="M0,80 C400,140 800,20 1200,80 L1200,120 L0,120 Z"
            fill="rgba(249,115,22,0.05)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </motion.div>

      {/* Floating transition particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: direction === "down" ? 120 : 0,
              opacity: 0,
            }}
            whileInView={{
              y: direction === "down" ? 0 : 120,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{
              left: `${(i * 150) % 1200}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
