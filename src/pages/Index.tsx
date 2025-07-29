import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="bg-background">
        <AboutSection />
      </div>
      <div className="bg-muted/30">
        <ProductsSection />
      </div>
      <div className="bg-background">
        <GallerySection />
      </div>
      <div className="bg-muted/30">
        <TestimonialsSection />
      </div>
      <div className="bg-background">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
