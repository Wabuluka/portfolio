import React from "react";

export default function About() {
  const focusAreas = [
    "React",
    "React Native (Expo)",
    "TypeScript",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "Zustand",
    "Tailwind CSS",
    "Chakra UI",
    "Shadcn",
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "WebSockets",
    "Socket.IO",
    "Authentication & Authorization",
    "Microservices",
    "API Gateway",
    "Serverless Architecture",
    "Microservices",
    "AWS (EC2, Lambda, S3, CloudFront, RDS, SNS, VPC)",
    "Docker",
    "Kubernetes (basic)",
    "CI/CD (GitHub Actions, Expo EAS)",
    "Terraform",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Realm",
    "Jest",
    "React Testing Library",
    "Storybook",
    "A/B Testing",
    "Usability Testing",
    "Git",
    "GitHub",
    "Agile (Scrum, Kanban)",
    "TDD",
    "Code Review",
    "Design Systems",
    "Performance Optimization",
    "AI Integration",
    "Accessibility (WCAG 2.1 AA)",
    "Cross-Functional Team Leadership",
    "AWS Deployment",
    "CI/CD Automation",
    "Scalable Systems",
    "Cloud / DevOps",
    "Databases",
    "Testing / Quality",
    "Tools & Practices",
  ];
  return (
    <div id="about" className="flex min-h-screen px-4 items-center bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-medium mb-2 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center w-3/3 md:w-2/3 gap-5">
            <div className="card bg-base-100">
              <figure>
                <img
                  src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fez5s9smow7k88dx5s4id.jpeg"
                  alt="Code"
                />
              </figure>
              <div className="px-2 py-4">
                <p className="text-lg font-normal">
                  Experienced full-stack engineer with 7+ years building and
                  scaling high-traffic platforms in fin-tech, transport, and
                  ed-tech. Specializes in React, TypeScript, and Node.js, with
                  expertise in AI integration, accessibility (WCAG 2.1 AA), and
                  performance optimization. Skilled in leading cross-functional
                  teams, CI/CD automation, and deploying scalable systems on
                  AWS.
                </p>
                <div className="flex flex-wrap gap-4 py-2">
                  <a
                    href="https://github.com/dwabuluka"
                    className="btn btn-outline btn-sm "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/3 md:w-2/3">
            <code className="text-sm font-bold mb-2">Core Skills _/</code>
            <div className="flex flex-wrap gap-1">
              {focusAreas.map((area, index) => (
                <span
                  key={index}
                  className="outline outline-1 p-1 rounded bg-base-300"
                >
                  <code className="font-normal">{area}</code>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium text-center py-3">Education</h3>
          <div className="flex flex-col outline outline-1 p-2 rounded">
            <code className="font-bold">
              Master of Science in Computer Science
            </code>
            <div className="flex flex-row justify-between">
              <span>Maharishi International University</span>
              <span>2024 - 2027</span>
            </div>
          </div>
          <div className="flex flex-col outline outline-1 p-2 rounded">
            <code className="font-bold">
              Bachelor of Science in Computer Science
            </code>
            <div className="flex flex-row justify-between">
              <span>Makerere University</span>
              <span>2015 -2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
