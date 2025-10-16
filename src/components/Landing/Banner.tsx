"use client";
import Typewriter from "@/cuicui/other/text-animation/typewritter/typewritter";
import Image from "next/image";
import Orb from "../AnimateComponent/AnimatedCircleOrb";
import Particles from "../AnimateComponent/AnimatedBgParticle";
import Navbar from "../shared/Navbar";

const Banner = () => {
  return (
    <div id="home" className="sm:min-h-screen overflow-hidden ">
      <Navbar />
      <section className="relative flex flex-col-reverse lg:flex-row  gap-5 px-3 xsm:px-4 sm:px-10 items-center md:py-[74px] overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Particles
            particleColors={["#23096f", "#8cb7f1"]}
            particleCount={200}
            particleSpread={5}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            className="text-[#8cb7f1]"
          />
        </div>
        {/* left side text */}
        <div className="w-full  z-40">
          <div className="smm:mx-auto w-full sm:pt-10 sm:w-max lg:w-full">
            <p className="uppercase xl:ml-2.5 font-sans h-[50px] smm:h-auto text-[14px] xsm:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-wide text-[#fbf0cb] md:mt-2 !mt-10 mb-4 md:mb-0!">
              I’m{" "}
              <span className="text-[#dbea53] font-medium font- bitter-font">
                Tasin
              </span>
              ,{" "}
              <Typewriter
                text={[
                  "a Passionate Full-Stack Web Developer",
                  "a MERN Stack Developer",
                  "a React & Next.js Enthusiast",
                ]}
                speed={25}
                waitTime={1500}
                deleteSpeed={20}
                cursorChar="|"
                className="text-[#fbf0cb]"
              />
            </p>

            <h1 className="  text-[18px] xsm:text-[22px] smm:text-[28px] sm:text-[36px]  md:text-5xl lg:text-4xl elg:text-5xl xl:text-[52px] font-bold leading-snug mb-6">
              Building Modern Website <br />
              with React, Next.js & Tailwind
            </h1>

            <p className="text-gray-400 leading-relaxed text-[11px] smm:text-[15px] max-w-lg mb-6 md:mb-0">
              Through the fusion of different business goals, design thinking,
              and innovative ideas, I craft seamless and delightful user
              experiences that make meaning and impact.
            </p>

            <button className=" primary-button px-3  py-1.5 sm:py-2.5 sm:px-6 mt-16! md:mt-4! ">
              Here Me..
            </button>
          </div>
        </div>

        {/* <div className="relative flex justify-center lg:w-[90%]">
          <div className="absolute inset-0 flex z-20 items-center justify-center">
            <div className=" md:w-[600px] md:h-[600px]">
              <Orb 
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
                
              />
            </div>
          </div>

          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-lg border- border-gray-800 z-10">
            <Image
              src="/img/tran-tasin.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div> */}

        <div className="relative flex flex-col items-center justify-center w-full lg:w-[90%] mx-auto">
          {/* Orb Background */}
          <div className="absolute inset-0 flex items-center justify-center z-0 lg:z-40">
            <div className="w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative z-10 w-[180px] smm:py-4 h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden">
            <Image
              src="/img/tran-tasin.png"
              alt="Profile"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
