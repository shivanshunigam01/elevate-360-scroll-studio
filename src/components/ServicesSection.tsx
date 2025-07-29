import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  MousePointer,
  Megaphone,
  Code,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Dominate search rankings with our AI-powered SEO strategies that drive organic traffic and boost conversions.",
      features: [
        "Keyword Research",
        "Technical SEO",
        "Content Optimization",
        "Link Building",
      ],
      gradient: "gradient-primary",
      delay: 0,
    },
    {
      icon: MousePointer,
      title: "PPC Advertising",
      description:
        "Maximize ROI with precision-targeted campaigns across Google Ads, Facebook, and other premium platforms.",
      features: [
        "Campaign Strategy",
        "Ad Creation",
        "Bid Management",
        "Performance Tracking",
      ],
      gradient: "gradient-secondary",
      delay: 0.1,
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description:
        "Build engaged communities and viral content strategies that amplify your brand across all social platforms.",
      features: [
        "Content Strategy",
        "Community Management",
        "Influencer Partnerships",
        "Social Analytics",
      ],
      gradient: "gradient-accent",
      delay: 0.2,
    },
    {
      icon: Code,
      title: "Website Development",
      description:
        "Create lightning-fast, conversion-optimized websites that deliver exceptional user experiences.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Performance Optimization",
        "CMS Integration",
      ],
      gradient: "gradient-success",
      delay: 0.3,
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description:
        "Craft memorable brand identities that resonate with your audience and differentiate from competitors.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
      ],
      gradient: "gradient-primary",
      delay: 0.4,
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive analytics and actionable insights for continuous growth.",
      features: [
        "Performance Tracking",
        "Custom Dashboards",
        "ROI Analysis",
        "Growth Recommendations",
      ],
      gradient: "gradient-secondary",
      delay: 0.5,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <BarChart3 className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">360° Digital Solutions</span>
            <br />
            That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive digital
            marketing services that transform your online presence and
            accelerate business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: service.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden h-full">
                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-electric-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3 group-hover:bg-cyber-pink transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-gradient hover:bg-white/10 group-hover:border-electric-blue transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Floating Elements */}
                {hoveredCard === index && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-electric-blue rounded-full pulse-glow" />
                    <div
                      className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyber-pink rounded-full pulse-glow"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Ready to Elevate Your Digital Presence?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our 360° digital solutions can transform your
              business and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary hover:opacity-90 transition-opacity px-8 py-6"
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gradient hover:bg-white/5 px-8 py-6"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
