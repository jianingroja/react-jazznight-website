import React from "react";
import home1 from "../img/home1.png";
//Style
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  //Motion Variants
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };

  // const titleContainer = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //       staggerChildren: 0.75,
  //       when: "beforeChildren",
  //     },
  //   },
  // };

  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          //*if we don't want to want the stagger
          // initial="hidden"
          // animate="show"
          //*if we don't want to want the stagger
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave></Wave>
    </About>
  );
};

export default AboutSection;
