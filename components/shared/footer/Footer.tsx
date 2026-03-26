import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }, 
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Workflow", href: "#" },
    { label: "Capabilities", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-14  bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 " />

      <div className="relative py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10  bg-secondary/50 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-jetbrains text-xs uppercase tracking-[0.4em] text-primary">
              {"// SYSTEM ONLINE"}
            </p>
            <h3 className="mt-4 font-oswald text-4xl uppercase leading-none text-foreground sm:text-5xl">
              Build events with signal, not noise.
            </h3>
            <p className="mt-5 max-w-md font-jetbrains text-sm uppercase leading-relaxed tracking-wide text-muted-foreground">
              Event infrastructure for modern hackathons. Automation, analytics, and orchestration in one command center.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/services" size="sm">
                START PROJECT <ArrowUpRight className="size-4" />
              </Button>
              <Button href="/contact" variant="outline" size="sm">
                TALK TO TEAM
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="font-jetbrains text-sm uppercase tracking-widest text-foreground">Product</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((item) => (
                  <li key={item.label}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className="font-jetbrains text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-jetbrains text-sm uppercase tracking-widest text-foreground">Resources</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className="font-jetbrains text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-jetbrains text-sm uppercase tracking-widest text-foreground">Legal</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.label}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className="font-jetbrains text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      aria-label={item.label}
                    >
                      <Icon className="size-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3  pt-5 sm:flex-row sm:items-center">
          <p className="font-jetbrains text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {`© ${year} Hack.F Systems`}
          </p>
          <p className="font-jetbrains text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Uptime 99.98% / Response Window 24h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
