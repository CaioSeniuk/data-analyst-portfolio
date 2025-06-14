"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

interface HeaderProps {
  scrollY: number
  scrollProgress: number
}

export default function Header({ scrollY, scrollProgress }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY: scrollYProgress } = useScroll()

  // Listen to scroll changes to determine direction and visibility
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine if we're scrolling up or down
    const scrollingDown = latest > lastScrollY

    // Update scroll state
    setLastScrollY(latest)

    // Hide header when scrolling down past threshold, show when scrolling up
    if (scrollingDown && latest > 150) {
      setIsVisible(false)
    } else if (!scrollingDown) {
      setIsVisible(true)
    }
  })

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100,
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing curve
      }}
      className="fixed top-6 left-0 right-0 mx-auto z-50 flex justify-center"
    >
      <motion.div
        className="bg-transparent border border-white/10 rounded-full px-8 py-4 w-auto shadow-2xl relative"
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30, // Smoother spring animation
        }}
      >
        <nav className="flex items-center justify-center space-x-8">
          <motion.a
            href="#hero"
            className="text-zinc-300 hover:text-white transition-all duration-500 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Home
          </motion.a>
          <motion.a
            href="#skills"
            className="text-zinc-300 hover:text-white transition-all duration-500 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#about"
            className="text-zinc-300 hover:text-white transition-all duration-500 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="text-zinc-300 hover:text-white transition-all duration-500 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Contact
          </motion.a>
        </nav>
      </motion.div>
    </motion.header>
  )
}
