import HeroSection from "@/components/HeroSection";
import ProfessionalNotice from "@/components/ProfessionalNotice";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      
      {/* Conversion focused flow */}
      <ProfessionalNotice />
      
      <div id="shop-categories">
        <CategoriesSection />
      </div>

      <div id="featured-products">
        <FeaturedProducts />
      </div>

      {/* Social Proof & Trust */}
      <TestimonialsSection />
      
      {/* Engagement */}
      <InstagramSection />
      
      <NewsletterSection />
    </main>
  );
}
