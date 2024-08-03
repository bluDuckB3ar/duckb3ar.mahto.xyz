"use client";
import { motion } from "framer-motion";

const theWarning = () => (
  <motion.div
    className="absolute-top-full left-0 w-full bg-red-600 text-white "
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 5, loop: Infinity, ease: "linear" }}
  >
    warning
  </motion.div>
);

export default theWarning;