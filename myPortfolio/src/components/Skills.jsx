import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'

function Skills() {
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
        duration: 3,
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 260,
        damping: 20
      },
    },
  };
  return (
    <div className='skills' id='skill'>
      <motion.h1 
      className='heading'
      variants={icon}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >Skills</motion.h1>
      <motion.div 
      className='skills_box'
      variants={parent}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-html" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-css" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-sass" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:bootstrap" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-tailwind" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-js-official" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:react" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:redux" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:material-ui" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="simple-icons:chakraui" color="#44c8c1" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-node" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="simple-icons:express" color="white" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:mongodb-icon" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:postman-icon" color="#44c8c1" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="vscode-icons:file-type-firebase" color="#44c8c1" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="mdi:github" color='#fff' width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="logos:figma" width="64" height="64" inline={true} /></motion.div>
      <motion.div className='center' variants={child} whileHover={{ scale: 0.9 }}><Icon icon="radix-icons:notion-logo" color="#fff" width="64" height="64" inline={true} /></motion.div>
      </motion.div>
    </div>
  )
}

export default Skills