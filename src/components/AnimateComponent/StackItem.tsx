"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollStackItemProps {
  children: ReactNode;
  bgImg?: string;
  cardBg?: string;
}

export const ScrollStackItems: React.FC<ScrollStackItemProps> = ({
  children,
  bgImg = "/img/gradiant4.jpg",
  cardBg,
}) => {
  console.log(bgImg);
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`scroll-stack-card sticky top-0 h-screen flex items-center bg-cover bg-center justify-center  `}
    >
      {/* <div className="absolute z-10 inset-0 bg-black/60"></div> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className={`text-center max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1320px] w-[96%]  z-20 rounded-2xl ${cardBg} border-[1px] border-sky-200/30 shadow-lg shadow-sky-300/10 bg-opacity-80 backdrop-blur-md`}
      >
        {children}
      </motion.div>
    </div>
  );
};
