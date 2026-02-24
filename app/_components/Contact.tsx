import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

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

    return (
        <div className=' max-w-7xl mx-auto space-y-6 pb-10 px-5'>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='font-bold text-5xl'
            >
                Let's Connect
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-5">

                {/* Main Contact Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="col-span-3 border rounded-2xl px-5 py-10 bg-neutral-900 transition-all"
                >
                    <div className="grid grid-cols-3 justify-center items-center">

                        <div className="space-y-6 col-span-2">
                            <h2 className='text-4xl font-bold'>
                                Got a Project? Let's Build Something Great Together
                            </h2>

                            <p className='text-sm text-neutral-300'>
                                I'm currently pursuing BS and open to freelance opportunities and new collaborations.
                            </p>

                            <div
                            >
                                <Button className='bg-linear-to-r cursor-pointer rounded-full from-blue-500 py-6 text-xl to-blue-700'>
                                    Get in Touch <Mail className="ml-2" />
                                </Button>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="border px-5 py-6 h-fit rounded-2xl md:flex hidden items-center gap-5"
                        >
                            <div className="rounded-full w-fit">
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <Image
                                        alt='Me'
                                        width={50}
                                        height={50}
                                        src='https://res.cloudinary.com/ds5xe7ojy/image/upload/v1771245612/Gemini_Generated_Image_a8gp2ea8gp2ea8gp_i4dufz.png'
                                        className='rounded-full'
                                    />
                                </motion.div>
                            </div>

                            <div>
                                <h2 className='text-xl font-semibold'>Hamza Adeel</h2>
                                <p className='text-sm text-neutral-300'>
                                    Full Stack | Next.js & React
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

                {/* Side Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ delay: 0.2 }}
                    className="border rounded-2xl bg-neutral-900 p-5 space-y-4"
                >
                    <h2 className='font-bold text-xl '>My latest updates</h2>
                    <ul className='list-disc px-5 text-sm space-y-4 text-neutral-400'>
                        <li className=''>Working on More Full-stack Web projects.</li>
                        <li className=''>Working on Mobile Application<span className='font-bold'> (React Native)</span></li>
                    </ul>
                </motion.div>

            </div>
        </div>
    )
}

export default Contact