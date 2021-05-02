import AboutMe from "./components/aboutme/aboutme";
import Nav from "./components/nav/nav";
import { Bio } from "./components/aboutme/bio";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <Bio />
      <Footer />
    </div>
  );
}

export default App;
