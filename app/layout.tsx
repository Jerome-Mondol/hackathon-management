import { Space_Grotesk, Bebas_Neue, Oswald, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


// Configure each font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display", // This matches your globals.css variable
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", inter.variable)}>
      {/* Apply the variables to the body so Tailwind 
          and your CSS can find them 
      */}
      <body className={`
        ${spaceGrotesk.variable} 
        ${bebasNeue.variable} 
        ${oswald.variable} 
        ${jetbrainsMono.variable} 
        antialiased
      `}>
        {children}
      </body>
    </html>
  );
}