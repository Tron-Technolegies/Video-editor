"use client";

import { motion } from "framer-motion";
import { Video, Film, Wand2, Scissors, PlaySquare } from "lucide-react";

const TOOLS = [
  { name: "Premiere Pro", category: "Non-linear Editing", icon: Scissors, level: 95 },
  { name: "After Effects", category: "Motion Graphics / VFX", icon: Wand2, level: 90 },
  { name: "DaVinci Resolve", category: "Color Grading", icon: PlaySquare, level: 85 },
  { name: "Cinema 4D", category: "3D Animation", icon: Film, level: 75 },
  { name: "Blender", category: "3D Modeling / Rendering", icon: Video, level: 80 },
];

export default function Experience() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto w-full relative z-10">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-center">
          Workflow & <span className="text-accent">Arsenal</span>
        </h2>
        <p className="text-neutral-400 text-center max-w-xl">
          The primary tools and software I utilize to bring visions to life with precision and cinematic quality.
        </p>
      </div>

      <div className="relative flex flex-col gap-12">
        {/* Timeline Center Line / Left Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 ml-[23px] md:ml-0" />

        {TOOLS.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-8 relative z-10"
          >
            {/* Left Side (Desktop) */}
            <div className="w-full md:w-1/2 md:pr-12 md:text-right flex md:block pl-[60px] md:pl-0 flex-col justify-center">
              <div className="md:hidden flex items-center gap-4 mb-2 absolute left-0 top-0">
                <div className="w-[48px] h-[48px] rounded-xl bg-background border border-white/10 flex items-center justify-center relative z-20">
                  <tool.icon className="w-6 h-6 text-accent" />
                  <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-accent md:hidden" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-wider">{tool.category}</p>
            </div>

            {/* Desktop Center Icon */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-surface border border-white/10 items-center justify-center z-20 hover:scale-110 hover:border-accent/50 transition-all duration-300">
               <tool.icon className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
            </div>

            {/* Right Side (Progress Bar) */}
            <div className="w-full md:w-1/2 md:pl-16 pl-[60px] md:pl-[64px]">
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mt-2 md:mt-0">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-accent/40 to-accent rounded-full relative"
                >
                   <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]" />
                </motion.div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
