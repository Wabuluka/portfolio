"use client";

import React, { useEffect, useRef } from "react";
import { GithubIcon, LinkedinIcon, GraduationCap, MapPin, Code2 } from "lucide-react";

export default function About() {
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

  const skills = [
    "React", "React Native", "TypeScript", "Redux Toolkit", "Apollo Client",
    "TanStack Query", "Tailwind CSS", "Node.js", "Express.js", "GraphQL",
    "WebSockets", "Microservices", "AWS", "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "Firebase", "Jest", "TDD", "CI/CD", "WCAG 2.1 AA",
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6 bg-base-100" aria-labelledby="about-heading">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center mb-14">
          <p className="code-comment mb-2" aria-hidden="true">{"// get to know me"}</p>
          <h2 id="about-heading" className="section-heading">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="section-subtitle">
            Building products that make a real difference
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Bio card — Terminal */}
          <div className="animate-on-scroll lg:col-span-5" style={{ transitionDelay: "0.05s" }}>
            <div className="terminal-card h-full">
              <div className="terminal-header" aria-hidden="true">
                <div className="terminal-dots">
                  <span /><span /><span />
                </div>
                <span className="terminal-title">about.tsx</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center" aria-hidden="true">
                    <span className="text-xl font-black text-white">DW</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">Davies Wabuluka</h3>
                    <p className="text-xs text-base-content/40 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" /> Dracut, MA
                    </p>
                  </div>
                </div>

                <p className="text-sm text-base-content/50 leading-relaxed mb-6">
                  Full-stack engineer with 7+ years designing production-grade
                  platforms serving 10,000+ users across fintech, ridesharing,
                  and audit management. Expert in real-time systems, payment
                  integrations, and AWS architectures with WCAG 2.2 AA standards.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { value: "35%", label: "Faster delivery" },
                    { value: "10+", label: "Devs mentored" },
                    { value: "99.9%", label: "Uptime" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-base-300/50 border border-base-content/[0.06] rounded-md p-2.5 text-center"
                    >
                      <p className="text-base font-black text-primary font-mono">{s.value}</p>
                      <p className="text-[9px] text-base-content/40 font-mono uppercase tracking-wider">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/wabuluka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-tag gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" /> GitHub
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dwabuluka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-tag-secondary gap-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" aria-hidden="true" /> LinkedIn
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Skills */}
            <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="terminal-card">
                <div className="terminal-header" aria-hidden="true">
                  <div className="terminal-dots">
                    <span /><span /><span />
                  </div>
                  <span className="terminal-title">skills.config</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-sm">Core Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Core technologies">
                    {skills.map((skill) => (
                      <span key={skill} className="tech-tag" role="listitem">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
              <div className="terminal-card">
                <div className="terminal-header" aria-hidden="true">
                  <div className="terminal-dots">
                    <span /><span /><span />
                  </div>
                  <span className="terminal-title">education.log</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-md bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-sm">Education</h3>
                  </div>
                  <div className="space-y-3" role="list" aria-label="Education history">
                    {[
                      { degree: "M.S. Computer Science", school: "Maharishi International University", period: "2024 - Present" },
                      { degree: "B.S. Computer Science", school: "Makerere University", period: "2015 - 2019" },
                    ].map((edu) => (
                      <div
                        key={edu.degree}
                        role="listitem"
                        className="flex items-center gap-4 p-3 bg-base-300/30 border border-base-content/[0.06] rounded-md"
                      >
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm">{edu.degree}</p>
                          <p className="text-xs text-base-content/40 font-mono">{edu.school}</p>
                        </div>
                        <span className="text-[10px] font-mono text-base-content/30 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
