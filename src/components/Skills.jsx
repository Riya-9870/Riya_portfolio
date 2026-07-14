import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    color: "text-orange-500",
    level: "Advanced",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    color: "text-blue-500",
    level: "Advanced",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    color: "text-yellow-400",
    level: "Learning",
  },
  {
    icon: <FaPython />,
    name: "Python",
    color: "text-cyan-400",
    level: "Intermediate",
  },
  {
    icon: <SiC />,
    name: "C",
    color: "text-blue-400",
    level: "Intermediate",
  },
  {
    icon: <SiCplusplus />,
    name: "C++",
    color: "text-indigo-400",
    level: "Intermediate",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "text-red-500",
    level: "Learning",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    color: "text-white",
    level: "Intermediate",
  },
  {
    icon: <SiVisualstudiocode />,
    name: "VS Code",
    color: "text-sky-400",
    level: "Daily Use",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-5xl text-center font-bold text-green-400 mb-5"
        >
          Skills
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Technologies I use to build modern applications.
        </p>

        {/* Skill Cards */}

        <div className="grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8">

          {skills.map((skill, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: .5,
                delay: index * .1,
              }}

              whileHover={{
                y: -10,
                scale: 1.05,
              }}

              viewport={{ once: true }}

              className="bg-[#161B22]
              border
              border-green-500/20
              rounded-2xl
              p-8
              text-center
              hover:border-green-400
              hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]
              transition
              duration-300"

            >

              <div
                className={`text-6xl mb-5 ${skill.color}`}
              >
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {skill.name}
              </h3>

              <p className="text-green-400 mt-3">
                {skill.level}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Extra Section */}

        <motion.div

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{ delay: .5 }}

          viewport={{ once: true }}

          className="mt-24
          bg-[#161B22]
          rounded-2xl
          border
          border-green-500/20
          p-10"

        >

          <h3 className="text-3xl font-bold text-green-400 mb-6">
            Currently Learning
          </h3>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <span>JavaScript</span>

                <span>70%</span>

              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full">

                <div
                  className="h-3 rounded-full bg-green-400"
                  style={{ width: "70%" }}
                ></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>React</span>

                <span>25%</span>

              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full">

                <div
                  className="h-3 rounded-full bg-green-400"
                  style={{ width: "25%" }}
                ></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Data Structures & Algorithms</span>

                <span>65%</span>

              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full">

                <div
                  className="h-3 rounded-full bg-green-400"
                  style={{ width: "65%" }}
                ></div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
