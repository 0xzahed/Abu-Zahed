import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardRef = useRef(null);
    const responsibilitiesRef = useRef([]);
    const footerRef = useRef(null);

    const experience = {
        role: "Trainee Software Engineer",
        company: "Betopia Limited",
        location: "Bangladesh",
        period: "2025 - Present",
        status: "Current",
        description:
            "Recently joined as a Trainee Software Engineer, contributing to software development projects and collaborating with the team to build and maintain web applications. Gaining hands-on experience in real-world software engineering practices.",
        responsibilities: [
            "Developing and maintaining web applications",
            "Collaborating with senior engineers on feature development",
            "Learning industry-standard development workflows and best practices",
            "Participating in code reviews and team discussions",
        ],
        gradient: "from-teal-400 via-[#14B8A6] to-emerald-500",
        icon: "💻",
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge entrance
            gsap.fromTo(
                badgeRef.current,
                { opacity: 0, scale: 0, rotation: -180 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: badgeRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Title
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Subtitle
            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Card entrance
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 60, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Responsibility items staggered
            if (responsibilitiesRef.current.length) {
                gsap.fromTo(
                    responsibilitiesRef.current,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.12,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top 70%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // Footer note
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gray-950"></div>
            <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 30% 40%, rgba(20, 184, 166, 0.12), transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1), transparent 50%)'}}></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[64px_64px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6 sm:mb-8"
                        style={{ opacity: 0 }}
                    >
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                        <span className="text-white/90 font-medium text-sm sm:text-base">
                            Work Experience
                        </span>
                    </div>

                    <h2
                        ref={titleRef}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4"
                        style={{ opacity: 0 }}
                    >
                        <span className="text-white">Professional </span>
                        <span className="bg-linear-to-r from-teal-400 via-[#14B8A6] to-emerald-500 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>

                    <p
                        ref={subtitleRef}
                        className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4"
                        style={{ opacity: 0 }}
                    >
                        My professional journey, building real-world software solutions and
                        growing as an engineer.
                    </p>
                </div>

                {/* Experience Card */}
                <div ref={cardRef} className="group" style={{ opacity: 0 }}>
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute -inset-1 bg-linear-to-r from-teal-400 via-[#14B8A6] to-emerald-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>

                        {/* Card */}
                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500">
                            <div className="p-5 sm:p-8">
                                {/* Top Row */}
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-linear-to-r from-teal-400 via-[#14B8A6] to-emerald-500 flex items-center justify-center text-2xl sm:text-3xl shadow-xl shrink-0 hover:scale-110 hover:rotate-6 transition-transform duration-300">
                                        {experience.icon}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-teal-400 group-hover:via-[#14B8A6] group-hover:to-emerald-500 group-hover:bg-clip-text transition-all duration-300">
                                                {experience.role}
                                            </h3>
                                            {/* Status Badge */}
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-teal-500/10 backdrop-blur-md rounded-full border border-teal-500/30">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></div>
                                                <span className="text-teal-400 text-[10px] font-semibold uppercase tracking-wider">
                                                    {experience.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-1">
                                            <Briefcase className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                            <h4 className="text-sm sm:text-base font-semibold text-gray-300">
                                                {experience.company}
                                            </h4>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 w-fit">
                                                <Calendar className="w-3 h-3 text-teal-400" />
                                                <span className="text-white/80 text-[10px] sm:text-xs font-medium">
                                                    {experience.period}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3 h-3 text-gray-500" />
                                                <span className="text-gray-500 text-[10px] sm:text-xs">
                                                    {experience.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed text-sm mb-5">
                                    {experience.description}
                                </p>

                                {/* Responsibilities */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code2 className="w-4 h-4 text-teal-400" />
                                        <span className="text-white/80 text-sm font-semibold">
                                            Key Responsibilities
                                        </span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {experience.responsibilities.map((item, i) => (
                                            <li
                                                key={i}
                                                ref={(el) => (responsibilitiesRef.current[i] = el)}
                                                className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm"
                                                style={{ opacity: 0 }}
                                            >
                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Gradient border */}
                            <div className="h-1 bg-linear-to-r from-teal-400 via-[#14B8A6] to-emerald-500"></div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div ref={footerRef} className="mt-16 text-center" style={{ opacity: 0 }}>
                    <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <p className="text-gray-400">
                            Excited to grow, learn, and contribute to meaningful projects 🚀
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
