import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NaviNations Application',
    description: 'NaviNations is an application that lets users explore country flags and view detailed information about each nation.',
    longDescription: 'NaviNations-app is a country exploration application where users can browse national flags and learn detailed information about countries, making global knowledge easy and accessible.',
    image: 'src/assets/NaviNations.png',
    tech: ['React(Vite)', 'CSS', 'REST APIs'],
    category: 'Frontend',
    github: 'https://github.com/SACHITH-KAVISHKA/NaviNations-app.git',
    live: 'https://navi-nations-app-x7zc-5n269elju-sachith-kavishkas-projects.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Color Detection App',
    description: 'An intelligent application that detects and identifies colors from images using computer vision and machine learning algorithms.',
    longDescription: 'Developed a Python-based color detection application using OpenCV and machine learning. The app can identify colors from uploaded images or real-time camera feed, with support for color naming and hex code extraction.',
    image: 'src/assets/Color - detection.png',
    tech: ['Python', 'OpenCV', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/SACHITH-KAVISHKA/color-detection-application.git',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with product management, cart functionality, and secure payment integration.',
    longDescription: 'Full-stack e-commerce platform featuring product catalog, shopping cart, user authentication, order management, and payment processing with Stripe integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Stripe'],
    category: 'Full Stack',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, CRUD operations, and real-time notifications.',
    longDescription: 'Built a scalable RESTful API using Spring Boot with JWT authentication, comprehensive CRUD operations, and WebSocket support for real-time task updates.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
    tech: ['Spring Boot', 'Java', 'PostgreSQL', 'JWT'],
    category: 'Backend',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Portfolio Dashboard',
    description: 'Interactive dashboard for tracking investment portfolios with real-time data visualization.',
    longDescription: 'A comprehensive dashboard for tracking investment portfolios, featuring real-time market data, interactive charts, portfolio analytics, and performance tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tech: ['React.js', 'TypeScript', 'Recharts', 'REST APIs'],
    category: 'Frontend',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
    longDescription: 'Built a real-time chat application using WebSockets, featuring private messaging, group chats, message history, file sharing, and online status indicators.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop',
    tech: ['Node.js', 'Socket.io', 'React.js', 'MongoDB'],
    category: 'Full Stack',
    github: '#',
    live: '#',
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills in building scalable, 
            user-focused applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card overflow-hidden rounded-2xl gold-glow-hover transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/80 text-foreground hover:bg-primary 
                               hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/80 text-foreground hover:bg-primary 
                               hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-heading font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-badge text-xs">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-heading font-semibold mb-6 text-center">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card p-5 rounded-xl gold-glow-hover cursor-pointer group"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-primary text-xs font-medium">{project.category}</span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          
          <motion.div
            className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-auto rounded-2xl gold-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background 
                       text-foreground transition-colors z-10"
            >
              <X size={20} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />

            <div className="p-8">
              <span className="text-primary text-sm font-medium">{selectedProject.category}</span>
              <h3 className="text-2xl font-heading font-bold mt-2 mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full glass-card 
                           hover:bg-primary hover:text-primary-foreground transition-all gold-glow-hover"
                >
                  <Github size={18} />
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary 
                           text-primary-foreground transition-all gold-glow"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
