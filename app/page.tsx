"use client"

import { HeroSection } from "@/components/sections/hero"
import AboutPage from "./about/page"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import ContactPage from "./contact/page"
import { Footer } from "react-day-picker"


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <AboutPage />

      <ProjectsSection />

      <ExperienceSection />

      <ContactPage />
      

      
    </main>
  )
}
