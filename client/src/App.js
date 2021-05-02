import AboutMe  from "./components/aboutme/aboutme";
import Nav from "./components/nav/nav";
import {Bio} from "./components/aboutme/bio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <Bio/>
    </div>
  );
}

export default App;
