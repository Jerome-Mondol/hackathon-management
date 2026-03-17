import SystemDashboard from "@/components/hero/SystemDashbord"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
        <section className="w-full h-auto pt-24 md:pt-28  lg:pt-36">
            <div className="mx-auto flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex w-full flex-col items-start justify-center gap-6 lg:w-1/2">
                    <h1 className="font-bebas text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl xl:text-9xl">
                        RUN YOUR <span className="text-primary">HACKATHON</span> <br /> AI HANDELS THE <br /> REST.
                    </h1>
                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                        <Button variant="default" size="lg" className="w-full sm:w-auto">INITIALIZE PROJECT</Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">VIEW DOCUMENTATION</Button>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center lg:w-1/2">
                    <SystemDashboard />
                </div>
                        </div>
                </section>
  )
}

export default Hero