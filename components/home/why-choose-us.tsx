"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Heart, AlertTriangle, Award, Home } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock medical support and emergency response whenever you need it",
        stat: "Available 365 days",
        delay: 0.1
    },
    {
        icon: Award,
        title: "Government-Certified Nurses",
        description: "All our nurses are certified by recognized medical boards with extensive training",
        stat: "100% Certified Staff",
        delay: 0.2
    },
    {
        icon: Shield,
        title: "Infection-Control Protocols",
        description: "Strict adherence to medical safety standards and sterilization procedures",
        stat: "Hospital-grade Safety",
        delay: 0.3
    },
    {
        icon: AlertTriangle,
        title: "Emergency Response System",
        description: "Rapid response team for medical emergencies with direct hospital coordination",
        stat: "< 30 min Response",
        delay: 0.4
    },
    {
        icon: Heart,
        title: "Compassionate Care",
        description: "Patient-centered approach focusing on comfort, dignity, and emotional support",
        stat: "5-Star Care Rating",
        delay: 0.5
    },
    {
        icon: Home,
        title: "Home Comfort",
        description: "Receive professional medical care in the familiar comfort of your own home",
        stat: "Stress-free Environment",
        delay: 0.6
    }
];

const WhyChooseUsPage = () => {
    return (
        <main className="py-20 px-4 bg-gradient-to-br from-[#174F6F] to-[#4E80AB]">
            <div className="max-w-[80rem] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Why Choose Us?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Trusted healthcare professionals dedicated to providing exceptional home care services with compassion and expertise
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white/15 transition-all duration-300 border border-white/20"
                            >
                                <motion.div
                                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <IconComponent className="w-8 h-8 text-white" />
                                </motion.div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/95 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-white/80 mb-4 leading-relaxed">
                                    {feature.description}
                                </p>

                                <motion.div
                                    className="inline-flex items-center justify-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white border border-white/30"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {feature.stat}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Customer Satisfaction */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/15 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Customer Satisfaction</h3>
                        <motion.div
                            className="text-6xl font-bold text-white mb-2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            98.5%
                        </motion.div>
                        <p className="text-xl text-white/90 font-medium">Patient Satisfaction Rate</p>
                        <motion.div
                            className="w-32 h-1 bg-white/30 mx-auto mt-6 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: 128 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <motion.div
                                className="h-full bg-white rounded-full"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "98.5%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
};

export default WhyChooseUsPage;
