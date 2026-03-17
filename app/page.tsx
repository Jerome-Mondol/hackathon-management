import Hero from "@/sections/hero/hero"
import StatsStrip from "@/sections/stats/StatsStrip"
import CapabilitiesSection from "../sections/capabilities/CapabilitiesSection"

const statsItems = [
  { value: "500+", label: "HACKATHONS" },
  { value: "20K+", label: "DEVELOPERS" },
  { value: "15K+", label: "PROJECTS" },
  { value: "$2M+", label: "PRIZE POOL" },
]

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StatsStrip items={statsItems}  />
      <CapabilitiesSection />
    </div>
  )
}

export default Home