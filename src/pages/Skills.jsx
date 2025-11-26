import React from "react";
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
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const skills = {
    backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    frontend: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    tools: [
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(81,162,255,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
            Skills & <span className="text-[#51A2FF]">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Tools I use to bring ideas to life
          </p>
        </div>

        {/* Backend Stack Showcase */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Backend</h3>
            <div className="h-1 w-16 sm:w-20 bg-linear-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
            {skills.backend.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-[#51A2FF]/50 transition-all duration-500 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-[#51A2FF]/0 group-hover:from-blue-500/10 group-hover:to-[#51A2FF]/10 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500"
                        style={{
                          backgroundColor: `${skill.color}10`,
                          boxShadow: `0 0 30px ${skill.color}20`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                          style={{ color: skill.color }}
                        />
                      </div>

                      {/* Name */}
                      <h4 className="text-xs sm:text-sm lg:text-lg font-bold text-white text-center">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#51A2FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Technologies */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-blue-500 to-[#51A2FF] rounded-full"></span>
              Frontend
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {skills.frontend.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-[#51A2FF]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${skill.color}10`,
                          border: `2px solid ${skill.color}20`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                          style={{ color: skill.color }}
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                          {skill.name}
                        </h4>

                        {/* Animated underline */}
                        <div className="h-0.5 bg-gray-800 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
                          <div className="h-full bg-linear-to-r from-blue-500 to-[#51A2FF] w-0 group-hover:w-full transition-all duration-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-[#51A2FF] to-blue-500 rounded-full"></span>
              Tools & Others
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {skills.tools.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-[#51A2FF]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${skill.color}10`,
                          border: `2px solid ${skill.color}20`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                          style={{ color: skill.color }}
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                          {skill.name}
                        </h4>

                        {/* Animated underline */}
                        <div className="h-0.5 bg-gray-800 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
                          <div className="h-full bg-linear-to-r from-[#51A2FF] to-blue-500 w-0 group-hover:w-full transition-all duration-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
