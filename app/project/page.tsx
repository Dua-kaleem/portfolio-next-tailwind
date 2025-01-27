"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      name: "Fashion Ecommerce website",
      description: "A fashion eCommerce website built using a Figma template, with Next.js, TypeScript, and Tailwind CSS. The website features a responsive design and clean layout, showcasing products.Technologies Used Next.js TypeScript  Tailwind CSS.",
      imageUrl: "/pr01.png", 
      link: "https://assignment-2-cc3wsynpp-dua-kaleems-projects.vercel.app",
    },
    {
      name: "Countdown Timer",
      description: "A responsive countdown timer built with Next.js and TypeScript. Users can set, start, pause, or reset the timer, with a clean UI styled using Tailwind CSS. Deployed on Vercel, showcasing skills in React and UI design.",
      imageUrl: "/project2.png",
      link: "#",
    },
    {
      name: "",
      description: "This is a description for project 3.",
      imageUrl: "/project3.jpg", 
      link: "#",
    },
    {
      name: "Project 4",
      description: "This is a description for project 4.",
      imageUrl: "/project4.jpg", 
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center font-poppins text-4xl font-extrabold text-[var(--hover-color)] mb-12"
      >
        My Projects
      </motion.h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 shadow-lg">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="bg rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={300}
              height={200}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl text-white font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <Link
                href={project.link}
                className="bg-fuchsia-900 transition duration-300 p-3"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
