import AuthShell from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";

const inputClassName =
  "w-full border border-border bg-background px-3 py-2 font-jetbrains text-sm text-foreground focus:border-primary focus:outline-none";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AuthShell
        eyebrow="// ACCOUNT ONBOARDING"
        title="SIGN UP"
        subtitle="Create your command space in minutes"
        bottomText="Already have an account?"
        bottomLinkText="Sign in"
        bottomLinkHref="/login"
        form={
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">First Name</label>
                <input type="text" placeholder="Alex" className={inputClassName} />
              </div>
              <div>
                <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">Last Name</label>
                <input type="text" placeholder="Morgan" className={inputClassName} />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">Work Email</label>
              <input type="email" placeholder="you@company.com" className={inputClassName} />
            </div>

            <div>
              <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">Role</label>
              <select defaultValue="" className={inputClassName}>
                <option value="">Select role</option>
                <option value="EVENT_MANAGER">Event Manager</option>
                <option value="NORMAL_USER">Normal User</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">Password</label>
                <input type="password" placeholder="Create password" className={inputClassName} />
              </div>
              <div>
                <label className="mb-2 block font-jetbrains text-sm uppercase text-muted-foreground">Confirm Password</label>
                <input type="password" placeholder="Repeat password" className={inputClassName} />
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input id="terms" type="checkbox" className="mt-0.5 h-4 w-4 accent-primary" />
              <label htmlFor="terms" className="font-jetbrains text-xs uppercase tracking-wide text-muted-foreground">
                I agree to terms and privacy policy
              </label>
            </div>

            <Button type="submit" className="mt-2 w-full" size="sm">
              CREATE ACCOUNT
            </Button>
          </form>
        }
      />
    </div>
  );
};

export default SignupPage;