import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import ServiceSection from "@/components/home/service-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import BookingSection from "@/components/home/booking-section";
import FAQSection from "@/components/home/faq-section";
// import ProductCategories from "../components/home/product-categories";
// import ContactUs from "../components/home/contactUs-section";
// import TestimonialsSection from "@/components/home/testimonial-section";


export default function Home() {
  return (
    <div>

      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <BookingSection />
      <FAQSection/>
      {/* <TestimonialsSection />
      <ContactUs /> */}
    </div>
  );
}
