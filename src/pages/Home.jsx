import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "../Components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to home
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
