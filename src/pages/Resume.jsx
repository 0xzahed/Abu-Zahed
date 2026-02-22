import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white">
        {/* Header */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-3xl font-bold text-black mb-2">Abu Zahed</h1>
          <p className="text-lg font-semibold text-black mb-3">
            Frontend Developer-Stack Developer
          </p>
          <div className="text-sm text-black space-y-1">
            <p>Thara Bangladesh | +880 1744-546898 | zahed04x@gmail.com</p>
            <p>
              <a href="https://linkedin.com" className="text-cyan-600 underline">LinkedIn</a> | <a href="https://github.com/0xzahed" className="text-cyan-600 underline">Github</a> | <a href="/" className="text-cyan-600 underline">Portfolio</a>
            </p>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black border-b border-black mb-3">
            Career Objective
          </h2>
          <p className="text-sm text-black leading-relaxed text-justify">
            Frontend Developer skilled in CSS3, JavaScript, and React; dedicated to building fast, responsive, and user-friendly interfaces. Seeking a role to enhance my expertise and contribute effectively to impactful web projects while continuously growing as a frontend specialist.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black border-b border-black mb-3">
            Skills
          </h2>
          <div className="text-sm text-black space-y-2">
            <p>
              <span className="font-semibold">• Frontend:</span> React.js, Next.js, React Router, Framer Motion, Firebase
            </p>
            <p>
              <span className="font-semibold">• Backend:</span> Express.js, MongoDB, MySQL
            </p>
            <p>
              <span className="font-semibold">• Tools:</span> Git, VS Code, Figma, Firebase, Machine Learning, Flutter
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black border-b border-black mb-3">
            Projects
          </h2>

          {/* SmartBills */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-black">
              SmartBills <span className="font-normal italic">(platform for managing electricity, gas, water, and internet bills)</span> | <a href="https://github.com/0xzahed/SmartBills-client" className="text-cyan-600 underline text-sm">Github Client</a> | <a href="https://github.com/0xzahed/SmartBills-server" className="text-cyan-600 underline text-sm">Github Server</a> | <a href="https://smartbills-7b06f.web.app/" className="text-cyan-600 underline text-sm">Online Server</a>
            </h3>
            <p className="text-sm text-black mt-1 mb-2 text-justify">
              A full-stack MERN platform for managing electricity, gas, water, and internet bills with secure payments and real-time tracking.
            </p>
            <ul className="text-sm text-black space-y-1 ml-5 list-disc">
              <li>User authentication, protected routes, profile management, and advanced search & filtering</li>
              <li>Payment processing, full CRUD operations, provider information, and detailed bill views</li>
              <li>PDF report generation, personal dashboard, and real-time bill status updates</li>
              <li>Responsive UI with dark/light mode, smooth animations, and toast notifications</li>
            </ul>
          </div>

          {/* DeshiCart */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-black">
              DeshiCart <span className="font-normal italic">(E-Commerce Platform)</span> | <a href="https://github.com/0xzahed/deshicart" className="text-cyan-600 underline text-sm">Github Sweat</a> | <a href="https://deshicart.vercel.app/" className="text-cyan-600 underline text-sm">Cillian Sweat</a>
            </h3>
            <p className="text-sm text-black mt-1 mb-2 text-justify">
              An e-commerce platform with cart, checkout, authentication, and admin features.
            </p>
            <ul className="text-sm text-black space-y-1 ml-5 list-disc">
              <li>Real-time cart, multi-step checkout, and full product/order management</li>
              <li>Firebase Auth with protected & role-based routes</li>
              <li>Product CRUD, advanced filtering/search, and order status tracking</li>
              <li>Fully responsive UI with smooth animations and clean UX</li>
            </ul>
          </div>

          {/* SkillSwap */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-black">
              SkillSwap <span className="font-normal italic">(Skill Learning Platform)</span> | <a href="https://github.com/0xzahed/Skill-Swap" className="text-cyan-600 underline text-sm">Github Swap</a> | <a href="https://skillswap-d2870.web.app/" className="text-cyan-600 underline text-sm">Skill Swap</a>
            </h3>
            <p className="text-sm text-black mt-1 mb-2 text-justify">
              A React-based skill-learning platform connecting learners with expert tutors through an intuitive booking system.
            </p>
            <ul className="text-sm text-black space-y-1 ml-5 list-disc">
              <li>Browse and filter 50+ skills with tutor profiles, ratings, and live availability</li>
              <li>Interactive booking with calendar picker, time slots, and management dashboard</li>
              <li>AI chatbot and smart search for personalized skill recommendations</li>
              <li>Firebase authentication, protected routes, and comprehensive profile system</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black border-b border-black mb-3">
            Experience
          </h2>
          <div className="mb-4">
            <h3 className="text-base font-bold text-black">
              Cillian Sweat <span className="font-normal">- Senior System Analyst (Part-Time)</span>
            </h3>
            <p className="text-sm text-black mt-1 mb-2 text-justify">
              An e-commerce platform with cart, checkout, authentication and admin features.
            </p>
            <ul className="text-sm text-black space-y-1 ml-5 list-disc">
              <li>Real-time cart with localStorage for data retention and sharing</li>
              <li>Multi-step checkout with animations and clean UX</li>
              <li>Firebase Auth with protected & role-based routes</li>
              <li>Admin dashboard for managing products, profile management and advanced search & filtering</li>
              <li>Fully responsive UI with smooth animations and clean UX</li>
            </ul>
            <p className="text-sm text-black mt-2">
              <span className="font-semibold">Technologies Used:</span> React.js, React Router, Tailwind CSS, DaisyUI, React-based
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black border-b border-black mb-3">
            Education
          </h2>
          <div className="space-y-3">
            <div>
              <p className="text-base font-bold text-black">
                Daffodil International University
              </p>
              <p className="text-sm text-black">BSc in Computer Science & Engineering</p>
              <p className="text-sm text-black">January 2022 - 2025</p>
            </div>
            <div>
              <p className="text-base font-bold text-black">Completed Secondary</p>
              <p className="text-sm text-black">Completed Secondary</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black border-b border-black mb-3">
            Languages
          </h2>
          <div className="text-sm text-black">
            <p>Bangla, English.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
