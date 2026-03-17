"use client";

import { useState } from "react";
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
};

const NavbarClient = ({ navItems }: NavbarClientProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/70 backdrop-blur-md transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mx-auto">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link prefetch={false} href="/" className="flex items-center space-x-2">
              <span className="font-bebas text-3xl tracking-wide text-foreground">HACK.F</span>
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
