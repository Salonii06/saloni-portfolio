"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700 bg-slate-900/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Salonii06"
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
           
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-slate-400">© {currentYear} Frontend React Developer. All rights reserved.</p>
            <p className="text-slate-500 text-sm">Designed & Built with React.js and Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
