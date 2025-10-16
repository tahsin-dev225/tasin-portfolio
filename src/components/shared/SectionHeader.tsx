"use client"

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className }) => {


  return (
    <section className={`text-center mx-auto  mb-8 md:mb-10 lg:mb-16 ${className || ""}`}>
      <h1 className="mx-auto mb-4 text-xl bg-gradient-to-r from-indigo-300  to-cyan-400 bg-clip-text text-transparent sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {title}
      </h1>
      <p className="mx-auto w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[45%] text-gray-400 text-sm md:text-base leading-relaxed font-sans tracking-tight">
        {subtitle}
      </p>
    </section>
  );
};

export default SectionHeader;
