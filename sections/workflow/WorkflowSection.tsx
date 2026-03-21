import { workflowItems } from "./workflow.data";

interface WorkflowSectionProps {
  className?: string;
}

const WorkflowSection = ({ className = "" }: WorkflowSectionProps) => {
  return (
    <section className={`w-full ${className}`.trim()}>
      <div className="py-10 sm:py-14 lg:py-18">
        <p className="font-jetbrains text-xs uppercase tracking-[0.5em] text-primary">
          {"// WORKING PROCESS"}
        </p>

        <h2 className="mt-5 font-oswald text-4xl uppercase leading-none text-foreground sm:text-6xl">
          THE WORKFLOW
        </h2>

        <div className="relative mt-10 flex w-full justify-between flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">


          {workflowItems.map((item, index) => (
            <div key={item.number} className="relative z-10 flex flex-col  md:flex-1">
              <span className="font-bebas text-6xl text-emerald-500/40 md:text-7xl">
                {item.number}
              </span>
              <h3 className="mt-2 font-bebas tracking-wider text-xl font-bold uppercase text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 font-jetbrains text-sm uppercase text-zinc-500 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
