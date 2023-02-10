import React from 'react'
import { motion } from "framer-motion"

function Loader() {
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }
    
  return (
    <div className='loader'>
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256">
            <motion.path fill="white" d="M128 238.8a16.1 16.1 0 0 1-7.9-2.1l-84-47.4a16.2 16.2 0 0 1-8.1-14V80.7a16.2 16.2 0 0 1 8.1-14l84-47.4a15.9 15.9 0 0 1 15.8 0l84 47.4a16.2 16.2 0 0 1 8.1 14v94.6a16.2 16.2 0 0 1-8.1 14l-84 47.4a16.1 16.1 0 0 1-7.9 2.1Zm0-205.6L44 80.7v94.6l84 47.5l84-47.5V80.7Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 3, ease: [1, 0, 0.8, 1] }
              }}
        /></motion.svg>
    </div>
  )
}

export default Loader