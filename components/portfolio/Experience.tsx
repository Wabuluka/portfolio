"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Job {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export default function Experience({ experience }: { experience: Job[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 px-6 bg-base-100"
      aria-labelledby="experience-heading"
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="animate-on-scroll text-center mb-14">
          <p className="code-comment mb-2" aria-hidden="true">{"// career timeline"}</p>
          <h2 id="experience-heading" className="section-heading">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="section-subtitle">
            Companies where I&apos;ve made an impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — decorative */}
          <div
            className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {experience.map((job, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `experience-panel-${idx}`;
              const headingId = `experience-heading-${idx}`;

              return (
                <div
                  key={idx}
                  className="animate-on-scroll relative pl-12"
                  style={{ transitionDelay: `${idx * 0.06}s` }}
                >
                  {/* Timeline dot — decorative */}
                  <div
                    className={`absolute left-[12px] top-5 w-[15px] h-[15px] rounded-full border-2 transition-colors ${
                      isOpen
                        ? "border-primary bg-primary shadow-glow-sm"
                        : "border-base-content/20 bg-base-200"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="terminal-card">
                    {/* WCAG 2.2 §4.1.2 — aria-expanded + aria-controls on accordion */}
                    <h3 id={headingId}>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full text-left p-5 flex items-start gap-3 min-h-[44px]"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className="font-bold text-sm">{job.role}</span>
                            <span className="text-[10px] font-mono text-primary/70 bg-primary/[0.08] px-2 py-0.5 rounded border border-primary/20">
                              {job.period}
                            </span>
                          </div>
                          <p className="text-xs text-base-content/40 font-mono">
                            {job.company}
                          </p>
                        </div>

                        <ChevronDown
                          className={`w-4 h-4 text-base-content/30 flex-shrink-0 mt-1 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    {/* WCAG 2.2 §4.1.2 — role=region + aria-labelledby */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      hidden={!isOpen}
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-5 space-y-2">
                        <div className="glow-line mb-3" aria-hidden="true" />
                        <ul aria-label={`Achievements at ${job.company}`}>
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-base-content/50 leading-relaxed mb-2">
                              <ChevronRight className="w-3 h-3 text-accent mt-1.5 flex-shrink-0" aria-hidden="true" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
