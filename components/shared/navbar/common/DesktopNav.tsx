"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NavItem } from "@/components/shared/navbar/common/types";

interface DesktopNavProps {
  navItems: NavItem[];
  activeDropdown: string | null;
  setActiveDropdown: (name: string | null) => void;
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const DesktopNav = ({ navItems, activeDropdown, setActiveDropdown }: DesktopNavProps) => {
  return (
    <nav className="hidden items-center space-x-8 lg:flex">
      {navItems.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            prefetch={false}
            href={item.href}
            className="flex items-center space-x-1 font-jetbrains text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
          >
            <span>{item.name}</span>
            {item.hasDropdown && (
              <ChevronDown className="h-4 w-4 transition-transform duration-200" />
            )}
          </Link>

          {item.hasDropdown && (
            <AnimatePresence>
              {activeDropdown === item.name && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-lg"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link
                      prefetch={false}
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-3 transition-colors duration-200 hover:bg-muted"
                    >
                      <div className="font-medium text-foreground">{dropdownItem.name}</div>
                      {dropdownItem.description && (
                        <div className="text-sm text-muted-foreground">{dropdownItem.description}</div>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
