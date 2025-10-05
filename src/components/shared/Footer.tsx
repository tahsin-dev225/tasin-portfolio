"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface INav {
  title: string;
  href: string;
}

const navItems: INav[] = [
  { title: "home", href: "/" },
  { title: "Work", href: "#work" },
  { title: "About", href: "#about" },
  { title: "service", href: "#service" },
  { title: "contact", href: "#contact" },
];

export default function Footer() {

   const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#23002d] to-[#04046a] text-gray-400 border-t border-gray-800">
      <div className=" mx-auto px-6 py-12 grid md:grid-cols-3 gap-10  lg:w-[86%]">
        
        {/* Brand / Intro */}
        <div>
          <Image
              src={"/img/sign-tran.png"}
              className="w-[120px] rounded-[6px] my-4"
              height={10}
              width={220}
              alt="logo"
            />
          <p className="text-sm leading-relaxed">
            MERN Stack Developer passionate about creating modern {"website's"}
           with React, Next.js & Tailwind.  
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            {
              navItems?.map(item => (
                <Link href={item?.href} className="hover:text-indigo-400" onClick={(e) => handleScroll(e, item.href)} key={item?.title}> {item?.title}</Link>
              ))
            }
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex gap-5">
            <a href="https://github.com/" target="_blank" className="hover:text-white">
              <BsGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-white">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/md.tasin.102750" target="_blank" className="hover:text-white">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Tasin. All rights reserved.
      </div>
    </footer>
  );
}
