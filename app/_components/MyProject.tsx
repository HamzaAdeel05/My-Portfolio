import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Projects } from '@/Files/data'
import { motion } from 'framer-motion'

const MyProject = () => {

    const container:any = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

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
        <div className='max-w-7xl mx-auto space-y-8 px-5'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className='text-3xl font-bold'>My Creative Work</h2>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid px-5 lg:grid-cols-2 gap-10"
            >
                {Projects.map((p) => (

                    <motion.div
                        key={p.id}
                        variants={fadeUp}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                    >
                        <div className="relative border border-neutral-600 p-3 rounded-2xl overflow-hidden">

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="relative h-120"
                            >
                                <Image
                                    alt={p.title}
                                    fill
                                    className='w-full rounded-2xl object-cover'
                                    src={p.bannerImage}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute pb-5 bottom-0 left-0 right-0 space-y-4 rounded-b-2xl backdrop-blur-sm w-full bg-black/40 px-5 py-2 transition-all duration-300"
                            >
                                <h2 className='text-xl font-bold'>{p.title}</h2>

                                <div className="flex flex-wrap gap-3">


                                                            {p.tech.next && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-blue-800 rounded-xl">
                                                                    NextJS
                                                                </span>
                                                            )}
                                                            {p.tech.tailwind && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-cyan-500 rounded-xl">
                                                                    Tailwind
                                                                </span>
                                                            )}

                                                            {p.tech.nest && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-red-600 rounded-xl">
                                                                    NestJS
                                                                </span>
                                                            )}
                                                            {p.tech.typescript && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-blue-600 rounded-xl">
                                                                    Typescript
                                                                </span>
                                                            )}

                                                            {p.tech.stripe && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-yellow-600 rounded-xl">
                                                                    Stripe API
                                                                </span>
                                                            )}

                                                            {p.tech.mongo && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-green-600 rounded-xl">
                                                                    MongoDB
                                                                </span>
                                                            )}

                                                            {p.tech.cloudinary && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-purple-600 rounded-xl">
                                                                    Cloudinary
                                                                </span>
                                                            )}
                                                        </div>

                                <div className="flex gap-2">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                        <Button variant={'secondary'}>
                                            Live Demo
                                        </Button>
                                    </motion.div>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                                <Button variant={'ghost'}>
                                                    View Details
                                                </Button>
                                            </motion.div>
                                        </DialogTrigger>

                                        <DialogContent className="sm:max-w-6xl overflow-x-auto text-white bg-neutral-900 border">

                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="space-y-6"
                                            >
                                                <h2 className='font-bold text-2xl'>{p.title}</h2>

                                                <div className="grid grid-cols-2 gap-5">
                                                    <div>
                                                        <Carousel className="relative w-xs sm:w-lg">
                                                            <CarouselContent>
                                                                {p.images.map((I, index) => (
                                                                    <CarouselItem key={index}>
                                                                        <Card className='bg-neutral-950 border-neutral-600 p-0'>
                                                                            <CardContent className="flex items-center justify-center py-5">
                                                                                <Image
                                                                                    alt='project'
                                                                                    src={I}
                                                                                    width={500}
                                                                                    height={300}
                                                                                    className='object-cover rounded-lg'
                                                                                />
                                                                            </CardContent>
                                                                        </Card>
                                                                    </CarouselItem>
                                                                ))}
                                                            </CarouselContent>
                                                            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black border-none" />
                                                            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black border-none" />
                                                        </Carousel>

                                                        <h2 className='font-bold text-xl my-5'>Technologies</h2>
                                                        <div className="flex flex-wrap gap-3">


                                                            {p.tech.next && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-blue-800 rounded-xl">
                                                                    NextJS
                                                                </span>
                                                            )}
                                                            {p.tech.tailwind && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-cyan-500 rounded-xl">
                                                                    Tailwind
                                                                </span>
                                                            )}

                                                            {p.tech.nest && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-red-600 rounded-xl">
                                                                    NestJS
                                                                </span>
                                                            )}
                                                            {p.tech.typescript && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-blue-600 rounded-xl">
                                                                    Typescript
                                                                </span>
                                                            )}

                                                            {p.tech.stripe && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-yellow-600 rounded-xl">
                                                                    Stripe API
                                                                </span>
                                                            )}

                                                            {p.tech.mongo && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-green-600 rounded-xl">
                                                                    MongoDB
                                                                </span>
                                                            )}

                                                            {p.tech.cloudinary && (
                                                                <span className="px-3 py-1 text-[13px] font-bold text-white bg-purple-600 rounded-xl">
                                                                    Cloudinary
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="space-y-6">
                                                        <h2 className='text-2xl font-bold'>Details</h2>
                                                        <p className='font-sans text-neutral-300'>
                                                            {p.description}
                                                        </p>
                                                        <Button variant={'secondary'}>
                                                            Live Demo
                                                        </Button>
                                                    </div>
                                                </div>
                                            </motion.div>

                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default MyProject