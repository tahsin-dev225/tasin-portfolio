"use client"
import { useState, useEffect, useRef } from 'react';
import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';

interface SkillCategory {
  title: string;
  items: string[];
}

const skills: SkillCategory[] = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "JWT", "API Design"] },
  { title: "Database", items: ["MongoDB", "Mongoose", "Aggregation", "NoSQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Vercel", "Figma"] },
  { title: "Core Strengths", items: ["Clean Architecture", "Performance Optimization", "Responsive Design", "Problem Solving"] }
];

const categoryIcons = {
  "Frontend": Code2,
  "Backend": Server,
  "Database": Database,
  "Tools": Wrench,
  "Core Strengths": Sparkles
};

const SkillsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon = categoryIcons[category.title as keyof typeof categoryIcons];
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={category.title}
                className={`group skill-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-slate-800/80 text-slate-300 rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">Always learning, always growing</span>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
    </div>
  );
};

export default SkillsSection;
