"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
            <p className="text-xl text-slate-400">Have a project or idea? I'd love to hear from you!</p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-800/50 border border-slate-700 rounded-lg p-8"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </motion.button>
          </motion.form>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Twitter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
