"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Nitin Readymade",
    description:
      "E-commerce and business showcase website for a readymade garments brand, built with a modern React-based UI and responsive design.",
    image: "nitin.png",
    link: "https://www.nitinreadymade.com",
  },
  {
    title: "Smilex",
    description:
      "Professional corporate website for Smilex, designed to present products, services, and brand information with a clean and user-friendly interface.",
    image: "smilex.png",
    link: "https://www.smilex.net.in/",
  },
  {
    title: "SSESM",
    description:
      "Informational and institutional website for an educational or social organization, providing details about activities, objectives, and updates.",
    image: "ssesm.png",
    link: "https://www.ssesm.org.in",
  },
  {
    title: "Paper Board",
    description:
      "Business website for a paper board and packaging solutions company, highlighting products, services, and company profile with a structured layout.",
    image: "paperboard.png",
    link: "https://www.paperboard.net.in/",
  },
]


export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white text-center"
          >
            My Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-600 transition-all"
              >
                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition pt-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
