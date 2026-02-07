"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Tag, BookOpen, ExternalLink, Folder } from "lucide-react";

const projectMeta: Record<
  string,
  { icon: React.ElementType; color: string; tagline: string }
> = {
  "AI Resume Analyzer": {
    icon: Sparkles,
    color: "secondary",
    tagline: "AI / Machine Learning",
  },
  "Kids Learning App": {
    icon: BookOpen,
    color: "accent",
    tagline: "Mobile / Education",
  },
  "Discount Grab": {
    icon: Tag,
    color: "primary",
    tagline: "Full-Stack / E-Commerce",
  },
};

interface Project {
  name: string;
  tech: string;
  description: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="relative py-24 px-6 bg-base-200/50 dot-grid">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center mb-14">
          <p className="code-comment mb-2">{"// things I've built"}</p>
          <h2 className="section-heading">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle">
            Products I&apos;ve built and shipped to real users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, idx) => {
            const meta = projectMeta[project.name];
            const Icon = meta?.icon || Folder;
            const color = meta?.color || "primary";

            return (
              <div
                key={idx}
                className="animate-on-scroll"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="terminal-card h-full flex flex-col">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span /><span /><span />
                    </div>
                    <span className="terminal-title">
                      {project.name.toLowerCase().replace(/\s+/g, "-")}.tsx
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    {/* Project icon + tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-${color}/10 border border-${color}/20 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${color}`} />
                      </div>
                      <span className={`text-[10px] font-mono text-${color}/70 bg-${color}/[0.08] px-2 py-0.5 rounded border border-${color}/20`}>
                        {meta?.tagline || "Project"}
                      </span>
                    </div>

                    <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-sm text-base-content/45 leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.split(", ").map((tech) => (
                        <span key={tech} className="tech-tag text-[10px]">
                          {tech}
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
    </div>
  );
}
