import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";

const inputClassName =
  "w-full border border-border bg-background px-3 py-2 font-jetbrains text-sm text-foreground focus:border-primary focus:outline-none";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AuthShell
        eyebrow="// ACCOUNT ACCESS"
        title="LOGIN"
        subtitle="Access your event control center"
        bottomText="New here?"
        bottomLinkText="Create an account"
        bottomLinkHref="/signup"
        form={
          <form className="space-y-4">
            <div>
              <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">Email</label>
              <input type="email" placeholder="you@company.com" className={inputClassName} />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block font-jetbrains text-sm uppercase text-muted-foreground">Password</label>
                <Link
                  href="#"
                  className="font-jetbrains text-xs uppercase tracking-wide text-primary transition-colors hover:text-primary/80"
                >
                  Forgot?
                </Link>
              </div>
              <input type="password" placeholder="Enter password" className={inputClassName} />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input id="remember" type="checkbox" className="h-4 w-4 accent-primary" />
              <label htmlFor="remember" className="font-jetbrains text-xs uppercase tracking-wide text-muted-foreground">
                Keep me signed in
              </label>
            </div>

            <Button type="submit" className="mt-2 w-full" size="sm">
              LOGIN
            </Button>
          </form>
        }
      />
    </div>
  );
};

export default LoginPage;