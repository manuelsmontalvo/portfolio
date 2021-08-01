import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
