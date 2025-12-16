import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiLaravel, 
  SiSpring, 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb,
  SiGit
} from 'react-icons/si';
import { LuLink, LuCoffee } from 'react-icons/lu';

const technologies = [
  {
    name: 'React.js',
    category: 'Frontend',
    icon: SiReact,
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: SiNodedotjs,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Laravel',
    category: 'Backend',
    icon: SiLaravel,
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    icon: SiSpring,
    color: 'from-green-600/20 to-lime-500/20',
  },
  {
    name: 'Java',
    category: 'Language',
    icon: LuCoffee,
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Python',
    category: 'Language',
    icon: SiPython,
    color: 'from-yellow-500/20 to-blue-500/20',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: SiJavascript,
    color: 'from-yellow-400/20 to-yellow-600/20',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: SiTypescript,
    color: 'from-blue-500/20 to-blue-700/20',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: SiPostgresql,
    color: 'from-blue-600/20 to-indigo-500/20',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: SiMongodb,
    color: 'from-green-500/20 to-green-700/20',
  },
  {
    name: 'REST APIs',
    category: 'Tools',
    icon: LuLink,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: SiGit,
    color: 'from-orange-500/20 to-red-600/20',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Tools'];

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = technologies.filter(
    (tech) => activeCategory === 'All' || tech.category === activeCategory
  );

  return (
    <section id="technologies" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium mb-4">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Technologies & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The modern technologies and tools I use to bring ideas to life and build 
            scalable, efficient applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground gold-glow'
                  : 'glass-card text-muted-foreground hover:text-foreground gold-glow-hover'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          layout
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              layout
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className={`glass-card p-6 rounded-xl text-center cursor-pointer
                              transition-all duration-300 gold-glow-hover h-full
                              bg-gradient-to-br ${tech.color}`}>
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 flex justify-center">
                  <tech.icon className="w-10 h-10" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                <p className="text-muted-foreground text-xs">{tech.category}</p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 
                            group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
