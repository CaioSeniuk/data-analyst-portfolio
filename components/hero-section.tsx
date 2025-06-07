"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* RESPONSIVE CONTAINER */}
      {/* Optimized for 1920x1080 with full responsivity */}
      <div className="max-w-7xl mx-auto text-center z-10">
        {/* DATA ANALYST BADGE */}
        {/* CUSTOMIZABLE: Modify badge text and styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="text-orange-500 text-sm font-medium">✨ Data Analyst</span>
        </motion.div>

        {/* MAIN NAME - SMALLER AS REQUESTED */}
        {/* CUSTOMIZABLE: Update name here */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-zinc-300">Caio Seniuk</span>
        </motion.h1>

        {/* MAIN HEADLINE */}
        {/* CUSTOMIZABLE: Update main message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="text-white">Transforming Data into</span>
          <br />
          <span className="text-white">Intelligent Decisions.</span>
        </motion.h2>

        {/* DESCRIPTION - SMALLER FONT */}
        {/* CUSTOMIZABLE: Update professional description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Specialist in analytical insights focused on AI analytical potential that implement innovation and solve
          complex problems.
        </motion.p>

        {/* ACTION BUTTONS */}
        {/* CUSTOMIZABLE: Modify button text and actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* CONTACT BUTTON */}
          <Button
            size="lg"
            variant="outline"
            className="bg-zinc-900/80 border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 px-8 py-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>

          {/* PROJECTS BUTTON */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 transition-all duration-300 px-8 py-6 group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            My Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
