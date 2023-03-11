import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectImage1 from "../public/images/projects/projectimage1.webp";
import ProjectImage2 from "../public/images/projects/projectimage2.webp";
import ProjectImage3 from "../public/images/projects/projectimage3.webp";
import ProjectImage4 from "../public/images/projects/projectimage4.webp";

function About() {

  const project_image_animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      className="w-[100vw] z-50 lg:h-screen bg-primary relative "
    >
      <div className="projects-gallery-section lg:h-[32vh] w-full   flex ">
        <motion.div
          initial={project_image_animation.initial}
          whileInView={ project_image_animation.animate}
          transition={{ type: "spring", stiffness: 30, delay: 0 }}
          viewport={{ once: true }}
          className="project-image-wrapper h-full w-[600px] overflow-hidden  cursor-pointer hover:opacity-60 transition-opacity"
        >
          <Image
            src={ProjectImage1}
            alt="project-1"
            className="transition-all duration-300 opacity-70 hover:scale-105 hover:opacity-50"
          />
        </motion.div>
        <motion.div
          initial={project_image_animation.initial}
          whileInView={ project_image_animation.animate}
          transition={{ type: "spring", stiffness: 30, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-image-wrapper h-full w-[600px] overflow-hidden  cursor-pointer hover:opacity-60 transition-opacity"
        >
          <Image
            src={ProjectImage2}
            alt="project-2"
            className="transition-all duration-300 opacity-70 hover:scale-105 hover:opacity-50"
          />
        </motion.div>
        <motion.div
          initial={project_image_animation.initial}
          whileInView={ project_image_animation.animate}
          transition={{ type: "spring", stiffness: 30, delay: 0.4 }}
          viewport={{ once: true }}
          className="project-image-wrapper h-full w-[600px] overflow-hidden  cursor-pointer hover:opacity-60 transition-opacity"
        >
          <Image
            src={ProjectImage3}
            alt="project-3"
            className="transition-all duration-300 opacity-70 hover:scale-105 hover:opacity-50"
          />
        </motion.div>

        <motion.div
          initial={project_image_animation.initial}
          whileInView={ project_image_animation.animate}
          transition={{ type: "spring", stiffness: 30, delay: 0.6 }}
          viewport={{ once: true }}
          className="project-image-wrapper h-full w-[600px] overflow-hidden  cursor-pointer hover:opacity-60 transition-opacity"
        >
          <Image
            src={ProjectImage4}
            alt="project-4"
            className="transition-all duration-300 opacity-70 hover:scale-105 hover:opacity-50"
          />
        </motion.div>
      </div>

      <div className="h-full w-full  flex flex-col items-center pt-16">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#56DEF0] to-[#AFFD5A]"
        >
          About me
        </motion.h1>

        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.6 }}
          className="bg-clip-text text-transparent bg-gradient-to-br mt-10 text-xl from-white to-slate-400 lg:w-[950px] sm:w-[700px] w-[300px]"
        >
          a mastermind of the digital world, a full stack web developer and
          frontend enthusiast who is truly passionate about programming. Meet
          Arshad yaseen, the creative genius behind some of the most modern and
          animated websites on the internet today. With years of experience and
          a relentless drive for innovation, Arshad yaseen has developed an
          unparalleled skillset in the world of web development. From responsive
          design to user-friendly interfaces, Arshad yaseen has the tools and
          expertise to create websites that are not only visually stunning, but
          also highly functional and engaging.
        </motion.p>

        <div className="flex items-center justify-center flex-wrap mt-8 lg:px-64 px-6">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.3 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Nextjs
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.4 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Tailwindcss
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Bootstrap
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.6 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Gsap
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.7 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Framer motion
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            React
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.9 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Nodejs
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Express Js
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1.1 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Handlebars
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1.2 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            MongoDb
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1.3 }}
            className="py-1.5 flex items-center justify-center bg-gradient-to-r mt-4 from-[#56DEF0] to-[#AFFD5A] px-6 rounded-full bg-slate-900 mr-3 text-black font-medium"
          >
            Git
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
