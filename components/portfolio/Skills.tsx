"use client";

import React, { useEffect, useRef } from "react";
import { Monitor, Server, Database, Cloud, ShieldCheck } from "lucide-react";

const categoryConfig: Record<
  string,
  { icon: React.ElementType; color: string; label: string }
> = {
  frontend: { icon: Monitor, color: "primary", label: "Frontend" },
  backend: { icon: Server, color: "secondary", label: "Backend & APIs" },
  database: { icon: Database, color: "accent", label: "Databases & Real-time" },
  cloud: { icon: Cloud, color: "info", label: "Cloud & DevOps" },
  testing: { icon: ShieldCheck, color: "success", label: "Testing & QA" },
};

export default function Skills({
  skills,
}: {
  skills: Record<string, string[]>;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="skills" ref={sectionRef} className="relative py-24 px-6 bg-base-200/50 dot-grid" aria-labelledby="skills-heading">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center mb-14">
          <p className="code-comment mb-2" aria-hidden="true">{"// what I work with"}</p>
          <h2 id="skills-heading" className="section-heading">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I use daily
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], idx) => {
            const config = categoryConfig[category];
            const Icon = config?.icon || Monitor;
            const color = config?.color || "primary";

            return (
              <div
                key={category}
                className="animate-on-scroll"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className="terminal-card h-full">
                  <div className="terminal-header" aria-hidden="true">
                    <div className="terminal-dots">
                      <span /><span /><span />
                    </div>
                    <span className="terminal-title">{category}.ts</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-9 h-9 rounded-md bg-${color}/10 border border-${color}/20 flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 text-${color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{config?.label || category}</h3>
                        <p className="text-[10px] text-base-content/30 font-mono">
                          {items.length} modules
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5" role="list" aria-label={`${config?.label || category} skills`}>
                      {(items as string[]).map((skill) => (
                        <span key={skill} className="tech-tag text-[10px]" role="listitem">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
