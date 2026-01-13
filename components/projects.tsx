"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product browsing, cart management, and checkout functionality.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task management application with drag-and-drop functionality and team features.",
    tech: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application with real-time data, location services, and detailed forecasts.",
    tech: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcase with smooth animations and optimized performance.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "SEO"],
    demo: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white text-center">
            Featured Projects
          </motion.h2>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-600 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300" />

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-600/10 text-blue-400 text-sm rounded-full border border-blue-600/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
