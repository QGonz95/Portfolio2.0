import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journey from "./components/Journey";
import Navigation from "./components/Nav";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-teal-50   ">
      <Navigation />
      <Home />
      <Journey />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
