import { useEffect, useState } from "react";

// Components
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#050505] via-[#0D1117] to-black text-white">

      {/* Animated Background */}
      <Background />

      {/* Neon Cursor */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>

        <Hero />

        <About />

        <Skills />

        <Education />

        {/* Projects Section will be added later */}

        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
