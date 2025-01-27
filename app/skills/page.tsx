"use client";
import { motion } from "framer-motion";

function Skills() {
   const skills = [
      { name: "Html", percentage: 90, color: "bg" },
      { name: "CSS", percentage: 85, color: "bg" },
      { name: "TypeScript", percentage: 80, color: "bg" },
      { name: "Nextjs", percentage: 58, color: "bg" },
      { name: "Git", percentage: 65, color: "bg" },
      { name: "GitHub", percentage: 80, color: "bg" },
   ];

   return (
      <div className="flex flex-col h-[80vh] justify-center items-center overflow-hidden bg-[var(--bg-color)] text-white">
         <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--hover-color)] mb-8"
         >
            My Skills
         </motion.h2>
         <p className="text-center text-lg text-gray-300 mb-10 px-4">
            Here are my technical skills and the proficiency levels I’ve achieved.
         </p>

         <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-4">
            {skills.map((skill, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mb-6"
               >
                  <div className="flex justify-between items-center mb-2">
                     <span className="font-semibold text-lg">{skill.name}</span>
                     <span className="font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
                     <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1 }}
                        className={`h-4 rounded-full ${skill.color} shadow-md`}
                     ></motion.div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   );
}

export default Skills;
