"use client"

import { FC, useEffect, useState } from "react";
import { Code2, Hammer, Brush, PencilRuler, Code } from "lucide-react";

interface AnimatedIconProps {
  currentPhrase: string;
}

const AnimatedIcon: FC<AnimatedIconProps> = ({ currentPhrase }) => {
  const icons = {
    Building: Hammer,      
    Creating: Brush,      
    Developing: Code,     
    Designing: PencilRuler, 
    Coding: Code,          
  };

  const Icon = icons[currentPhrase as keyof typeof icons] || Code2;

  return (
    <div className="relative">
      <Icon className="w-20 h-20 text-green-500/30 animate-pulse" />
    </div>
  );
};

const LoadingText: FC = () => {
  const [text, setText] = useState("Building");
  const phrases = ["Designing", "Building", "Developing", "Creating", "Coding"];
  const dots = ["", ".", "..", "..."];
  const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setText(current => {
        const currentIndex = phrases.indexOf(current.split('.')[0]);
        return phrases[(currentIndex + 1) % phrases.length];
      });
    }, 2000);

    const dotInterval = setInterval(() => {
      setDotIndex(current => (current + 1) % dots.length);
    }, 500);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <AnimatedIcon currentPhrase={text.split('.')[0]} />
      <div className="flex items-center gap-3 text-green-500">
        <span className="font-mono text-xl min-w-[180px] text-center">
          {text}{dots[dotIndex]}
        </span>
      </div>
    </div>
  );
};

const ProjectsSection: FC = () => {
  return (
    <section id="projects-section" className="relative w-full min-h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <div className="flex flex-col items-center justify-center space-y-8 py-12">
            <LoadingText />
            <div className="space-y-4 text-center">
              <p className="text-white/70 text-lg">
                Currently working on some exciting projects. Check back soon to see what I&apos;m building!
              </p>
              <p className="text-white/50 font-mono">
                {"// Digging up my old projects from the past"}
                <br />
                {"// Moving them from my computer to GitHub"}
              </p>
              <p className="text-green-500/70 font-mono text-sm mt-6">
                $ git commit -m &quot;preparing something awesome...&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection; 