"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, Mail, Terminal, ChevronRight } from "lucide-react";

const roles = [
  "Senior Software Engineer",
  "React & TypeScript Expert",
  "Node.js & AWS Architect",
  "React Native Developer",
];

const techStack = ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "React Native"];

export default function Hero({ onclick }: { onclick: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-base-100 dot-grid overflow-hidden" aria-labelledby="hero-heading">
      {/* Gradient orbs — decorative */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/[0.05] rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/[0.05] rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full py-32">
        {/* Status line — WCAG 2.2 §4.1.3 Status Messages */}
        <div
          className={`mb-8 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/[0.1] border border-accent/20 text-accent text-sm font-mono" role="status">
            <span className="status-dot" aria-hidden="true" />
            available for hire
          </span>
        </div>

        {/* Terminal-style name block */}
        <div
          className={`mb-6 transition-all duration-500 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="code-comment mb-2" aria-hidden="true">{"// Hello, I'm"}</p>
          <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            <span className="text-base-content">Davies</span>
            <br />
            <span className="gradient-text">Wabuluka</span>
          </h1>
        </div>

        {/* Typing role — WCAG 2.2 §4.1.3 Live region for dynamic content */}
        <div
          className={`mb-8 transition-all duration-500 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 font-mono text-base md:text-lg">
            <ChevronRight className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-base-content/70" aria-live="polite" aria-atomic="true">{text}</span>
            <span className="w-[2px] h-5 bg-primary animate-blink" aria-hidden="true" />
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-base text-base-content/50 max-w-xl leading-relaxed mb-10 transition-all duration-500 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          7+ years designing production-grade platforms serving 10,000+ users
          across fintech, ridesharing, and audit management. Expert in React,
          TypeScript, Node.js & AWS — delivering measurable impact.
        </p>

        {/* CTA + Metrics — WCAG 2.2 §2.5.8 Target Size */}
        <div
          className={`flex flex-col md:flex-row gap-8 items-start transition-all duration-500 delay-[400ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onclick}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold text-sm rounded-lg hover:shadow-glow transition-all duration-300 min-h-[44px]"
            >
              <Terminal className="w-4 h-4" aria-hidden="true" />
              View Projects
            </button>
            <a
              href="mailto:davieswabuluka6@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-base-content/20 text-base-content/70 font-semibold text-sm rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-300 min-h-[44px]"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          {/* Metrics */}
          <div className="flex gap-8 md:ml-4" role="list" aria-label="Key metrics">
            {[
              { value: "7+", label: "years" },
              { value: "10K+", label: "users" },
              { value: "$500K+", label: "txns/mo" },
            ].map((s) => (
              <div key={s.label} role="listitem">
                <p className="text-2xl md:text-3xl font-black text-primary" aria-hidden="true">{s.value}</p>
                <p className="text-[11px] font-mono text-base-content/30 uppercase tracking-wider" aria-hidden="true">
                  {s.label}
                </p>
                <span className="sr-only">{s.value} {s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div
          className={`flex flex-wrap gap-2 mt-12 transition-all duration-500 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          role="list"
          aria-label="Tech stack"
        >
          <span className="text-[11px] font-mono text-base-content/30 mr-2 self-center" aria-hidden="true">stack:</span>
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag" role="listitem">{tech}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator — decorative */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-[10px] font-mono text-base-content/20 uppercase tracking-widest">scroll</span>
        <ArrowDown className="w-4 h-4 text-base-content/20 animate-bounce" />
      </div>
    </section>
  );
}
