"use client"

import { motion } from "framer-motion"
import { Heart, Linkedin, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-800/50">
      {/* RESPONSIVE CONTAINER */}
      {/* Optimized for 1920x1080 with full responsivity */}
      <div className="max-w-7xl mx-auto">
        {/* FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT COLUMN - BRANDING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* LOGO/NAME - SMALLER FONT */}
            {/* CUSTOMIZABLE: Update branding */}
            <h3 className="text-xl font-bold text-white">Caio Seniuk</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Data Analyst specializing in transforming complex data into actionable business insights through advanced
              analytics and AI.
            </p>
          </motion.div>

          {/* CENTER COLUMN - QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-base font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {/* NAVIGATION LINKS - SMALLER FONT */}
              {/* CUSTOMIZABLE: Update navigation */}
              <a
                href="#home"
                className="block text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Home
              </a>
              <a
                href="#skills"
                className="block text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Projects
              </a>
              <a
                href="#about"
                className="block text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-base font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              {/* SOCIAL MEDIA LINKS */}
              {/* CUSTOMIZABLE: Update social media URLs */}
              <a
                href="https://linkedin.com/in/caioseniuk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/caioseniuk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/caioseniuk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:caio.seniuk@email.com"
                className="w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOOTER BOTTOM - SMALLER FONT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          {/* COPYRIGHT */}
          <p className="text-xs text-zinc-400">© 2024 Caio Seniuk. All rights reserved.</p>

          {/* MADE WITH LOVE */}
          <p className="text-xs text-zinc-400 flex items-center gap-2">
            Made with <Heart className="w-3 h-3 text-orange-500" /> for data professionals
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
