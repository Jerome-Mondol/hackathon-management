interface StatItem {
  value: string;
  label: string;
}

interface StatsStripProps {
  items: StatItem[];
  className?: string;
}

const StatsStrip = ({ items, className = "" }: StatsStripProps) => {
  return (
    <section className={`w-full border my-10 border-border/70 bg-muted/30 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0 lg:gap-x-0">
          {items.map((item) => (
            <div key={item.label} className="md:text-left">
              <p className="font-bebas text-center text-5xl leading-none text-primary md:text-6xl lg:text-7xl">
                {item.value}
              </p>
              <p className="mt-1 font-jetbrains text-center text-xs tracking-[0.3em] text-muted-foreground sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
