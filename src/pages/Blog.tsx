import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing: AI and Automation Trends",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and what it means for your business.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Digital Marketing",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "SEO Best Practices for 2024: Complete Guide",
      excerpt: "Stay ahead of the curve with the latest SEO techniques and Google algorithm updates for maximum visibility.",
      author: "Mike Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "SEO",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Social Media ROI: Measuring Success Beyond Likes",
      excerpt: "Learn how to track meaningful metrics that actually impact your bottom line and drive business growth.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Social Media",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Content Marketing Strategies That Convert",
      excerpt: "Create compelling content that not only engages your audience but drives real conversions and sales.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Content Marketing",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "PPC Campaign Optimization: Advanced Tactics",
      excerpt: "Take your paid advertising to the next level with these proven optimization strategies and techniques.",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "PPC",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Brand Building in the Digital Age",
      excerpt: "Understand how to create a strong brand presence online that resonates with your target audience.",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Branding",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = ["All", "Digital Marketing", "SEO", "Social Media", "Content Marketing", "PPC", "Branding"];

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
              <span className="text-gradient">Digital Marketing</span><br />
              Insights & Trends
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the digital curve with expert insights, strategies, and the latest industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gradient hover:bg-white/10 px-6 py-3 rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  {/* Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-electric-blue/20 to-cyber-pink/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-cyber-pink/10" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-electric-blue transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-electric-blue font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 px-8 py-6"
            >
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;