import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const titleWords = "Hi — I'm Sachith Kavishka".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Title */}
          <motion.div className="mb-6 overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3 md:mr-4"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 0.98, 0.39, 0.99],
                  }}
                >
                  {word === "Sachith" || word === "Kavishka" ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Software Engineering undergraduate at SLIIT. Building{" "}
            <span className="text-foreground font-medium">
              scalable, user-focused
            </span>{" "}
            web applications with modern tech stacks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg
                         gold-glow transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px hsl(43 66% 52% / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-primary/50 text-foreground rounded-full font-semibold text-lg
                         hover:border-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-0.5 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
