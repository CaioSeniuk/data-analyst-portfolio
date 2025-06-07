"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Python", level: 95, color: "from-yellow-400 to-blue-500" },
  { name: "SQL", level: 92, color: "from-blue-400 to-cyan-400" },
  { name: "Power BI", level: 88, color: "from-yellow-400 to-orange-500" },
  { name: "Machine Learning", level: 85, color: "from-purple-400 to-pink-400" },
  { name: "Data Visualization", level: 90, color: "from-green-400 to-emerald-500" },
  { name: "Statistical Analysis", level: 93, color: "from-orange-400 to-red-500" },
]

export default function SkillsProgress() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Skill{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
        </motion.div>

        <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-zinc-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
