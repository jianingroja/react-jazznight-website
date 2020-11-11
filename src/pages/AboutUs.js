import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Framer Motiion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Hook
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    //frag
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
