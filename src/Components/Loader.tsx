"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-zinc-900 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          <motion.svg
            viewBox="0 0 700 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 h-40"
            fill="none"
            stroke="#E73B37"
            strokeWidth="4"
          >
            <motion.path
              d="M573.73,435.67c0-11.23-5.07-21.86-13.79-28.92l-186-150.77c-15.97-12.94-38.82-12.94-54.79,0l-185.99,150.75c-8.73,7.07-13.79,17.7-13.79,28.93v133.83c0,35.31,40.95,54.83,68.38,32.6l158.79-128.69,158.8,128.7c27.43,22.23,68.39,2.71,68.39-32.6v-133.83"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Segundo path */}
            <motion.path
              d="M346.54,0C331.73,0,316.91,4.94,304.73,14.81L20.89,244.88C7.58,255.66-.15,271.89-.15,289.02v204.23c0,38.1,31.25,64.17,64.35,64.17,13.72,0,27.75-4.47,40.01-14.41l15.16-12.29v-95.05c0-11.23,5.06-21.86,13.79-28.94l185.99-150.74c7.99-6.48,17.69-9.71,27.4-9.71s19.41,3.23,27.39,9.7l186,150.76c8.72,7.07,13.79,17.7,13.79,28.93v95.07l15.15,12.28c12.27,9.93,26.3,14.4,40.01,14.4,33.11,0,64.36-26.05,64.36-64.16v-204.23c0-17.14-7.73-33.36-21.05-44.15L388.34,14.81C376.16,4.94,361.34,0,346.54,0"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Terceiro path */}
            <motion.path
              d="M346.54,246.28c-9.7,0-19.41,3.23-27.4,9.71l-185.99,150.75c-8.73,7.07-13.79,17.7-13.79,28.93v95.05l227.16-184.12,227.19,184.14v-95.07c0-11.23-5.07-21.86-13.79-28.92l-186-150.77c-7.98-6.47-17.69-9.7-27.39-9.7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
