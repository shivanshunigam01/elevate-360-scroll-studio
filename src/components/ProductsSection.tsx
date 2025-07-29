import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Share2, Palette, Code, Target, BarChart3, MessageSquare, Globe2 } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with our advanced SEO strategies and AI-powered optimization techniques.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Optimization"],
      price: "Starting at $299/month"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Engage your audience across all platforms with compelling content and strategic social media campaigns.",
      features: ["Content Creation", "Community Management", "Social Analytics", "Influencer Outreach"],
      price: "Starting at $199/month"
    },
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Create a memorable brand that stands out with our comprehensive branding and design services.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
      price: "Starting at $499 one-time"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Build fast, responsive websites that convert visitors into customers with modern web technologies.",
      features: ["Responsive Design", "E-commerce", "Performance Optimization", "SEO-Ready"],
      price: "Starting at $1,299 one-time"
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other platforms.",
      features: ["Campaign Setup", "Ad Creation", "Bid Management", "Performance Tracking"],
      price: "Starting at $399/month + ad spend"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and detailed performance reporting.",
      features: ["Custom Dashboards", "Performance Reports", "ROI Analysis", "Competitor Tracking"],
      price: "Starting at $149/month"
    },
    {
      icon: MessageSquare,
      title: "Content Marketing",
      description: "Engage your audience with valuable content that drives traffic and builds brand authority.",
      features: ["Blog Writing", "Video Content", "Email Marketing", "Content Strategy"],
      price: "Starting at $249/month"
    },
    {
      icon: Globe2,
      title: "Digital Strategy",
      description: "Develop a comprehensive digital marketing strategy tailored to your business goals and target audience.",
      features: ["Market Analysis", "Competitor Research", "Strategy Planning", "Implementation Guide"],
      price: "Starting at $999 one-time"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
            <Target className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium text-electric-blue">Our Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Digital Marketing</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing products designed to elevate your brand and drive measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-electric">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-electric-blue">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-bold text-gradient mb-3">{product.price}</div>
                    <Button 
                      className="w-full gradient-primary hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-300"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We create tailored digital marketing packages for your specific needs.
          </p>
          <Button size="lg" className="gradient-secondary hover:opacity-90 transition-opacity px-8">
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;