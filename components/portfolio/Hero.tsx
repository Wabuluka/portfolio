import React from "react";

export default function Hero({ onclick }: { onclick: () => void }) {
  return (
    <div
      id="hero"
      className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse py-1">
          Full-Stack Engineer
        </h1>
        <p className="py-3 text-lg max-w-2xl mx-auto">
          7+ years building scalable web and mobile platforms serving 10,000+
          users across fin-tech, transport, and ed-tech. Specialized in
          high-performance UIs, microservices architecture, and cloud
          deployments.
        </p>

        <div className="stats stats-vertical md:stats-horizontal">
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

        <div className="flex flex-wrap gap-4 py-5">
          <button onClick={() => onclick()} className="btn btn-primary">
            View Projects
          </button>
          <a
            href="https://www.linkedin.com/in/dwabuluka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
