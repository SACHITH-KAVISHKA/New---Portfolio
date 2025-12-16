import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';

const passions = [
  { icon: Code2, title: 'Full-stack Development', description: 'End-to-end application building' },
  { icon: Lightbulb, title: 'Problem Solving', description: 'Clean architecture & solutions' },
  { icon: Users, title: 'Collaboration', description: 'Team-driven development' },
  { icon: Rocket, title: 'Modern Tech', description: 'Continuous learning & growth' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 0.98, 0.39, 0.99] }}
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 rounded-2xl border-2 border-primary/20 animate-border-glow" />
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-xl" />
              
              {/* Image Container */}
              <div className="relative glass-card p-2 rounded-2xl gold-glow">
                <div className="aspect-square rounded-xl overflow-hidden bg-card">
                  <img
                    src="images/sachith_dp.jpeg"
                    alt="Sachith Kavishka - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full gold-glow"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-primary font-semibold">SLIIT Undergraduate</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.98, 0.39, 0.99] }}
          >
            <motion.span
              className="inline-block text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Building Digital{' '}
              <span className="text-gradient">Experiences</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">Software Engineering undergraduate at SLIIT</span> with 
              a strong passion for building efficient, scalable, and user-focused software solutions. My experience spans 
              full-stack development, working with modern technologies such as React.js, Node.js, Laravel, and Spring Boot.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I enjoy designing and developing applications end-to-end—from intuitive user interfaces to 
              robust backend systems and optimized databases. I thrive in collaborative environments, 
              value clean code and best practices, and love solving complex problems that create meaningful impact.
            </p>

            {/* Passion Cards */}
            <div className="grid grid-cols-2 gap-4">
              {passions.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-4 rounded-xl gold-glow-hover transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
