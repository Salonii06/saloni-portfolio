"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0e172a] to-[#05070f] flex items-center">
      
      {/* Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]" />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-[20%] top-[25%] w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-lg rounded-xl shadow-2xl rotate-12"
      />

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-[30%] top-[45%] w-52 h-52 bg-gradient-to-br from-orange-500/30 to-yellow-500/20 backdrop-blur-lg rounded-xl shadow-2xl -rotate-6"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight"
        >
          YOUR NAME
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl"
        >
          Frontend React Developer crafting modern, animated and
          performance-focused web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex gap-6 justify-center md:justify-start"
        >
          <Link
            href="/work"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            View Work
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl border border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 text-sm"
      >
        ↓ scroll
      </motion.div>
    </section>
  )
}
