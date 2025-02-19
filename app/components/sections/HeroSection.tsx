"use client"

import { FC } from "react";
import Squares from "@/app/components/backgrounds/Squares";
import SplitText from "@/app/components/text-animations/SplitText";
import { easings } from "@react-spring/web";

const HeroSection: FC = () => {

  return (
    <section className="relative w-full h-screen">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.1)"
          hoverFillColor="#D10000"
        />
      </div>

      {/* Split Text Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <SplitText
          text="Hi! I'm Lucy ^-^"
          className="text-white text-6xl font-bold"
          delay={130}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing={easings.easeOutCubic}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
    </section>
  );
};

export default HeroSection;
