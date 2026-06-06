"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import {
  heroContainer,
  heroItem,
  heroImageVariant,
} from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: "terminal", label: "GitHub", href: "https://github.com/kazi-Samin", external: true },
  { icon: "link", label: "LinkedIn", href: "https://www.linkedin.com/in/kazi-mahedi-hasan", external: true },
  { icon: "mail", label: "Email", href: "#contact", external: false },
];

export default function Hero() {
  // ── GSAP: cursor spotlight + scroll parallax ────────────────
  useEffect(() => {
    const section = document.getElementById("home");
    const spotlight = document.getElementById("hero-spotlight");

    if (spotlight && section) {
      const handleMouseMove = (e) => {
        const rect = section.getBoundingClientRect();
        gsap.to(spotlight, {
          x: e.clientX - rect.left - 300,
          y: e.clientY - rect.top - 300,
          duration: 1.2,
          ease: "power2.out",
          overwrite: true,
        });
      };
      section.addEventListener("mousemove", handleMouseMove);

      const ctx = gsap.context(() => {
        gsap.to(".hero-glow-parallax", {
          y: 160,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      });

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        ctx.revert();
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* ── Animated background blobs ──────────────────────── */}
      <div className="hero-glow-parallax absolute inset-0 hero-glow pointer-events-none" />

      {/* GSAP cursor spotlight */}
      <div
        id="hero-spotlight"
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full
          bg-[var(--color-primary)]/5 blur-[80px]"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Drifting background blobs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── Main Hero Content Grid ─────────────────────────── */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-[1280px] mx-auto px-5 md:px-20 relative z-10"
      >
        {/* LEFT SIDE: Typography & Info */}
        <motion.div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 order-2 lg:order-1">
          {/* Status Badge */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center px-4 py-1.5 rounded-full glass-card
              border border-[var(--color-primary)]/20 text-[var(--color-primary)]
              text-xs font-semibold tracking-[0.2em]"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-2"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            OPEN TO WORK • FULL STACK DEVELOPER
          </motion.div>

          <motion.div className="space-y-1 w-full">
            {/* Small intro line */}
            <motion.p
              variants={heroItem}
              className="text-sm sm:text-base font-semibold tracking-wider text-[var(--color-primary)] uppercase"
            >
              Hey, I’m
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={heroItem}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-on-surface)] tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Kazi Mahedi Hasan
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={heroItem}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-on-surface-variant)]/90 tracking-wide pt-1"
            >
              Frontend-Focused Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={heroItem}
            className="text-sm sm:text-base text-[var(--color-on-surface-variant)] max-w-xl leading-relaxed tracking-wide font-normal"
          >
            I build modern, scalable, and responsive web applications using Next.js, React.js, Tailwind CSS, Node.js, and Express.js with a strong focus on clean UI, smooth user experience, and modern web performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <MagneticButton strength={0.15}>
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 35px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="block bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-3.5
                  rounded-xl font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)]
                  transition-shadow text-center min-w-[170px]"
              >
                View Projects
              </motion.a>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <motion.a
                href="https://drive.google.com/file/d/1RcZYCLPVtxZX-wD5s3IxUkpvEgY_CTeR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: "var(--color-surface-container)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="border border-[var(--color-outline)] text-[var(--color-on-surface)]
                  px-8 py-3.5 rounded-xl font-semibold transition-colors text-center min-w-[170px] block"
              >
                View Resume
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={heroItem}
            className="flex flex-wrap gap-6 pt-2 text-[var(--color-on-surface-variant)]"
          >
            {socialLinks.map(({ icon, label, href, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3, color: "var(--color-primary)" }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-2 group"
                aria-label={label}
              >
                <motion.span
                  className="material-symbols-outlined text-[20px]"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {icon}
                </motion.span>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Clean Profile Image Container */}
        <motion.div className="lg:col-span-5 flex justify-center lg:justify-end w-full order-1 lg:order-2">
          <motion.div
            variants={heroImageVariant}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] aspect-square"
          >
            {/* Soft animated blue glow backdrop */}
            <motion.div
              className="absolute inset-0 bg-blue-500/15 blur-[60px] rounded-full pointer-events-none"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Editorial asymmetric image card */}
            <div className="relative w-full h-full rounded-[2.5rem] rounded-tr-none border border-white/10 p-2 shadow-2xl glass-card overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-[2.3rem] rounded-tr-none border border-[var(--color-primary)]/20 pointer-events-none z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="w-full h-full relative overflow-hidden rounded-[2.2rem] rounded-tr-none">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR3oH9M5n1IOApVK-wlpGROBTZNYanF3QmX5aPEbTesIh2WhlPZkb363qYTXXOR89hYkMr28VTIb7-Ac8UX5ffaDwIGbKqyccHhPKy0n7_w2bNYrqGWu8Dp48kddylpJquufuQpPBdPsr9A-NwxXRMbTsLcDsB4TAm8ElJeafMUXslhlh77Mzd2wbzitfm-kXVAwPBdKJZPQNWKCyQvOGtszors0kbSwtFj5qZN6QGxisGjq-vNjS5jnoUOt5CaXk8Bg3d6WlDU9M"
                  alt="Kazi Mahedi Hasan — Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover grayscale-0 lg:grayscale lg:hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
