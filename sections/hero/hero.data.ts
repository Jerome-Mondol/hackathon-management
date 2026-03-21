export interface HeroData {
  title: {
    line1: string;
    highlight: string;
    line2: string;
    line3: string;
  };
  primaryButton: {
    text: string;
    href?: string;
  };
  secondaryButton: {
    text: string;
    href?: string;
  };
}

export const heroData: HeroData = {
  title: {
    line1: "RUN YOUR",
    highlight: "HACKATHON,",
    line2: "AI HANDLES THE",
    line3: "REST.",
  },
  primaryButton: {
    text: "INITIALIZE PROJECT",
    href: "#",
  },
  secondaryButton: {
    text: "VIEW DOCUMENTATION",
    href: "#",
  },
};