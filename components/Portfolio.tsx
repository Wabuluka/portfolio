"use client";

import React, { useState, useEffect } from "react";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Experience from "./portfolio/Experience";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/Contact";
import Hero from "./portfolio/Hero";
import ThemeToggle from "./ThemeToggle";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    frontend: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Styled Components",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
      "Socket.IO",
    ],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    cloud: [
      "AWS (EC2, Lambda, S3, RDS, VPC)",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  };

  const experience = [
    {
      role: "React Developer",
      company: "Refactory - Freude Gizmo (Japan)",
      period: "Oct 2024 - Mar 2025",
      achievements: [
        "Built WCAG 2.1 AA compliant UIs serving 10K+ concurrent users with 99.95% uptime",
        "Improved upload success rate by 40% through AWS S3 optimization",
        "Reduced API calls by 35% with TanStack Query caching strategies",
        "Mentored 4 junior developers on React patterns and testing",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Service Cops Limited",
      period: "Apr 2022 - Oct 2024",
      achievements: [
        "Led React Native app development serving 5K+ active users",
        "Processed $500K+ monthly transactions with 20% success rate improvement",
        "Reduced app latency by 35% through performance optimization",
        "Boosted engagement by 25% with real-time notification system",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ridex Technologies",
      period: "Mar 2020 - Apr 2022",
      achievements: [
        "Scaled ride-sharing platform to 15K+ MAU with 99.9% uptime",
        "Reduced ETA calculation errors by 20% with Firebase integration",
        "Halved executive reporting time through analytics dashboards",
        "Increased retention by 15% via strategic push notifications",
      ],
    },
  ];

  const projects = [
    {
      name: "AI Resume Analyzer",
      tech: "React, Zustand, Tailwind, Node.js, OpenAI GPT4",
      description:
        "Resume-scoring web app with automated skill extraction and real-time AI feedback",
    },
    {
      name: "Kids Learning App",
      tech: "React Native, Realm, Redux, Node.js",
      description:
        "Offline-first education app with context-aware learning paths serving 200+ students",
    },
    {
      name: "Transtel E-Commerce",
      tech: "React, Node.js, MongoDB, AWS",
      description:
        "Full-stack platform with 40% improved order-processing performance",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navigation */}
      <div className="navbar bg-base-100 shadow fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {["About", "Skills", "Experience", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a onClick={() => scrollToSection(item.toLowerCase())}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Davies Wabuluka
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={
                      activeSection === item.toLowerCase() ? "active" : ""
                    }
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a
            href="mailto:davieswabuluka6@gmail.com"
            className="btn btn-primary btn-sm"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <Hero onclick={() => scrollToSection("projects")} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Experience Section */}
      <Experience experience={experience} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <p className="font-bold text-lg">Davies Wabuluka</p>
          <p className="opacity-70">
            Full-Stack Engineer | React • Node.js • AWS
          </p>
          <p className="text-sm opacity-60">
            © 2025 - Built with React, TypeScript & DaisyUI
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
