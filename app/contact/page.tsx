"use client";
import { motion } from "framer-motion";

function Contact() {
   return (
      <div className="relative flex flex-col h-screen justify-center  items-center bg-[var(--bg-color)] text-white px-4 pt-16 z-10 sm:mb-7 ">
         <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--hover-color)] mb-8"
         >
            Contact Me
         </motion.h2>
         <p className="text-center text-lg text-gray-300  max-w-2xl">
            Got a question or want to work together? Feel free to reach out by filling the form below.
         </p>
         <form className="w-full max-w-3xl bg mb-9 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
               <div className="flex flex-col">
                  <label
                     htmlFor="name"
                     className="text-gray-300 font-semibold mb-2"
                  >
                     Your Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     placeholder="John Doe"
                     className="px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="email"
                     className="text-gray-300 font-semibold mb-2"
                  >
                     Email Address
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="you@example.com"
                     className="px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
                  />
               </div>
            </div>
            <div className="flex flex-col mb-6">
               <label
                  htmlFor="subject"
                  className="text-gray-300 font-semibold mb-2"
               >
                  Subject
               </label>
               <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Write a subject"
                  className="px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
               />
            </div>
            <div className="flex flex-col mb-6">
               <label
                  htmlFor="message"
                  className="text-gray-300 font-semibold mb-2"
               >
                  Message
               </label>
               <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  className="px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
               ></textarea>
            </div>
            <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               type="submit"
               className="w-full py-3 skill-bg text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300"
            >
               Send Message
            </motion.button>
         </form>
      </div>
   );
}

export default Contact;

