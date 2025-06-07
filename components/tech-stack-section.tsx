"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, BarChart3, FileSpreadsheet, Activity, Code, Cloud, Server, Brain, Zap } from "lucide-react"
import { useRef } from "react"
import ScrollTriggeredAnimation from "./scroll-triggered-animation"
import ParallaxSection from "./parallax-section"
import SectionTransition from "./section-transition"

const techStack = [
  { name: "Python", icon: Code, color: "from-yellow-400 to-blue-500" },
  { name: "SQL", icon: Database, color: "from-blue-400 to-cyan-400" },
  { name: "Power BI", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
  { name: "Excel", icon: FileSpreadsheet, color: "from-green-400 to-emerald-500" },
  { name: "Tableau", icon: Activity, color: "from-blue-500 to-purple-500" },
  { name: "Pandas", icon: Brain, color: "from-purple-400 to-pink-400" },
  { name: "MATLAB", icon: Zap, color: "from-orange-400 to-red-500" },
  { name: "Azure", icon: Cloud, color: "from-blue-400 to-blue-600" },
  { name: "AWS", icon: Server, color: "from-orange-400 to-yellow-500" },
]

export default function TechStackSection() {
  const infiniteStack = [...techStack, ...techStack, ...techStack]
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <>
      <motion.section
        ref={ref}
        id="skills"
        className="py-20 px-6 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden"
      >
        {/* Enhanced background with parallax - no floating particles */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.15),transparent_50%)]"
          />
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,0.02)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.02)_87.5%,rgba(255,255,255,0.02)),linear-gradient(150deg,rgba(255,255,255,0.02)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.02)_87.5%,rgba(255,255,255,0.02))] bg-[size:80px_140px]" />
        </ParallaxSection>

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollTriggeredAnimation animation="fadeUp" className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                Technical{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h2>
            <p className="text-xl bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver data-driven solutions
            </p>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animation="scale" delay={0.3}>
            <div className="relative overflow-hidden mask-gradient rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />

              <motion.div
                animate={{ x: [-100 * techStack.length, 0] }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex gap-6 will-change-transform"
                style={{ width: `${infiniteStack.length * 200}px` }}
              >
                {infiniteStack.map((tech, index) => {
                  const Icon = tech.icon
                  return (
                    <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                      <Card className="w-48 h-36 bg-black/20 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 shadow-2xl transform-gpu group">
                        <CardContent className="flex flex-col items-center justify-center h-full p-6 relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ scale: 1.1 }}
                          />

                          <motion.div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 shadow-2xl relative z-10`}
                            whileHover={{
                              rotate: 360,
                              scale: 1.2,
                              y: -5,
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>

                          <h3 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent font-semibold text-lg relative z-10">
                            {tech.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </ScrollTriggeredAnimation>
        </div>
      </motion.section>

      {/* Section transition */}
      <SectionTransition direction="down" color="blue" />
    </>
  )
}
