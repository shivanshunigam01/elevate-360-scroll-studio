import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Zap, value: '1000+', label: 'Projects Completed' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Zap className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium text-muted-foreground">About Elevate360</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Transforming Digital</span><br />
            Landscapes Since 2020
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another digital marketing agency. We're your strategic partners in 
            building an unstoppable online presence that drives real business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Our Mission: Elevate Every Brand
              </h3>
              <p className="text-lg text-muted-foreground">
                At Elevate360 Digital, we believe every business deserves to shine in the digital 
                world. Our comprehensive approach combines cutting-edge technology with creative 
                storytelling to deliver results that matter.
              </p>
              <p className="text-lg text-muted-foreground">
                From startups to Fortune 500 companies, we've helped brands across industries 
                achieve unprecedented growth through strategic digital marketing, innovative web 
                solutions, and data-driven campaigns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-semibold text-electric-blue mb-2">Innovation-First</h4>
                <p className="text-sm text-muted-foreground">
                  We stay ahead of trends to keep your brand at the forefront of digital evolution.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-semibold text-cyber-pink mb-2">Results-Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Every strategy is backed by data and optimized for measurable business outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl gradient-primary opacity-80" />
                <div className="aspect-square rounded-xl gradient-secondary opacity-80" />
                <div className="aspect-square rounded-xl gradient-accent opacity-80" />
                <div className="aspect-square rounded-xl gradient-success opacity-80" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue rounded-full pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyber-pink rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;