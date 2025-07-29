import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, Building2, Stethoscope, GraduationCap, Utensils, Car, Home, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Drive online sales with targeted campaigns, conversion optimization, and customer retention strategies.",
      services: ["SEO for product pages", "PPC advertising", "Email marketing", "Social media marketing"],
      results: "Average 250% increase in online sales",
      clientCount: "150+ clients"
    },
    {
      icon: Building2,
      title: "B2B & Technology",
      description: "Generate high-quality leads and build thought leadership in competitive tech markets.",
      services: ["LinkedIn marketing", "Content marketing", "Lead generation", "Account-based marketing"],
      results: "300% increase in qualified leads",
      clientCount: "200+ clients"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Medical",
      description: "Connect with patients and healthcare professionals through compliant digital marketing strategies.",
      services: ["Local SEO", "Medical content marketing", "Reputation management", "Patient acquisition"],
      results: "180% increase in patient inquiries",
      clientCount: "80+ clients"
    },
    {
      icon: GraduationCap,
      title: "Education & E-learning",
      description: "Attract students and learners with engaging content and targeted educational marketing campaigns.",
      services: ["Student recruitment", "Course promotion", "Content marketing", "Social media engagement"],
      results: "220% increase in enrollments",
      clientCount: "120+ clients"
    },
    {
      icon: Utensils,
      title: "Food & Hospitality",
      description: "Increase bookings and foot traffic with location-based marketing and appetizing visual content.",
      services: ["Local SEO", "Food photography", "Social media marketing", "Review management"],
      results: "190% increase in reservations",
      clientCount: "90+ clients"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Drive dealership traffic and online sales with targeted automotive marketing strategies.",
      services: ["Inventory marketing", "Service department promotion", "Local advertising", "Video marketing"],
      results: "160% increase in showroom visits",
      clientCount: "60+ clients"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Generate leads and showcase properties through virtual tours and targeted real estate marketing.",
      services: ["Property marketing", "Lead generation", "Virtual tours", "Local SEO"],
      results: "240% increase in property inquiries",
      clientCount: "110+ clients"
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Build gaming communities and increase user engagement through creative digital campaigns.",
      services: ["Community building", "Influencer marketing", "Content creation", "User acquisition"],
      results: "400% increase in user engagement",
      clientCount: "40+ clients"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Industry-Specific</span><br />
              Digital Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored strategies for your industry's unique challenges and opportunities. We understand your market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {industry.description}
                  </p>
                  
                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-electric-blue mb-2">Key Services:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-electric-blue rounded-full mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Results */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-xs text-cyber-pink font-semibold mb-1">{industry.results}</div>
                    <div className="text-xs text-muted-foreground">{industry.clientCount}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We work with businesses across all industries. Our adaptable strategies can be customized for any market or niche.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary hover:opacity-90 px-8 py-6"
              >
                Let's Discuss Your Industry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;