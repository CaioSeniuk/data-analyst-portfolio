"use client"

import { useState } from "react"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"

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
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>

          {/* SECTION DESCRIPTION - SMALLER FONT */}
          {/* CUSTOMIZABLE: Update description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your project
          </p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        {/* RESPONSIVE: Stack on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT COLUMN - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* CONTACT INTRO - SMALLER FONT */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Let's Start a Conversation</h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Whether you need data analysis, business intelligence solutions, or machine learning implementations,
                I'm here to help turn your data challenges into opportunities.
              </p>
            </div>

            {/* CONTACT METHODS - SMALLER FONT */}
            {/* CUSTOMIZABLE: Update contact information */}
            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Email</p>
                  <p className="text-zinc-400 text-xs sm:text-sm">caio.seniuk@email.com</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Phone</p>
                  <p className="text-zinc-400 text-xs sm:text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Location</p>
                  <p className="text-zinc-400 text-xs sm:text-sm">Remote / Global</p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS - SMALLER FONT */}
            {/* CUSTOMIZABLE: Update social media links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
              <div className="flex gap-4">
                {/* LINKEDIN */}
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://linkedin.com/in/caioseniuk", "_blank")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>

                {/* GITHUB */}
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://github.com/caioseniuk", "_blank")}
                >
                  <Github className="w-4 h-4" />
                </Button>

                {/* TWITTER */}
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://twitter.com/caioseniuk", "_blank")}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* FORM CONTAINER */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 lg:p-8">
              {/* FORM HEADER - SMALLER FONT */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Send Me a Message</h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Fill out the form below and I'll get back to you within 24 hours
                </p>
              </div>

              {/* CONTACT FORM - SMALLER FONT */}
              {/* CUSTOMIZABLE: Add form validation and submission logic */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME AND EMAIL ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500 focus:ring-orange-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500 focus:ring-orange-500 text-sm"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500 focus:ring-orange-500 text-sm"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or data analysis needs..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500 focus:ring-orange-500 resize-none text-sm"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 transition-all duration-300 py-6 text-base group"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2 group-hover:translate-x-1 transition-transform"
                    />
                  ) : (
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
