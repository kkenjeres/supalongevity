"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { faq } from "./data/faq";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-[#F9E9D2]  py-20 " id="faqsection">
      <div className="w-[90%] md:w-[80%] m-auto md:flex justify-around">
        <div className="mb-10 md:mb-0">
          <small className="text-[14px] text-[#399373]">FAQ</small>
          <h3 className=" text-[35px] font-[800]">
            Frequently Asked Questions
          </h3>
        </div>
        <div className=" md:w-[40%]">
          {faq.map((faq, index) => (
            <div
              key={index}
              className="p-2 md:p-6 border-b border-[#24130F1A]  cursor-pointer"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleIndex(index)}
              >
                <h3 className="text-[20px]  ">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-lg" />
                ) : (
                  <FiChevronDown className="text-lg" />
                )}
              </div>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`mt-2 text-gray-700 text-[16px] `}>
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
