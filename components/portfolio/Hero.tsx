import React from "react";

export default function Hero({ onclick }: { onclick: () => void }) {
  return (
    <div
      id="hero"
      className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="avatar placeholder mb-6">
            <div className="bg-gradient-to-br from-primary to-secondary text-neutral-content rounded-full w-20 ring ring-primary ring-offset-base-100 ring-offset-2">
              <span className="text-2xl font-bold">DW</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse py-2">
            Full-Stack Engineer
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-80">
            React • TypeScript • Node.js • AWS • WordPress
          </p>
          <p className="text-lg max-w-2xl text-center mx-auto pb-3">
            7+ years building scalable web and mobile platforms serving 10,000+
            users across fin-tech, transport, and ed-tech. Specialized in
            high-performance UIs, microservices architecture, and cloud
            deployments.
          </p>
          <div className="stats stats-vertical md:stats-horizontal shadow mt-2 bg-base-100">
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
