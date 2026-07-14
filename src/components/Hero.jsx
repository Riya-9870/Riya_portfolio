import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-green-400 mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Riya <span className="text-green-400">Kumari</span>
          </h1>

          <div className="text-2xl md:text-3xl mt-6 font-semibold text-gray-300">

            <TypeAnimation
              sequence={[
                "Aspiring Software Developer",
                2000,
                "Frontend Developer",
                2000,
                "JavaScript Learner",
                2000,
                "DSA Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="text-gray-400 mt-8 leading-8">
            I'm a B.Tech Computer Science Engineering student at
            <span className="text-green-400">
              {" "}ICFAI University, Jharkhand
            </span>.
            I enjoy creating beautiful, responsive websites and continuously
            improving my programming skills.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="px-8 py-3 bg-green-400 text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full blur-3xl bg-green-500 opacity-20"></div>

            <img
              src="/profile.png"
              alt="Riya Kumari"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-green-400 shadow-[0_0_40px_#39FF14]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
