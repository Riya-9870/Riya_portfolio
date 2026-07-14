import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0D1117] text-white min-h-screen overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
