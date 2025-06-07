"use client"

import { motion } from "framer-motion"

interface HeaderProps {
  scrollY: number
  scrollProgress: number
}

export default function Header({ scrollY, scrollProgress }: HeaderProps) {
  const isScrolled = scrollY > 100

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isScrolled ? 0 : 1,
        y: isScrolled ? -100 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 mx-auto z-50 flex justify-center"
    >
      <motion.div
        className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 w-auto shadow-2xl relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <nav className="flex items-center justify-center space-x-8">
          <motion.a
            href="#home"
            className="text-zinc-300 hover:text-white transition-all duration-300 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#skills"
            className="text-zinc-300 hover:text-white transition-all duration-300 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#about"
            className="text-zinc-300 hover:text-white transition-all duration-300 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="text-zinc-300 hover:text-white transition-all duration-300 text-sm font-medium relative"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.header>
  )
}
