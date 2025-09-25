"use client";

import Image from "next/image";
import UseAnimationFrame from "../AnimateComponent/AnimationBox";
import Ribbons from "../AnimateComponent/AnimatedCursor";
import ChromaGrid from "../AnimateComponent/AnimatedCromaCard";


const items = [
  {
    image: "/img/shoply.png",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://shoply-client.vercel.app/"
  },
  {
    image: "/img/work-learnetic.png",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://learn-management-frontend.vercel.app"
  }
];

const works = [
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/shoply.png",
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/work-learnetic.png",
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/buildingmanagement.png",
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/work-chronic.png",
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/work-inventory.png",
  },
];

const Work = () => {
  return (
    <div className="w-[100%] relative py-8 mx-auto">
      <h1 className=""></h1>
      <div className="flex gap-5">
        <button className="">All work</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works?.map((work, idx) => (
          <a
            href={work?.url}
            target="_blank"
            className="relative group w-full overflow-hidden rounded-xl shadow-lg"
            key={idx}
          >
            {/* Image */}
            <Image
              src={work?.img}
              height={500}
              width={700}
              alt="work"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-2xl font-semibold text-white mb-4">{work?.name}</h2>
              {/* <div className="grid grid-cols-2 gap-3">
                {work?.language.map((lang) => (
                  <div
                    className="px-3 py-1.5 flex justify-center items-center bg-white/10 text-white cursor-pointer rounded-lg border border-white/30 hover:bg-white/20 transition"
                    key={lang}
                  >
                    {lang}
                  </div>
                ))}
              </div> */}
            </div>
          </a>
        ))}
      </div>

      

<div className="relative py-5">
  <ChromaGrid
    items={items}
    radius={400}
    damping={0.45}
    fadeOut={0.2}
    ease="power3.out"
  />
</div>


      {/* <div className="w-full top-0  absolute overflow-hidden">
        <div className="relative h-[500px] overflow-hidden " >
          <Ribbons
            baseThickness={20}
            colors={["#505add"]}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={true}
          >
          </Ribbons>
        </div>
      </div>   */}
      
    </div>
  );
};

export default Work;
