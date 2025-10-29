"use client";

// import { Code2, Database, Lock, CreditCard, Layout, Cloud } from "lucide-react";
// import Ribbons from "../AnimateComponent/AnimatedCursor";

// export default function Services() {
//   const services = [
//     {
//       title: "Web Development",
//       icon: <Code2 className="w-8 h-8 text-blue-400" />,
//       desc: "Building responsive and scalable web apps using MERN stack (React, Next.js, Node.js, Express, MongoDB).",
//     },
//     {
//       title: "API Development",
//       icon: <Database className="w-8 h-8 text-green-400" />,
//       desc: "Creating RESTful APIs, integrating third-party services, and handling real-time data fetching.",
//     },
//     {
//       title: "UI/UX & Frontend",
//       icon: <Layout className="w-8 h-8 text-pink-400" />,
//       desc: "Modern UI with Tailwind CSS & Shadcn UI, reusable components, and pixel-perfect design.",
//     },
//     {
//       title: "Authentication & Security",
//       icon: <Lock className="w-8 h-8 text-red-400" />,
//       desc: "JWT, OAuth, role-based access, and secure login/register implementation.",
//     },
//     {
//       title: "Payment Integration",
//       icon: <CreditCard className="w-8 h-8 text-purple-400" />,
//       desc: "Checkout system with SSLCommerz, Stripe, and seamless order management.",
//     },
//     {
//       title: "Deployment & Optimization",
//       icon: <Cloud className="w-8 h-8 text-teal-400" />,
//       desc: "Deploying on Vercel, Netlify, Render with performance tuning & SEO best practices.",
//     },
//   ];

//   return (
//     <section className="py-16 relative">
//       <div className="max-w-6xl mx-auto z-50 px-6">
//         <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
//           My Services
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="p-6 rounded-xl bg-[#14141] shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-gray-800 hover:border-indigo-500"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full top-0 h-full z-10 absolute overflow-hidden">
//         <div className="relative h-full overflow-hidden " >
//           <Ribbons
//             baseThickness={20}
//             colors={["#505add"]}
//             speedMultiplier={0.5}
//             maxAge={500}
//             enableFade={false}
//             enableShaderEffect={true}
//           >
//           </Ribbons>
//         </div>
//       </div>

//     </section>
//   );
// }

import { Code2, Database, Lock, CreditCard, Layout, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../shared/SectionHeader";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "Web Development",
      icon: <Code2 className="w-8 h-8" />,
      desc: "Building responsive and scalable web apps using MERN stack (React, Next.js, Node.js, Express, MongoDB).",
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/20",
    },
    {
      title: "API Development",
      icon: <Database className="w-8 h-8" />,
      desc: "Creating RESTful APIs, integrating third-party services, and handling real-time data fetching.",
      color: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/20",
    },
    {
      title: "UI/UX & Frontend",
      icon: <Layout className="w-8 h-8" />,
      desc: "Modern UI with Tailwind CSS & Shadcn UI, reusable components, and pixel-perfect design.",
      color: "from-pink-500 to-rose-500",
      shadowColor: "shadow-pink-500/20",
    },
    {
      title: "Authentication & Security",
      icon: <Lock className="w-8 h-8" />,
      desc: "JWT, OAuth, role-based access, and secure login/register implementation.",
      color: "from-red-500 to-orange-500",
      shadowColor: "shadow-red-500/20",
    },
    {
      title: "Payment Integration",
      icon: <CreditCard className="w-8 h-8" />,
      desc: "Checkout system with SSLCommerz, Stripe, and seamless order management.",
      color: "from-purple-500 to-violet-500",
      shadowColor: "shadow-purple-500/20",
    },
    {
      title: "Deployment & Optimization",
      icon: <Cloud className="w-8 h-8" />,
      desc: "Deploying on Vercel, Netlify, Render with performance tuning & SEO best practices.",
      color: "from-teal-500 to-cyan-500",
      shadowColor: "shadow-teal-500/20",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="service"
      ref={sectionRef}
      className="py-8 md:py-12  xl:py-20 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className=" mx-auto px-2 xsm:px-2.5 smm:px-3 sm:px-4 md:px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionHeader
            title="My Services"
            subtitle="Transforming ideas into powerful digital experiences that help brands grow, engage audiences, and build meaningful project."
            // className={`isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"`}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-700  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition duration-500`}
              />

              {/* Card */}
              <div className="relative h-full p-3.5 xsm:p-4 smm:p-5 sm:p-6 rounded-2xl hover:rounded-b-non bg-card/50 border bg-sky-500/5 backdrop-blur-2xl border-indigo-400/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`mb-6 inline-flex p-1.5 smm:p-2.5 sm:p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg ${service.shadowColor} group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className=" text-lg sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-[15px] sm:text-base font-mono text-[#a29f9f] leading-relaxed">
                  {service.desc}
                </p>

                {/* Decorative bottom border */}
                <div
                  className={`absolute bottom-1 left-0 h-[1px] opacity-35 group-hover:left- w-0 bg-gradient-to-r ${service.color} group-hover:w-[99%] translate-1 transition-all duration-500 rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
