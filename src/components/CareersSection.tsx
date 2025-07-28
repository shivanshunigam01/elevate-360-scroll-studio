import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  const departments = ['All', 'Marketing', 'Development', 'Design', 'Analytics', 'Management'];

  const jobOpenings = [
    {
      title: 'Senior SEO Specialist',
      department: 'Marketing',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$80,000 - $120,000',
      description: 'Lead SEO strategies for enterprise clients and drive organic growth.',
      requirements: ['Advanced SEO knowledge', 'Google Analytics expert', 'Technical SEO skills'],
      benefits: ['Health insurance', 'Remote work', 'Learning budget']
    },
    {
      title: 'React Frontend Developer',
      department: 'Development',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$90,000 - $130,000',
      description: 'Build stunning web applications and user interfaces for our clients.',
      requirements: ['React expertise', 'TypeScript', 'Modern CSS', 'API integration'],
      benefits: ['Tech equipment', 'Flexible hours', 'Health & dental']
    },
    {
      title: 'Creative Director',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$100,000 - $150,000',
      description: 'Lead creative strategy and oversee brand identity projects.',
      requirements: ['Portfolio required', 'Adobe Creative Suite', 'Brand strategy', 'Team leadership'],
      benefits: ['Creative freedom', 'Premium tools', 'Conference budget']
    },
    {
      title: 'PPC Campaign Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '$70,000 - $100,000',
      description: 'Manage and optimize paid advertising campaigns across multiple platforms.',
      requirements: ['Google Ads certified', 'Facebook Ads', 'Analytics skills', 'Budget management'],
      benefits: ['Performance bonuses', 'Training programs', 'Work from anywhere']
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$65,000 - $95,000',
      description: 'Transform data into actionable insights for marketing campaigns.',
      requirements: ['SQL proficiency', 'Python/R', 'Visualization tools', 'Statistics background'],
      benefits: ['Growth opportunities', 'Mentorship', 'Certification support']
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$75,000 - $110,000',
      description: 'Coordinate client projects and ensure timely delivery of marketing campaigns.',
      requirements: ['PMP certification', 'Agile methodology', 'Client management', 'Communication skills'],
      benefits: ['Leadership development', 'Travel opportunities', 'Equity options']
    }
  ];

  const filteredJobs = activeFilter === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeFilter);

  return (
    <section id="careers" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-warning-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-tech-green/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Briefcase className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium text-muted-foreground">Join Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Build Your Career</span><br />
            With Elevate360
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a team of passionate innovators, creative thinkers, and digital marketing experts 
            who are shaping the future of online business growth.
          </p>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: 'Innovation First',
              description: 'Work with cutting-edge tools and technologies while pushing the boundaries of digital marketing.',
              icon: '🚀'
            },
            {
              title: 'Work-Life Balance',
              description: 'Flexible schedules, remote work options, and a culture that values your personal time.',
              icon: '⚖️'
            },
            {
              title: 'Growth Opportunities',
              description: 'Continuous learning, mentorship programs, and clear career advancement paths.',
              icon: '📈'
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Job Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter by department:</span>
          </div>
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={activeFilter === dept ? "default" : "outline"}
              onClick={() => setActiveFilter(dept)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === dept
                  ? "gradient-primary text-white shadow-electric"
                  : "border-gradient hover:bg-white/10"
              }`}
            >
              {dept}
            </Button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={`${job.title}-${activeFilter}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-electric-blue/20 text-electric-blue text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-cyber-pink" />
                        <span className="text-muted-foreground">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-tech-green" />
                        <span className="text-muted-foreground">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-warning-orange" />
                        <span className="text-muted-foreground">{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-neon-purple" />
                        <span className="text-muted-foreground">{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="flex-shrink-0">
                    <Button className="gradient-primary hover:opacity-90 transition-opacity group/btn">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>

                {/* Expandable Details */}
                <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-tech-green rounded-full mr-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Jobs Message */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-muted-foreground">
              No openings in {activeFilter} department at the moment.
            </p>
            <p className="text-muted-foreground mt-2">
              Check back soon or contact us for future opportunities.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Don't See Your Role?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for digital innovation. 
              Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity px-8 py-6">
                Send Resume
              </Button>
              <Button size="lg" variant="outline" className="border-gradient hover:bg-white/5 px-8 py-6">
                Learn About Culture
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;