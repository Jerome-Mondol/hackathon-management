import Hero from "@/sections/hero/Hero"
import StatsStrip from "@/sections/stats/StatsStrip"
import CapabilitiesSection from "../sections/capabilities/CapabilitiesSection"
import WorkflowSection from "../sections/workflow/WorkflowSection"
import { homeStats } from "../sections/stats/stats.data"

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StatsStrip items={homeStats}  />
      <CapabilitiesSection />
      <WorkflowSection />
    </div>
  )
}

export default Home
