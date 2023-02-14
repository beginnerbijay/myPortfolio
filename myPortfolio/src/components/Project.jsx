import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import Mini from "./Mini";
import { pro } from "../config";
import { major } from "../config";
import Image from "./Image";
import { motion } from 'framer-motion'


function Project() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <Icon icon="material-symbols:keyboard-double-arrow-right" width="48" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <Icon icon="material-symbols:keyboard-double-arrow-left" width="48" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

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
    <div className="project" id="project">
      <motion.h1
      variants={icon}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >Projects</motion.h1>
      <motion.div 
      className="tittle-underline"
      variants={icon}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >
        <div className="underline-1"></div>
        <div className="underline-2"></div>
      </motion.div>
      <div className="details">
        <Slider {...settings}>
          {major?.map((img, idx) => (
            <motion.div 
            className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}
            variants={parent}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }} >
              <motion.div 
              className="img_box"
              variants={icon}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }} >
                <div>
                <Image placeholderImg="https://via.placeholder.com/400x200.png?text=Loding" src={img.src} alt={img}/>
                <div className="nameing">
                  <h1>{img.heading}</h1>
                </div>
                </div>
              </motion.div>
              <motion.p className="text" variants={child}>{img.des}</motion.p>
              <motion.p className="text" variants={child}>{img.tools}</motion.p>
              <div>
                <a href={img.gitlink} target="_blank">
                  <Icon
                    icon="ri:github-line"
                    color="white"
                    width="24"
                    height="24"
                    inline={true}
                  />
                </a>
                <a href={img.livelink} target="_blank">
                  <Icon
                    icon="material-symbols:desktop-windows-outline"
                    color="white"
                    width="24"
                    inline={true}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      <motion.h2
      variants={icon}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} >Other Noteworthy Projects</motion.h2>
      <div className="details_2">
        {pro?.map((minor, ind) => {
          return (
            <div className="center" key={ind}>
              <Mini
                image={minor.imgsrc}
                tittle={minor.tittle}
                gitlink={minor.gitlink}
                livelink={minor.livelink}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
