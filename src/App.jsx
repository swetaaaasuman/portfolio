import "./App.scss";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Internship from "./components/Internship";
// import Test from "./Test";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Portfolio from "./components/Projects";
import Skills from "./components/Skills";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Internship">
    <Parallax type="experience" /> 
  </section>
  <section>
  <Internship /> 
  </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      {/* <Projects /> */}
      <Projects />
      {/* <Portfolio /> */}
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test />
      <Test /> */}
      
    </div>
  );
};

export default App;
