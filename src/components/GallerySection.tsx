import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Campaigns', 'Events', 'Case Studies', 'Behind Scenes'];

  const galleryItems = [
    {
      type: 'video',
      category: 'Campaigns',
      title: 'Nike Campaign Success Story',
      description: 'How we increased Nike\'s social engagement by 300%',
      thumbnail: '/src/assets/campaign-success.jpg',
      stats: { views: '2.5M', engagement: '15%', conversions: '25%' }
    },
    {
      type: 'image',
      category: 'Events',
      title: 'Digital Marketing Summit 2024',
      description: 'Our team presenting at the industry\'s biggest event',
      thumbnail: '/src/assets/conference-presentation.jpg',
      stats: { attendees: '5K+', presentations: '12', awards: '3' }
    },
    {
      type: 'video',
      category: 'Case Studies',
      title: 'E-commerce Growth Case Study',
      description: 'From startup to $10M revenue in 18 months',
      thumbnail: '/src/assets/web-development.jpg',
      stats: { revenue: '+400%', traffic: '+250%', conversions: '+180%' }
    },
    {
      type: 'image',
      category: 'Behind Scenes',
      title: 'Creative Team in Action',
      description: 'Behind the scenes of our creative process',
      thumbnail: '/src/assets/brainstorming.jpg',
      stats: { projects: '50+', ideas: '500+', coffees: '∞' }
    },
    {
      type: 'video',
      category: 'Campaigns',
      title: 'Tech Startup Launch Campaign',
      description: 'Viral launch campaign that broke the internet',
      thumbnail: '/src/assets/campaign-success.jpg',
      stats: { reach: '50M+', shares: '100K+', mentions: '25K+' }
    },
    {
      type: 'image',
      category: 'Events',
      title: 'Team Building Workshop',
      description: 'Innovation workshop with our creative team',
      thumbnail: '/src/assets/team-meeting.jpg',
      stats: { participants: '25', ideas: '100+', fun: '∞' }
    },
    {
      type: 'video',
      category: 'Case Studies',
      title: 'Analytics Dashboard Project',
      description: 'Real-time analytics platform for enterprise clients',
      thumbnail: '/src/assets/analytics-workspace.jpg',
      stats: { efficiency: '+300%', insights: '1000+', clients: '50+' }
    },
    {
      type: 'image',
      category: 'Campaigns',
      title: 'Brand Strategy Workshop',
      description: 'Comprehensive brand identity development process',
      thumbnail: '/src/assets/brainstorming.jpg',
      stats: { brands: '100+', strategies: '500+', success: '95%' }
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-tech-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-warning-orange/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Play className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium text-muted-foreground">Portfolio Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Success Stories</span><br />
            & Behind the Scenes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our work, campaigns, and the creative process that drives exceptional results for our clients.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "gradient-primary text-white shadow-electric"
                  : "border-gradient hover:bg-white/10"
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${activeFilter}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-glow">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* View Button for Images */}
                  {item.type === 'image' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center pulse-glow">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* Type Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="w-4 h-4 text-white" />
                      ) : (
                        <ExternalLink className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-xs">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-electric-blue rounded-full" />
                        <span className="text-muted-foreground capitalize">{key}:</span>
                        <span className="text-foreground font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gradient hover:bg-white/10 px-8 py-6"
          >
            Load More Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {[
            { icon: Calendar, value: '500+', label: 'Campaigns Launched' },
            { icon: Users, value: '2M+', label: 'People Reached' },
            { icon: Award, value: '25+', label: 'Awards Won' },
            { icon: ExternalLink, value: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
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

export default GallerySection;