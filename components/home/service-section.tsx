"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; 

// Image URLs
const images = [
    "/images/services/injection.jpg",
    "/images/services/cannulation.jpg",
    "/images/services/fluid.jpg",
    "/images/services/dressing.jpg",
    "/images/services/bed.jpg",
    "/images/services/catheterization.jpg",
    "/images/services/Intubation.jpg",
    "/images/services/tubeFeeding.jpg",
    "/images/services/Tracheostomy.jpg",
    "/images/services/peg.jpg",
    "/images/services/dialysis1.jpg",
    "/images/services/comfort.jpg"
];

const services = [
    {
        title: "Injection Administration",
        description: "Safe and sterile injection procedures by certified nursesProfessional and hygienic injection administration by certified nurses, ensuring safe, sterile, and painless procedures in the comfort of your home.",
        image: images[0],
        isDark: true
    },
    {
        title: "IV Cannulation",
        description: "Expert IV cannulation performed by trained nurses, ensuring safe vein access for fluids and medications with minimal discomfort.",
        image: images[1],
        isDark: false
    },
    {
        title: "IV Fluid Administration",
        description: "Safe and accurate IV fluid administration by qualified nurses to restore hydration, balance electrolytes, and support recovery.",
        image: images[2],
        isDark: true
    },
    {
        title: "Wound & Diabetic Wound Dressing",
        description: "Expert wound management and diabetic wound care with sterile dressing techniques to support faster healing and reduce complications.",
        image: images[3],
        isDark: false
    },
    {
        title: "Bed Sore Care",
        description: "Specialized wound care and monitoring to promote healing, prevent infection, and provide comfort for patients with bed sores.",
        image: images[4],
        isDark: true
    },
    {
        title: "Catheterization",
        description: "Safe and hygienic catheter insertion and care by trained professionals to ensure comfort and prevent infections.",
        image: images[5],
        isDark: false
    },
    {
        title: "Nasogastric Intubation",
        description: "Professional NG tube insertion and feeding support to ensure safe nutrition delivery and patient comfort.",
        image: images[6],
        isDark: true
    },
    {
        title: "Ryle's Tube Feeding",
        description: "Safe and hygienic nutritional support through Ryle's tube insertion and care, ensuring proper nourishment and patient safety.",
        image: images[7],
        isDark: false
    },
    {
        title: "Tracheostomy Care",
        description: "Specialized tracheostomy tube care including cleaning, suctioning, and monitoring to ensure airway safety and comfort.",
        image: images[8],
        isDark: true
    },
    {
        title: "PEG Care",
        description: "Comprehensive care for percutaneous endoscopic gastrostomy (PEG) feeding tubes, ensuring proper hygiene, safe feeding, and patient comfort.",
        image: images[9],
        isDark: false
    },
    {
        title: "Peritoneal Dialysis",
        description: "Safe and professional assistance with home-based peritoneal dialysis, ensuring proper technique, infection prevention, and patient comfort.",
        image: images[10],
        isDark: true
    },
    {
        title: "Home Comfort",
        description: "Personalized healthcare services delivered in the comfort and safety of your own home.",
        image: images[11],
        isDark: false
    }
];


const ServiceCard = ({ title, description, image, isDark = false, index }: {
    title: string;
    description: string;
    image: string;
    isDark?: boolean;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={cn(
                "group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
                "min-h-[280px] flex flex-col"
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-300",
                        isDark
                            ? "bg-[rgba(2,6,82,0.75)] group-hover:bg-[rgba(37,99,235,0.65)]"
                            : "bg-[rgba(255,255,255,0.85)] group-hover:bg-[rgba(255,255,255,0.75)]"
                    )}

                />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-center text-center">
                <motion.h3
                    className={cn(
                        "text-xl font-bold mb-3 transition-colors duration-300",
                        isDark ? "text-white" : "text-[#020652]"
                    )}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h3>
                <p
                    className={cn(
                        "text-sm leading-relaxed transition-colors duration-300",
                        isDark ? "text-white/90" : "text-gray-600"
                    )}
                >
                    {description}
                </p>
            </div>

            {/* Hover Effect Border */}
            <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#010B8E]/20 rounded-xl transition-colors duration-300"
                whileHover={{ borderColor: "hsl(236, 95%, 16% / 0.3)" }} 
            />
        </motion.div>
    );
};

// Services Page
const ServicesPage = () => {
    return (
        <main id="services" className="py-16 px-4 bg-gray-100">
            <div className="max-w-[80rem] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        className="relative inline-block text-5xl font-bold text-[#001055] mb-4 group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our Medical Services
                        {/* underline */}
                        <span className="absolute left-0 -bottom-4 w-1/2 h-[4.5px] bg-[#041558] rounded-2xl transition-all duration-500 group-hover:w-full"></span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-500 max-w-3xl mx-auto mt-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Comprehensive nursing care services delivered by certified professionals in the comfort of your home.
                    </motion.p>
                </motion.div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={`${service.title}-${index}`}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            isDark={service.isDark}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ServicesPage;
