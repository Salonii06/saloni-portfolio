"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
         

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                  {isActive && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
