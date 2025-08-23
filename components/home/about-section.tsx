// app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Stethoscope, User, Ambulance, Laugh, Star, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    const trustIndicator = [
        { icon: Laugh, title: "Happy Families", value: "500+", color: "from-blue-800 to-blue-900" },
        { icon: Stethoscope, title: "Certified Nurses", value: "100%", color: "from-blue-800 to-blue-900" },
        { icon: User, title: "Patients Served", value: "10k+", color: "from-blue-800 to-blue-900" },
        { icon: Ambulance, title: "Emergency Care", value: "24/7", color: "from-blue-800 to-blue-900" },
        { icon: Star, title: "Average Rating", value: "5+", color: "from-blue-800 to-blue-900" },
    ];

    const images = [
        "/images/patient/img2.jpeg",
        "/images/patient/img1.jpeg",
        "/images/patient/img3.jpeg",
        "/images/patient/img4.jpeg", 
        "/images/patient/img5.jpeg",
        "/images/patient/img6.jpeg",
        "/images/patient/img7.jpeg",
        "/images/patient/img8.jpeg",
    ];
    const details = [
        { label: "Corporate Identity Number (CIN)", value: "UB6904BR2025PTC077944" },
        { label: "Permanent Account Number (PAN)", value: "ABDCA4552A" },
        { label: "Tax Deduction and Collection Account Number (TAN)", value: "PTNA13099C" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // rotate every 7 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main>
            <section id="about" className="py-20 bg-secondary">
                <div className="max-w-[80rem] mx-auto">
                {/* <div className="max-w-7xl mx-auto px-6 lg:px-2"> */}
                    <div className="grid lg:grid-cols-2 items-center mx-4 sm:mx-4 md:mx-0">
                        {/* Left Half: Text + Corporate Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#001055] mb-6">
                                    About AIIMS Care
                                </h2>
                                <div className="space-y-6 text-gray-700 leading-relaxed text-xl">
                                    <p>
                                        At AIIMS Care, we believe that healthcare should be accessible, reliable, and compassionate.
                                        Our mission is to bridge the gap between patients and world-class medical expertise, bringing
                                        the trusted standards of AIIMS to your fingertips.
                                    </p>
                                    <p>
                                        We are dedicated to providing comprehensive healthcare services — from initial consultations
                                        and diagnosis to ongoing treatment and wellness support — all while ensuring that you and
                                        your loved ones receive the best possible care.
                                    </p>
                                    <p>
                                        Whether you need specialist consultations, lab tests, second opinions, or chronic care management,
                                        AIIMS Care is here to guide you every step of the way. Our approach combines cutting-edge medical
                                        technology with the personal touch of experienced doctors and healthcare professionals.
                                    </p>
                                </div>
                            </div>

                            {/* Corporate Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
                            >
                                <div className="relative bg-gradient-to-br from-[#001055] to-[#001d88] rounded-3xl p-4 sm:p-6 shadow-lg">
                                    <div className="bg-white rounded-xl p-4 sm:p-6 space-y-4">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                            <div className="w-10 h-10 bg-[#001055] rounded-full flex items-center justify-center mb-2 sm:mb-0">
                                                <Briefcase className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#001055] text-base sm:text-lg">
                                                    Corporate Details
                                                </h3>
                                                <p className="text-gray-500 text-xs sm:text-sm">Registered Information</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {details.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 rounded-lg shadow-sm"
                                                >
                                                    <span className="font-medium text-gray-700 text-sm sm:text-base">{item.label}</span>
                                                    <span className="text-gray-900 font-semibold mt-1 sm:mt-0 text-sm sm:text-base">
                                                        {item.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                  
                        {/* Right Half: Image Carousel with Thumbnails */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center space-y-4"
                        >
                            {/* Main Image */}
                            <motion.img
                                key={images[currentIndex]}
                                src={images[currentIndex]}
                                alt="Healthcare Main Image"
                                className="rounded-xl shadow-lg object-cover w-140 h-140"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            />

                            {/* Thumbnails */}
                            <div className="flex items-center gap-2 mt-2">
                                {images.slice(0, 2).map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Thumbnail ${idx}`}
                                        className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                    />
                                ))}

                                {images.length > 2 && (
                                    <div className="relative w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                                        +{images.length - 2}
                                    </div>
                                )}
                            </div>

                            {/* 24/7 Badge */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-primary text-white px-4 py-1 rounded-full font-medium"
                            >
                                24/7 Available
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* Trust Indicators: full-width below text + image */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {trustIndicator.map((item, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <Card className="p-8 h-full border-2 border-transparent hover:border-blue-200 transition-all duration-500 hover:shadow-sm bg-gradient-to-br from-white to-gray-50 group-hover:from-blue-50 group-hover:to-teal-50">
                                    <CardContent className="p-0 flex flex-col items-center text-center">
                                        <motion.div
                                            className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <item.icon className="w-10 h-10 text-white" />
                                        </motion.div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                                        <h3 className="font-semibold text-gray-600">{item.title}</h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}
