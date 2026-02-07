"use client";

import React, { useEffect, useRef } from "react";
import { Mail, LinkedinIcon, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "davieswabuluka6@gmail.com",
      href: "mailto:davieswabuluka6@gmail.com",
      color: "primary",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "dwabuluka",
      href: "https://www.linkedin.com/in/dwabuluka",
      color: "secondary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(641) 233-9729",
      href: "tel:6412339729",
      color: "accent",
    },
  ];

  return (
    <div id="contact" ref={sectionRef} className="relative py-24 px-6 bg-base-100">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="animate-on-scroll text-center mb-14">
          <p className="code-comment mb-2">{"// let's connect"}</p>
          <h2 className="section-heading">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="section-subtitle">
            Available for full-time W-2 roles · Authorized to work in the U.S.
            without sponsorship · Open to relocate
          </p>
        </div>

        {/* Contact cards */}
        <div
          className="animate-on-scroll grid sm:grid-cols-3 gap-4 mb-8"
          style={{ transitionDelay: "0.05s" }}
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="terminal-card p-5 text-center group"
              >
                <div className={`w-11 h-11 rounded-lg bg-${contact.color}/10 border border-${contact.color}/20 flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-shadow`}>
                  <Icon className={`w-5 h-5 text-${contact.color}`} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{contact.label}</h3>
                <p className="text-[11px] text-base-content/40 font-mono break-all">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span /><span /><span />
              </div>
              <span className="terminal-title">message.sh</span>
            </div>
            <div className="p-8 md:p-10 text-center">
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Ready to build something great?
              </h3>
              <p className="text-sm text-base-content/45 mb-6 max-w-md mx-auto leading-relaxed">
                I&apos;m always interested in new projects and opportunities.
                Let&apos;s discuss how I can help your team.
              </p>
              <a
                href="mailto:davieswabuluka6@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-content font-semibold text-sm rounded-lg hover:shadow-glow transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send me an email
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div
          className="animate-on-scroll flex justify-center mt-6"
          style={{ transitionDelay: "0.15s" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-base-content/30">
            <MapPin className="w-3 h-3" />
            Dracut, MA · Remote, hybrid & on-site · Open to relocate
          </span>
        </div>
      </div>
    </div>
  );
}
