import React from "react";

export default function Experience({ experience }: { experience: any[] }) {
  return (
    <div
      id="experience"
      className="min-h-screen flex items-center w-full py-20 px-4 bg-base-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow hover:shadow-2xl transition-all"
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
                  {job.achievements.map((achievement: any, i: number) => (
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
  );
}
