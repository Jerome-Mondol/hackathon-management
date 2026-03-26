import Link from "next/link";
import { ReactNode } from "react";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  form: ReactNode;
  bottomText: string;
  bottomLinkText: string;
  bottomLinkHref: string;
}

const AuthShell = ({
  eyebrow,
  title,
  subtitle,
  form,
  bottomText,
  bottomLinkText,
  bottomLinkHref,
}: AuthShellProps) => {
  return (
    <section className="w-full">
      <div className="flex min-h-[calc(100vh-11rem)] items-center justify-center py-10 sm:py-14 lg:py-18">
        <div className="w-full max-w-2xl border border-border bg-background/60 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <p className="font-jetbrains text-xs uppercase tracking-[0.5em] text-primary">{eyebrow}</p>

          <h1 className="mt-5 font-oswald text-4xl uppercase leading-none text-foreground sm:text-6xl">
            {title}
          </h1>

          <p className="mt-4 font-jetbrains text-sm uppercase tracking-wide text-muted-foreground sm:text-base">
            {subtitle}
          </p>

          <div className="mt-8">{form}</div>

          <p className="mt-6 font-jetbrains text-sm text-muted-foreground">
            {bottomText}{" "}
            <Link href={bottomLinkHref} className="text-primary transition-colors hover:text-primary/80">
              {bottomLinkText}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthShell;