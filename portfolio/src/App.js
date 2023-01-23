import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-teal-50   ">
      <Navigation />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
