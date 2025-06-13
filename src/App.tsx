import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Proyects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Hero />
        </div>
        <Projects />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Skills />
          <About />
        </div>
        <Contact />
      </div>
    </>
  );
};

export default App;
