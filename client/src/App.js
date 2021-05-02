import AboutMe from "./components/aboutme/aboutme";
import Nav from "./components/nav/nav";
import { Bio } from "./components/aboutme/bio";
import Footer from "./components/footer/footer";
import "./App.css";
import Project from "./components/projects/project";
import ContactMe from "./components/contactme/contactme";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <Bio />
      <Project />
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
