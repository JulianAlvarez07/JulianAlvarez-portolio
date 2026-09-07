import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Proyects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 bg-grid" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
