import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProgramsSection from '@/components/programs-section';
import NewsSection from '@/components/news-section';
import FacultySection from '@/components/faculty-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <FacultySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}