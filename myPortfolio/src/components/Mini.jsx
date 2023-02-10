import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion'

function Mini({image,tittle,gitlink,livelink}) {

  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
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
        duration: 3,
      },
    },
  };
  return (
    <motion.div 
    className='mini_box'
    variants={parent}
    initial='hidden'
    whileInView='visible'>
        <motion.img src={image} variants={child}/>
        <motion.div className='icons' variants={child}>
          <h3>{tittle}</h3>
          <div>
            <a href={gitlink} target='_blank'><Icon icon="ri:github-line" color="white" width="24" height="24" inline={true} /></a>
            <a href={livelink} target='_blank'><Icon icon="material-symbols:desktop-windows-outline" color="white" width="24" inline={true} /></a>
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Mini