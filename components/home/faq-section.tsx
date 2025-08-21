// app/faq/page.tsx
"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
    const firstFaq = {
        question: "What is included in Advanced Nursing Care?",
        answer:
            "Advanced Nursing Care includes complex medical procedures such as IV administration, wound management, medication management, vital signs monitoring, and specialized care for chronic conditions. Our nurses are trained to handle ICU-level care in a home environment.",
    };

    const remainingFaqs = [
        {
            question: "Are your nurses certified and experienced?",
            answer:
                "Yes, all our nurses are government-certified and have extensive experience in hospital and clinical settings. They undergo regular training updates and are required to maintain their certifications. Many of our nurses have worked in leading hospitals across India.",
        },
        {
            question: "Do you provide 24/7 service?",
            answer:
                "Absolutely! We offer round-the-clock nursing care and emergency response services. Our 24/7 hotline ensures that you can reach us anytime for emergency situations or urgent medical needs.",
        },
        {
            question: "What areas do you serve?",
            answer:
                "We currently provide services in Delhi NCR, Mumbai, Bangalore, and surrounding metropolitan areas. We're rapidly expanding to other cities. Contact us to check if we serve your specific location.",
        },
        {
            question: "How quickly can you arrange a nurse?",
            answer:
                "For routine appointments, we can arrange a nurse within 4-6 hours. For urgent care, we typically respond within 2 hours. Emergency situations receive immediate attention with our rapid response team.",
        },
        {
            question: "What safety protocols do you follow?",
            answer:
                "We follow strict hospital-grade infection control protocols including proper PPE usage, equipment sterilization, hand hygiene, and regular health screenings for all staff. All procedures are performed following WHO and Ministry of Health guidelines.",
        },
        {
            question: "Can you provide long-term care for chronic conditions?",
            answer:
                "Yes, we specialize in long-term continuous care for patients with chronic conditions such as diabetes, hypertension, cardiac issues, and post-surgical recovery. We create personalized care plans in consultation with your doctors.",
        },
        {
            question: "How do you coordinate with my existing doctor?",
            answer:
                "We work closely with your existing healthcare team. Our nurses maintain detailed reports and communicate regularly with your doctors to ensure continuity of care. We can also arrange for doctor consultations at home if needed.",
        },
        {
            question: "What equipment do you provide?",
            answer:
                "We bring all necessary medical equipment including IV stands, monitors, wound care supplies, and specialized devices as needed. All equipment is sterile, well-maintained, and regularly inspected for safety.",
        },
        {
            question: "How are your services priced?",
            answer:
                "Our pricing is transparent and competitive. Costs vary based on the type of care, duration, and complexity of services required. We provide detailed estimates upfront with no hidden charges. Contact us for a personalized quote.",
        },
    ];

    return (
        <section id="faq" className="bg-[#001055] text-white min-h-screen w-full ">
                {/* Header Section with First FAQ */}
                <div className="py-16 px-4 bg-[#001055]">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                                FAQ
                            </h2>
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-semibold text-white">
                                    {firstFaq.question}
                                </h3>
                                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                                    {firstFaq.answer}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Main FAQ Section */}
                <div className="bg-gray-50 py-8">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Accordion type="single" collapsible className="space-y-0">
                                {remainingFaqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-b border-white/20  last:border-b-0"
                                    >
                                        <AccordionTrigger className="text-left text-[#001055] font-medium text-base md:text-lg py-6 hover:text-[#ffcc00]">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-500 leading-relaxed pb-6 text-xl md:text-base">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    </div>
                </div>

                {/* Contact CTA Footer */}
            <div className="bg-[#001055] py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center gap-6 text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Still have questions? We&rsquo;re here to help!
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                            <Button className="bg-[#ffcc00] text-[#001055] hover:bg-yellow-400 font-semibold py-6 px-8 rounded-full text-sm md:text-base">
                                Call Us Now
                            </Button>
                            <Button className="bg-[#25D366] text-white hover:bg-green-600 font-semibold py-6 px-8 rounded-full text-sm md:text-base">
                                WhatsApp Chat
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default FAQSection;
