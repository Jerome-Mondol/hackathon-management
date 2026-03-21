import SystemDashboard from "@/components/hero/SystemDashbord";
import { Button } from "@/components/ui/button";
import { heroData } from "./hero.data";

interface HeroProps {
  className?: string;
}

const Hero = ({ className = "" }: HeroProps) => {
  return (
    <section className={`w-full ${className}`.trim()}>
      <div className="mx-auto flex w-full flex-col items-center gap-10 pt-24 md:pt-25 lg:pt-32 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex w-full flex-col items-start justify-center gap-6 lg:w-1/2">
          <h1 className="font-bebas text-7xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl xl:text-8xl">
            {heroData.title.line1} <span className="text-primary">{heroData.title.highlight}</span> <br /> {heroData.title.line2} <br /> {heroData.title.line3}
          </h1>
          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              {heroData.primaryButton.text}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {heroData.secondaryButton.text}
            </Button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <SystemDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
