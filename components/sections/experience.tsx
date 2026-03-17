"use client"

import { motion } from "framer-motion"

const experience = [
  {
    period: "2026 - Present",
    role: "Senior Full Stack Developer",
    company: "Trivinsai Digital Solutions",
    description:
      "Creating visually engaging, responsive websites with strong focus on UI/UX, animations, and modern frontend design practices for business clients.",
  },
  {
    period: "2024 - 2025",
    role: "Senior Visual Developer",
    company: "Trivinsai Digital Solutions",
    description:
      "Developed and maintained React-based frontend applications, implemented reusable components, optimized performance, and delivered client-focused web solutions.",
  },
]


export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white text-center">
            Experience 
          </motion.h2>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l border-slate-700 hover:border-blue-600 transition-colors pb-8 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900" />

                <div className="space-y-2">
                  <span className="text-sm text-blue-400 font-semibold">{item.period}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{item.role}</h3>
                  <p className="text-lg text-slate-400">{item.company}</p>
                  <p className="text-slate-400 leading-relaxed pt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
