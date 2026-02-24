"use client"

import React from "react"
import file from "../Image/file.svg"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

const Banner = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "#Projects" },
    { name: "About", href: "#About" },
    { name: "Contacts", href: "#Contact" },
    { name: "Instagram", href: "https://www.instagram.com/hamxa_sheix/?utm_source=ig_web_button_share_sheet", icon: <FaInstagram size={25} /> },
    { name: "Github", href: "https://github.com/HamzaAdeel05?tab=repositories", icon: <FaGithub size={25} /> },
    { name: "Linkedin", href: "https://www.linkedin.com/in/hamza-adeel-15632a365/", icon: <CiLinkedin size={25} /> },
  ]

  const containerVariants:any = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants:any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={file}
        alt="Background Image"
        fill
        priority
        className="object-cover "
      />

      <div className="absolute inset-0 text-white max-w-7xl mx-auto z-10">
        
        {/* Navbar */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-10 py-7 relative z-50"
        >
          <Menu className="md:hidden" />

          <div className="hidden md:flex justify-end gap-7 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className=""

              >
                <Link
                  href={link.href}
                  className="hover:text-black text-sm lg:text-xl w-full font-medium hover:bg-neutral-300 py-2 rounded-2xl px-2 transition-colors"
                >
                  {link.icon ? link.icon : link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="absolute inset-0 max-w-7xl mx-auto flex justify-center px-10 py-7">
          <div className="lg:grid flex lg:grid-cols-3 px-5 items-center justify-center">

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 lg:text-left text-center"
            >
              <motion.h4 variants={itemVariants} className="font-medium text-2xl">
                Hi, I'm Hamza,
              </motion.h4>

              <motion.h2
                variants={itemVariants}
                className="font-bold text-5xl lg:text-6xl"
              >
                I'M A FULL-STACK DEVELOPER
              </motion.h2>

              <motion.p variants={itemVariants} className="text-neutral-300">
                I build modern, scalable web applications using Next.js and NestJS, combining clean backend architecture with polished, production-ready user interfaces.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Link className="underline font-bold text-xl" href="#Projects">
                  View My Projects
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="col-span-2 flex justify-center"
            >
              <img
                className="h-full w-100 hidden lg:block border-b border-neutral-400"
                src="https://res.cloudinary.com/ds5xe7ojy/image/upload/v1771245854/Bg_removed_me_eq9pu9.png"
                alt="Hamza"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner