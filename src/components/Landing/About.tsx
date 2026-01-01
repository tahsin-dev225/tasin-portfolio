"use client";
import Image from "next/image";
import SplitText from "../AnimateComponent/SpliteText";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative my-6 sm:my-14 text-gray-200 pt-6 md:pt-8 md:rounded-lg bg-gradient-to-t from-[#5c81ee2e] to-[#808af41c] lg:from-[#5c81ee06] lg:to-[#808af405] lg:pt-12 xl:pt-20 p-4 "
    >
      <div className="max-w-6x mx-auto rounded-2xl bg-gradient-to-t font-   md:from-[#5c81ee06] md:to-[#808af403] flex justify-center flex-col-reverse md:flex-row gap-10 items-center">
        {/* Image */}
        <div className="relative w-full group mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/5 to-indigo-600/5 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <Image
            src="/img/aboutme.jpg"
            alt="Tasin Ahmed"
            width={500}
            height={500}
            className="relative mx-auto sm:mx-0 py-1.5 md:py-0 rounded-2xl md:rounded-r-none shadow-2xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full z-20">
          <SplitText
            text="About Me"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            className="text-3xl md:text-2xl text-center lg:text-3xl font-bold"
          />
          <SplitText
            text={`Hi, Im Tasin, a passionate Full-Stack Web Developer with expertise in building 
            modern web applications using React, Next.js, Node.js, and MongoDB.
            I love crafting smooth user experiences and scalable backend systems.`}
            delay={10}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="-100px"
            textAlign="left"
            className="text-[14px] md:text-[15px] leading-6 font-thin tracking-widest font-sans"
          />

          <SplitText
            text={`When I’m not coding, I enjoy exploring new technologies, learning
            advanced design patterns, and contributing to open-source projects.
            My goal is to create impactful digital solutions that make life
            easier for people.`}
            delay={10}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="-50px"
            textAlign="left"
            className="text-[14px] md:text-[15px] leading-6 font-thin tracking-widest mb-6 font-sans"
          />
          <a
            href="#contact"
            className="inline-block  cursor-pointer px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* <div className="w-full top-0 h-full z-10 absolute overflow-hidden">
         <div className="relative h-full overflow-hidden " >
          
         </div>
       </div>  */}
    </section>
  );
}
