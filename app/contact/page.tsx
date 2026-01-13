"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { Footer } from "@/components/sections/footer"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "salonis833129@gmail.com",
      href: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9167885997",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Room No.1511,Ratna Mahal Tower,M.L Camp, Mahim east,Mumbai-400019",
      href: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "salonii_2910",
      href: "https://www.instagram.com/salonii_2910?igsh=MWl5OGViZXZmdGwzNw==",
    },
  ]

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
    <main className="min-h-screen pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">Get In Touch</h1>
            <p className="text-xl text-slate-400">Feel free to reach out to me through any of the channels below.</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.href}
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                      <p className="text-slate-300 text-lg group-hover:text-blue-400 transition-colors">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-slate-700 rounded-lg p-8 text-center space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
            <p className="text-slate-400 leading-relaxed">
              Whether you have a project idea, a job opportunity, or just want to say hello, feel free to reach out! I'm
              always open to discussing interesting projects and collaborations.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
