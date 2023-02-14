import React from "react";
import { Icon } from '@iconify/react';
import Icons from "./Icons";
import { motion } from 'framer-motion'

function Contact() {
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
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 100,
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
    <div className="contact" id="contact">
      <motion.h1 
      className="heading"
      variants={icon}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >Contact Me</motion.h1>
      <motion.div 
      className="tittle-underline"
      variants={icon}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >
        <div className="underline-1"></div>
        <div className="underline-2"></div>
      </motion.div>
      <div className="form_box">
        <motion.form 
        className="form" action="https://formspree.io/f/mpzepqgl" method="POST" 
        variants={parent}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }} >
          <motion.label htmlFor="name" variants={child}><Icon icon="line-md:account" width="24" inline={true} />Name</motion.label>
          <motion.input type="text" id="name" name="name" variants={child}/>
          <motion.label htmlFor="email" variants={child}><Icon icon="line-md:email-opened-twotone" width="24" inline={true} />Email</motion.label>
          <motion.input type="text" id="email" name="email" variants={child}/>
          <motion.label htmlFor="msg" variants={child}><Icon icon="mdi:message-outline" width="22" inline={true} />Message</motion.label>
          <motion.textarea type="text" id="msg" rows='4' name="message" variants={child}/>
          <motion.button className="btn" variants={child}>Send Message</motion.button>
        </motion.form>
      </div>
      <Icons/>
    </div>
  );
}

export default Contact;
