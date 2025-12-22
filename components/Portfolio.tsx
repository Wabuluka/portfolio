"use client";

import React, { useState, useEffect } from "react";

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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        <div className="navbar-end">
          <a
            href="mailto:davieswabuluka6@gmail.com"
            className="btn btn-primary btn-sm"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div
        id="hero"
        className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 pt-16"
      >
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className="avatar placeholder mb-6">
              <div className="bg-gradient-to-br from-primary to-secondary text-neutral-content rounded-full w-32 ring ring-primary ring-offset-base-100 ring-offset-2">
                <span className="text-5xl font-bold">DW</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse py-4">
              Full-Stack Engineer
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-80">
              React • TypeScript • Node.js • AWS
            </p>
            <p className="py-6 text-lg max-w-2xl mx-auto">
              7+ years building scalable web and mobile platforms serving
              10,000+ users across fintech, transport, and ed-tech. Specialized
              in high-performance UIs, microservices architecture, and cloud
              deployments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn btn-primary btn-lg"
              >
                View Projects
              </button>
              <a
                href="https://www.linkedin.com/in/davies-wabuluka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                LinkedIn
              </a>
            </div>
            <div className="stats stats-vertical md:stats-horizontal shadow mt-12 bg-base-100">
              <div className="stat">
                <div className="stat-title">Years Experience</div>
                <div className="stat-value text-primary">7+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Users Served</div>
                <div className="stat-value text-secondary">10K+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Uptime</div>
                <div className="stat-value text-accent">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <span className="flex flex-row items-center gap-3">
                  🎯
                  <h3 className="card-title text-primary">Focus Areas</h3>
                </span>
                <ul className="space-y-2">
                  <li>✅ Accessible, WCAG 2.1 AA compliant interfaces</li>
                  <li>✅ Scalable microservices architecture</li>
                  <li>✅ Real-time systems with WebSockets</li>
                  <li>✅ Cloud-native AWS deployments</li>
                  <li>✅ Performance optimization & caching</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-secondary">🎓 Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Master of Computer Science</p>
                    <p className="text-sm opacity-70">
                      Maharishi International University
                    </p>
                    <p className="text-sm opacity-70">Expected 2027</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Bachelor of Computer Science
                    </p>
                    <p className="text-sm opacity-70">
                      Makerere University, Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="card-body">
                  <h3 className="card-title text-lg capitalize mb-4 text-primary">
                    {category === "frontend" && "⚛️"}
                    {category === "backend" && "⚙️"}
                    {category === "database" && "🗄️"}
                    {category === "cloud" && "☁️"}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <div key={skill} className="">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="py-20 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="card-title text-xl text-primary">
                        {job.role}
                      </h3>
                      <p className="text-lg font-semibold opacity-80">
                        {job.company}
                      </p>
                    </div>
                    <div className="badge badge-secondary badge-lg mt-2 md:mt-0">
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
              >
                <div className="card-body">
                  <h3 className="card-title text-primary">{project.name}</h3>
                  <p className="text-sm opacity-70 mb-2">{project.tech}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 opacity-80">
            Currently pursuing Master's in Computer Science and open to exciting
            opportunities
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:davieswabuluka6@gmail.com"
              className="btn btn-primary btn-lg"
            >
              📧 Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/dwabuluka"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              💼 LinkedIn
            </a>
            <a href="tel:6412339729" className="btn btn-accent btn-lg">
              📱 (641) 233-9729
            </a>
          </div>
          <div className="mt-12 p-6 bg-base-200 rounded-lg">
            <p className="text-sm opacity-70">
              📍 Currently based in Dracut, MA | Open to remote opportunities
            </p>
          </div>
        </div>
      </div>

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
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
