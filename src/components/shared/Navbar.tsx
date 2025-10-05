"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface INav {
  title: string;
  href: string;
}

const navItems: INav[] = [
  { title: "home", href: "/" },
  { title: "Work", href: "#work" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const smoothScroll = (target: HTMLElement, duration: number) => {
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const run =
        startPosition +
        targetPosition * easeInOutCubic(Math.min(timeElapsed / duration, 1));
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section instanceof HTMLElement) {
        smoothScroll(section, 1500); 
      }
    }
  };

  return (
    <nav className="flex justify-between items-center px-3 sm:px-5 md:px-10 py-3 md:py-5">
      {/* logo */}
      <div>
        <Image
          src="/img/sign-tran.png"
          className="max-w-[60px] xsm:max-w-[70px] smm:max-w-[80px] md:w-[120px] rounded-[6px]"
          height={10}
          width={220}
          alt="logo"
        />
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex gap-10 text-sm uppercase font-semibold">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="hover:text-gray-400 font-mono cursor-pointer transition-colors duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
          <ul className="flex flex-col absolute right-5 top-12 p-4 space-y-3 text-gray-300 z-20 bg-[#0a0a0a]/90 rounded-md">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={(e) => {
                  handleScroll(e, item.href);
                  setOpen(false);
                }}
              >
                <summary className="flex justify-between items-center py-2 cursor-pointer hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </summary>
              </Link>
            ))}
          </ul>
        </div>
      )}

      {/* right section */}
      <div className="flex gap-3 items-center">
        <Link
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="primary-button text-sm px-3 py-1.5 sm:py-2.5 sm:px-6 transition-all duration-300 hover:scale-[1.05]"
        >
          Lets Contact
        </Link>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
