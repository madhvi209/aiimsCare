"use client"
import { Phone, Headphones, Mail, MessageCircle } from "lucide-react"

const ContactSection = () => {
    const contactItems = [
        {
            icon: Phone,
            title: "Emergency Hotline",
            value: "9560028504",
            href: "tel:9560028504",
            gradient: "bg-gradient-to-r from-[#0A4D9F] to-[#4E80AB]",
        },
        {
            icon: Headphones,
            title: "General Enquiries",
            value: "8766382620",
            href: "tel:8766382620",
            gradient: "bg-gradient-to-r from-[#4E80AB] to-[#2BC9D9]",
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "aiimscare24@gmail.com",
            href: "mailto:aiimscare24@gmail.com",
            gradient: "bg-gradient-to-r from-[#277FD9] to-[#2BC9D9]",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp Chat",
            value: "with us instantly",
            href: "https://wa.me/9560028504",
            gradient: "bg-gradient-to-r from-emerald-500 to-teal-700",
        },
    ]

    return (
        <section id="contact"
            className="relative py-20 px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg1.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-5xl mx-auto text-[#E2E8F0]">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center mb-14 text-white">
                    Contact Us
                </h2>

                {/* Contact Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                    {contactItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center space-x-5 p-6 rounded-2xl ${item.gradient} hover:opacity-90 transition-all duration-300 shadow-md`}
                            >
                                {/* Icon */}
                                <div className="p-4 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/90">{item.value}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>

                {/* Google Maps */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7196.286905069818!2d85.038013!3d25.600149!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzAwLjUiTiA4NcKwMDInMjYuMSJF!5e0!3m2!1sen!2sin!4v1755787272089!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
