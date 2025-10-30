"use client";

import {
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import Image from "next/image";
import { ScrollStackItems } from "../AnimateComponent/StackItem";
import SplitText from "../AnimateComponent/SpliteText";

function JourneyBanner() {
  return (
    <ScrollStackItems bgImg="/img/exbg.png" cardBg="bg-[#ff]">
      <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
        <Image
          src={"/img/growth.jpg"}
          className="w-1/3 rounded-2xl"
          height={500}
          width={500}
          alt="lean banner"
        />
        <div className="w-full p-2 sm:p-6 md:p-7 lg:p-8">
          <SplitText
            text="My Learning"
            delay={80}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            className="text-2xl mr-2 tracking-widest font-sa md:text-3xl my-0! lg:text-4xl xl:text-5xl font-semibold text-center "
          />{" "}
          <br className="hidden sm:block" />
          <SplitText
            text="Journey"
            delay={80}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            className="text-2xl tracking-widest font-sa md:text-3xl lg:text-4xl my-0! xl:text-5xl font-semibold text-center "
          />
          <p className="text-[12px] smm:text-[13px] lg:text-[15px] font-sans text-[#bccbf1] w-[95%] tracking-wider leading-6 md:w-[90%]  sm:my-5! mx-auto text-center">
            Every step of my learning journey has been driven by curiosity and
            passion for technology. I believe in continuous growth, turning
            every challenge into a lesson and every idea into innovation.Every
            project, every bug, and every breakthrough has shaped the developer
            I am today.
          </p>
          <div className="flex justify-center items-center gap-6 mt-4 sm:mt-10">
            <SiNextdotjs className="text-white text-4xl hover:scale-110 hover:text-gray-300 transition-all duration-300" />
            <SiReact className="text-sky-400 text-4xl hover:scale-110 transition-all duration-300" />
            <SiExpress className="text-gray-300 text-4xl hover:scale-110 transition-all duration-300" />
            <SiMongodb className="text-green-500 text-4xl hover:scale-110 transition-all duration-300" />
            <SiRedux className="text-purple-400 text-4xl hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </ScrollStackItems>
  );
}
export default JourneyBanner;
