"use client";

import React, { useState, useEffect } from "react";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Experience from "./portfolio/Experience";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/Contact";
import Hero from "./portfolio/Hero";
import { Menu, X, ArrowUp, GithubIcon, LinkedinIcon, Mail, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const skills = {
    frontend: [
      "React",
      "React Native (Expo)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Zustand",
      "Apollo Client",
      "TanStack Query",
      "Tailwind CSS",
      "Styled Components",
      "Chakra UI",
      "Shadcn",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "GraphQL (Apollo Server)",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "MQTT",
      "Microservices Architecture",
      "JWT",
      "OAuth",
    ],
    database: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Realm",
      "Firebase Realtime Database",
      "GraphQL Subscriptions",
    ],
    cloud: [
      "AWS (EC2, Lambda, S3, CloudFront, RDS, SNS, VPC)",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions, Expo EAS)",
      "Terraform",
    ],
    testing: [
      "Jest",
      "React Testing Library",
      "TDD",
      "Storybook",
      "A/B Testing",
      "WCAG 2.1 AA Compliance",
    ],
  };

  const experience = [
    {
      role: "Senior React Developer",
      company: "Refactory (Client: ICPAU)",
      period: "Mar 2025 - Dec 2025",
      achievements: [
        "Led engineering of CPA Audit Tool serving 1,000+ auditors across Uganda, supervising 3 junior developers through structured code reviews.",
        "Architected Pre-Engagement, Planning, Fieldwork, and Execution modules with AI-powered validation using DeepSeek integration.",
        "Built ISA-compliant reporting engine with multi-format exports and Regulatory Dashboard for real-time compliance tracking.",
        "Integrated AWS S3 cloud storage, RBAC security model, and offline-sync capabilities reducing data loss incidents by 90%.",
        "Delivered 35% faster feature delivery through React best practices and mentoring across the engineering team.",
      ],
    },
    {
      role: "React Developer",
      company: "Refactory (Client: Freude Gizmo, Japan)",
      period: "Oct 2024 - Mar 2025",
      achievements: [
        "Engineered accessible, WCAG 2.1 AA-compliant UIs with React, TypeScript, and Styled Components boosting mobile conversion by 28%.",
        "Re-engineered Node.js file-upload services with AWS S3 pre-signed URLs, improving upload success by 40% for 500MB files.",
        "Migrated from Context API to Redux Toolkit across 12 feature modules, reducing state-management bugs by 30%.",
        "Implemented TanStack Query caching and GraphQL query batching, reducing API calls by 35% and saving $2,400/month in server costs.",
        "Mentored junior developers on design patterns and GraphQL optimization, accelerating team productivity by 45%.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Service Cops Limited",
      period: "Apr 2022 - Oct 2024",
      achievements: [
        "Scaled mobile platform to 5,000+ active users maintaining 4.6-star rating through performance-optimized React Native architecture.",
        "Reduced bandwidth consumption by 45% architecting GraphQL API layer with Apollo Server for efficient data fetching.",
        "Processed $500K+ monthly payments with 20% higher success rate integrating Mastercard Payment Gateway SDK.",
        "Cut app latency by 35% implementing offline-first caching strategy with Redux Persist and Apollo Client.",
        "Increased user engagement by 25% building real-time WebSocket notifications with GraphQL subscriptions and AWS SNS.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ridex Technologies",
      period: "Mar 2020 - Apr 2022",
      achievements: [
        "Built ride-sharing platform handling 3,000+ concurrent users and 15,000+ MAU with 99.9% uptime using React Native.",
        "Improved ETA accuracy by 20% integrating Google Maps SDK and Firebase real-time location tracking.",
        "Reduced executive reporting time by 50% delivering analytics dashboards with React and D3.js visualizations.",
        "Boosted customer satisfaction scores by 18% implementing Socket.IO real-time chat for driver-rider communication.",
        "Decreased server response time by 40% optimizing Node.js API endpoints through query optimization and caching strategies.",
      ],
    },
    {
      role: "Web Developer",
      company: "Galaxy FM & Howwe Media House",
      period: "Jan 2018 - Mar 2020",
      achievements: [
        "Enhanced site performance by 50% customizing WordPress themes with optimized JavaScript and asset compression techniques.",
        "Enabled 1,000+ concurrent listeners by implementing WebRTC live-streaming functionality with 99% stream reliability.",
        "Increased organic traffic by 40% redesigning mobile-responsive site with SEO optimization and reduced bounce rate by 25%.",
        "Improved content delivery speed by 35% implementing CDN integration and lazy-loading strategies across media-heavy pages.",
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
      name: "Discount Grab",
      tech: "React, Node.js, MongoDB, AWS",
      description:
        "Full-stack e-commerce platform with 40% improved order-processing performance",
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

      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);

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

  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "tech-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-bold font-mono">davies.dev</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/[0.08] border border-primary/20"
                        : "text-base-content/40 hover:text-base-content/70 hover:bg-base-content/[0.04] border border-transparent"
                    }`}
                  >
                    {item.toLowerCase()}
                  </button>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="mailto:davieswabuluka6@gmail.com"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-content text-xs font-semibold rounded-md hover:shadow-glow transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                Hire Me
              </a>

              {/* Mobile menu */}
              <button
                className="lg:hidden w-8 h-8 rounded-md flex items-center justify-center text-base-content/50 hover:text-primary hover:bg-primary/[0.08] border border-transparent hover:border-primary/20 transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-base-100 border-t border-base-content/[0.06]">
            <div className="max-w-5xl mx-auto px-6 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-mono transition-all ${
                    activeSection === item.toLowerCase()
                      ? "text-primary bg-primary/[0.08] border border-primary/20"
                      : "text-base-content/50 hover:bg-base-content/[0.04] border border-transparent"
                  }`}
                >
                  {`> ${item.toLowerCase()}`}
                </button>
              ))}
              <a
                href="mailto:davieswabuluka6@gmail.com"
                className="block w-full text-center mt-2 px-4 py-2.5 bg-primary text-primary-content text-sm font-semibold rounded-md"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero onclick={() => scrollToSection("projects")} />
      <div className="glow-line" />
      <About />
      <div className="glow-line" />
      <Skills skills={skills} />
      <div className="glow-line" />
      <Experience experience={experience} />
      <div className="glow-line" />
      <Projects projects={projects} />
      <div className="glow-line" />
      <Contact />

      {/* Footer */}
      <footer className="py-10 px-6 bg-base-200/50 border-t border-base-content/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono font-bold text-primary">
                davies.dev
              </span>
              <span className="text-xs text-base-content/30 font-mono">
                // Senior Software Engineer
              </span>
            </div>

            <div className="flex items-center gap-2">
              {[
                {
                  icon: GithubIcon,
                  href: "https://github.com/wabuluka",
                  label: "GitHub",
                },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/dwabuluka",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:davieswabuluka6@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={
                    social.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-8 h-8 rounded-md flex items-center justify-center text-base-content/30 hover:text-primary hover:bg-primary/[0.08] border border-transparent hover:border-primary/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <p className="text-[11px] text-base-content/20 font-mono">
              built with react + typescript + tailwind
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => scrollToSection("hero")}
        className={`fixed bottom-6 right-6 w-9 h-9 rounded-md bg-primary text-primary-content flex items-center justify-center transition-all duration-300 z-40 hover:shadow-glow ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Portfolio;
