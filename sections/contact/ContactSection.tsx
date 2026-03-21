import { contactData } from "./contact.data";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  className?: string;
}

const iconMap = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
};

const ContactSection = ({ className = "" }: ContactSectionProps) => {
  return (
    <section className={`w-full  ${className}`.trim()}>
      <div className="py-10 sm:py-14 lg:py-18">
        <p className="font-jetbrains text-xs uppercase tracking-[0.5em] text-primary">
          {"// CONTACT US"}
        </p>

        <h2 className="mt-5 font-oswald text-4xl uppercase leading-none text-foreground sm:text-6xl">
          {contactData.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="font-jetbrains text-lg text-muted-foreground">
              {contactData.description}
            </p>

            <div className="mt-8 bg-background/50 border border-border p-6  shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-jetbrains text-sm uppercase text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border  px-3 py-2 font-jetbrains text-sm focus:outline-none focus:border-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block font-jetbrains text-sm uppercase text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-background border border-border  px-3 py-2 font-jetbrains text-sm focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-jetbrains text-sm uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border  px-3 py-2 font-jetbrains text-sm focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us about your hackathon needs..."
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="mt-8">
              <p className="font-jetbrains text-sm text-muted-foreground mb-4">
                Or reach us directly:
              </p>
              <a
                href={`mailto:${contactData.email}`}
                className="inline-block font-bebas text-xl text-primary hover:text-primary/80 transition-colors"
              >
                {contactData.email}
              </a>
              <div className="mt-4 flex justify-center gap-6 lg:justify-start">
                {contactData.socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div className="bg-primary/10 border border-border p-8  shadow-2xl w-full">
              <div className="flex items-center justify-between pb-6">
                <span className="font-bebas text-xl tracking-wide text-primary">
                  CONTACT STATUS
                </span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-3 font-jetbrains text-base text-foreground/80">
                <div className="flex gap-x-4">
                  <span className="text-primary text-lg">{`>`}</span>
                  <span>INQUIRIES ACTIVE</span>
                </div>
                <div className="flex gap-x-4">
                  <span className="text-primary text-lg">{`>`}</span>
                  <span>RESPONSE TIME: 24H</span>
                </div>
                <div className="flex gap-x-4">
                  <span className="text-primary text-lg">{`>`}</span>
                  <span>SUPPORT CHANNELS OPEN</span>
                </div>
                <div className="flex gap-x-4">
                  <span className="text-primary text-lg">{`>`}</span>
                  <span>READY FOR DEPLOYMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
