import React from "react";
const About = React.lazy(() => import("../components/About"))
const Contact = React.lazy(() => import("../components/Contact"))
const Education = React.lazy(() => import("../components/Education"))
const Footer = React.lazy(() => import("../components/Footer"))
const Header = React.lazy(() => import("../components/Header"))
const Landing = React.lazy(() => import("../components/Landing"))
const Project = React.lazy(() => import("../components/Project"))
const Skills = React.lazy(() => import("../components/Skills"))

function Home() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
