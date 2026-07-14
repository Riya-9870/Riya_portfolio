import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0D1117] flex flex-col items-center justify-center z-[9999]">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-green-400"
      >
        RK
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 tracking-widest"
      >
        Initializing Portfolio...
      </motion.p>

      <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-full bg-green-400"
        />
      </div>

    </div>
  );
}

export default Loader;
