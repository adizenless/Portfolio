/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-20 md:h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="md:flex-1 bg-about bg-contain bg-no-repeat h-[300px] md:h-[440px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-lg"
          >
            <h2 className="text-[40px] mb-6 font-bold  text-accent">
              Об Adi Jigit
            </h2>
            <h3 className="text-[16px] mb-4 leading-6">
              Как Frontend разработчик, Adi обладает глубокими знаниями в области веб-разработки. Он владеет фронтендом а также backend
              обеспечивая полный цикл создания веб-приложений.
            </h3>
            <p className="mb-6 text-[16px] leading-6">
              Adi умеет работать с разнообразными технологиями и языками
              программирования, что позволяет ему разрабатывать
              высококачественное программное обеспечение. С его навыками и
              опытом, Adi способен реализовать сложные проекты и обеспечить их
              успешное выполнение.
            </p>
            <div className="flex items-center">
              <a href="#contact">
                <button className="btn btn-lg mr-2">Написать</button>
              </a>
              <a href="#work" className="text-gradient btn-link ml-2">
                Портфолио
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
