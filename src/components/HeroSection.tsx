import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Target,
  Megaphone,
  Globe,
  TrendingUp,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import seoHero from "@/assets/seo-hero.jpg";
import socialMediaHero from "@/assets/social-media-hero.jpg";
import brandingHero from "@/assets/branding-hero.jpg";
import webDevHero from "@/assets/web-dev-hero.jpg";
import ppcHero from "@/assets/ppc-hero.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      icon: Target,
      title: "Elevate Your Brand with AI-Powered SEO",
      subtitle:
        "Dominate search rankings and drive organic traffic that converts",
      description:
        "Our cutting-edge SEO strategies combine artificial intelligence with proven optimization techniques to boost your visibility and revenue.",
      cta: "Boost Rankings Now",
      gradient: "gradient-primary",
      image: seoHero,
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing That Scales",
      subtitle: "Build engaged communities and viral content strategies",
      description:
        "Transform your social presence with data-driven campaigns that create authentic connections and measurable growth across all platforms.",
      cta: "Scale Social Presence",
      gradient: "gradient-secondary",
      image: socialMediaHero,
    },
    {
      icon: Sparkles,
      title: "Revolutionary Brand Identity Design",
      subtitle: "Craft memorable brands that resonate and convert",
      description:
        "From logo design to complete brand ecosystems, we create visual identities that tell your story and captivate your audience.",
      cta: "Transform Brand",
      gradient: "gradient-accent",
      image: brandingHero,
    },
    {
      icon: Globe,
      title: "Next-Gen Website Development",
      subtitle: "Lightning-fast websites that drive conversions",
      description:
        "Built with modern technologies and optimized for performance, our websites deliver exceptional user experiences that generate results.",
      cta: "Build Website",
      gradient: "gradient-success",
      image: webDevHero,
    },
    {
      icon: TrendingUp,
      title: "High-Converting PPC Campaigns",
      subtitle: "Maximize ROI with precision-targeted advertising",
      description:
        "Our data-driven PPC strategies deliver qualified leads and maximize your advertising spend across Google, Facebook, and beyond.",
      cta: "Launch Campaign",
      gradient: "gradient-primary",
      image: ppcHero,
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div ref={heroRef} className="relative z-10 pt-24 h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="!h-full flex items-center relative isolate"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 z-0" />

              <div className="container mx-auto px-4 w-full h-full flex items-center relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
                  {/* Left Content */}
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 backdrop-blur-sm">
                      <slide.icon className="w-5 h-5 text-electric-blue" />
                      <span className="text-sm font-medium text-white/90">
                        Digital Marketing Excellence
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        <span className="text-white drop-shadow-lg">
                          {slide.title}
                        </span>
                      </h1>
                      <h2 className="text-lg lg:text-xl text-electric-blue font-semibold drop-shadow-md">
                        {slide.subtitle}
                      </h2>
                      <p className="text-base lg:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button
                        size="lg"
                        className={`${slide.gradient} hover:opacity-90 transition-all duration-300 group px-6 py-4 text-base shadow-electric`}
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 bg-white/10 hover:bg-white/20 text-white px-6 py-4 text-base backdrop-blur-sm"
                      >
                        Get Free Proposal
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center lg:justify-start space-x-6 pt-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white drop-shadow-lg">
                          500+
                        </div>
                        <div className="text-xs text-white/80">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white drop-shadow-lg">
                          98%
                        </div>
                        <div className="text-xs text-white/80">
                          Success Rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white drop-shadow-lg">
                          24/7
                        </div>
                        <div className="text-xs text-white/80">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Enlarged Image Section */}
                  <div className="relative hidden lg:block">
                    <div className="relative w-[500px] h-[320px] flex items-center justify-center">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-[500px] h-[320px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${slide.gradient}`}>
                            <slide.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-white">
                            <div className="font-semibold text-sm">
                              Digital Marketing
                            </div>
                            <div className="text-xs opacity-90">Excellence</div>
                          </div>
                        </div>
                      </div>
                      {/* Floating Glow Effects */}
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-electric-blue/30 rounded-full pulse-glow backdrop-blur-sm border border-electric-blue/50" />
                      <div
                        className="absolute -bottom-3 -left-3 w-5 h-5 bg-cyber-pink/30 rounded-full pulse-glow backdrop-blur-sm border border-cyber-pink/50"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="absolute top-1/3 -left-6 w-4 h-4 bg-tech-green/30 rounded-full pulse-glow backdrop-blur-sm border border-tech-green/50"
                        style={{ animationDelay: "2s" }}
                      />
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

      {/* Swiper pagination style */}
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
