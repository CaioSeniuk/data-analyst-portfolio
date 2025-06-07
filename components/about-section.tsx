"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Award, Briefcase, GraduationCap, MapPin } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* RESPONSIVE CONTAINER */}
      {/* Optimized for 1920x1080 with full responsivity */}
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* SECTION TITLE - SMALLER FONT */}
          {/* CUSTOMIZABLE: Modify section title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Me</span>
          </h2>

          {/* SECTION DESCRIPTION - SMALLER FONT */}
          {/* CUSTOMIZABLE: Update description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
            Passionate data analyst with expertise in transforming complex data into actionable insights
          </p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        {/* RESPONSIVE: Stack on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* PROFILE IMAGE CONTAINER */}
            {/* CUSTOMIZABLE: Replace with actual profile image */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Caio Seniuk - Data Analyst"
                  fill
                  className="object-cover"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* FLOATING ELEMENTS */}
              {/* CUSTOMIZABLE: Modify or remove decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* INTRODUCTION - SMALLER FONT */}
            {/* CUSTOMIZABLE: Update personal introduction */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Data-Driven Problem Solver</h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                With over 5 years of experience in data analysis and business intelligence, I specialize in transforming
                raw data into strategic insights that drive business growth and operational efficiency.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                My expertise spans across statistical analysis, machine learning, data visualization, and database
                management, enabling me to tackle complex analytical challenges across various industries.
              </p>
            </div>

            {/* HIGHLIGHTS GRID */}
            {/* CUSTOMIZABLE: Modify highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* EXPERIENCE HIGHLIGHT */}
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-white">Experience</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">5+ Years in Data Analysis</p>
              </div>

              {/* EDUCATION HIGHLIGHT */}
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-white">Education</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">MS in Data Science</p>
              </div>

              {/* LOCATION HIGHLIGHT */}
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-white">Location</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">Remote / Global</p>
              </div>

              {/* SPECIALIZATION HIGHLIGHT */}
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold text-white">Focus</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">AI & Machine Learning</p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            {/* CUSTOMIZABLE: Modify button actions and text */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* DOWNLOAD RESUME BUTTON */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 transition-all duration-300 px-8 py-6 text-base group"
                onClick={() => {
                  // CUSTOMIZABLE: Add actual resume download link
                  console.log("Download resume")
                }}
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>

              {/* CONTACT BUTTON */}
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 px-8 py-6 text-base"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
