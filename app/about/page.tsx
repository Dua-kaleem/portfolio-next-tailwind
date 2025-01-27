"use client"; // Ensure this is a client component

import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col min-h-screen px-6 md:px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center font-poppins text-4xl md:text-7xl font-family-rubik font-extrabold text-[var(--hover-color)]"
      >
        About Me
      </motion.h2>

      <div className="mt-12 mx-auto p-6 md:p-8 max-w-[90%] md:max-w-3xl border-2 border-[var(--hover-color)] rounded-lg bg-[var(--bg-color)] text-[16px] md:text-[20px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=""
        >
          I'm a dedicated and passionate front-end developer with a strong focus on crafting beautiful, intuitive, and functional websites. 
          With skills in <strong>HTML, CSS, TypeScript, and Next.js</strong>, I strive to merge creativity with code to bring ideas to life. Currently, I'm delving into Web 3.0 and modern JavaScript frameworks, constantly enhancing my abilities to stay at the forefront of industry trends.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4"
        >
          I believe in building <strong>user-centric designs</strong> that not only look stunning but also provide seamless user experiences. Beyond coding, I enjoy collaborating on innovative projects and am always excited to learn new technologies that challenge and inspire me.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
