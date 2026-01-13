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
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </motion.h2>

          {/* About Info - ONLY TEXT */}
          <motion.div variants={itemVariants} className="space-y-4 text-lg text-slate-300 leading-relaxed">
            <p>
              I'm a dedicated Frontend Developer specializing in React.js. I craft modern, responsive, and
              performant web applications that deliver exceptional user experiences.
            </p>
            <p>
              With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I build pixel-perfect interfaces. I'm
              passionate about writing clean code, solving complex problems, and staying up-to-date with the latest
              web technologies.
            </p>
            <p>
              My work philosophy emphasizes user-centric design, clean code practices, performance optimization, and
              accessibility.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
