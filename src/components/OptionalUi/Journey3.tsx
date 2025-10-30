"use client";

import Image from "next/image";
import { ScrollStackItems } from "../AnimateComponent/StackItem";
import SplitText from "../AnimateComponent/SpliteText";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";

function JourneyThree() {
  return (
    <ScrollStackItems bgImg={"/img/exbg3.jpg"} cardBg="bg-indigo-95 ">
      <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
        <Image
          src={"/img/pcourse1.jpg"}
          className="w-1/3 rounded-2xl"
          height={500}
          width={800}
          alt="beggining"
        />
        <div className=" p-2 sm:p-6 md:p-7 lg:p-8">
          <h3 className="text-2xl md:text-3xl flex items-center justify-center gap-3 font-bold mb-6 text-emerald-400 tracking-wide">
            <SplitText
              text="Level 1 — Programming Hero"
              delay={80}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              className="text-[18px] smm:text-[22px] font-sa md:text-2xl my-0! lg:text-3xl xl:text-4xl font-semibold text-center "
            />
          </h3>

          <p className="text-gray-300  text-[11px] smm:text-[12px] lg:text-[15px] text-base md:text-[14px] leading-relaxed max-w-3xl mx-auto font-sans">
            I joined the{" "}
            <span className="text-white font-semibold">Programming Hero</span>{" "}
            Level-1 Web Development Course — a{" "}
            <span className="text-emerald-400 font-medium">6-month</span>{" "}
            hands-on learning journey. During this time, I mastered technologies
            like <span className="text-white font-semibold">JavaScript</span>,{" "}
            <span className="text-white font-semibold">React</span>,{" "}
            <span className="text-white font-semibold">Next.js</span>,{" "}
            <span className="text-white font-semibold">Redux (asyncThunk)</span>
            , <span className="text-white font-semibold">Express</span>,{" "}
            <span className="text-white font-semibold">MongoDB</span>,{" "}
            <span className="text-white font-semibold">Mongoose</span>, and{" "}
            <span className="text-white font-semibold">Firebase</span>.
            <br />
            It was a challenging yet rewarding experience filled with projects,
            late-night debugging, and real-world problem solving — shaping me
            into a{" "}
            <span className="text-emerald-400 font-medium">
              full-stack developer
            </span>
            .
          </p>
          <div className="flex justify-center items-center gap-2.5 smm:gap-3 sm:gap-4 mt-10">
            <SiJavascript className="text-yellow-400 text-xl smm:text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <FaReact className="text-cyan-400 text-xl smm:text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiNextdotjs className="text-white text-xl smm:text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiExpress className="text-gray-400 text-xl smm:text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiMongodb className="text-green-600 text-xl smm:text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
            <SiFirebase className="text-yellow-500 text-xl smm:text-2xl sm:text-3xl hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </ScrollStackItems>
  );
}
export default JourneyThree;
