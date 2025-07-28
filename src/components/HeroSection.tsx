import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Target, Megaphone, Globe, TrendingUp } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      icon: Target,
      title: "Elevate Your Brand with AI-Powered SEO",
      subtitle: "Dominate search rankings and drive organic traffic that converts",
      description: "Our cutting-edge SEO strategies combine artificial intelligence with proven optimization techniques to boost your visibility and revenue.",
      cta: "Boost Rankings Now",
      gradient: "gradient-primary"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing That Scales",
      subtitle: "Build engaged communities and viral content strategies",
      description: "Transform your social presence with data-driven campaigns that create authentic connections and measurable growth across all platforms.",
      cta: "Scale Social Presence",
      gradient: "gradient-secondary"
    },
    {
      icon: Sparkles,
      title: "Revolutionary Brand Identity Design",
      subtitle: "Craft memorable brands that resonate and convert",
      description: "From logo design to complete brand ecosystems, we create visual identities that tell your story and captivate your audience.",
      cta: "Transform Brand",
      gradient: "gradient-accent"
    },
    {
      icon: Globe,
      title: "Next-Gen Website Development",
      subtitle: "Lightning-fast websites that drive conversions",
      description: "Built with modern technologies and optimized for performance, our websites deliver exceptional user experiences that generate results.",
      cta: "Build Website",
      gradient: "gradient-success"
    },
    {
      icon: TrendingUp,
      title: "High-Converting PPC Campaigns",
      subtitle: "Maximize ROI with precision-targeted advertising",
      description: "Our data-driven PPC strategies deliver qualified leads and maximize your advertising spend across Google, Facebook, and beyond.",
      cta: "Launch Campaign",
      gradient: "gradient-primary"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div ref={heroRef} className="relative z-10 pt-24">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          loop={true}
          className="h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                  {/* Content */}
                  <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                      <slide.icon className="w-5 h-5 text-electric-blue" />
                      <span className="text-sm font-medium text-muted-foreground">
                        Digital Marketing Excellence
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        <span className="text-gradient">{slide.title}</span>
                      </h1>
                      <h2 className="text-xl lg:text-2xl text-electric-blue font-semibold">
                        {slide.subtitle}
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button 
                        size="lg" 
                        className={`${slide.gradient} hover:opacity-90 transition-all duration-300 group px-8 py-6 text-lg shadow-electric`}
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-gradient hover:bg-white/5 px-8 py-6 text-lg"
                      >
                        Get Free Proposal
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center lg:justify-start space-x-8 pt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient">500+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient">98%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient">24/7</div>
                        <div className="text-sm text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative hidden lg:block">
                    <div className="relative w-full h-96 flex items-center justify-center">
                      <div className={`w-64 h-64 rounded-full ${slide.gradient} blur-3xl opacity-30 absolute`} />
                      <div className="relative z-10 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <slide.icon className="w-32 h-32 text-white mx-auto floating-animation" />
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-4 h-4 bg-electric-blue rounded-full pulse-glow" />
                      <div className="absolute bottom-8 left-8 w-3 h-3 bg-cyber-pink rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
                      <div className="absolute top-1/3 left-4 w-2 h-2 bg-tech-green rounded-full pulse-glow" style={{ animationDelay: '2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-bounce" />
            </div>
            <span className="text-xs text-muted-foreground">Scroll Down</span>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--electric-blue)) !important;
          box-shadow: 0 0 10px hsl(var(--electric-blue)) !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;