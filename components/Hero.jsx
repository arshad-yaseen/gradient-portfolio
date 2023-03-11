import Image from "next/image";
import React from "react";
import HeroGradient from "../public/svgs/herogradient.svg";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.5]);

  return (
    <section
      id="home"
      className="h-screen w-[100%] flex overflow-hidden sticky top-0  bg-primary"
    >
      <main className="relative z-10 flex flex-col items-center pt-24 w-full h-full">
        <h1 className="lg:text-[5rem] sm:text-[4rem] text-[3rem] leading-[1.1]  font-bold text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.3 }}
            className="text-2xl font-light"
          >
            Hi, I'am Arshad 🤘{" "}
          </motion.span>{" "}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
          >
            Self-taught <br className="sm:hidden block" /> Full Stack
          </motion.span>{" "}
          <br />{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.7 }}
          >
            Web <br className="sm:hidden block" />
            <span className="bg-clip-text border-b pb-1 border-b-[#AAFB62] text-transparent bg-gradient-to-r from-[#56DEF0] to-[#AFFD5A]">
              Developer
            </span>
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.9 }}
          className="bg-clip-text text-transparent bg-gradient-to-br mt-10 text-lg from-white to-slate-400 sm:w-[650px] w-[300px]"
        >
          a skilled full stack web developer and frontend enthusiast who creates
          modern and animated websites with responsive design and user-friendly
          interfaces.{" "}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 1.1 }}
          className="w-full flex justify-center items-center"
        >
          <a
            href="#contact"
            className=" text-black rounded-full px-8 py-3 mt-12  font-[500] text-lg bg-gradient-to-r hover:to-[#56DEF0] from-[#56DEF0] hover:from-[#AFFD5A] to-[#AFFD5A] transition-all "
          >
            Connect with me
          </a>
        </motion.div>

        {/* Scroll down button */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, delay: 1.7 }}
          className="w-full flex justify-center items-center"
        >
          <div class="scroll-down"></div>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
        className="overflow-hidden"
      >
        <motion.img
          style={{ scale }}
          src={HeroGradient.src}
          alt="herogradient"
          priority={true}
          className="absolute  lg:-left-[600px] -left-[200px] blur-3xl -top-[400px] h-[600px] z-0"
        />
        <Image
          src={HeroGradient}
          alt="herogradient"
          priority={true}
          className="absolute -right-[200px] rotate-45 blur-3xl -bottom-[300px] h-[600px] z-0"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
