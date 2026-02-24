"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Bg from "../Image/bg_skills.png"

const Skills = () => {
 const skills = [
  { id: 1, name: "React.js", category: "Frontend Mastery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" },
  { id: 2, name: "Next.js", category: "Backend & Logic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQOECl-WuoW-QRiiCFnWzdYmQU3zmb9J2IA&s" },
  { id: 3, name: "JavaScript", category: "Frontend Mastery", image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
  { id: 4, name: "Node.js", category: "Backend & Logic", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { id: 5, name: "NestJS", category: "Backend & Logic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAhOlc5mfP52_Oi0uOKGgHniRqaQFBWsePg&s" },
  { id: 6, name: "C / C++", category: "Analytical Core", image: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" },
  { id: 7, name: "OOP", category: "Analytical Core", image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png" },
  { id: 8, name: "MongoDB", category: "Database & Cloud", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { id: 9, name: "Tailwind CSS", category: "Design & Tools", image: "https://images.seeklogo.com/logo-png/43/1/tailwind-css-logo-png_seeklogo-434090.png" },
  { id: 10, name: "Photoshop", category: "Design & Tools", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
  { id: 11, name: "Cloudinary", category: "Cloud & Media", image: "https://cloudinary-res.cloudinary.com/image/upload/website/cloudinary_web_favicon.png" },
  { id: 12, name: "TypeScript", category: "Language", image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" }
]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  }

  const cardVariants:any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <div className="relative text-white p-8 flex flex-col items-center font-sans">
      {/* <div className="absoute">
        <Image src={Bg} fill alt="Bg" className="object-cover"/>
      </div> */}
      <div className="w-full max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 ml-4"
        >
          My Skills & Technologies
        </motion.h2>

        <div className="rounded-[40px] border border-white/10 p-8 md:p-12 bg-[#121212]/90">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="group relative flex items-center gap-4 p-5 rounded-2xl bg-[#1c1c1c]/60 border border-white/5 hover:bg-[#252525]/80 will-change-transform"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain transition duration-300"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Skills