"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Package } from "lucide-react"

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Tools & Libraries",
    icon: Package,
    items: ["Framer Motion", "Webpack", "Git", "npm/yarn"],
  },
  {
    category: "Soft Skills",
    icon: Zap,
    items: ["Problem Solving", "Communication", "Collaboration", "Adaptability"],
  },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white text-center">
            Skills & Expertise
          </motion.h2>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="text-slate-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
