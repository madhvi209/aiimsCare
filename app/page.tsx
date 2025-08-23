import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import ServiceSection from "@/components/home/service-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import BookingSection from "@/components/home/booking-section";
import FAQSection from "@/components/home/faq-section";
import CareSection from "@/components/home/care-section";
import Contact from "../components/home/contact-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CareerPage from "@/components/home/career-section"


export default function Home() {
  return (
    <div>

      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <BookingSection />
      <FAQSection />
      <CareSection />
      <TestimonialsSection />
      <Contact />
      <CareerPage/>
    </div>
  );
}
