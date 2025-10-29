"use client";

import Image from "next/image";
import InfiniteScroll from "../AnimateComponent/InfiniteScroll";
import SectionHeader from "../shared/SectionHeader";
// import ScrollStack, { ScrollStackItem } from "../AnimateComponent/ScrollStact";

const items = [
  {
    img: "/img/shoply3.png",
    bgColor: "bg-indigo-900",
    title: "Glassmorphic Hero Design",
    description:
      "A futuristic hero section combining glassmorphism, neon gradients, and smooth Framer Motion animation for an immersive entry.",
  },
  {
    img: "/img/shoply3.png",
    bgColor: "bg-amber-900",
    title: "Animated Services Section",
    description:
      "A dynamic layout where icons and texts appear with a staggered fade-in animation, creating a lively presentation of services.",
  },
  {
    img: "/img/creative3.png",
    bgColor: "bg-fuchsia-900",
    title: "Interactive Project Gallery",
    description:
      "Hover-based transitions and soft glows built using Tailwind and Framer Motion — turning static images into living visuals.",
  },
  {
    img: "/img/creative4.png",
    bgColor: "bg-violet-900",
    title: "Minimal Blog Layout",
    description:
      "A clean, minimalist blog design focusing on typography and contrast, ideal for readable and visually calm layouts.",
  },
];

export default function CreativityInfiniteScroll() {
  return (
    <section className="bg- py-20 text-white">
      <div className=" mx-auto lg:px-6">
        <SectionHeader
          title="Some Creative Design."
          subtitle="Here some of my creative, uniqe modern design from defferent project. Some dynamic, animated Section's. "
        />

        <div className="w-full h-[420px] md:h-[540px] shadow-2xl shadow-indigo-900/20 overflow-hidden border border-indigo-900/10 rounded-2xl ">
          {/* <ScrollStack
            className="p-0! w-full! 
          //  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
           "
          >
            {items?.map((item, idx) => (
              <ScrollStackItem
                key={idx}
                itemClassName={`border ${item?.bgColor} p-2! smm:p-4! rounded-[12px]! lg:rounded-[42px]! `}
              >
                <div className=" w-[90%]! md:w-[80%] xl:w-full sm:gap-5 flex flex-col mx-auto md:flex-row gap-2 lg:gap-5! sm:gap-  md:p-5 md:items-center justify-center lg:justify-evenly">
                  <Image
                    src={item?.img}
                    className="rounded-lg sm:w-[85%] mx-auto md:w-[80%] lg:w-[100%]"
                    height={300}
                    width={500}
                    alt="shoplyyy"
                  />
                  <div className="w-full!">
                    <h2 className="text-[16px] smm:text-[17px] md:text-xl lg:text-3xl font-bold">
                      {item?.title}
                    </h2>
                    <p className="font-sans text-xs md:text-[15px] lg:tracking-wider">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack> */}
        </div>
      </div>
    </section>
  );
}
