// app/our-care/page.tsx  (if using Next.js App Router)

import Image from "next/image";



const images = [
    {
        src: "/images/patient/img2.jpeg",
        alt: "Professional nurse caring for elderly patient",
        span: "col-span-6 md:col-span-3 row-span-3",
    },
    {
        src: "/images/patient/img1.jpeg",
        alt: "Doctor examining senior patient",
        span: "col-span-6 md:col-span-4 row-span-2",
    },
    {
        src: "/images/patient/img3.jpeg",
        alt: "Doctor writing medical notes",
        span: "col-span-12 md:col-span-3 row-span-2",
    },
    {
        src: "/images/patient/img4.jpeg",
        alt: "Nurse checking on elderly patient in bed",
        span: "col-span-6 md:col-span-4 row-span-3",
    },
    {
        src: "/images/patient/img5.jpeg",
        alt: "Healthcare team in hospital corridor",
        span: "col-span-6 md:col-span-5 row-span-4",
    },
    {
        src: "/images/patient/img5.jpeg",
        alt: "Nurse helping elderly woman patient",
        span: "col-span-6 md:col-span-3 row-span-2",
    },
];

export default function OurCarePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with half-height background */}
            <div className="relative h-[50vh]  flex items-center  justify-center text-center">
                <div className="z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#001055] mb-6">
                        Our Care in Action
                    </h1>
                    <div className="w-16 h-1 bg-white rounded-2xl mx-auto transition-all duration-300 hover:w-32"></div>
                    <p className="text-gray-500 text-center text-xl">
                        See how we bring professional medical care and genuine compassion to families across India
                    </p>
                </div>
             
            </div>

            {/* Photo Grid Section */}
            <div className="container mx-auto px-4 py-16 -mt-34">
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[600px] md:h-[800px]">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`${img.span} relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={idx === 0} 
                                />
                            </div>
                        ))}

                    </div>
                </div>

            
            </div>
        </div>
    );
}
