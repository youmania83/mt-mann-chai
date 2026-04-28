import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import FeaturedProducts from "@/components/FeaturedProducts";
import SensoryExperience from "@/components/SensoryExperience";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F0F0F] text-[#F5F1E9]">
        <Hero />
        <BrandStory />
        <FeaturedProducts />
        <SensoryExperience />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
