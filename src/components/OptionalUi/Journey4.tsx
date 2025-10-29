"use client";

import Image from "next/image";
import { ScrollStackItems } from "../AnimateComponent/StackItem";
import SplitText from "../AnimateComponent/SpliteText";
import {
  SiExpress,
  SiMongoose,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

function Journey4() {
  return (
    <ScrollStackItems bgImg={"/img/exbg4.png"} cardBg="bg-[#101726 ]">
      <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
        <Image
          src={"/img/learnBnr.png"}
          className="w-1/3 h-full rounded-2xl"
          height={500}
          width={500}
          alt="beggining"
        />
        <div className=" p-2 sm:p-6 md:p-7 w-full lg:p-0">
          <SplitText
            text="Continuous Growth"
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
          <p className="text-gray-300 my-5! text-[12px] smm:text-[13px] lg:text-[15px] text-lg leading-relaxed max-w-3xl mx-auto">
            After completing the course, I started exploring{" "}
            <span className="text-white font-semibold">modern UI/UX</span>{" "}
            techniques, typeScript, redux-rtk,{" "}
            <span className="text-white font-semibold">
              animation with Framer Motion
            </span>
            , and building real-world projects to improve my skills.
            <br />
            Each project taught me something new about clean design,
            scalability, and best coding practices.
          </p>
          <div className="flex justify-center items-center gap-6 mt-10">
            <SiTypescript className="text-blue-600 rounded-sm border border-blue-600 bg-white h-max text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiNextdotjs className="text-white text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiRedux className="text-purple-500 text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiExpress className="text-gray-400 text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiMongoose className="text-red-500 text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </ScrollStackItems>
  );
}
export default Journey4;
