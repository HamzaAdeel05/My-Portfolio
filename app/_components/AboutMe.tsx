import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {

    const fadeUp:any = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const hoverLift:any = {
        whileHover: {
            y: -8,
            transition: { duration: 0.3 }
        }
    }

    return (
        <div id='About' className='px-5'>
            <div className="flex justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=' mb-20 text-5xl md:text-7xl font-extrabold'
                >
                    About me
                </motion.h2>
            </div>
            

            <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

                {/* About Section */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    {...hoverLift}
                    className="grid grid-cols-3 border bg-neutral-900 p-10 rounded-2xl"
                >
                    <div className="space-y-8 col-span-2">
                        <h2 className='text-4xl font-bold'>
                            Crafting scalable and performant web applications.
                        </h2>
                        <p className='text-xl text-neutral-400'>
                            Frontend Developer with strong expertise in React, Next.js, and modern web technologies.
                            Focused on clean architecture, performance optimization, and seamless user experiences.
                        </p>
                    </div>

                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="https://res.cloudinary.com/ds5xe7ojy/image/upload/v1771489413/me_thinking_xc0bzp.png"
                        alt="Hamza"
                        className="rounded-xl"
                    />
                </motion.div>

                {/* Education */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    {...hoverLift}
                    className="space-y-8 border bg-neutral-900 p-10 rounded-2xl"
                >
                    <h2 className='text-4xl font-bold'>Education and growth</h2>

                    <div className="space-y-10 border-l border-neutral-700 ml-4">
                        {[
                            {
                                title: "Virtual University",
                                desc: "Pursuing Bachelor of Science in Computer Science",
                                color: "bg-sky-500"
                            },
                            {
                                title: "Bahria University",
                                desc: "Completed Foundation Coursework (Two Semesters)",
                                color: "bg-neutral-500"
                            },
                            {
                                title: "Roots International College",
                                desc: "Intermediate in Computer Science (ICS)",
                                color: "bg-neutral-500"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <div className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${item.color}`} />
                                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                                <p className="text-neutral-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    {...hoverLift}
                    className="flex border bg-neutral-900 p-10 rounded-2xl"
                >
                    <div className="space-y-8">
                        <h2 className='text-4xl font-bold'>My Experience Timeline</h2>

                        <div className="relative border-l border-zinc-700 ml-3 space-y-6">

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <div className="absolute -left-[5.5px] top-6 h-2.5 w-2.5 rounded-full bg-neutral-300" />
                                <div className="rounded-xl p-6 space-y-3">
                                    <h3 className="text-xl font-bold">
                                        Multi-Month Full-Stack Internship
                                    </h3>
                                    <ul className="space-y-3  text-zinc-300 list-disc ml-4 marker:text-teal-500">
                                        <li>Built responsive UI components using React & modern frameworks.</li>
                                        <li>Developed backend CRUD APIs with NestJS.</li>
                                        <li>Worked with MongoDB & Cloudinary.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative pl-8"
                            >
                                <div className="absolute -left-[5.5px] top-6 h-2.5 w-2.2 rounded-full bg-neutral-300" />
                                <div className="rounded-xl p-6">
                                    <h3 className="text-xl font-medium mb-4">
                                        2-Week Internship at Bellway
                                    </h3>
                                    <ul className="space-y-3  text-zinc-300 list-disc ml-4 marker:text-sky-500">
                                        <li>Maintained and managed analytics data records.</li>
                                    </ul>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

                {/* Beyond the Code */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    {...hoverLift}
                    className="space-y-8 border bg-neutral-900 p-10 rounded-2xl"
                >
                    <h2 className='text-4xl font-bold'>Beyond the code</h2>

                    <div className="space-y-10  border-l border-neutral-700 ml-4">
                        {[
                            "Founder of oldmoneythrifts.pk",
                            "Managed Ryfa Olympics (2023–2024)",
                            "Recognized as High Achiever",
                            "Competitive badminton training"
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-300" />
                                <h2 className=" font-semibold text-white ">
                                    {text}
                                </h2>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default AboutMe