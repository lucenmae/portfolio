import { FC } from "react"
import Squares from "@/app/components/backgrounds/Squares"


const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.1)"
          hoverFillColor="#D10000"
        />
      </div>

    </section>
  )
}

export default HeroSection
