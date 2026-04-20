"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = [
  "All",
  "Grading",
  "Short Films",
  "Cinematography",
  "Recent Works",
  "Edits",
  "3D & VFX",
  "Motion Graphics",
  "Short Form Content",
];

const PROJECTS = [
  {
    id: 1,
    title: "Thar & Fortuner",
    category: "Grading",
    type: "short",
    color: "from-blue-500/20",
    videoId: "HEzODn3dxeQ",
    isShort: true,
  },
  {
    id: 2,
    title: "Dubai",
    category: "3D & VFX",
    type: "tall",
    color: "from-purple-500/20",
    videoId: "x4E2qbwgvoo",
    isShort: true,
  },
  {
    id: 3,
    title: "Dubai Cars",
    category: "Cinematography",
    type: "square",
    color: "from-emerald-500/20",
    videoId: "fHg_73Fnjy4",
    isShort: true,
  },
  {
    id: 4,
    title: "Dubai Cars 2",
    category: "Edits",
    type: "short",
    color: "from-rose-500/20",
    videoId: "6tI2Zaq8h-k",
    isShort: true,
  },
  {
    id: 5,
    title: "Cars",
    category: "Motion Graphics",
    type: "tall",
    color: "from-amber-500/20",
    videoId: "5t_LWrmA31Q",
    isShort: true,
  },
  {
    id: 6,
    title: "Karate",
    category: "Short Form Content",
    type: "tall",
    color: "from-cyan-500/20",
    videoId: "RgaLlJWw-DQ",
    isShort: true,
  },
  {
    id: 7,
    title: "Arabian Thattukada",
    category: "Short Films",
    type: "square",
    color: "from-red-500/20",
    videoId: "jusZLX6xt4o",
    isShort: true,
  },
  {
    id: 8,
    title: "Dubai 2",
    category: "Recent Works",
    type: "short",
    color: "from-accent/20",
    videoId: "GHDFf99drC4",
    isShort: false,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="py-24 px-4 md:px-8 max-w-screen-2xl mx-auto w-full min-h-screen"
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10 text-center">
          Featured <span className="text-accent">Works</span>
        </h2>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === category
                  ? "bg-accent border-accent text-white"
                  : "bg-transparent border-white/10 text-neutral-400 hover:text-white hover:border-white/30",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              onClick={() => setSelectedVideo(project.id)}
              className={cn(
                "relative w-full rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid border border-white/5",
                project.type === "tall"
                  ? "aspect-[3/4]"
                  : project.type === "short"
                    ? "aspect-[16/9]"
                    : "aspect-square",
              )}
            >
              <div className="absolute inset-0 bg-neutral-900" />
              {project.videoId && (
                <img
                  src={`https://i3.ytimg.com/vi/${project.videoId}/maxresdefault.jpg`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://i3.ytimg.com/vi/${project.videoId}/hqdefault.jpg`;
                  }}
                />
              )}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br to-neutral-900/90 group-hover:to-neutral-900/40 transition-colors duration-500",
                  project.color,
                )}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <span className="text-accent text-xs font-bold tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 w-12 h-12 z-50 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {(() => {
              const project = PROJECTS.find((p) => p.id === selectedVideo);
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  className={cn(
                    "w-full bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden flex flex-col items-center justify-center relative shadow-[0_0_100px_rgba(176,38,255,0.15)]",
                    project?.isShort
                      ? "max-w-[400px] aspect-[9/16]"
                      : "max-w-6xl aspect-video",
                  )}
                >
                  {project && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  )}
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
