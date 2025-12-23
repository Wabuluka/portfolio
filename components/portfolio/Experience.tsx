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
              className="collapse collapse-arrow bg-base-100 border border-base-300"
              key={idx}
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                {job.title} 💼 {job.company}
              </div>
              <div className="collapse-content text-sm">
                {job.achievements.map((achievement: any, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
