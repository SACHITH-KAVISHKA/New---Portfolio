import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sachith@example.com', href: 'mailto:sachith@example.com' },
    { icon: MapPin, label: 'Location', value: 'Malabe, Sri Lanka', href: '#' },
    { icon: Phone, label: 'Phone', value: '+94 77 123 4567', href: 'tel:+94771234567' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/sachithkavishka' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sachithkavishka' },
    { icon: Mail, label: 'Email', href: 'mailto:sachith@example.com' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 
                        bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium mb-4">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl gold-glow">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                             transition-all placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                             transition-all placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                           transition-all placeholder:text-muted-foreground"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                           transition-all resize-none placeholder:text-muted-foreground"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 
                         bg-primary text-primary-foreground rounded-full font-semibold
                         gold-glow transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass-card p-5 rounded-xl gold-glow-hover 
                           transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary 
                                group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full glass-card text-muted-foreground 
                             hover:text-primary hover:bg-primary/10 transition-all gold-glow-hover"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <link.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 glass-card rounded-full 
                       font-semibold gold-glow-hover transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download My CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
