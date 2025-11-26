import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/", scrollTo: "header" },
    { name: "Skills", path: "#skills", scrollTo: "skills" },
    { name: "Projects", path: "#projects", scrollTo: "projects" },
    { name: "Education", path: "#education", scrollTo: "education" },
    { name: "Contact", path: "#contact", scrollTo: "contact" },
    { name: "Resume", path: "/resume" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/abuzahed", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/abuzahed", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/abuzahed", label: "Facebook" },
    { icon: Mail, href: "mailto:zahed04x@gmail.com", label: "Email" },
  ];

  const handleScrollClick = (e, scrollTo) => {
    e.preventDefault();
    if (scrollTo === "header") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="relative bg-gray-950 border-t border-[#51A2FF]/20">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#51A2FF] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-8">
          {/* About section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 bg-linear-to-r from-[#51A2FF] via-blue-400 to-[#51A2FF] bg-clip-text text-transparent">
              Abu Zahed
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              MERN Stack Developer passionate about building modern web applications
              with cutting-edge technologies. Let's create something amazing together!
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-[#51A2FF]">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  {link.scrollTo ? (
                    <a
                      href={link.path}
                      onClick={(e) => handleScrollClick(e, link.scrollTo)}
                      className="text-gray-400 hover:text-[#51A2FF] transition-colors text-xs sm:text-sm block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-[#51A2FF]">Connect</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-4">
              Follow me on social media for updates and tech insights.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 sm:p-3 rounded-full bg-[#51A2FF]/20 border border-[#51A2FF]/30 hover:border-[#51A2FF] hover:bg-[#51A2FF]/30 transition-all hover:scale-110"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#51A2FF]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-[#51A2FF]/30 to-transparent mb-6 md:mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 text-center md:text-left">
            © {currentYear} Abu Zahed. Made with{" "}
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500 inline animate-pulse" />{" "}
            in Bangladesh
          </p>
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-right">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#51A2FF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
