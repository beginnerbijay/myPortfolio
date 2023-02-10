import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Project from "../components/Project";
import Skills from "../components/Skills";

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
