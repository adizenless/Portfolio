/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// images
import Image from "../assets/avatar.png";
// icons
import { FaGithub, FaDribbble } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center md:mt-10"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 md:h-screen">
          {/* text */}
          <div className="flex-1 text-center lg:text-left mb-20">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="ml-1 text-[55px] font-bold leading-[1.2] lg:text-[110px]"
            >
              ADI <span>JIGIT</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[60px] font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Кто я?</span>
              <TypeAnimation
                sequence={[
                  "Web",
                  2000,
                  "Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[16px] leading-6 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Опытный разработчик, специализируется в Web разработке. Он
              обеспечит вам надежное программное обеспечение, способное
              эффективно достигать ваших бизнес-целей. Готов решать сложные
              задачи и улучшать вашу разработку
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="#contact">
                <button className="btn btn-lg mr-2">Написать</button>
              </a>
              <a href="#work" className="text-gradient btn-link ml-2">
                Портфолио
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/adizenless" target="_blank" className="mr-2">
                <FaGithub />
              </a>
              <a href="https://dribbble.com/adijigit" target="_blank" className="ml-2">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]"
          >
            <img src={Image} alt="Avatar" className=" rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
