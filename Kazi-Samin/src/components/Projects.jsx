"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    number: "01",
    title: "MediCare",
    category: "Full Stack Doctor Appointment Platform",
    description:
      "MediCare is a modern full-stack healthcare appointment platform where users can explore doctors, book appointments, manage schedules, and maintain healthcare profiles through a clean and responsive dashboard system.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB", "Better Auth"],
    features: [
      "Secure Authentication & Google Sign-In",
      "Doctor Listing & Search",
      "Appointment Booking System",
      "Dashboard Management",
      "User Profile System",
      "Secure Backend API",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8q4iUaq-seLr_yL4g7u3NK99x0KlMhcpqXLyJPTXffAbCjVFweNW6Ci8W6E8Gm2XIgsgroAh7iAtdX94WiOaCUnA3fo7iazb1YqgM7DimUFyiHfwQRQTXNh_zSJbW48B1X2qvRzZWkW9uG7heUik56D2m2kqTnZa-OBaGYjBHzgUM13tvx1qcgJFT4N80QZN51V_UiyJXI6qhzu71FEfKmuebIwkebfzNgyjvkA9aRrlp16UG79zCwEGFAoF6-Z9Fgugp7W_y9oQ",
    glowColor: "#10b981",
    accentColor: "rgba(16,185,129,0.15)",
    liveLink: "https://assignment-09-kappa.vercel.app/home",
    githubLink: "https://github.com/kazi-Samin/Assignment-09",
  },
  {
    number: "02",
    title: "DigiTools Platform",
    category: "Responsive Digital Product Platform",
    description:
      "DigiTools Platform is a responsive web application designed to help users explore and manage digital tools in a clean and organized interface with smooth browsing experiences and interactive product management features.",
    tags: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "JavaScript ES6+", "React Toastify", "Vite"],
    features: [
      "Interactive Cart & Add/Remove System",
      "Duplicate Prevention Logic",
      "Dynamic Toast Notification Alerts",
      "Fully Responsive Grid Layout",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClpsBvYqtR0A5wduvH-2BKfxW9HidvMUH03DSNlcIWA35KngewFXEmI3L2NuzlObvGOjg5R-go7jrWeG_Rtr1DX6aM290qUEQDpH86UWA_w-aecvTZl4NVVXrjZruYRA5H7FnkiO4hbaWgOBj9NS7VPizrq8gQxhPJ-mMTo-heXUZb7xlqd4vx7zDmV9fap_0J1lKifgfSe8GcW-WHsEbxO9meRBKYvLD4WtU4BDR7EsnicNKO9OCh7QJzqO1rxGDdh5gyKceIfVQ",
    glowColor: "#8b5cf6",
    accentColor: "rgba(139,92,246,0.15)",
    liveLink: "https://digitoolsplatform06.netlify.app/",
    githubLink: "https://github.com/kazi-Samin/Assignment-06",
  },
  {
    number: "03",
    title: "SkillSphere",
    category: "Modern E-Learning Platform",
    description:
      "SkillSphere is a modern e-learning platform designed for students and aspiring developers to explore premium courses, manage profiles, and follow structured learning paths through a futuristic and responsive user interface.",
    tags: ["Next.js", "MongoDB", "Node.js", "Better Auth", "DaisyUI", "React.js", "Tailwind CSS", "Express.js"],
    features: [
      "Secure Authentication & Credentials Portal",
      "Trending Course Library & Search",
      "Dynamic Paths & Subject Guides",
      "Student Management Profile Dashboard",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6CWTHO6UDN-6osyROzvg-6TV7Pt1ZBwTrtAPnDNyoTC-NIFJF9y-3blb1WbH_iDLSIieipP2plWBdoFjHyCZVOd0VFXRaUSmshV9oEQuQwcut6zWhURwVRTs-xT-g_ELcsTZWAGCxk2hsSjkzxbK8K-29RSw9Lp1SxyQ7mzAsGbsJtsF0LxRYidiFbS_FhQz_GVUX0Vt3iJaBVqmceKtDnSDQPEe5bVItl_QRm42H8t9OMqyTgcG90LaV5VBkHmTTu0U-j0s_qHY",
    glowColor: "#6366f1",
    accentColor: "rgba(99,102,241,0.15)",
    liveLink: "https://assignment-008-wine.vercel.app/",
    githubLink: "https://github.com/kazi-Samin/Assignment-008",
  },
];

function ProjectLinks({ liveLink, githubLink, glowColor }) {
  return (
    <div className="flex flex-wrap gap-3 pt-4">
      <motion.a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${glowColor}66` }}
        whileTap={{ scale: 0.95 }}
        className="group/btn flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: `linear-gradient(135deg, ${glowColor} 0%, color-mix(in srgb, ${glowColor} 70%, black) 100%)`,
          color: "#ffffff",
        }}
      >
        <span className="material-symbols-outlined text-[18px] group-hover/btn:rotate-12 transition-transform">
          open_in_new
        </span>
        Live Demo
      </motion.a>
      <motion.a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
        whileTap={{ scale: 0.95 }}
        className="group/btn flex items-center gap-2 glass-card px-6 py-2.5 rounded-xl
            text-[var(--color-on-surface)] text-sm font-semibold transition-all border border-[var(--color-outline-variant)]/30"
      >
        <span className="material-symbols-outlined text-[18px] group-hover/btn:rotate-12 transition-transform">
          code
        </span>
        GitHub Repo
      </motion.a>
    </div>
  );
}

function FeatureBadge({ text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0"
        aria-hidden="true"
      />
      <span>{text}</span>
    </div>
  );
}

export default function Projects() {
  const p1 = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="py-24 px-5 md:px-20 max-w-[1280px] mx-auto overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Section Header */}
      <ScrollReveal className="text-left mb-20 relative">
        <div className="absolute -top-6 left-0 w-24 h-[1px] bg-[var(--color-primary)]/50" />
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-primary)] font-bold mb-4 block">
          SELECTED CREATIVE WORK
        </span>
        <h2
          id="projects-heading"
          className="text-5xl md:text-7xl font-light text-[var(--color-on-surface)] leading-none"
        >
          Featured <span className="font-playfair italic font-normal text-[var(--color-primary)]">Projects</span>
        </h2>
        <p className="text-base md:text-lg text-[var(--color-on-surface-variant)] max-w-xl mt-6 leading-relaxed">
          Showcasing production-ready full stack systems, responsive digital products, and modern educational platforms.
        </p>
      </ScrollReveal>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ── PROJECT 01 (FEATURED WIDE CARD) ── */}
        <div className="lg:col-span-12">
          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-card p-6 md:p-10 lg:p-12 group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center transition-all duration-500 hover:border-white/20"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {/* Background Glow */}
              <div
                className="absolute -right-20 -bottom-20 w-[400px] h-[400px] blur-[120px] rounded-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundColor: p1.glowColor }}
              />

              {/* Number Overlay */}
              <div className="absolute top-4 right-8 select-none pointer-events-none font-playfair italic text-8xl md:text-[140px] text-white/5 font-black leading-none">
                {p1.number}
              </div>

              {/* Image Half */}
              <div className="w-full lg:w-[50%] relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <Image
                  src={p1.image}
                  alt={`${p1.title} — ${p1.category}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                
                {/* Float tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-bold px-3.5 py-1.5 rounded-full"
                    style={{
                      backgroundColor: p1.accentColor,
                      color: p1.glowColor,
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${p1.glowColor}40`,
                    }}
                  >
                    Featured Product
                  </span>
                </div>
              </div>

              {/* Content Half */}
              <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-4">
                <span className="text-[11px] tracking-[0.25em] uppercase font-bold" style={{ color: p1.glowColor }}>
                  {p1.category}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-light text-[var(--color-on-surface)] leading-tight">
                  {p1.title}
                </h3>

                <p className="text-sm md:text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                  {p1.description}
                </p>

                {/* Vertical Line Details */}
                <div className="border-l-2 border-[var(--color-outline-variant)]/30 pl-4 py-1 space-y-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {p1.features.slice(0, 4).map((feat) => (
                      <FeatureBadge key={feat} text={feat} />
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {p1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold
                        bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ProjectLinks liveLink={p1.liveLink} githubLink={p1.githubLink} glowColor={p1.glowColor} />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── PROJECTS 02 & 03 (SPLIT GRID CARDS) ── */}
        {secondaryProjects.map((proj) => (
          <div key={proj.title} className="col-span-1 lg:col-span-6">
            <ScrollReveal className="h-full">
              <div
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-card p-6 md:p-8 group flex flex-col justify-between h-full transition-all duration-500 hover:border-white/20"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
                }}
              >
                {/* Background Glow */}
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] blur-[100px] rounded-full opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"
                  style={{ backgroundColor: proj.glowColor }}
                />

                {/* Number Overlay */}
                <div className="absolute top-4 right-6 select-none pointer-events-none font-playfair italic text-7xl md:text-8xl text-white/5 font-black leading-none">
                  {proj.number}
                </div>

                <div className="space-y-6">
                  {/* Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                    <Image
                      src={proj.image}
                      alt={`${proj.title} — ${proj.category}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className="text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: proj.accentColor,
                          color: proj.glowColor,
                          backdropFilter: "blur(6px)",
                          border: `1px solid ${proj.glowColor}30`,
                        }}
                      >
                        Case Study
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold block" style={{ color: proj.glowColor }}>
                      {proj.category}
                    </span>
                    
                    <h3 className="text-2xl font-light text-[var(--color-on-surface)] leading-tight">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed min-h-[72px]">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold
                            bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features Detail Grid (4 Points) */}
                    <div className="border-l-2 border-[var(--color-outline-variant)]/30 pl-4 py-1 mt-4 space-y-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                        {proj.features.slice(0, 4).map((feat) => (
                          <FeatureBadge key={feat} text={feat} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <ProjectLinks liveLink={proj.liveLink} githubLink={proj.githubLink} glowColor={proj.glowColor} />
              </div>
            </ScrollReveal>
          </div>
        ))}

      </div>
    </section>
  );
}
