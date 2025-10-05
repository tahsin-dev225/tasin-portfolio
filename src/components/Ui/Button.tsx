"use client"
// import React from 'react';


// const PButton = (cl :string , buttonName:string) => {
//   return (
//     <button  className={`${cl} z-40 bg-gradient-to-br from-sky-400 to-indigo-900 text-white px-6 py-2.5 rounded-lg shadow-md hover:bg-gray-200 `}>
//       {buttonName}
//     </button>
//   );
// };

// export default PButton;


import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface INav {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const navItems: INav[] = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  {
    title: "Projects",
    href: "/projects",
    subItems: [
      { title: "Web Apps", href: "/projects/web" },
      { title: "Mobile Apps", href: "/projects/mobile" },
      { title: "UI/UX Designs", href: "/projects/uiux" },
    ],
  },
];

export default function Navbar2() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black/70 backdrop-blur-md border-b border-white/10 fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Tas<span className="text-indigo-500">in</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item) => (
            <li key={item.title} className="relative group">
              {!item.subItems ? (
                <Link
                  href={item.href}
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  {/* Dropdown Button */}
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="flex items-center gap-1 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4 mt-[1px]" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className={`absolute left-0 mt-3 w-44 bg-[#111] rounded-xl border border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${
                      dropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-colors duration-200"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
          <ul className="flex flex-col p-4 space-y-3 text-gray-300">
            {navItems.map((item) => (
              <li key={item.title}>
                {!item.subItems ? (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-indigo-400"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <details className="group">
                    <summary className="flex justify-between items-center py-2 cursor-pointer hover:text-indigo-400">
                      {item.title}
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pl-3 border-l border-white/10 ml-2 space-y-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="block py-1 text-sm text-gray-400 hover:text-indigo-400"
                          onClick={() => setOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
