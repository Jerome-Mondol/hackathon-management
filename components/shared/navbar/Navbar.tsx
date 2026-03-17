"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
        name: "SERVICES",
        href: "/services",
        hasDropdown: true,
        dropdownItems: [
            {
                name: "Event Planning",
                href: "/services#planning",
                description: "Plan timelines, vendors, and logistics.",
            },
            {
                name: "Guest Management",
                href: "/services#guests",
                description: "Handle invites, RSVPs, and check-ins.",
            },
            {
                name: "Reports",
                href: "/services#reports",
                description: "Track attendance and event performance.",
            },
        ],
    },
    { name: "CONTACT", href: "/contact" },
];

const Navbar = () => {
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

    const headerVariants = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        scrolled: {
            backdropFilter: "blur(20px)",
            backgroundColor: "color-mix(in oklab, var(--background) 85%, black 15%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, height: 0 },
        open: { opacity: 1, height: "auto" },
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

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
            <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link prefetch={false} href="/" className="flex items-center space-x-2">
                            <span className="font-bebas text-3xl tracking-wide text-foreground">
                                HACKER.F
                            </span>
                        </Link>
                    </motion.div>

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
                                                            <div className="text-sm text-muted-foreground">
                                                                {dropdownItem.description}
                                                            </div>
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

                    <div className="hidden items-center space-x-4 lg:flex">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                prefetch={false}
                                href="/services"
                            >
                                <Button variant="default" size="sm" >GET STARTED <ArrowRight className="h-4 w-4" /></Button>
                                
                            </Link>
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
                                    <Link
                                        prefetch={false}
                                        href="/services"
                                        className=""
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Button variant="default" size="sm" className="w-full" >GET STARTED <ArrowRight className="h-4 w-4" /></Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;