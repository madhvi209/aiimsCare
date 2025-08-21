"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        text: "AIIMS Care has been a blessing for our family. Their nurse, Sister Meera, provided exceptional care for my elderly mother during her recovery. The professionalism and compassion went beyond our expectations.",
        rating: 5,
        author: "Priya Sharma",
        role: "Daughter of patient",
        image: "/smiling-woman-dark-hair-headshot.png",
    },
    {
        text: "The team was incredibly supportive and attentive. They treated my father with so much kindness and respect. We felt completely reassured throughout the process.",
        rating: 5,
        author: "Rajiv Malhotra",
        role: "Son of patient",
        image: "/smiling-man-headshot.png",
    },
    {
        text: "We are grateful for the dedicated care provided. The nurses were always available, responsive, and compassionate. Truly made a difference in our lives.",
        rating: 5,
        author: "Anjali Verma",
        role: "Patient’s daughter",
        image: "/smiling-woman-headshot.png",
    },
]

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0)

    // Auto-slide every 7 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 7000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="testimonials" className="max-w-4xl mx-auto px-6 mb-10">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center text-[#020871] mb-6">
                What Our Families Say
            </h2>
            <p className="text-xl font-semibold text-gray-500 mb-10 text-center">
                Real experiences from families who trust us with their loved ones care

            </p>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Testimonial Card */}
                        <div className="bg-[#020871] rounded-3xl p-12 text-white">
                            <div className="max-w-2xl mx-auto text-center">
                                <p className="text-2xl leading-relaxed mb-8 px-8 inline-block">
                                    <span className="mr-2 inline-flex w-8 h-8 bg-[#0357AF] rotate-180 rounded-full items-center justify-center glow-primary align-middle">
                                        <Quote className="w-3 h-3 text-white" />
                                    </span>

                                    {testimonials[current].text}

                                    <span className="ml-2 inline-flex w-8 h-8 bg-[#0357AF] rounded-full items-center justify-center glow-primary align-middle">
                                        <Quote className="w-3 h-3 text-white " />
                                    </span>
                                </p>

                                {/* Star Rating */}
                                <div className="flex justify-center gap-1 mb-8">
                                    {[...Array(testimonials[current].rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-6 h-6 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/20">
                                        <img
                                            src={testimonials[current].image}
                                            alt={testimonials[current].author}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold">{testimonials[current].author}</h3>
                                        <p className="text-white/80">{testimonials[current].role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full transition ${i === current ? "bg-[#0357AF]" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
