/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Дизайн",
    description:
      "UI/UX дизайн (User Interface/User Experience design) - это процесс создания интерфейсов для веб-сайтов, мобильных приложений и других цифровых продуктов с учетом потребностей пользователей и целей бизнеса",
    link: "Узнать",
  },
  {
    name: "Разработка",
    description:
      "Когда вы говорите 'разработка по', вероятно, вы имеете в виду процесс разработки программного обеспечения (ПО). Разработка ПО - это создание и совершенствование компьютерных программ, веб-приложений",
    link: "Узнать",
  },
];

const Services = () => {
  return (
    <section className="section mt-24" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Что Я Делаю.</h2>
            <h3 className="h3 max-w-[455px] leading-9 mb-8">
              Как Fullstack разработчик, Adi обладает глубокими знаниями в
              области веб-разработки.
            </h3>
            <a href="#work">
              <button className="btn btn-sm">Посмотреть мои работы</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // desctructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b pb-2 border-white/20 min-h-[240px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="leading-light text-[16px]">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[10px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-[15px]">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
