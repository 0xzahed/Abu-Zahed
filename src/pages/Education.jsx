import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'BSc in Computer Science & Engineering',
            institution: 'Daffodil International University',
            location: 'Dhaka, Bangladesh',
            period: '2022 - Present',
            status: 'Running',
            description: 'Deep diving into core concepts of computer science including DSA, OOP, and full-stack web development with a focus on building scalable applications.',
            gradient: 'from-blue-500 via-[#51A2FF] to-blue-700',
            icon: '🎓',
        },
        {
            id: 2,
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Shahsultan College',
            location: 'Bogura, Bangladesh',
            period: 'Passing Year: 2020',
            status: 'Completed',
            description: 'Completed secondary education with a strong foundation in humanities, developing critical thinking and communication skills.',
            gradient: 'from-[#51A2FF] via-blue-600 to-[#51A2FF]',
            icon: '📚',
        },
    ];

    return (
        <section id="education" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gray-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(81,162,255,0.1),transparent_50%)]"></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6 sm:mb-8"
                    >
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        <span className="text-white/90 font-medium text-sm sm:text-base">Educational Journey</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4"
                    >
                        <span className="text-white">Educational </span>
                        <span className="bg-linear-to-r from-blue-400 via-[#51A2FF] to-blue-600 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </motion.h2>

                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4"
                    >
                        My academic path has provided a strong foundation in both technical and analytical skills.
                    </motion.p>
                </motion.div>

                {/* Education Grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative h-full">
                                {/* Glowing Background */}
                                <motion.div
                                    className={`absolute -inset-1 bg-linear-to-r ${edu.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}
                                ></motion.div>

                                {/* Card */}
                                <div className="relative h-full bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500 flex flex-col">
                                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                        {/* Icon & Badges */}
                                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 10 }}
                                                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-linear-to-br ${edu.gradient} flex items-center justify-center text-2xl sm:text-3xl shadow-xl`}
                                            >
                                                {edu.icon}
                                            </motion.div>

                                            {/* Status Badge */}
                                            {edu.status === 'Running' ? (
                                                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-500/10 backdrop-blur-md rounded-full border border-green-500/30">
                                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                                    <span className="text-green-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                                                        {edu.status}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-500/10 backdrop-blur-md rounded-full border border-purple-500/30">
                                                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
                                                    <span className="text-purple-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                                                        {edu.status}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Period */}
                                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-3 sm:mb-4 w-fit">
                                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                                            <span className="text-white/90 text-[10px] sm:text-xs font-medium">{edu.period}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <motion.h3 
                                                className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
                                            >
                                                {edu.degree}
                                            </motion.h3>

                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                                                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-300">
                                                    {edu.institution}
                                                </h4>
                                            </div>

                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500" />
                                                <p className="text-gray-500 text-[10px] sm:text-xs">
                                                    {edu.location}
                                                </p>
                                            </div>

                                            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                                                {edu.description}
                                            </p>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-linear-to-r ${edu.gradient}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: edu.status === 'Running' ? '70%' : '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.5, duration: 1.5 }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    {/* Decorative Gradient Border */}
                                    <div className={`h-1 bg-linear-to-r ${edu.gradient}`}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <p className="text-gray-400">
                            Continuously learning and growing with each milestone 🚀
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
