"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import SectionHeader from "../shared/SectionHeader";
type WorksType ={
  name : string;
  language : string[];
  url : string;
  img : string;
  github : string;
}

const works : WorksType[] = [
  {
    name: "Shoply - E-commerce website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/shoplyFull.png",// "/img/work-shoply2.png", "/img/shoply3.png",
    github : "https://github.com/sabbir53rahman/Shoply_client"
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/learneticFull.png",
    github : ""
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/buildingFull.png",
    github : ""
  },
  {
    name: "Coco-Combat - Random Figma Design.",
    language: ["React", "next.js", "typeScript"],
    url: "https://coco-tsx.vercel.app/",
    img: "/img/coco.png",
    github : ""
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/work-chronic.png",
    github : ""
  },
  {
    name: "Learning Management website.",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/work-inventory.png",
    github : ""
  },
];

const Work = () => {
  return (
    <section id="work" className="w-[100%] px-3 md:px-5 lg:px-0 relative pb-6 md:pb-10  pt-6 mx-auto">
      <SectionHeader title="My Works & web-Design." 
        subtitle="Here are some of the projects and designs I’ve crafted with passion — blending clean code, modern UI, and creative ideas."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[98%] mx-auto gap-3 lg:gap-y-14 md:gap-8">
        {works?.map((work, idx) => (<div className="w-full border border-sky-300/50 border-b-fuchsia-300/60 text-[#ece4e4] shadow-lg shadow-sky-900/10 rounded-[16px] bg-gradient-to-br from-zinc-950 via-zinc-950/80 to-transparent backdrop-blur-sm h-[100%]" key={idx}>
        
              <div className="relative p-3  group w-full h-[250px] rounded-t-2xl rounded-b overflow-hidden  shadow-lg
                  bg-top hover:bg-bottom transition-[background-position] duration-[6500ms] ease-linear"
                style={{
                  backgroundImage: `url(${work?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                
              </div>
            <div className="p-2.5 md:p-4 bg-gradient-to-t  rounded-b-3xl from-zinc-95 via-zinc-950/8 to-transparent">
              <h3 className="sm:text-lg md:text-lg flex flex-col  flex-1 lg:text-xl line-clamp-2 ">{work?.name}</h3>
              <div className="flex justify-e gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center mt-5 mb-3">
                <Link
                  href={work?.github}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-900/80 px-4 py-3 text-sm font-medium
                   text-white ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:ring-white/20
                    hover:scale-[1.02]">
                  <FaGithub className="text-lg group-hover:rotate-6 transition-transform duration-300" />
                  Code
                </Link>
                <Link
                  href={work?.url}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600/50 to-purple-600/50 px-4 py-3
                   text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-500/60
                    hover:to-purple-500/60 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]">
                  <IoEarthSharp className="text-lg group-hover:rotate-6 transition-transform duration-300" />
                  Website
                </Link>
              </div>
            </div>
          </div>
          
        ))}
      </div>

    </section>
  );
};

export default Work;
