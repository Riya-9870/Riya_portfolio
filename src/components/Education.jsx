import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2024 - Present",
    degree: "Bachelor of Technology (CSE)",
    institute: "ICFAI University, Jharkhand",
    description:
      "Currently pursuing Computer Science Engineering while focusing on Web Development, DSA, and Software Development.",
  },
  {
    year: "2022 - 2024",
    degree: "Higher Secondary (Class XII)",
    institute: "DAV Public School",
    description:
      "Completed higher secondary education with a strong interest in mathematics and computer science.",
  },
  {
    year: "2020 - 2022",
    degree: "Secondary Education (Class X)",
    institute: "KSVN",
    description:
      "Built a strong academic foundation and developed an interest in programming and technology.",
  },
];

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-green-400 mb-16"
        >
          Education
        </motion.h2>

        <div className="relative border-l-2 border-green-500 ml-6">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, x:-40 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ delay:index*.2 }}
              viewport={{ once:true }}
              className="mb-14 ml-10 relative"
            >

              <div className="absolute -left-[52px] top-2 bg-green-400 p-3 rounded-full text-black shadow-lg">
                <FaGraduationCap />
              </div>

              <p className="text-green-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.degree}
              </h3>

              <h4 className="text-gray-400 mt-2">
                {item.institute}
              </h4>

              <p className="text-gray-400 mt-4 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;
