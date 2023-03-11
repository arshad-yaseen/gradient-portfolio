import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import ValidateForm from "form-validation-react";

function Experience() {
  return (
    <section
      id="contact"
      className="w-[100vw] bg-white z-50 h-screen  relative overflow-hidden lg:pl-44 lg:pt-20 lg:py-0 lg:px-0 py-6 px-6"
    >
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
        className=" mt-8 font-semibold text-5xl text-start "
      >
        Love to hear from you, <br />
        Get in touch 👋
      </motion.h1>

      <ValidateForm
        rules={{
          validateRequired: {
            action: "input_red_border",
          },
        }}
      >
        <form className="w-[800px] h-full mt-10  flex-flex-wrap">
          <motion.input
            required
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.6 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="bg-slate-50 py-2.5 pl-6 w-[48%] mr-4 outline-none focus:border"
          />
          <motion.input
            required
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.7 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-slate-50 py-2.5 pl-6 w-[48%] mr-4 outline-none focus:border"
          />
          <motion.input
            type="text"
            required
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
            name="message"
            placeholder="Message"
            className="bg-slate-50 py-2.5 h-[150px] pl-6 w-full mr-4 mt-4 outline-none focus:border"
          />

          <div className="flex w-full justify-start">
            <motion.button
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 30, delay: 0.9 }}
              type="submit"
              className="bg-black text-white mt-8 py-2.5 px-10 font-medium text-lg"
            >
              Just send ↗
            </motion.button>
          </div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1 }}
            className="flex w-full justify-start mt-10"
          >
            <span className="text-2xl opacity-80 hover:opacity-100 mr-4 transition-none cursor-pointer">
              <AiFillGithub />
            </span>
            <span className="text-2xl opacity-80 hover:opacity-100 mr-4 transition-none cursor-pointer">
              <AiOutlineTwitter />
            </span>
            <span className="text-2xl opacity-80 hover:opacity-100 mr-4 transition-none cursor-pointer">
              <AiOutlineInstagram />
            </span>
            <span className="text-2xl opacity-80 hover:opacity-100 mr-4 transition-none cursor-pointer">
              <AiFillYoutube />
            </span>
          </motion.div>
        </form>
      </ValidateForm>
    </section>
  );
}

export default Experience;
