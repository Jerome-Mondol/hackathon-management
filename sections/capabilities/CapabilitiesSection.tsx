import CapabilityCard from "@/components/capabilities/CapabilityCard"
import { capabilityItems } from "./capabilities.data"

interface CapabilitiesSectionProps {
  className?: string
}

const CapabilitiesSection = ({ className = "" }: CapabilitiesSectionProps) => {
  return (
    <section className={`w-full ${className}`.trim()}>
      <div className=" py-10 sm:py-14 lg:py-18">
        <p className="font-jetbrains text-xs uppercase tracking-[0.5em] text-primary">
          {"// CORE CAPABILITIES"}
        </p>

        <h2 className="mt-5 font-oswald text-4xl uppercase leading-none text-foreground sm:text-6xl">
          ENGINEERED FOR SCALE
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-0 lg:grid-cols-3">
          {capabilityItems.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection