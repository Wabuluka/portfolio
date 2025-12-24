import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="flex py-20 min-h-screen px-4 items-center bg-base-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-200 shadow">
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
          <div className="card bg-base-200 shadow">
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
                  <p className="font-semibold">Bachelor of Computer Science</p>
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
  );
}
