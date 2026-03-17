import { Cpu } from "lucide-react"; // Or a custom SVG
import ProgressBars from "./ProgressBar";
import SystemLog from "./SystemLog";

export default function SystemDashboard() {
  return (
    // Outer section/div for the main container
    <section className="bg-primary/10 text-foreground border border-border p-8 w-full mx-auto shadow-2xl transition-all duration-300">
      
      {/* Top Header Section - Logo and Online Status */}
      <div className="flex items-center justify-between pb-6">
        <Cpu className="h-10 w-10 text-primary" />
        <span className="font-bebas text-xl tracking-wide text-primary">
          SYSTEM ONLINE
        </span>
      </div>

      {/* Progress Bars - Client Component leaf */}
      <ProgressBars />

      {/* Spacer/Gap */}
      <div className="py-8" />

      {/* System Log - Client Component leaf with typing effect */}
      <SystemLog />
      
    </section>
  );
}