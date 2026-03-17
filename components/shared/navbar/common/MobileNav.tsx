"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/shared/navbar/common/types";

interface MobileNavProps {
  navItems: NavItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

const MobileNav = ({ navItems, isMobileMenuOpen, setIsMobileMenuOpen }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="overflow-hidden lg:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/95 py-4 shadow-xl backdrop-blur-lg">
            {navItems.map((item) => (
              <Link
                prefetch={false}
                key={item.name}
                href={item.href}
                className="block px-4 py-3 font-jetbrains text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="space-y-2 px-4 py-2">
              <Button
                href="/services"
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET STARTED <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
