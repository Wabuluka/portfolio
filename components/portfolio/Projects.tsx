import React from "react";

export default function Projects({ projects }: { projects: any[] }) {
  return (
    <div
      id="projects"
      className="flex min-h-screen items-center py-20 px-4 bg-base-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow hover:scale-105 transition-transform"
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
  );
}
