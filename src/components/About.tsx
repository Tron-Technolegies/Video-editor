"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
          The <span className="text-accent">Brief</span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-4 md:mb-0" />
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
          I’m a video editor focused on creating engaging and high-quality
          content for social media and digital platforms. I have experience
          working on both client and personal projects, including a promotional
          video for a karate training center. I specialize in clean cuts, smooth
          transitions, and storytelling that keeps viewers engaged. I’m
          constantly improving my skills and looking to create impactful visual
          content
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:w-1/2 relative aspect-video md:aspect-square max-h-[500px] rounded-2xl overflow-hidden group shadow-2xl shadow-accent/5 focus:outline-none"
      >
        <div className="absolute inset-0 bg-neutral-900 overflow-hidden border border-white/5 rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10" />
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black z-0"
          />
        </div>

        {/* Hover interaction overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-20">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center cursor-pointer hover:bg-accent hover:border-accent transition-colors duration-300"
          >
            <Play className="w-8 h-8 ml-1" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
