import React from "react";

export default function Hero({ onclick }: { onclick: () => void }) {
  return (
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
            React • TypeScript • Node.js • AWS • WordPress
          </p>
          <p className="py-6 text-lg max-w-2xl mx-auto">
            7+ years building scalable web and mobile platforms serving 10,000+
            users across fin-tech, transport, and ed-tech. Specialized in
            high-performance UIs, microservices architecture, and cloud
            deployments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onclick()}
              className="btn btn-primary btn-lg"
            >
              View Projects
            </button>
            <a
              href="https://www.linkedin.com/in/dwabuluka"
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
  );
}
