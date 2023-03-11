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
    <div className="w-[100vw] z-50 h-screen bg-primary sticky top-0 overflow-hidden">
      <div className="h-full w-full  flex flex-col items-center pt-16">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#56DEF0] to-[#AFFD5A]"
        >
          Featured projects
        </motion.h1>

        <div className="w-full h-full mt-14 flex  px-10 overflow-x-scroll">
          <div className="min-w-[330px] mr-5 p-5 mt-5 h-[450px] flex flex-col items-center  border border-gray-800 rounded-3xl shadow-lg">
            <div className="w-full h-[45%]  rounded-3xl overflow-hidden">
                <Image src={ProjectImage1} alt="project-1" />
            </div>
          </div>
          <div className="min-w-[330px] mr-5 p-5 mt-5 h-[450px] flex flex-col items-center  border border-gray-800 rounded-3xl shadow-lg">
            <div className="w-full h-[45%]  rounded-3xl overflow-hidden">
                <Image src={ProjectImage2} alt="project-1" />
            </div>
          </div>
          <div className="min-w-[330px] mr-5 p-5 mt-5 h-[450px] flex flex-col items-center  border border-gray-800 rounded-3xl shadow-lg">
            <div className="w-full h-[45%]  rounded-3xl overflow-hidden">
                <Image src={ProjectImage3} alt="project-1" />
            </div>
          </div>
          <div className="min-w-[330px] mr-5 p-5 mt-5 h-[450px] flex flex-col items-center  border border-gray-800 rounded-3xl shadow-lg">
            <div className="w-full h-[45%]  rounded-3xl overflow-hidden">
                <Image src={ProjectImage4} alt="project-1" />
            </div>
          </div>
          <div className="min-w-[330px] mr-5 p-5 mt-5 h-[450px] flex flex-col items-center  border border-gray-800 rounded-3xl shadow-lg">
            <div className="w-full h-[45%]  rounded-3xl overflow-hidden">
                <Image src={ProjectImage1} alt="project-1" />
            </div>
          </div>
          <div className="min-w-[330px] mr-5 p-5 mt-5 h-[450px] flex flex-col items-center  border border-gray-800 rounded-3xl shadow-lg">
            <div className="w-full h-[45%]  rounded-3xl overflow-hidden">
                <Image src={ProjectImage1} alt="project-1" />
            </div>
          </div>
        </div>
      </div>

      
      <div
        className="overflow-hidden"
      >
        <Image
          src={HeroGradient}
          alt="herogradient"
          priority={true}
          className="absolute -right-[300px] rotate-45 blur-3xl -bottom-[500px] h-[600px] z-0"
        />
      </div>

    </div>
  );
}

export default Projects;
