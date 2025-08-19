"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"


const Footer = () => {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#about" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#careers" }
    ]

    const services = [
        "Injection Administration",
        "IV Cannulation & Therapy",
        "Wound & Diabetic Care",
        "Catheterization",
        "Tracheostomy Care",
        "Emergency Support"
    ]

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" }
    ]

    return (
        <footer className="bg-[#001055] text-primary-foreground">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div>
                                <h3 className="text-2xl text-[#fff] font-bold">AIIMS Care</h3>
                                <p className="text-xl text-gray-400 opacity-90">Hospital-Grade Home Care</p>
                            </div>
                        </div>
                        <p className="text-xl opacity-90 text-[#fff] leading-relaxed">
                            Bringing world-class medical care to your home. Our certified nurses and advanced medical
                            services ensure your family receives the best possible healthcare in the comfort of your home.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-12 h-14 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-[#fff] hover:text-gray-500 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl text-[#fff] font-semibold">Quick Links</h3>
                        <ul className="space-y-3 text-[#fff]">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-xl opacity-90 hover:opacity-100 hover:underline hover:text-gray-500 transition-opacity"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl text-[#fff] font-semibold">Our Services</h3>
                        <ul className="space-y-3 text-xl text-[#fff]">
                            {services.map((service) => (
                                <li key={service} className="opacity-90 text-xl">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl text-[#fff] font-semibold">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0 text-[#fff]" />
                                <div>
                                    <p className="text-xl text-[#fff] font-medium">Emergency Hotline</p>
                                    <p className="text-xl text-[#fff] opacity-90">+91-9560028504</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0 text-[#fff]" />
                                <div>
                                    <p className="text-xl text-[#fff] font-medium">General Contact</p>
                                    <p className="text-xl text-[#fff] opacity-90">+91-8766382620</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 flex-shrink-0 text-[#fff]" />
                                <div>
                                    <p className="text-xl font-medium text-[#fff]">Email Support</p>
                                    <p className="text-xl opacity-90 text-[#fff]">aiimscare24@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 flex-shrink-0 text-[#fff]" />
                                <div>
                                    <p className="text-xl font-medium text-[#fff]">Service Areas</p>
                                    <p className="text-xl opacity-90 text-[#fff]">Available across 15+ States in India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 flex-shrink-0 text-[#fff]" />
                                <div>
                                    <p className="text-xl font-medium text-[#fff]">Availability</p>
                                    <p className="text-xl opacity-90 text-[#fff]">24/7 Emergency Care</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-primary-foreground/20">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-l opacity-90">
                            <Heart className="w-4 h-4 text-[#fff]" />
                            <span className="text-[#fff]">Made with care for better health outcomes</span>
                        </div>
                        <div className="text-l opacity-90 text-[#fff]">
                            © 2024 AIIMS Care. All rights reserved.
                        </div>
                        <div className="flex gap-8 text-l opacity-90">
                            <a href="#" className="hover:opacity-100  transition-opacity text-[#fff]">Privacy Policy</a>
                            <a href="#" className="hover:opacity-100 transition-opacity text-[#fff]">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
