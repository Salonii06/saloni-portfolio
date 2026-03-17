"use client"

import { motion } from "framer-motion"

export function AboutSection() {
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="flex gap-8 items-start">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex-shrink-0" />
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a dedicated Full Stack Developer specializing in React.js. I craft modern, responsive, and performant
                web applications that deliver exceptional user experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I build pixel-perfect interfaces. I'm
                passionate about writing clean code, solving complex problems, and staying up-to-date with the latest
                web technologies.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Specialization</h3>
              <p className="text-slate-400">
                Frontend Development with React.js, focusing on component architecture and responsive design.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Approach</h3>
              <p className="text-slate-400">
                User-centric design with clean code practices, performance optimization, and accessibility best
                practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
