"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, User, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const mailtoLink = `mailto:caiohseniuk@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Let's Work{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>
          <p className="text-xl bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how I can help drive your business
            forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm shadow-xl relative overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="text-center pb-6 relative z-10">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Mail className="w-6 h-6 text-orange-500" />
                </motion.div>
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 relative z-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-zinc-400 text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 border-zinc-600/50 text-white placeholder:text-zinc-500 focus:border-orange-500/50 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-orange-500/20"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-zinc-400 text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 border-zinc-600/50 text-white placeholder:text-zinc-500 focus:border-orange-500/50 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-orange-500/20"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="text-zinc-400 text-sm font-medium">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 border-zinc-600/50 text-white placeholder:text-zinc-500 focus:border-orange-500/50 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-orange-500/20"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="text-zinc-400 text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      required
                      className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 border-zinc-600/50 text-white placeholder:text-zinc-500 focus:border-orange-500/50 resize-none backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-orange-500/20"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-semibold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              ) : (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              )}

              <div className="mt-8 pt-8 border-t border-zinc-700/50 text-center">
                <p className="text-zinc-500 text-sm">
                  Or reach me directly at{" "}
                  <motion.a
                    href="mailto:caiohseniuk@gmail.com"
                    className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hover:from-orange-300 hover:to-orange-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    caiohseniuk@gmail.com
                  </motion.a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
