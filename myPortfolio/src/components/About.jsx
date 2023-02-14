import { Icon } from "@iconify/react";
import React from "react";
import { motion } from 'framer-motion'
import resume from '../resume.pdf'

function About() {
  const icon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="about" id="about">
        <motion.div 
        className="image"
        variants={icon}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} ></motion.div>
        <motion.div 
        className="about_box"
        variants={parent}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
          <motion.h1 className="about_head" variants={child}>About Me</motion.h1>
          <motion.div className="tittle-underline" variants={child}>
            <div className="underline-1"></div>
            <div className="underline-2"></div>
          </motion.div>
          <motion.p className="about_sub" variants={child}>
          My name is D Bijayshakti Patro, I am a MERN Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from Odisha, India.
            <br />
            <br />
            I love working on new and exciting technologies emerging nowadays. I code dynamic websites with fully responsive for a great user experience. Also good at searching StackOverflow.
            <br />
            <br />
            I am organized, dedicated, and a team player, who loves coding and eating.
          </motion.p>
          <motion.a href={resume} target='_blank' variants={icon}><button className="btn">
            resume
            <Icon icon="line-md:downloading-loop" color="white" />
          </button>
          </motion.a>
        </motion.div>
      </div>
      <hr />
    </>
  );
}

export default About;
