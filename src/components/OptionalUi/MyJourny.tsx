"use client";

import React from "react";
import { ScrollStackItem } from "../AnimateComponent/StackItem";
import { MdVideoSettings } from "react-icons/md";
import {
  SiJavascript,
  SiMongoose,
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiMdnwebdocs,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";
import SplitText from "../AnimateComponent/SpliteText";
import { BsYoutube } from "react-icons/bs";
import { FaStackOverflow, FaReact } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa6";

export default function MyLearningJourney() {
  return (
    <section className="relative lg:mt-14">
      <ScrollStackItem bgImg="/img/exbg.png" cardBg="bg-[#ff]">
        <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
          <Image
            src={"/img/growth.png"}
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
              project, every bug, and every breakthrough has shaped the
              developer I am today.
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
      </ScrollStackItem>

      <ScrollStackItem cardBg="bg-[#23080852 ]" bgImg={"/img/exbg2.png"}>
        <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
          <Image
            src={"/img/exploreYt.png"}
            className="w-1/3  lg:w-full rounded-2xl"
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
      </ScrollStackItem>

      <ScrollStackItem bgImg={"/img/exbg3.png"} cardBg="bg-indigo-95 ">
        <div className="b-[#23080832] flex flex-col sm:flex-row p-3 sm:p-0 bg-white/5 items-center gap-5 md:gap-10">
          <Image
            src={"/img/pcourse1.png"}
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
              hands-on learning journey. During this time, I mastered
              technologies like{" "}
              <span className="text-white font-semibold">JavaScript</span>,{" "}
              <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Next.js</span>,{" "}
              <span className="text-white font-semibold">
                Redux (asyncThunk)
              </span>
              , <span className="text-white font-semibold">Express</span>,{" "}
              <span className="text-white font-semibold">MongoDB</span>,{" "}
              <span className="text-white font-semibold">Mongoose</span>, and{" "}
              <span className="text-white font-semibold">Firebase</span>.
              <br />
              It was a challenging yet rewarding experience filled with
              projects, late-night debugging, and real-world problem solving —
              shaping me into a{" "}
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
      </ScrollStackItem>

      <ScrollStackItem bgImg={"/img/exbg4.png"} cardBg="bg-[#101726 ]">
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
      </ScrollStackItem>
    </section>
  );
}
