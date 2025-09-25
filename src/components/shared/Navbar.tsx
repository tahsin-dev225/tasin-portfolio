"use client";
import Image from "next/image";
import Link from "next/link";
import GooeyNav from "../AnimateComponent/AnimatedNavlink";

interface INav {
      title : string,
      href : string
}

const Navbar = () => {

  const navItems : INav[] =[
      {title : "home", href : "/"},
      {title : "Work", href : "/work"},
      {title : "About", href : "/about"},
      {title : "Projects", href : "/projects"},
  ]

  const items = [
  { label: "Let's Connect", href: "/connect" }
];

  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <div className="flex">
        {/* <Image src={'/img/tasinPfLogo.jpg'} className="" height={200} width={200} alt="logo"  /> */}
        <Image
          src={"/img/sign-tran.png"}
          className="w-[120px] rounded-[6px]"
          height={10}
          width={220}
          alt="logo"
        />
      </div>
      <div className="flex gap-10 text-sm uppercase font-semibold">
            {
                  navItems.map((item)=>(
                        <Link className="hover:text-gray-400 font-mono cursor-pointer" key={item.href} href={item?.href}>{item?.title}</Link>
                  ))
            }
      </div>
      <div style={{ height: '60px', position: 'relative' }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </nav>
  );
};

export default Navbar;
