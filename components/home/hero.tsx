"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Stethoscope, User, Ambulance } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
    const trustIndicator = [
        { icon: Stethoscope, title: "Certified Nurses", value: "500+", color: "from-blue-800 to-blue-900" },
        { icon: User, title: "Patients Served", value: "10k+", color: "from-blue-800 to-blue-900" },
        { icon: Ambulance, title: "Emergency Care", value: "24/7", color: "from-blue-800 to-blue-900" },
    ];

    return (
        <section className="relative py-24 lg:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden mt-24 lg:mt-18">
            <div className="container mx-auto px-6 lg:px-12"> {/* Increased left/right margin */}
                {/* Main grid: left text + right image */}
                <div className="grid lg:grid-cols-2 gap-16 items-stretch relative">

                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex flex-col justify-between"
                    >
                        {/* Floating heart icon */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                        >
                            <Stethoscope className="w-8 h-8 text-[#001055]" />
                        </motion.div>

                        {/* Text + Buttons */}
                        <div className="flex flex-col gap-6 relative z-10">
                            <motion.h1
                                className="text-4xl lg:text-6xl font-bold text-[#001055] leading-tight mb-2"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Hospital-Grade Care, <span className="text-[#E10C06]">Right at Your Home</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 leading-relaxed mb-3.5"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Our certified nurses provide comprehensive medical support for your loved ones in the comfort of your home.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-[#001055] hover:bg-[#001055]/90 text-white px-8 py-3 text-lg"
                                >
                                    Book Home Care
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-[#001055] text-[#001055] hover:bg-[#001055] hover:text-white px-8 py-3 text-lg bg-transparent"
                                >
                                    Talk to Our Experts
                                </Button>
                            </motion.div>
                        </div>

                        {/* Professional Nurse Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full sm:w-80 lg:w-full mt-6 relative z-10"
                        >
                            <div className="relative bg-gradient-to-br from-[#001055] to-[#001d88] rounded-3xl p-6 shadow-lg h-full">
                                <div className="bg-white rounded-xl p-6 space-y-2">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#001055] rounded-full flex items-center justify-center">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#001055]">Government Certified Nurse & Medical Caretaker</h3>
                                            <p className="text-gray-500 text-sm">On the way to your home</p>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 bg-[#E10C06] text-white px-3 py-1 rounded-full text-sm font-medium pulse-medical"
                                >
                                    24/7 Available
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-between h-full"
                    >
                        {/* Main nurse image */}
                        <div className="relative w-full h-80 lg:h-[22rem] rounded-xl overflow-hidden">
                            <img
                                src="/images/img.png"
                                alt="Professional home healthcare nurse"
                                className="h-full w-full object-cover rounded-xl shadow-sm"
                            />
                        </div>

                        {/* Trust indicators below image */}
                        <div className="grid sm:grid-cols-3 gap-6 mt-6">
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
                                    <Card className="p-6 h-full border-2 border-transparent hover:border-blue-200 transition-all duration-500 hover:shadow-sm bg-gradient-to-br from-white to-gray-50 group-hover:from-blue-50 group-hover:to-teal-50">
                                        <CardContent className="p-0 flex flex-col items-center text-center">
                                            <motion.div
                                                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <item.icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}</div>
                                            <h3 className="font-semibold text-gray-600">{item.title}</h3>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
