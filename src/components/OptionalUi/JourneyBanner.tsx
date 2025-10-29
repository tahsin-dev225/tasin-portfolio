"use client";

import {
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import Image from "next/image";

export default function LearningJourney() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-3xl text-center px-6 py-12 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text">
          My Learning Journey
        </h2>

        <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
          From building powerful servers with Express and MongoDB to crafting
          dynamic interfaces using React, Next.js, and Redux — my journey is all
          about learning, improving, and creating meaningful digital
          experiences.
        </p>
        <div className="flex justify-center items-center gap-6 mt-10">
          <SiNextdotjs className="text-white text-4xl hover:scale-110 hover:text-gray-300 transition-all duration-300" />
          <SiReact className="text-sky-400 text-4xl hover:scale-110 transition-all duration-300" />
          <SiExpress className="text-gray-300 text-4xl hover:scale-110 transition-all duration-300" />
          <SiMongodb className="text-green-500 text-4xl hover:scale-110 transition-all duration-300" />
          <SiRedux className="text-purple-400 text-4xl hover:scale-110 transition-all duration-300" />
        </div>

        <div className="mt-10">
          <Image
            src="/journey-banner.svg"
            alt="Learning Journey"
            width={600}
            height={300}
            className="mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
}
