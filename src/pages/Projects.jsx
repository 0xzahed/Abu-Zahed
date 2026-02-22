import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { Zap, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Main Component ─────────────────────────────────────── */
const Projects = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const rowRefs = useRef([]);
  const lineRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "SmartBills",
      subtitle: "(Bill Management Platform)",
      description:
        "A full-stack MERN platform for managing electricity, gas, water, and internet bills with secure payments and real-time tracking.",
      tags: ["React.js", "Tailwind", "Firebase", "Express.js", "MongoDB", "React Router"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&h=460&fit=crop",
      github: "https://github.com/0xzahed/SmartBills-client",
      live: "https://smartbills-7b06f.web.app/",
      accent: "#14B8A6",
      gradientStyle: "linear-gradient(135deg,#2dd4bf,#14B8A6,#10b981)",
    },
    {
      id: 2,
      title: "DeshiCart",
      subtitle: "(E-Commerce Platform)",
      description:
        "An e-commerce platform with cart, checkout, authentication, and admin features built with Next.js and MongoDB.",
      tags: ["Next.js", "React.js", "Tailwind", "Firebase", "Express.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=700&h=460&fit=crop",
      github: "https://github.com/0xzahed/deshicart",
      live: "https://deshicart.vercel.app/",
      accent: "#14B8A6",
      gradientStyle: "linear-gradient(135deg,#2dd4bf,#14B8A6,#10b981)",
    },
    {
      id: 3,
      title: "SkillSwap",
      subtitle: "(Skill Learning Platform)",
      description:
        "A React-based skill-learning platform connecting learners with expert tutors through an intuitive booking system and AI chatbot.",
      tags: ["React.js", "React Router", "Firebase", "Tailwind CSS", "DaisyUI", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=460&fit=crop",
      github: "https://github.com/0xzahed/Skill-Swap",
      live: "https://skillswap-d2870.web.app/",
      accent: "#14B8A6",
      gradientStyle: "linear-gradient(135deg,#2dd4bf,#14B8A6,#10b981)",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)",
          scrollTrigger: { trigger: badgeRef.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(titleRef.current, { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: subtitleRef.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );

      // Timeline line draw
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: lineRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const isEven = i % 2 === 0;
        const imgEl = row.querySelector(".proj-img");
        const contentEl = row.querySelector(".proj-txt");
        const dot = row.querySelector(".timeline-dot");

        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)",
            scrollTrigger: { trigger: row, start: "top 75%", toggleActions: "play none none none" }
          }
        );
        gsap.fromTo(imgEl,
          { opacity: 0, x: isEven ? -100 : 100 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 75%", toggleActions: "play none none none" }
          }
        );
        gsap.fromTo(contentEl,
          { opacity: 0, x: isEven ? 100 : -100 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 75%", toggleActions: "play none none none" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Static BG */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.12), transparent 55%), radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.1), transparent 55%)'}} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16 sm:mb-20">
          <div ref={badgeRef} style={{ opacity: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-7"
          >
            <Zap className="w-4 h-4 text-teal-400" />
            <span className="text-white/90 font-medium text-sm">Portfolio Showcase</span>
          </div>

          <h2 ref={titleRef} style={{ opacity: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4"
          >
            <span className="text-white">Latest </span>
            <span className="bg-linear-to-r from-teal-400 via-[#14B8A6] to-emerald-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p ref={subtitleRef} style={{ opacity: 0 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto"
          >
            Crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        {/* ── Timeline wrapper ── */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-linear-to-b from-teal-400/60 via-teal-500/30 to-transparent"
            style={{ height: "100%" }}
          />

          <div className="space-y-20 sm:space-y-28">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  ref={(el) => (rowRefs.current[index] = el)}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
                >
                  {/* Timeline dot (center) */}
                  <div
                    className="timeline-dot hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 w-4 h-4 rounded-full border-2 items-center justify-center"
                    style={{
                      borderColor: project.accent,
                      backgroundColor: "#0a0a0a",
                      boxShadow: `0 0 12px ${project.accent}80`,
                      opacity: 0,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accent }} />
                  </div>

                  {/* Image */}
                  <div
                    className={`proj-img group ${!isEven ? "lg:order-2" : ""}`}
                    style={{ opacity: 0 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Hover overlay btn */}
                      <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-500 via-[#14B8A6] to-teal-600 backdrop-blur-md border border-teal-400/50 rounded-full text-white text-sm font-medium hover:from-teal-400 hover:via-teal-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                          View Live
                        </a>
                      </div>

                      {/* Connecting line to dot */}
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-10 h-px ${isEven ? "-right-10" : "-left-10"}`}
                        style={{ backgroundColor: `${project.accent}60` }}
                      />

                      {/* Bottom bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ background: project.gradientStyle }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`proj-txt ${!isEven ? "lg:order-1 lg:text-right" : ""}`}
                    style={{ opacity: 0 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                      style={{ color: project.accent }}
                    >
                      {project.subtitle}
                    </p>

                    <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
                      {project.title}
                    </h3>

                    <div
                      className={`h-0.5 w-14 rounded-full mb-4 ${!isEven ? "lg:ml-auto" : ""}`}
                      style={{ background: project.gradientStyle }}
                    />

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 mb-7 ${!isEven ? "lg:justify-end" : ""}`}>
                      {project.tags.map((tag, i) => (
                        <span key={i}
                          className="px-3 py-1 text-xs font-semibold rounded-full border"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}40`,
                            backgroundColor: `${project.accent}12`,
                          }}
                        >
                          #{tag.toLowerCase().replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className={`flex flex-wrap gap-3 ${!isEven ? "lg:justify-end" : ""}`}>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-linear-to-r from-teal-500 via-[#14B8A6] to-teal-600 hover:from-teal-400 hover:via-teal-500 hover:to-emerald-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-gray-300 bg-gray-800/80 border border-gray-700 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <a href="https://github.com/0xzahed" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-teal-500 via-[#14B8A6] to-teal-600 backdrop-blur-xl border border-teal-400/50 text-white font-semibold rounded-full hover:from-teal-400 hover:via-teal-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 group"
          >
            <FaGithub className="w-5 h-5" />
            View All on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
