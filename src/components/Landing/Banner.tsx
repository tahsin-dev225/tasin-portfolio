"use client";
import Typewriter from "@/cuicui/other/text-animation/typewritter/typewritter";
import Image from "next/image";
import RippleGrid from "../AnimateComponent/AnimationBg";
import Orb from "../AnimateComponent/AnimatedCircleOrb";
import Particles from "../AnimateComponent/AnimatedBgParticle";
import Navbar from "../shared/Navbar";

const Banner = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <section className="relative flex flex-col-reverse lg:flex-row  gap-5 px-10 items-center md:py-[74px] overflow-hidden">
        {/* RippleGrid as full background */}
        <div className="absolute inset-0 z-10">
          {/* <RippleGrid
            enableRainbow={true}
            rippleIntensity={0.08}
            gridSize={12.0}
            glowIntensity={0.2}
            opacity={0.9}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
          /> */}

          <Particles
              particleColors={['#23096f', '#8cb7f1']}
              particleCount={200}
              particleSpread={5}
              speed={0.5}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              className="text-[#8cb7f1]"
            />
        </div>

        {/* left side text */}
        <div className="w-full">
          <p className="uppercase lg:text-[20px] tracking-wide text-gray-400 mb-4">
            I’m <span className="text-[#ff5d5d]">Tasin</span>,{" "}
            <Typewriter
              text={[
                "a Passionate Full-Stack Web Developer",
                "a MERN Stack Developer",
                "a React & Next.js Enthusiast",
              ]}
              speed={80}
              waitTime={1500}
              deleteSpeed={50}
              cursorChar="|"
              className="text-gray-400"
            />
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            Building Modern Website <br />
            with React, Next.js & Tailwind
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-lg mb-6">
            Through the fusion of different business goals, design thinking, and
            innovative ideas, I craft seamless and delightful user experiences
            that make meaning and impact.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200">
            Learn More
          </button>
        </div>

        {/* right side profile image */}
        {/* <div className="flex justify-center lg:w-[100%]">
          <div className="relative  w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow shadow-sky-500/10 border border-blue-950">
            <Image
              src="/img/tran-tasin.png"
              alt="Profile"
              fill
              className="object-cover z-30"
            />
          </div>
        </div> */}




    <div className="relative flex justify-center lg:w-[90%]">
      <div className="absolute inset-0 flex z-20 items-center justify-center">
        <div className="w-[600px] h-[600px]">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
            // className="w-full h-full"
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
    </div>


      </section>
    </div>
    
  );
};

export default Banner;
