// Packages
import {Routes, Route} from "react-router-dom";

// Components
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/my-projects/projects";
import Skills from "./components/skills/skills";
import CV from "./components/cv/cv";
import Contact from "./components/contact/contact";


function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/curriculum-vitae" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
