"use client";

import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import SectionHeader from "../shared/SectionHeader";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import { MoveRight } from "lucide-react";
import { RiCodeBoxFill } from "react-icons/ri";
type WorksType = {
  name: string;
  duration: string;
  language: string[];
  url: string;
  img: string;
  github: string;
  title: string;
};

const works: WorksType[] = [
  {
    name: "Shoply - E-commerce website.",
    duration: "6000ms",
    language: ["React", "next.js", "typeScript"],
    url: "https://shoply-client.vercel.app/",
    img: "/img/shoplyFull.jpg",
    github: "https://github.com/sabbir53rahman/Shoply_client",
    title:
      "A complete secured e-commerce collabrated website. Modern frontend design, scalable server using Express, Well-structured Mongoose schemas and Zod validation. Every route is designed for efficiency, security, and clean data flow.",
  },
  {
    name: "Learning Management website.",
    duration: "8000ms",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/learneticFull.jpg",
    github: "https://github.com/tahsin-dev225/learn-management-frontend",
    title:
      "It's a learn management website where course are sold.Teacher can uplaod their youtube video link and student can see their needed course.",
  },
  {
    name: "Building Management website.",
    duration: "4000ms",
    language: ["React", "next.js", "typeScript"],
    url: "https://building-management-assignment.vercel.app",
    img: "/img/buildingFull.jpg",
    github: "https://github.com/tahsin-dev225/building-management-assignment",
    title:
      "This is a building management website. I have make this website for practice perpose and to increase logical thinks.",
  },
  {
    name: "Coco-Combat - Random Figma Design.",
    duration: "9000ms",
    language: ["React", "next.js", "typeScript"],
    url: "https://coco-tsx.vercel.app/",
    img: "/img/coco.jpg",
    github: "https://github.com/tahsin-dev225/coco-tsx",
    title:
      "I tried to make a pixel perfect and complex web desing. I have chosse a complex FIGMA design and made it. I have applied some gorgios enimation.",
  },
  {
    name: "Salon's serial maintail website.",
    duration: "2400ms",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/royal-selon.jpg",
    github: "https://github.com/tahsin-dev225/royal-salon-next",
    title:
      "I have feel that in there have a serial related problem so i tried to make a well serial maintained website for salon.",
  },
  {
    name: "Inventory Management website.",
    duration: "4000ms",
    language: ["React", "next.js", "typeScript"],
    url: "https://learn-management-frontend.vercel.app",
    img: "/img/work-inventory.png",
    github: "https://github.com/tahsin-dev225/inventory-management",
    title:
      "I make this website for explore more about inventory and dashboard related things. This type of practice has ",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="w-[100%] px-3 md:px-5 lg:px-0 relative pb-6 md:pb-10  pt-6 mx-auto"
    >
      <SectionHeader
        title="My Works & web-Design."
        subtitle="Here are some of the projects and designs I’ve crafted with passion — blending clean code, modern UI, and creative ideas."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[98%] mx-auto gap-3 lg:gap-y-14 md:gap-8">
        {works?.map((work, idx) => (
          <div
            className="w-full border border-indigo-800/50 border-b-fuchsia-900/30 text-[#ece4e4] shadow-lg shadow-sky-900/10 rounded-[16px] bg-[#131B30]  ackdrop-blur-sm h-[100%]"
            key={idx}
          >
            <div
              className={`relative p-3  group w-full h-[250px] rounded-t-2xl rounded-b overflow-hidden  shadow-lg
              bg-top hover:bg-bottom transition-[background-position]  ease-linear`}
              style={{
                backgroundImage: `url(${work?.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                transitionDuration: work?.duration || "5000ms",
              }}
            ></div>
            <div className="p-2.5 md:p-4 bg-gradient-to-t  rounded-b-3xl from-zinc-95 via-zinc-950/8 to-transparent">
              <div className="flex gap-2 items-center my-3">
                <RiCodeBoxFill className="text-2xl" />
                <Link href={work?.github} className="text-sky-300">
                  Code
                </Link>
              </div>
              <h3 className="sm:text-lg md:text-lg font-sans flex flex-col mt-2 flex-1 lg:text-xl line-clamp-2 ">
                {work?.name}
              </h3>
              <p className="text-sm line-clamp-2 font-extralight my-2! text-gray-300 font-sans">
                {work?.title}
              </p>
              {/* <div className="flex justify-e gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center mt-5 mb-3">
                <Link
                  href={work?.github}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-900/80 px-4 py-3 text-sm font-medium
                   text-white ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:ring-white/20
                    hover:scale-[1.02]"
                >
                  <FaGithub className="text-lg group-hover:rotate-6 transition-transform duration-300" />
                  Code
                </Link>
                <Link
                  href={work?.url}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3
                   text-sm font-medium text-white shadow-lg shadow-blue-500/5 transition-all duration-300 hover:from-blue-500/20
                    hover:to-purple-500/25 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
                >
                  <IoEarthSharp className="text-lg group-hover:rotate-6 transition-transform duration-300" />
                  Website
                </Link>
              </div> */}
              <Link
                href={work?.url}
                className="text-sky-400 flex w-max gap-1 items-center  mt-5"
              >
                Website...
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
