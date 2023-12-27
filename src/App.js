// App.js
import React from "react";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
