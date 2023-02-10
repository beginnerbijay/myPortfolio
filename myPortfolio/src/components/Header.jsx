import React from "react";
import logo from "../assets/mern_logo.png";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]); // run when scroll direction changes

  return scrollDirection;
}

function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [menuOpen, setmenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

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
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className={`header ${scrollDirection === "down" ? "down" : "up"} `}>
      <motion.div
        className="logo_container"
        variants={icon}
        initial="hidden"
        animate="visible"
      >
        <img src={logo} className="logo" />
      </motion.div>
      <motion.div
        className={`subheader ${menuOpen && windowSize < 768 ? "isMenu" : ""}`}
        variants={parent}
        initial="hidden"
        animate="visible"
        onClick={() => setmenuOpen(!menuOpen)}
      >
        <motion.a href="#home" 
            variants={child}>
          <span
            className="section"
          >
            Home
          </span>
        </motion.a>
        <motion.a href="#about"
            variants={child}>
          <span
            className="section">
            About
          </span>
        </motion.a>
        <motion.a href="#education"
        variants={child}>
          <span
            className="section">
            Education
          </span>
        </motion.a>
        <motion.a href="#skill"
        variants={child}>
          <span
            className="section">
            Skills
          </span>
        </motion.a>
        <motion.a href="#project"
        variants={child}>
          <span
            className="section">
            Projects
          </span>
        </motion.a>
        <motion.a href="#contact"
        variants={child}>
          <span
            className="section">
            Contact
          </span>
        </motion.a>
      </motion.div>
      <motion.div 
      className="menu"
      variants={icon}
      initial="hidden"
      animate="visible">
        {!menuOpen ? (
          <Icon
            icon="material-symbols:menu-rounded"
            color="white"
            width="48"
            height="48"
            inline={true}
            onClick={() => setmenuOpen(!menuOpen)}
          />
        ) : (
          <Icon
            icon="material-symbols:close"
            color="white"
            width="48"
            height="48"
            inline={true}
            onClick={() => setmenuOpen(!menuOpen)}
          />
        )}
      </motion.div>
    </div>
  );
}

export default Header;
