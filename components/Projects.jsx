import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroGradient from "../public/svgs/herogradient.svg";
import ProjectImage1 from "../public/images/projects/projectimage1.webp";
import ProjectImage2 from "../public/images/projects/projectimage2.webp";
import ProjectImage3 from "../public/images/projects/projectimage3.webp";
import ProjectImage4 from "../public/images/projects/projectimage4.webp";

function Projects() {
  return (
    <section
      id="projects"
      className="w-[100vw] z-50 lg:h-screen bg-primary lg:sticky relative lg:pb-0 pb-14 top-0 overflow-hidden"
    >
      <div className="h-full w-full  flex flex-col items-center hover:border-gray-700 pt-16">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#56DEF0] to-[#AFFD5A]"
        >
          Featured projects
        </motion.h1>

        <div className="w-full h-full mt-14 flex  px-10 justify-center relative z-50 lg:flex-nowrap flex-wrap">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
            className="lg:w-[330px] w-[350px] project-card lg:mr-6 p-5 mt-5 h-[450px] relative flex flex-col items-center hover:border-gray-700  border border-gray-800 transition-all cursor-pointer rounded-3xl shadow-lg"
          >
            <div className="w-full h-[50%]  rounded-3xl overflow-hidden">
              <Image src={ProjectImage1} alt="project-1" />
            </div>
            <h1 className="text-slate-700 font-bold text-4xl mt-5">
              Confluence Chicago
            </h1>
            <h1 className="text-slate-700 font-semibold text-xl mt-5">
              Design & Developed
            </h1>
            <div className="w-[50px] transition-all duration-200 h-[50px] redirect-button flex items-center justify-center translate-y-6 opacity-0 bg-white rounded-full absolute right-8 bottom-8">
              ↗
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.7 }}
            className="lg:w-[330px] w-[350px] project-card lg:mr-6 p-5 mt-5 h-[450px] relative flex flex-col items-center hover:border-gray-700  border border-gray-800 transition-all cursor-pointer rounded-3xl shadow-lg"
          >
            <div className="w-full h-[50%]  rounded-3xl overflow-hidden">
              <Image src={ProjectImage2} alt="project-1" />
            </div>
            <h1 className="text-slate-700 font-bold text-4xl mt-5">
              Hopewell Brewing
            </h1>
            <h1 className="text-slate-700 font-semibold text-xl mt-5">
              Developed
            </h1>
            <div className="w-[50px] transition-all duration-200 h-[50px] redirect-button flex items-center justify-center translate-y-6 opacity-0 bg-white rounded-full absolute right-8 bottom-8">
              ↗
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.9 }}
            className="lg:w-[330px] w-[350px] project-card lg:mr-6 p-5 mt-5 h-[450px] relative flex flex-col items-center hover:border-gray-700  border border-gray-800 transition-all cursor-pointer rounded-3xl shadow-lg"
          >
            <div className="w-full h-[50%]  rounded-3xl overflow-hidden">
              <Image src={ProjectImage3} alt="project-1" />
            </div>
            <h1 className="text-slate-700 font-bold text-4xl mt-5">
              WordArt Generator
            </h1>
            <h1 className="text-slate-700 font-semibold text-xl mt-5">
              Design & Developed
            </h1>
            <div className="w-[50px] transition-all duration-200 h-[50px] redirect-button flex items-center justify-center translate-y-6 opacity-0 bg-white rounded-full absolute right-8 bottom-8">
              ↗
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1.1 }}
            className="lg:w-[330px] w-[350px] project-card lg:mr-6 p-5 mt-5 h-[450px] relative flex flex-col items-center hover:border-gray-700  border border-gray-800 transition-all cursor-pointer rounded-3xl shadow-lg"
          >
            <div className="w-full h-[50%]  rounded-3xl overflow-hidden">
              <Image src={ProjectImage4} alt="project-1" />
            </div>
            <h1 className="text-slate-700 font-bold text-4xl mt-5">
              WordArt Generator
            </h1>
            <h1 className="text-slate-700 font-semibold text-xl mt-5">
              Design & Developed
            </h1>
            <div className="w-[50px] transition-all duration-200 h-[50px] redirect-button flex items-center justify-center translate-y-6 opacity-0 bg-white rounded-full absolute right-8 bottom-8">
              ↗
            </div>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden z-10">
        <Image
          src={HeroGradient}
          alt="herogradient"
          priority={true}
          className="absolute -right-[300px] rotate-45 blur-3xl -bottom-[500px] h-[600px] z-0"
        />
      </div>
    </section>
  );
}

export default Projects;
