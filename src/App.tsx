import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Proyects";
import Skills from "./components/Skills";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Hero />
          <Skills />
          <About />
        </div>
        <Projects />
      </div>
    </>
  );
};

export default App;
