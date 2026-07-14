import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0D1117] border-t border-green-500/20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl font-bold text-green-400">
            Riya Kumari
          </h2>

          <p className="text-gray-400 mt-3">
            Aspiring Software Developer
          </p>

        </motion.div>

        {/* Navigation */}

        <div className="flex justify-center flex-wrap gap-8 mt-10">

          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-green-400 transition">
            Skills
          </a>

          <a href="#education" className="hover:text-green-400 transition">
            Education
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Divider */}

        <div className="h-px bg-green-500/20 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Riya Kumari. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-green-400 text-black p-4 rounded-full hover:scale-110 transition shadow-[0_0_20px_#39FF14]"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
