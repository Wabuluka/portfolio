import React from "react";

export default function Skills({ skills }: { skills: any }) {
  console.log(skills);
  return (
    <div
      id="skills"
      className="flex min-h-screen items-center py-20 px-4 bg-base-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]: [string, any]) => (
            <div
              key={category}
              className="card bg-base-100 shadow hover:shadow-lg transition-shadow"
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
                  {(items as string[]).map((skill) => (
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
  );
}
