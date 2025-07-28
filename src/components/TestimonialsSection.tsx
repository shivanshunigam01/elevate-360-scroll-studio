import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      position: 'CEO & Founder',
      rating: 5,
      testimonial: 'Elevate360 transformed our digital presence completely. Their SEO strategies increased our organic traffic by 400% in just 6 months. The team is incredibly knowledgeable and always stays ahead of the curve.',
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Fashion Forward',
      position: 'Marketing Director',
      rating: 5,
      testimonial: 'Working with Elevate360 was a game-changer for our e-commerce business. Their PPC campaigns generated a 300% ROI, and their creative approach to social media helped us build a community of 100K+ engaged followers.',
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'GreenTech Solutions',
      position: 'Co-Founder',
      rating: 5,
      testimonial: 'The website Elevate360 built for us is absolutely stunning and performs flawlessly. Our conversion rate increased by 250%, and we consistently receive compliments on the design and user experience.',
      avatar: 'EJ'
    },
    {
      name: 'David Kim',
      company: 'FinanceFlow',
      position: 'VP of Marketing',
      rating: 5,
      testimonial: 'Elevate360\'s data-driven approach to digital marketing is unmatched. They don\'t just run campaigns; they create comprehensive strategies that align with our business goals and deliver measurable results.',
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      company: 'HealthPlus Clinic',
      position: 'Practice Manager',
      rating: 5,
      testimonial: 'Their local SEO expertise helped us dominate our market. We went from page 3 to the top 3 positions for all our target keywords, resulting in a 500% increase in new patient inquiries.',
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      company: 'BuildRight Construction',
      position: 'Owner',
      rating: 5,
      testimonial: 'Elevate360 created a brand identity that perfectly captures our values and expertise. The new website and marketing materials have elevated our professional image and helped us win larger contracts.',
      avatar: 'JW'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10">
        <div className="absolute top-40 left-10 w-80 h-80 bg-cyber-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-tech-green/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Star className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium text-muted-foreground">Client Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">What Our Clients</span><br />
            Say About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about 
            partnering with Elevate360 Digital for their growth journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-electric-blue" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning-orange text-warning-orange" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-8 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Details */}
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-cyber-pink font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pulse-glow" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Trusted by Industry Leaders
            </h3>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* Company Logos Placeholder */}
            <div className="flex justify-center items-center space-x-8 opacity-50">
              <div className="text-xs text-muted-foreground">
                Trusted by companies like TechStart, Fashion Forward, GreenTech, FinanceFlow & more
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;