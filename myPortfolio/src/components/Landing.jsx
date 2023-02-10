import React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";

function Landing() {
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
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  
  return (
    <div className="landing" id="home">
      <motion.div
        className="landing_sub"
        variants={parent}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1 className="heading" variants={child}>
          Hi, There
        </motion.h1>
        <motion.h3 className="sub_heading" variants={child}>
          I'm{" "}
          <span className="name">
            D Bijayshakti <span>Patro</span>
          </span>
        </motion.h3>
        <motion.h3 className="sub_heading" variants={child}>
          {" "}
          A Full Stack Web Developer
        </motion.h3>
      </motion.div>
      <Particles
          height="100vh"
          width="100vw"
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 3,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
    </div>
  );
}

export default Landing;