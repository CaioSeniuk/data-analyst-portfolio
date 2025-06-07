"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Caio Seniuk</h3>
            <p className="text-zinc-500">Data Analyst & Business Intelligence Specialist</p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full"
              asChild
            >
              <a
                href="https://linkedin.com/in/CaioSeniuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full"
              asChild
            >
              <a
                href="https://github.com/CaioSeniuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full"
              asChild
            >
              <a href="mailto:caiohseniuk@gmail.com" aria-label="Send Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-zinc-900 text-center"
        >
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Caio Seniuk. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
