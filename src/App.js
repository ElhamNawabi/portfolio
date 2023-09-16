import './App.css';
import Intro from "./components/intro";
import About from "./components/about";
import Experience from './components/experience';
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Intro />
      <Experience />
      <About />
      <Skills />
    </div>
  );
}

export default App;
