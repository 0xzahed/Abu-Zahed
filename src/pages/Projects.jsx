import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Code2, Rocket, Zap } from 'lucide-react';

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
            github: 'https://github.com',
            live: 'https://demo.com',
            gradient: 'from-blue-500 via-[#51A2FF] to-blue-700',
            height: 'tall',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Modern task management application with drag-and-drop functionality and real-time updates.',
            tags: ['React', 'Tailwind', 'Firebase'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            github: 'https://github.com',
            live: 'https://demo.com',
            gradient: 'from-[#51A2FF] via-blue-600 to-[#51A2FF]',
            height: 'short',
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Interactive weather dashboard with location-based forecasts and beautiful data visualizations.',
            tags: ['Next.js', 'API', 'Charts'],
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
            github: 'https://github.com',
            live: 'https://demo.com',
            gradient: 'from-blue-400 via-[#51A2FF] to-blue-600',
            height: 'short',
        },
        {
            id: 4,
            title: 'Blog CMS',
            description: 'Content management system for blogs with markdown support and SEO optimization.',
            tags: ['MERN Stack', 'Redux', 'JWT'],
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
            github: 'https://github.com',
            live: 'https://demo.com',
            gradient: 'from-[#51A2FF] via-blue-500 to-[#51A2FF]',
            height: 'tall',
        },
        {
            id: 5,
            title: 'Portfolio Generator',
            description: 'AI-powered portfolio website generator with customizable templates and themes.',
            tags: ['React', 'Express', 'OpenAI'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            github: 'https://github.com',
            live: 'https://demo.com',
            gradient: 'from-blue-500 via-[#51A2FF] to-blue-700',
            height: 'medium',
        },
        {
            id: 6,
            title: 'Chat Application',
            description: 'Real-time chat application with rooms, private messaging, and file sharing.',
            tags: ['Socket.io', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
            github: 'https://github.com',
            live: 'https://demo.com',
            gradient: 'from-[#51A2FF] via-blue-600 to-[#51A2FF]',
            height: 'medium',
        },
    ];

    const getHeightClass = (height) => {
        switch(height) {
            case 'tall': return 'row-span-2';
            case 'medium': return 'row-span-1';
            case 'short': return 'row-span-1';
            default: return 'row-span-1';
        }
    };

    return (
        <section id="projects" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gray-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(81,162,255,0.1),transparent_50%)]"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Dynamic Header */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6 sm:mb-8"
                    >
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        <span className="text-white/90 font-medium text-sm sm:text-base">Portfolio Showcase</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6"
                    >
                        <span className="text-white">Featured </span>
                        <span className="bg-linear-to-r from-blue-400 via-[#51A2FF] to-blue-600 bg-clip-text text-transparent">
                            Work
                        </span>
                    </motion.h2>

                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto px-4"
                    >
                        Crafting exceptional digital experiences with modern technologies
                    </motion.p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[280px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onHoverStart={() => setHoveredId(project.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            className={`group ${getHeightClass(project.height)}`}
                        >
                            <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden">
                                {/* Glassmorphism Card */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10"></div>
                                
                                {/* Image Background */}
                                <motion.div
                                    className="absolute inset-0"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-60 mix-blend-multiply`}></div>
                                </motion.div>

                                {/* Content Overlay */}
                                <div className="relative h-full p-4 sm:p-6 flex flex-col justify-between">
                                    {/* Top Section */}
                                    <div>
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/40 backdrop-blur-md rounded-full mb-3 sm:mb-4"
                                        >
                                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-linear-to-r ${project.gradient}`}></div>
                                            <span className="text-white/90 text-[10px] sm:text-xs font-semibold">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </motion.div>

                                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed drop-shadow-md line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Bottom Section */}
                                    <div>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                            {project.tags.slice(0, 3).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/30 backdrop-blur-md text-white/90 text-[10px] sm:text-xs font-medium rounded-lg border border-white/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Hover Action Buttons */}
                                        <AnimatePresence>
                                            {hoveredId === project.id && (
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: 20, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex gap-2 sm:gap-3"
                                                >
                                                    <motion.a
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/20 backdrop-blur-xl text-white font-semibold rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
                                                    >
                                                        <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span className="text-xs sm:text-sm">Code</span>
                                                    </motion.a>
                                                    <motion.a
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-linear-to-r ${project.gradient} text-white font-semibold rounded-lg sm:rounded-xl shadow-lg`}
                                                    >
                                                        <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span className="text-xs sm:text-sm">Live</span>
                                                    </motion.a>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Glowing Border Effect */}
                                <motion.div
                                    className={`absolute -inset-[1px] bg-linear-to-r ${project.gradient} opacity-0 rounded-2xl -z-10`}
                                    animate={{
                                        opacity: hoveredId === project.id ? 0.7 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        <span className="flex items-center gap-2">
                            Explore All Projects
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.div>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;