import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-green-400 mb-5"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Let's build something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-[#161B22] rounded-2xl border border-green-500/20 p-10"
          >

            <h3 className="text-3xl font-bold text-green-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-3xl text-green-400" />

                <div>

                  <p className="text-gray-400">Email</p>

                  <p>
                    riyakumaribhagat4567@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaGithub className="text-3xl text-green-400" />

                <div>

                  <p className="text-gray-400">GitHub</p>

                  <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400"
                  >
                    github.com/YOUR_USERNAME
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaLinkedin className="text-3xl text-green-400" />

                <div>

                  <p className="text-gray-400">LinkedIn</p>

                  <a
                    href="https://linkedin.com/in/YOUR_LINKEDIN"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400"
                  >
                    LinkedIn Profile
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaMapMarkerAlt className="text-3xl text-green-400" />

                <div>

                  <p className="text-gray-400">Location</p>

                  <p>
                    Jharkhand, India
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form

            initial={{ opacity:0, x:60 }}

            whileInView={{ opacity:1, x:0 }}

            transition={{ duration:.8 }}

            viewport={{ once:true }}

            className="bg-[#161B22]
            rounded-2xl
            border
            border-green-500/20
            p-10"

          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#0D1117] p-4 rounded-lg mb-6 outline-none border border-gray-700 focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#0D1117] p-4 rounded-lg mb-6 outline-none border border-gray-700 focus:border-green-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#0D1117] p-4 rounded-lg mb-6 outline-none border border-gray-700 focus:border-green-400"
            ></textarea>

            <button
              className="w-full py-4 rounded-lg bg-green-400 text-black font-bold hover:scale-105 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
