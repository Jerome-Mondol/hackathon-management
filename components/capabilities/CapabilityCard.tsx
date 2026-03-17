import type { CapabilityItem } from "@/sections/capabilities/capabilities.data"

interface CapabilityCardProps {
  item: CapabilityItem
}

const CapabilityCard = ({ item }: CapabilityCardProps) => {
  const Icon = item.icon

  return (
    <article className="group relative border border-border/70 bg-muted p-8  transition-colors duration-300 hover:border-primary/50 hover:bg-muted/70">
      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />

      <h3 className="mt-10 font-oswald text-4xl uppercase leading-[0.95] text-foreground sm:text-[2.2rem]">
        {item.title}
      </h3>

      <p className="mt-5 max-w-[33ch] font-jetbrains text-xs uppercase leading-8 tracking-[0.08em] text-muted-foreground sm:text-[0.82rem]">
        {item.description}
      </p>
    </article>
  )
}

export default CapabilityCard