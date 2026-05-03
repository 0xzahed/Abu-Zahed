import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio_admin_data_v1";

const defaultPortfolioData = {
  header: {
    availabilityText: "Available for work",
    name: "Abu Zahed",
    role: "MERN Stack Developer",
    description:
      "Passionate about building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js. I love turning ideas into reality through clean, efficient code and creating user-friendly interfaces that make a difference.",
    resumePath: "/resume",
    socialLinks: {
      github: "https://github.com/0xzahed",
      linkedin: "https://linkedin.com",
      email: "mailto:zahed04x@gmail.com",
    },
  },
  projects: [
    {
      id: "p1",
      title: "SmartBills",
      subtitle: "Bill Management Platform",
      description:
        "A full-stack MERN platform for managing electricity, gas, water, and internet bills with secure payments and real-time tracking.",
      tags: ["React.js", "Tailwind", "Firebase", "Express.js", "MongoDB", "React Router"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&h=460&fit=crop",
      github: "https://github.com/0xzahed/SmartBills-client",
      live: "https://smartbills-7b06f.web.app/",
    },
    {
      id: "p2",
      title: "DeshiCart",
      subtitle: "E-Commerce Platform",
      description:
        "An e-commerce platform with cart, checkout, authentication, and admin features built with Next.js and MongoDB.",
      tags: ["Next.js", "React.js", "Tailwind", "Firebase", "Express.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=700&h=460&fit=crop",
      github: "https://github.com/0xzahed/deshicart",
      live: "https://deshicart.vercel.app/",
    },
    {
      id: "p3",
      title: "SkillSwap",
      subtitle: "Skill Learning Platform",
      description:
        "A React-based skill-learning platform connecting learners with expert tutors through an intuitive booking system and AI chatbot.",
      tags: ["React.js", "React Router", "Firebase", "Tailwind CSS", "DaisyUI", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=460&fit=crop",
      github: "https://github.com/0xzahed/Skill-Swap",
      live: "https://skillswap-d2870.web.app/",
    },
  ],
  experience: {
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
  },
  education: [
    {
      id: "e1",
      degree: "BSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2025",
      status: "Completed",
      description:
        "Graduated with a strong foundation in core computer science concepts including DSA, OOP, and full-stack web development, with a focus on building scalable applications.",
      icon: "🎓",
    },
    {
      id: "e2",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shahsultan College",
      location: "Bogura, Bangladesh",
      period: "Passing Year: 2020",
      status: "Completed",
      description:
        "Completed secondary education with a strong foundation in humanities, developing critical thinking and communication skills.",
      icon: "📚",
    },
  ],
  contact: {
    email: "zahed04x@gmail.com",
    phone: "+880 1744-546898",
    location: "Dhaka, Bangladesh",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  footer: {
    name: "Abu Zahed",
    about:
      "MERN Stack Developer passionate about building modern web applications with cutting-edge technologies. Let's create something amazing together!",
    socialLinks: {
      github: "https://github.com/abuzahed",
      linkedin: "https://linkedin.com/in/abuzahed",
      facebook: "https://facebook.com/abuzahed",
      email: "mailto:zahed04x@gmail.com",
    },
  },
};

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const mergeWithDefaults = (defaults, saved) => {
  if (Array.isArray(defaults)) {
    return Array.isArray(saved) ? saved : defaults;
  }

  if (!isPlainObject(defaults)) {
    return saved !== undefined ? saved : defaults;
  }

  const output = { ...defaults };
  const source = isPlainObject(saved) ? saved : {};

  Object.keys(defaults).forEach((key) => {
    output[key] = mergeWithDefaults(defaults[key], source[key]);
  });

  return output;
};

const loadStoredData = () => {
  if (typeof window === "undefined") return defaultPortfolioData;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPortfolioData;

    const parsed = JSON.parse(raw);
    return mergeWithDefaults(defaultPortfolioData, parsed);
  } catch {
    return defaultPortfolioData;
  }
};

const PortfolioDataContext = createContext(null);

export const PortfolioDataProvider = ({ children }) => {
  const [data, setData] = useState(() => loadStoredData());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateSection = (section, value) => {
    setData((prev) => ({ ...prev, [section]: value }));
  };

  const resetData = () => {
    setData(defaultPortfolioData);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      data,
      setData,
      updateSection,
      resetData,
      defaultPortfolioData,
    }),
    [data]
  );

  return <PortfolioDataContext.Provider value={value}>{children}</PortfolioDataContext.Provider>;
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error("usePortfolioData must be used within PortfolioDataProvider");
  }
  return context;
};

export { defaultPortfolioData };
