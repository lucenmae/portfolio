import HeroSection from "@/app/components/sections/HeroSection"
import ProjectsSection from "@/app/components/sections/ProjectsSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606]">
      <HeroSection />
      <ProjectsSection />
    </main>
  )
}
