"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Database } from "lucide-react"
import ScrollTriggeredAnimation from "./scroll-triggered-animation"
import SectionTransition from "./section-transition"

const stats = [
  {
    icon: Database,
    label: "Data Points Analyzed",
    value: 400000,
    suffix: "+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: TrendingUp,
    label: "Performance",
    sublabel: "through data driven decision making",
    value: 89,
    suffix: "%",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    label: "Projects Completed",
    value: 60,
    suffix: "+",
    color: "from-purple-400 to-pink-400",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function StatsSection() {
  return (
    <>
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollTriggeredAnimation animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                Impact by{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-xl bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent max-w-2xl mx-auto">
              Measurable results that drive business success
            </p>
          </ScrollTriggeredAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <ScrollTriggeredAnimation key={index} animation="fadeUp" delay={index * 0.2}>
                  <motion.div whileHover={{ y: -10, scale: 1.02 }}>
                    <Card className="group relative bg-black/20 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-8 text-center relative z-10">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent mb-3">
                          <AnimatedCounter value={stat.value} />
                          {stat.suffix}
                        </div>
                        <p className="text-zinc-300 text-sm font-medium mb-1">{stat.label}</p>
                        {stat.sublabel && <p className="text-zinc-500 text-xs">{stat.sublabel}</p>}
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollTriggeredAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section transition */}
      <SectionTransition direction="down" color="purple" />
    </>
  )
}
