import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import OriginStorySection from "@/components/OriginStorySection";
import StorySection from "@/components/StorySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="pt-20">
        <WelcomeSection />
        <AboutSection />
        <OriginStorySection />
        <div className="py-20 bg-white border-t border-gray-50">
           <StorySection />
        </div>
      </div>
      <NewsletterSection />
    </main>
  );
}
