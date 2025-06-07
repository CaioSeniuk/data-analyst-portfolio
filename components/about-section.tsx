"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Database, Brain, TrendingUp, Download } from "lucide-react"

export default function AboutSection() {
  const achievements = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Creating comprehensive dashboards and reports that transform raw data into strategic business insights.",
    },
    {
      icon: Database,
      title: "Data Processing",
      description:
        "Expert in data cleaning, transformation, and analysis using Python, SQL, and advanced statistical methods.",
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description:
        "Developing machine learning models and predictive algorithms to forecast trends and identify opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Analyzing business metrics and KPIs to identify areas for improvement and growth optimization.",
    },
  ]

  const handleResumeDownload = () => {
    // Create a temporary link to download resume
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your resume file to the public folder
    link.download = "Caio_Seniuk_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              About{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent max-w-3xl mx-auto leading-relaxed">
            As a Data Analyst, I specialize in transforming complex datasets into actionable business strategies. My
            expertise lies in leveraging automation systems, IoT sensors, and real-time data collection to optimize
            operational efficiency. I focus on predictive analytics, anomaly detection, and data-driven decision making
            to enhance system performance and deliver measurable business outcomes through advanced statistical modeling
            and machine learning algorithms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 overflow-hidden shadow-lg backdrop-blur-sm">
              {/* Placeholder for photo */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-orange-600/5">
                <span className="text-lg bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Your photo here
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">Core </span>
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Competencies
                  </span>
                </h3>
                <ul className="space-y-4 text-zinc-400 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <span>Statistical analysis and hypothesis testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <span>Data visualization and dashboard creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <span>Machine learning and predictive modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <span>Business intelligence and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <span>Database design and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <span>A/B testing and performance analysis</span>
                  </li>
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent font-semibold text-lg mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
