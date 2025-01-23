import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import DarkModeSwitch from "./components/DarkModeSwitch";

function App() {
  useEffect(() => {
    document.title = "Hector's Personal Site ";
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
