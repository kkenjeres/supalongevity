"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Popup from "../Popup";

const ButtonNav = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsPopupOpen(true)}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="flex items-center px-4 py-3 gap-4 cursor-pointer rounded-full bg-[#FFD375]  text-[#65372A]"
      >
        Join Waiting List
      </motion.div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default ButtonNav;
