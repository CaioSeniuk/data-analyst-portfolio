"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ScrollProgressProps {
  sections: string[]
}

export default function ScrollProgress({ sections }: ScrollProgressProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))

      // Determine active section
      const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean)
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Section Indicators */}
        <div className="flex flex-col space-y-3">
          {sections.map((section, index) => (
            <motion.button
              key={section}
              onClick={() => {
                const element = document.getElementById(section)
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Tooltip */}
              <motion.div
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.div>

              {/* Active indicator glow */}
              {activeSection === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-sm opacity-50"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Vertical Progress Line */}
        <div className="relative w-0.5 h-32 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"
            style={{ height: `${scrollProgress}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Scroll Percentage */}
        <motion.div
          className="bg-black/80 backdrop-blur-xl text-white text-xs px-2 py-1 rounded-full border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Math.round(scrollProgress)}%
        </motion.div>
      </div>
    </div>
  )
}
