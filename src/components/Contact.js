import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0pbuxpd",
        "template_06m5esr",
        form.current,
        "XU-k2NHfg8eOxgyxH"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Успешно отправлено!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Что-то пошло не так.");
        }
      );
  };
  return (
    <section className="py-16 lg:section md:mt-24" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="md:mb-12">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Написать
              </h4>
              <h2 className="text-[38px] lg:text-[90px] leading-none mb-12">
                Давайте общаться!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col pb-6 p-6 items-start mb-20 md:mb-32"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all rounded-md mb-6"
              type="text"
              placeholder="Ваше имя"
              name="user_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all rounded-md mb-6"
              type="email"
              placeholder="Ваш Email"
              name="user_email"
            />
            <textarea
              className="bg-transparent border-b mt-8 pb-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12"
              placeholder="Ваше сообщение"
              name="message"
            ></textarea>
            <button className="btn btn-lg">Отправить</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
