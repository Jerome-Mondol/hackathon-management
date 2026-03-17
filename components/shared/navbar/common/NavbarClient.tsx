"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesktopNav from "@/components/shared/navbar/common/DesktopNav";
import MobileNav from "@/components/shared/navbar/common/MobileNav";
import { NavItem } from "@/components/shared/navbar/common/types";

interface NavbarClientProps {
  navItems: NavItem[];
}

const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  scrolled: {
    backdropFilter: "blur(20px)",
    backgroundColor: "color-mix(in oklab, var(--background) 85%, black 15%)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
  },
};

const NavbarClient = ({ navItems }: NavbarClientProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-1/2 z-50 w-[90vw] -translate-x-1/2 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? "color-mix(in oklab, var(--background) 85%, black 15%)"
          : "transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.25)" : "none",
      }}
    >
      <div className="mx-auto border-b border-border px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link prefetch={false} href="/" className="flex items-center space-x-2">
              <span className="font-bebas text-3xl tracking-wide text-foreground">HACKER.F</span>
            </Link>
          </motion.div>

          <DesktopNav
            navItems={navItems}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          <div className="hidden items-center space-x-4 lg:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="/services" variant="default" size="sm">
                GET STARTED <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <MobileNav
          navItems={navItems}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </motion.header>
  );
};

export default NavbarClient;
