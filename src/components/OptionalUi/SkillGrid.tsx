"use client" 
import { FaHtml5, FaReact } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiMongoose, SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si';

const SkillsGrid = () => {

  const gridData =[
    {name : "React", icon : FaReact , textc : "text-blue-400"},
    {name : "Next.js", icon : SiNextdotjs , textc : "text-purple-500"},
    {name : "Express.js", icon : SiExpress , textc : "text-yellow-600"},
    {name : "HTML", icon :FaHtml5  , textc : "text-orange-500"},
    {name : "Redux", icon : SiRedux , textc : "text-indigo-600"},
    {name : "Tailwind.css", icon :RiTailwindCssFill  , textc : "text-green-400"},
    {name : "Mongoose", icon : SiMongoose , textc : "text-red-700"},
    {name : "MongoDB", icon : SiMongodb, textc : "text-green-600"},
    {name : "TypeScript", icon :SiTypescript  , textc : "text-teal-500"},
  ]

  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-4 sm:p-4">


      {
        gridData?.map((sin,idx) =>{
          const Icon = sin.icon
          return (<div key={idx} className="flex relative overflow-hidden group shadow-lg shadow-sky-900/20 items-center justify-center space-x-2 flex-col gap-4 bg-indigo-950/40 p-4 rounded-lg hover:-translate-y-1.5 ease-linear transition-transform delay-300">
        <Icon className={`h-6 w-6 ${sin?.textc} `} />
        <span className="text-white text-[12px] sm:text-sm md:text-[16px]">{sin?.name}</span>
        <div className="shine absolute top-0 left-[-150%] w-[150%] h-full 
               bg-gradient-to-r from-transparent via-white/10 to-transparent 
               skew-x-[25deg] 
               transition-transform duration-1000 ease-in-out 
               group-hover:translate-x-[200%]">
        </div>
      </div>)})
      }

    </div>
  );
};

export default SkillsGrid;
