"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TechStackSection from "@/components/tech-stack-section"
import StatsSection from "@/components/stats-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ScrollToTop from "@/components/scroll-to-top"
import ReadingProgress from "@/components/reading-progress"
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper"
import UnifiedBackground from "@/components/unified-background"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <SmoothScrollWrapper>
      <div className="min-h-screen relative">
        {/* Unified background for entire site */}
        <UnifiedBackground />

        {/* Content with relative positioning */}
        <div className="relative z-10">
          <ReadingProgress />
          <Header scrollY={scrollY} scrollProgress={scrollProgress} />
          <ScrollProgress sections={["home", "skills", "projects", "about", "contact"]} />
          <main>
            <HeroSection />
            <TechStackSection />
            <StatsSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </SmoothScrollWrapper>
  )
}
