// components/WhatsAppButton.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/918766382620" // use full international format (+91 for India)
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
            <FaWhatsapp size={34} />
        </a>
    );
}
