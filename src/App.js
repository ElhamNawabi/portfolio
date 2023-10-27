import './App.css';
import Intro from "./components/intro";
import About from "./components/about";
import Experience from './components/experience';
import Skills from "./components/skills";
import Footer from "./components/footer";
import Projects from "./components/projects";

function App() {

  return (
    <div className="App">
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
