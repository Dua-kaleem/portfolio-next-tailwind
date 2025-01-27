"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="md:py-[100px] px-[10%] min-h-[100vh] h-[100%] w-[100%] flex md:flex-row  md:justify-between flex-col sm:justify-center  sm:space-y-8 mt-[3%] ">
      
      {/* Image Animation */}
      <motion.div
        className="flex justify-center items-center w-[300px] h-[300px] relative overflow-hidden bg border-[#FF10F0] border-0 nb br"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-overlay"></div> {/* Overlay effect ke liye */}
        <div className="flex items-center justify-center z-10">
          <Image
            src="/PF.png"
            alt="image"
            width={250}
            height={300}
            className="mb-4 image-blend"
          /> 
        </div>
      </motion.div>

      {/* Text Animation */}
      <motion.div
        className="max-w-[600px]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-[2.5rem] font-[700]">HI! I'm Dua</h1>
        
        {/* Typewriter Animation */}
        <div className="text-[1.5rem] font-[600]">
          <h3 className="text-4xl font-bold">
            I am{" "}
            <span className="text-2xl text-[var(--hover-color)] shadow-lg font-family-rubik">
              <TypeAnimation
                sequence={["Web Developer", 1000, "UI/UX Designer", 1000, "Frontend Developer", 1000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </span>
          </h3>
        </div>

        {/* Paragraph Fade-in Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          As a Web Developer focusing on Frontend Development and UI/UX Design, I am an aspiring Full Stack Developer dedicated to crafting intuitive websites and expanding my skills in web technologies.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;