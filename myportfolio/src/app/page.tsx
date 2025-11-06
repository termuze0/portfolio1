import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About"
import ProjectSection from "@/components/project";
import BlogSection from "@/components/blog"
import AchievementsSection from "@/components/Achievements";
import ContactSection  from "@/components/contact"
export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
