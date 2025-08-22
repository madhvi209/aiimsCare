"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Testimonials", href: "#testimonials" },   
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md z-50">
            {/* Top contact bar */}
            <div className="bg-[#001055] text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+91-8766382620</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Available across 15+ States of India</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span className="animate-pulse font-semibold text-[#ffff]">
                            24/7 Emergency Care Available
                        </span>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Institute Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-1"
                    >
                        <Link href="#home" className="flex items-center gap-2">
                            <img
                                src="/images/logo.png"
                                alt="AIIMS Care Logo"
                                className="w-30 h-15 object-contain rounded-lg"
                            />
                        </Link>
                        <span className="text-[#001055] text-start text-xs sm:text-sm font-semibold mt-1 ml-1">
                            ACTIVE INSTITUTE OF INTENSIVE MEDICAL SERVICES PRIVATE LIMITED
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-[#001055] hover:text-[#020652] font-semibold transition-colors duration-200 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#020652] transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="border-[#001055]  bg-[#001055] text-white hover:bg-[#fff] hover:text-[#020652] transition inline-flex items-center gap-2"
                        >
                            <img
                                src="/images/vector.webp"
                                alt="Vector"
                                className="object-contain w-6 h-6"
                            />
                            Talk to Expert
                        </Button>

                        <Button className="bg-[#ffff] text-[#020652] border-1 border-[#020652] hover:text-[#fff] hover:bg-[#020652] hover:border-[#fff] transition focus:outline focus:outline-[#001055]">
                            Book Care
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0,
                    }}
                    className="overflow-hidden lg:hidden"
                >
                    <div className="pt-4 pb-2 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 px-3 text-[#001055] hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 space-y-2">
                            <Button
                                variant="outline"
                                className="w-full border-[#001055] text-[#001055] hover:bg-[#001055] hover:text-white transition"
                            >
                                Talk to Expert
                            </Button>
                            <Button className="w-full bg-[#001055] text-white hover:bg-[#020652] transition">
                                Book Care
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;
