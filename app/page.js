"use client";

import { motion } from "framer-motion";
import { cutive } from "./layout";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
      },
    }),
  };

  const name = "Beltran";

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-24 sm:px-12 lg:px-24">
      <motion.div
        className="max-w-2xl w-full space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name Header with Letter Animation */}
        <motion.div className="space-y-4">
          <h1 className={`text-base ${cutive.className} text-center`}>
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.p
            variants={itemVariants}
            className={`text-base text-center ${cutive.className} opacity-80`}
          >
            Product Engineer
          </motion.p>
        </motion.div>

        {/* About Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.div
            className="space-y-4 text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={`text-base ${cutive.className} mb-6`}>
              About Me
            </h2>
            <p className={`text-base leading-relaxed ${cutive.className} opacity-90`}>
              I&apos;m a product engineer who bridges the gap between design and development.
              My passion lies in crafting digital experiences that are not only functional
              but delightfully intuitive.
            </p>
          </motion.div>

          {/* Development Experience */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm text-center"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={`text-base ${cutive.className}`}>
              Development
            </h3>
            <p className={`text-base leading-relaxed ${cutive.className} opacity-85`}>
              I build with modern web technologies, turning complex problems into elegant
              solutions. From React and Next.js to full-stack architectures, I focus on
              writing clean, maintainable code that scales. My development philosophy
              centers on performance, accessibility, and creating seamless user experiences.
            </p>
          </motion.div>

          {/* Design Experience */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm text-center"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={`text-base ${cutive.className}`}>
              Design
            </h3>
            <p className={`text-base leading-relaxed ${cutive.className} opacity-85`}>
              Design thinking shapes how I approach every project. I believe great products
              come from understanding users deeply and translating insights into interfaces
              that feel natural. My design process balances aesthetics with usability,
              creating experiences that users love and businesses need.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 pt-12 border-t border-white/10"
        >
          <h3 className={`text-base ${cutive.className} text-center`}>
            Let&apos;s Connect
          </h3>
          <div className="flex flex-col gap-6 items-center text-center">
            <motion.a
              href="mailto:hello@beltran.dev"
              className={`text-base ${cutive.className} opacity-80 hover:opacity-100`}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              → Email: hello@beltran.dev
            </motion.a>
            <motion.a
              href="https://github.com/beltran"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base ${cutive.className} opacity-80 hover:opacity-100`}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              → GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/beltran"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base ${cutive.className} opacity-80 hover:opacity-100`}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              → LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
