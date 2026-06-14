"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { fadeDown, easeExpo } from "@/lib/animations";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Active section tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 280) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      className="sticky top-4 mx-auto w-[95%] max-w-[1280px] rounded-full
        border border-white/10 bg-[var(--color-surface)]/40 backdrop-blur-md
        shadow-lg z-50 flex justify-between items-center px-6 md:px-8 py-3"
    >
      {/* Logo */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="text-2xl font-bold tracking-tighter text-[var(--color-primary)] cursor-pointer decoration-transparent block"
        style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
      >
        KS
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-sm tracking-widest font-medium transition-colors duration-200 py-1"
            style={{
              color: isActive(link.href)
                ? "var(--color-primary)"
                : "var(--color-on-surface-variant)",
            }}
          >
            <motion.span
              whileHover={{ color: "var(--color-primary)" }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.span>

            {/* Sliding underline indicator */}
            {isActive(link.href) && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[var(--color-primary)]"
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        {mounted && (
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="material-symbols-outlined text-[var(--color-primary)] cursor-pointer"
          >
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </motion.button>
        )}

        {/* Resume */}
        <motion.a
          href="https://drive.google.com/file/d/1RcZYCLPVtxZX-wD5s3IxUkpvEgY_CTeR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20
            text-[var(--color-primary)] px-5 py-2 rounded-full text-sm font-medium
            hover:bg-[var(--color-primary)]/20 transition-colors"
        >
          Resume
        </motion.a>

        {/* Hamburger */}
        <motion.button
          className="md:hidden text-[var(--color-on-surface)] p-1"
          onClick={() => setMenuOpen((p) => !p)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            key={menuOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="material-symbols-outlined block"
          >
            {menuOpen ? "close" : "menu"}
          </motion.span>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: easeExpo }}
            className="absolute top-[calc(100%+8px)] left-0 right-0 mx-2 rounded-2xl
              border border-white/10 bg-[var(--color-surface)]/95 backdrop-blur-md
              shadow-2xl p-4 flex flex-col gap-1 md:hidden z-50"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25, ease: easeExpo }}
                className={`text-sm font-medium py-2.5 px-4 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-bold"
                    : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)]"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
