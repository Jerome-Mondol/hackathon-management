import NavbarClient from "./common/NavbarClient";
import { NavItem } from "./common/types";

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
  return <NavbarClient navItems={navItems} />;
};

export default Navbar;