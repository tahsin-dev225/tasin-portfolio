// "use client"

// import { useAnimationFrame } from "motion/react"
// import { useRef } from "react"

// export default function UseAnimationFrame() {
//     const ref = useRef<HTMLDivElement>(null)

//     useAnimationFrame((t) => {
//         if (!ref.current) return

//         const rotate = Math.sin(t / 10000) * 200
//         const y = (1 + Math.sin(t / 1000)) * -50
//         ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
//     })

//     return (
//         <div className="container">
//             <div className="cube" ref={ref}>
//                 <div className="side front" />
//                 <div className="side left" />
//                 <div className="side right" />
//                 <div className="side top" />
//                 <div className="side bottom" />
//                 <div className="side back" />
//             </div>
//             <StyleSheet />
//         </div>
//     )
// }

// function StyleSheet() {
//     return (
//         <style>{`
            
//         .container {
//             perspective: 800px;
//             width: 200px;
//             height: 200px;
//         }

//         .cube {
//             width: 200px;
//             height: 200px;
//             position: relative;
//             transform-style: preserve-3d;
//         }

//         .side {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             background-color: red;
//             opacity: 0.6;
//         }

//         .front {
//             transform: rotateY(0deg) translateZ(100px);
//             background-color: var(--hue-1-transparent);
//         }
//         .right {
//             transform: rotateY(90deg) translateZ(100px);
//             background-color: var(--hue-2-transparent);
//         }
//         .back {
//             transform: rotateY(180deg) translateZ(100px);
//             background-color: var(--hue-3-transparent);
//         }
//         .left {
//             transform: rotateY(-90deg) translateZ(100px);
//             background-color: var(--hue-4-transparent);
//         }
//         .top {
//             transform: rotateX(90deg) translateZ(100px);
//             background-color: var(--hue-5-transparent);
//         }
//         .bottom {
//             transform: rotateX(-90deg) translateZ(100px);
//             background-color: var(--hue-6-transparent);
//         }

//     `}</style>
//     )
// }




"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function AnimatedCube() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform =
      `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="flex justify-center items-center h-[700px] ">
      <div className="perspective-container">
        <div className="cube" ref={ref}>
          <div className="side front" />
          <div className="side left" />
          <div className="side right" />
          <div className="side top" />
          <div className="side bottom" />
          <div className="side back" />
        </div>
      </div>
      <CubeStyles />
    </div>
  );
}

function CubeStyles() {
  return (
    <style jsx>{`
      .perspective-container {
        perspective: 800px;
        width: 200px;
        height: 200px;
      }
      .cube {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(-20deg) rotateY(20deg);
      }
      .side {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.6;
      }
      .front {
        transform: rotateY(0deg) translateZ(100px);
        background-color: rgba(255, 0, 0, 0.5);
      }
      .right {
        transform: rotateY(90deg) translateZ(100px);
        background-color: rgba(0, 255, 0, 0.5);
      }
      .back {
        transform: rotateY(180deg) translateZ(100px);
        background-color: rgba(0, 0, 255, 0.5);
      }
      .left {
        transform: rotateY(-90deg) translateZ(100px);
        background-color: rgba(255, 255, 0, 0.5);
      }
      .top {
        transform: rotateX(90deg) translateZ(100px);
        background-color: rgba(0, 255, 255, 0.5);
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(100px);
        background-color: rgba(255, 0, 255, 0.5);
      }
    `}</style>
  );
}
