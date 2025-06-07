"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import ScrollTriggeredAnimation from "./scroll-triggered-animation"
import ParallaxSection from "./parallax-section"
import FloatingElements from "./floating-elements"
import SectionTransition from "./section-transition"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Transforming Data into Intelligent Decisions."
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <motion.section
        ref={ref}
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
        style={{ y, opacity, scale }}
      >
        {/* Floating elements only in hero section */}
        <FloatingElements sectionId="home" />

        {/* Enhanced background with parallax layers */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </ParallaxSection>

        {/* Fixed geometric shapes with slower, predictable animations */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            // Fixed positions for predictable movement
            const startX = (i % 5) * 250 + 50
            const startY = Math.floor(i / 5) * 150 + 50

            return (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: startX,
                  y: startY,
                }}
                animate={{
                  x: [startX, startX + 100, startX],
                  y: [startY, startY + 50, startY],
                  rotate: [0, 180, 360],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 20 + i * 2, // Much slower
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400/30 to-orange-600/30 rounded-full blur-sm" />
              </motion.div>
            )
          })}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollTriggeredAnimation animation="scale" delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-xl border border-orange-500/20 text-white rounded-full px-6 py-3 text-sm font-medium shadow-2xl mb-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249,115,22,0.3)",
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
              </motion.div>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">
                Data Analyst
              </span>
            </motion.div>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animation="fadeUp" delay={0.4}>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Caio Seniuk
            </motion.h2>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animation="slideUp" delay={0.6}>
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight min-h-[150px] md:min-h-[200px] flex items-center justify-center px-4">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent break-words text-center">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="text-orange-500"
                >
                  |
                </motion.span>
              </span>
            </motion.h1>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animation="fadeUp" delay={0.8}>
            <motion.p className="text-xl bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent mb-12 max-w-3xl mx-auto leading-relaxed">
              Specialist in analytical insights focused on AI analytical potential that implement innovation and solve
              complex problems.
            </motion.p>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animation="scale" delay={1.0}>
            <motion.div className="flex flex-row gap-6 justify-center items-center mb-20">
              <motion.a
                href="#contact"
                className="group relative bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="button-hover"
                />
              </motion.a>

              <motion.a
                href="#projects"
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(249,115,22,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-semibold">My Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="button-hover-orange"
                />
              </motion.a>
            </motion.div>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animation="fadeUp" delay={1.2}>
            <motion.div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <ArrowDown className="w-6 h-6 text-zinc-400" />
              </motion.div>
            </motion.div>
          </ScrollTriggeredAnimation>
        </div>
      </motion.section>

      {/* Section transition */}
      <SectionTransition direction="down" color="orange" />
    </>
  )
}
