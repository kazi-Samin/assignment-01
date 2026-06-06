"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact({ onCopyEmail }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("kazisamin0173@gmail.com");
      onCopyEmail();
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-12 overflow-hidden bg-[var(--color-background)]"
      aria-labelledby="contact-heading"
    >
      {/* Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--color-primary)] font-bold mb-4 block">
            GET IN TOUCH
          </span>
          <h2
            id="contact-heading"
            className="text-[40px] md:text-[64px] leading-tight font-bold text-[var(--color-on-surface)] mb-6"
            style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
          >
            Let&apos;s Build Something <br /> Great Together
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing projects, collaborations, internships,
            and exciting new opportunities.
          </p>
        </ScrollReveal>

        {/* Contact Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

            {/* Email Card */}
            <div className="group relative glass-card p-10 rounded-[2.5rem] flex flex-col
              items-center text-center transition-all duration-500 hover:-translate-y-4
              hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-container)]
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">mail</span>
              </div>
              <span className="text-[11px] tracking-widest uppercase font-bold text-[var(--color-on-surface-variant)] mb-2">
                DROP ME A LINE
              </span>
              <a 
                href="mailto:kazisamin0173@gmail.com" 
                className="text-lg font-semibold text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors mb-8 select-all break-all"
                title="Send direct email"
              >
                kazisamin0173@gmail.com
              </a>
              <div className="mt-auto flex flex-col sm:flex-row gap-2 w-full justify-center">
                <a
                  href="mailto:kazisamin0173@gmail.com"
                  className="px-5 py-2.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20
                    text-[var(--color-primary)] text-sm font-medium
                    hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]
                    transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Send Email
                </a>
                <button
                  onClick={handleCopy}
                  className="px-5 py-2.5 rounded-full border border-[var(--color-outline)]
                    text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40
                    text-sm font-medium
                    transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  Copy
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/kazi-mahedi-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card p-10 rounded-[2.5rem] flex flex-col
                items-center text-center transition-all duration-500 hover:-translate-y-4
                hover:shadow-[0_20px_40px_rgba(20,27,43,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0077b5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-container)]
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">link</span>
              </div>
              <span className="text-[11px] tracking-widest uppercase font-bold text-[var(--color-on-surface-variant)] mb-2">
                LINKEDIN
              </span>
              <h4 className="text-lg font-semibold text-[var(--color-on-surface)] mb-8">
                Kazi Mahedi Hasan
              </h4>
              <div className="mt-auto flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm">
                View Profile <span className="material-symbols-outlined text-sm">north_east</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/kazi-Samin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card p-10 rounded-[2.5rem] flex flex-col
                items-center text-center transition-all duration-500 hover:-translate-y-4
                hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-container)]
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">terminal</span>
              </div>
              <span className="text-[11px] tracking-widest uppercase font-bold text-[var(--color-on-surface-variant)] mb-2">
                GITHUB
              </span>
              <h4 className="text-lg font-semibold text-[var(--color-on-surface)] mb-8">
                kazi-Samin
              </h4>
              <div className="mt-auto flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm">
                Follow Projects <span className="material-symbols-outlined text-sm">north_east</span>
              </div>
            </a>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
