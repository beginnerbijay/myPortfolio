import React from 'react'
import { motion } from 'framer-motion'

function Education() {
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
        duration: 2,
      },
    },
  };
  return (
    <div className='education' id='education'>
      <div className='details'>
        <motion.h1 
        className='heading'
      variants={icon}
      initial='hidden'
      whileInView='visible'>Education</motion.h1>
        <motion.div 
        className='tittle-underline'
      variants={icon}
      initial='hidden'
      whileInView='visible'>
          <div className='underline-1'></div>
          <div className='underline-2'></div>
        </motion.div>
        <motion.div 
        className='wrapper'
        variants={parent}
        initial='hidden'
        whileInView='visible'> 
        <motion.div className='primary_details' variants={child}>
          <h3 className='sub_heading'>Parala maharaja engineering college, berhampur</h3>
          <p className='min_heading'>bachelor of technology</p>
          <p className='min_heading'>2018-2022</p>
        </motion.div>
        <motion.div className='primary_details' variants={child}>
          <h3 className='sub_heading'>Hi-Tech +2 Science college, bhubaneswer</h3>
          <p className='min_heading'>+2 (intermediate)</p>
          <p className='min_heading'>2016-2018</p>
        </motion.div>
        <motion.div className='primary_details' variants={child}>
          <h3 className='sub_heading'>saraswati shishu vidya mandir, balangir</h3>
          <p className='min_heading'>High School</p>
          <p className='min_heading'>2016</p>
        </motion.div>
        </motion.div></div>
      </div>
  )
}

export default Education