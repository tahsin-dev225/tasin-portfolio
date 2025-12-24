"use client";

import Image from "next/image";
import { ScrollStackItems } from "../AnimateComponent/StackItem";
import SplitText from "../AnimateComponent/SpliteText";
import { MdVideoSettings } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa6";
import { SiMdnwebdocs } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";

function Journey2() {
  return (
    <ScrollStackItems cardBg="bg-[#23080852 ]" bgImg={"/img/exbg2.png"}>
      <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
        <Image
          src={"/img/exploreYt.jpg"}
          className="w-full xsm:w-[80%] smm:w-[70%] sm:w-1/3 lg:w-full rounded-2xl"
          height={500}
          width={800}
          alt="beggining"
        />
        <div className=" p-2 sm:p-6 md:p-7 lg:p-8">
          <h3 className="text-3xl flex gap-5 items-center justify-center font-semibold mb-4  text-sky-400">
            <MdVideoSettings />
            <SplitText
              text="The Beginning"
              delay={80}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              className="text-2xl tracking-widest font-sa md:text-3xl my-0! lg:text-4xl xl:text-5xl font-semibold text-center "
            />
          </h3>
          <p className="text-[12px] smm:text-[13px] lg:text-[15px] font-sans text-[#bccbf1] tracking-wider leading-6  my-5! mx-auto text-center">
            I started my journey learning{" "}
            <span className="text-white font-semibold">HTML, CSS</span> and
            <span className="text-white font-semibold"> JavaScript</span> from
            YouTube tutorials. Along the way, I explored platforms like Stack
            Overflow, MDN Web Docs, FreeCodeCamp, and CTC, which helped me
            deepen my understanding. These resources built the foundation that
            showed me how web pages come to life through structure and style.
          </p>
          <div className="flex justify-center items-center gap-6 mt-10">
            <BsYoutube className="text-white text-xl lg:text-4xl hover:scale-110 hover:text-gray-300 transition-all duration-300" />
            <FaStackOverflow className="text-sky-400 text-xl lg:text-4xl hover:scale-110 transition-all duration-300" />
            <SiMdnwebdocs className="text-gray-300 text-xl lg:text-4xl hover:scale-110 transition-all duration-300" />
            <FaFreeCodeCamp className="text-green-500 text-xl lg:text-4xl hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </ScrollStackItems>
  );
}
export default Journey2;
