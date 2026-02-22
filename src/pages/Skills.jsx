import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFirebase,
  SiNextdotjs,
  SiFigma,
  SiC,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiDjango,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      gradient: "from-teal-400 via-[#14B8A6] to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 85 },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF", level: 80 },
        { name: "Django", icon: SiDjango, color: "#092E20", level: 75 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 82 },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 78 },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 75 },
      ],
    },
    {
      title: "Frontend Development",
      gradient: "from-teal-400 via-[#14B8A6] to-emerald-500",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 85 },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 88 },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 92 },
      ],
    },
    {
      title: "Tools & Languages",
      gradient: "from-teal-400 via-[#14B8A6] to-emerald-500",
      skills: [
        { name: "VS Code", icon: VscCode, color: "#007ACC", level: 95 },
        { name: "Git", icon: SiGit, color: "#F05032", level: 88 },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF", level: 90 },
        { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 70 },
        { name: "C", icon: SiC, color: "#A8B9CC", level: 75 },
        { name: "C++", icon: SiCplusplus, color: "#00599C", level: 72 },
        { name: "Python", icon: SiPython, color: "#3776AB", level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gray-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)'}}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12), transparent)'}}></div>
      <div className="absolute top-1/2 right-1/3 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12), transparent)'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-linear-to-r from-teal-400 via-[#14B8A6] to-emerald-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Technologies and tools I work with to build amazing experiences
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:gap-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="relative group"
            >
              {/* Category Card */}
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-gray-700 hover:shadow-blue-500/20 transition-all duration-500 shadow-2xl">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-12 w-2 rounded-full bg-linear-to-b ${category.gradient}`}></div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: skillIndex * 0.1,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, -5, 0],
                          transition: { duration: 0.4 },
                        }}
                        className="relative group/item"
                      >
                        <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-gray-700 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center">
                          {/* Glow Effect on Hover */}
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 blur-xl"
                            style={{
                              background: `radial-gradient(circle, ${skill.color}30, transparent 70%)`,
                            }}
                          ></div>

                          {/* Icon */}
                          <div className="relative z-10 mb-3">
                            <Icon
                              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                              style={{ color: skill.color }}
                            />
                          </div>

                          {/* Skill Name */}
                          <p className="relative z-10 text-xs sm:text-sm font-semibold text-white text-center mb-3">
                            {skill.name}
                          </p>

                          {/* Progress Bar */}
                          <div className="relative z-10 w-full">
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-linear-to-r ${category.gradient}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: skillIndex * 0.1 + 0.3,
                                }}
                              />
                            </div>
                            <p className="text-[10px] text-gray-500 text-center mt-1">
                              {skill.level}%
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute -inset-px bg-linear-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA or Stats (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-full">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <p className="text-gray-400 text-sm">
              Constantly learning and exploring new technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
