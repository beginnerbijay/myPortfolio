import React from "react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion'

function Icons() {
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
  const icon = {
  hidden: {
    opacity: 0,
      scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    stiffness: 260,
    damping: 20
    },
  },
};
  return (
    <div className="icon_box">
      <motion.div 
      className="icons"
      variants={parent}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >
        <motion.a href="https://github.com/beginnerbijay" target="_blank" variants={icon}><Icon icon="mdi:github" color="#222831" width="38" /></motion.a>
        <motion.a href="https://www.linkedin.com/in/d-bijay-patro-b8b146229" target="_blank" variants={icon}><Icon icon="mdi:linkedin" width="38" color="#222831" /></motion.a>
        <motion.a href="mailto:=dbijaypatro@gmail.com" target="_blank" variants={icon}><Icon icon="mdi:gmail" color="#222831" width="38" /></motion.a>
        <motion.a href="https://wa.me/917735483272" target="_blank" variants={icon}><Icon icon="mdi:whatsapp" color="#222831" width="38" /></motion.a>
        <motion.a href="https://twitter.com/bijayashakti" target="_blank" variants={icon}><Icon icon="mdi:twitter" color="#222831" width="38" /></motion.a>
      </motion.div>
    </div>
  );
}

export default Icons;
