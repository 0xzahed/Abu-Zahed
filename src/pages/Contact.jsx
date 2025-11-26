import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'zahed04x@gmail.com',
            link: 'mailto:zahed04x@gmail.com',
            gradient: 'from-blue-500 to-[#51A2FF]'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+880 1744-546898',
            link: 'tel:+8801744546898',
            gradient: 'from-[#51A2FF] to-blue-600'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Dhaka, Bangladesh',
            link: '#',
            gradient: 'from-blue-400 to-[#51A2FF]'
        }
    ];

    const socialLinks = [
        { icon: Github, link: 'https://github.com', label: 'GitHub', gradient: 'from-[#51A2FF] to-blue-700' },
        { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn', gradient: 'from-blue-600 to-[#51A2FF]' },
        { icon: Facebook, link: 'https://facebook.com', label: 'Facebook', gradient: 'from-[#51A2FF] to-blue-600' },
    ];

    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gray-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(81,162,255,0.1),transparent_50%)]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6 sm:mb-8"
                    >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        <span className="text-white/90 font-medium text-sm sm:text-base">Get In Touch</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4"
                    >
                        <span className="text-white">Contact </span>
                        <span className="bg-linear-to-r from-blue-400 via-[#51A2FF] to-blue-600 bg-clip-text text-transparent">
                            Me
                        </span>
                    </motion.h2>

                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4"
                    >
                        Let's discuss your project and bring your ideas to life
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="group block"
                                >
                                    <div className="relative">
                                        <div className={`absolute -inset-1 bg-linear-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${info.gradient} flex items-center justify-center`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs mb-1">{info.title}</p>
                                                    <p className="text-white text-sm font-semibold">{info.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6"
                        >
                            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 rounded-xl bg-linear-to-br ${social.gradient} flex items-center justify-center hover:shadow-lg transition-all`}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
                                        placeholder="Share your thoughts or project details here..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-4 bg-linear-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
