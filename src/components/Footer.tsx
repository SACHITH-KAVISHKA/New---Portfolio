import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              className="text-2xl font-heading font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              SK
            </motion.span>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Sachith Kavishka. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>
            <span>using React & Tailwind</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary 
                     gold-glow-hover transition-all"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
