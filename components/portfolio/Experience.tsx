import React from "react";

export default function Experience({ experience }: { experience: any[] }) {
  return (
    <div
      id="experience"
      className="min-h-screen flex flex-col px-4 bg-base-100 items-center justify-center py-10"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      <div className="w-3/3 md:w-2/3 mx-auto">
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <details
              className="flex flex-col justify-center w-full bg-base-100 min-h-3"
              key={idx}
            >
              <summary className="font-semibold cursor-pointer mb-4">
                {job.title} 💼 {job.company}
              </summary>
              {job.achievements.map((achievement: any, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2 text-2xl">•</span>
                  <span className="font-light text-lg">{achievement}</span>
                </li>
              ))}
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
