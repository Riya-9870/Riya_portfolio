import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-green-400 mb-14"
        >
          About Me
        </motion.h2>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#161B22] rounded-2xl border border-green-500 shadow-[0_0_30px_rgba(57,255,20,0.15)] overflow-hidden"
        >

          {/* Terminal Header */}
          <div className="flex items-center gap-3 px-6 py-4 bg-[#0D1117] border-b border-green-500">

            <span className="w-4 h-4 rounded-full bg-red-500"></span>
            <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
            <span className="w-4 h-4 rounded-full bg-green-500"></span>

            <p className="text-gray-400 ml-4">
              riya@portfolio:~
            </p>

          </div>

          {/* Terminal Body */}

          <div className="p-8 text-gray-300 font-mono space-y-6">

            <p>
              <span className="text-green-400">$ whoami</span>
            </p>

            <p>
              Hi 👋 I'm <span className="text-green-400">Riya Kumari</span>,
              an aspiring Software Developer and B.Tech Computer Science
              Engineering student at ICFAI University, Jharkhand.
            </p>

            <p>
              <span className="text-green-400">$ education</span>
            </p>

            <p>
              🎓 Bachelor of Technology (Computer Science Engineering)
            </p>

            <p>
              ICFAI University, Jharkhand
            </p>

            <p>
              <span className="text-green-400">$ skills</span>
            </p>

            <p>
              HTML • CSS • JavaScript • Python • C • C++ • DSA
            </p>

            <p>
              <span className="text-green-400">$ currently_learning</span>
            </p>

            <p>
              JavaScript • Modern Web Development • React
            </p>

            <p>
              <span className="text-green-400">$ goals</span>
            </p>

            <p>
              Become a skilled Software Engineer, contribute to Open Source,
              and build impactful applications.
            </p>

          </div>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#161B22] rounded-xl p-8 border border-green-500/30 text-center"
          >
            <FaCode
              className="text-5xl text-green-400 mx-auto mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Coding
            </h3>

            <p className="text-gray-400">
              Passionate about building clean, responsive and user-friendly
              web applications.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#161B22] rounded-xl p-8 border border-green-500/30 text-center"
          >

            <FaLaptopCode
              className="text-5xl text-green-400 mx-auto mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Development
            </h3>

            <p className="text-gray-400">
              Exploring modern frontend technologies and continuously learning
              new development practices.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#161B22] rounded-xl p-8 border border-green-500/30 text-center"
          >

            <FaGraduationCap
              className="text-5xl text-green-400 mx-auto mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Education
            </h3>

            <p className="text-gray-400">
              Pursuing B.Tech in Computer Science Engineering while building
              practical software development skills.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
