import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home", icon: "🏠", isScroll: true, scrollTo: "header" },
    { path: "#skills", label: "Skills", icon: "⚡", isScroll: true, scrollTo: "skills" },
    { path: "#projects", label: "Projects", icon: "💼", isScroll: true, scrollTo: "projects" },
    { path: "#education", label: "Education", icon: "🎓", isScroll: true, scrollTo: "education" },
    { path: "#contact", label: "Contact", icon: "📧", isScroll: true, scrollTo: "contact" },
    { path: "/resume", label: "Resume", icon: "📄" },
  ];

  const handleNavClick = (e, link) => {
    if (link.isScroll) {
      e.preventDefault();
      if (link.scrollTo === "header") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(link.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 150;

      // Check if we're at the very top (header section)
      if (window.scrollY < 100) {
        setActiveSection("header");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/95 border-b border-[#51A2FF]/30">
      {/* Glassmorphism effect overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#51A2FF]/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name with modern styling */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#51A2FF] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 relative rounded-full border-2 border-[#51A2FF]/50 group-hover:border-[#51A2FF] transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation with modern pill design */}
          <div className="hidden md:flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#51A2FF]/30">
            {navLinks.map((link) =>
              link.isScroll ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === link.scrollTo
                      ? "bg-[#51A2FF] text-white shadow-lg shadow-[#51A2FF]/50"
                      : "text-gray-300 hover:text-white hover:bg-[#51A2FF]/80 hover:shadow-lg hover:shadow-[#51A2FF]/50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{link.icon}</span>
                    {link.label}
                  </span>
                </a>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#51A2FF] text-white shadow-lg shadow-[#51A2FF]/50"
                        : "text-gray-300 hover:text-white hover:bg-[#51A2FF]/80 hover:shadow-lg hover:shadow-[#51A2FF]/50"
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    <span>{link.icon}</span>
                    {link.label}
                  </span>
                </NavLink>
              )
            )}
          </div>

          {/* Social Icons with modern styling */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-900/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-900/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:zahed04x@gmail.com"
              className="p-2 rounded-full bg-gray-900/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-500 hover:scale-110 transition-all duration-300"
            >
              <HiOutlineMail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-gray-900/80 border border-purple-500/30 text-white hover:bg-purple-600 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with modern design */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-gray-950/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) =>
                link.isScroll ? (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === link.scrollTo
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                        : "text-gray-300 hover:text-white hover:bg-purple-600/80 hover:shadow-lg hover:shadow-purple-500/50"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                          : "text-gray-300 hover:text-white hover:bg-purple-600/80 hover:shadow-lg hover:shadow-purple-500/50"
                      }`
                    }
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </NavLink>
                )
              )}
            </div>

            <div className="px-4 pb-6 pt-4 border-t border-purple-500/20">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-900/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600 transition-all"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-900/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600 transition-all"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:zahed04x@gmail.com"
                  className="p-3 rounded-full bg-gray-900/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600 transition-all"
                >
                  <HiOutlineMail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
