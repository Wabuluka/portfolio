import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-screen items-center py-20 px-4 bg-base-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl mb-8 opacity-80">
          Currently pursuing Master's in Computer Science and open to exciting
          opportunities
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:davieswabuluka6@gmail.com"
            className="btn btn-primary btn-lg"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/dwabuluka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            💼 LinkedIn
          </a>
          <a href="tel:6412339729" className="btn btn-accent btn-lg">
            📱 (641) 233-9729
          </a>
        </div>
        <div className="mt-12 p-6 bg-base-200 rounded-lg">
          <p className="text-sm opacity-70">
            📍 Currently based in Dracut, MA | Open to remote opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
