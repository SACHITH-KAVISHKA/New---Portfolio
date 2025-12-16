import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Undergraduate',
    company: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, Sri Lanka',
    period: '2022 - Present',
    type: 'Education',
    description: 'Pursuing Bachelor of Science Honours in Information Technology, specializing in Software Engineering.',
    highlights: [
      'Dean\'s List recognition for academic excellence',
      'Active member of SLIIT Mozilla Campus Club',
      'Participated in multiple hackathons and coding competitions',
      'Developed several full-stack projects as part of curriculum',
    ],
  },
  {
    id: 2,
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Work',
    description: 'Developing custom web applications and solutions for clients using modern technologies.',
    highlights: [
      'Built responsive websites using React.js and Tailwind CSS',
      'Developed RESTful APIs with Node.js and Express',
      'Implemented database solutions with PostgreSQL and MongoDB',
      'Collaborated with clients to deliver tailored solutions',
    ],
  },
  {
    id: 3,
    role: 'Academic Projects Lead',
    company: 'SLIIT',
    location: 'Malabe, Sri Lanka',
    period: '2023 - 2024',
    type: 'Project',
    description: 'Led development of multiple academic group projects, ensuring timely delivery and code quality.',
    highlights: [
      'Led a team of 4 developers for the Cricket Club Management System',
      'Implemented Agile methodologies for project management',
      'Conducted code reviews and maintained coding standards',
      'Presented projects to academic panels',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 
                      bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium mb-4">Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and professional experiences that shaped my skills 
            as a software engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-16 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
              />

              {/* Content Card */}
              <motion.div
                className="glass-card p-6 rounded-xl gold-glow-hover group"
                whileHover={{ y: -5, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Type Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  exp.type === 'Education' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : exp.type === 'Work' 
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {exp.type}
                </span>

                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} className="text-primary" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                    >
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
