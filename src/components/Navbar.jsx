import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { logo } from "../assets";

// Navigation links configuration
const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "research", title: "Research" },
  { id: "sponsors", title: "Sponsors" }
];

export default function CustomNavbar() {
  // State management for navbar behavior
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced scroll handling for navbar visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;

    // Only show navbar after initial scroll
    if (currentScrollY < 50) {
      setShouldShow(false);
      return;
    }

    // Show navbar when scrolling down, hide when scrolling up
    if (currentScrollY > lastScrollY) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }

    setLastScrollY(currentScrollY);
  });

  // Handle link click in mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
      <motion.div
          initial={{ y: -100 }}
          animate={{ y: shouldShow ? 0 : -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full top-0 z-50"
      >
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll={false}
            className="bg-black backdrop-blur-md"
            classNames={{
              wrapper: "max-w-7xl px-4 sm:px-6",
              brand: "gap-4",
              toggle: "text-white",
              menu: [
                "bg-black/90",
                "mt-2",
                "rounded-lg",
                "min-h-fit",
                "h-auto",
                "py-4",
                "px-2"
              ],
              item: [
                "flex",
                "relative",
                "text-white/90 data-[active=true]:text-white",
                "data-[active=true]:after:content-['']",
                "data-[active=true]:after:absolute",
                "data-[active=true]:after:bottom-0",
                "data-[active=true]:after:left-0",
                "data-[active=true]:after:right-0",
                "data-[active=true]:after:h-[2px]",
                "data-[active=true]:after:bg-blue-500",
                "data-[active=true]:font-semibold"
              ]
            }}
        >
          {/* Rest of the navbar content remains the same */}
          <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden"
            />
            <NavbarBrand>
              <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <TypeAnimation
                    sequence={[
                      'The Future of Technology',
                      1000,
                      'The Future of Mobility',
                      1000,
                      'The Future of Innovation',
                      1000,
                      'The Future of Research',
                      1000,
                      'Navigating the Future',
                      1000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className="text-sm font-normal text-white/80 ml-2"
                />
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-8" justify="end">
            {navLinks.map((link) => (
                <NavbarItem key={link.id}>
                  <Link
                      href={`#${link.id}`}
                      className="text-white/90 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarMenu>
            <div className="py-4 block sm:hidden">
              <TypeAnimation
                  sequence={[
                    'The Future of Technology',
                    1000,
                    'The Future of Mobility',
                    1000,
                    'The Future of Innovation',
                    1000,
                    'The Future of Research',
                    1000,
                    'Navigating the Future',
                    1000
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="text-sm font-normal text-white/80"
              />
            </div>
            {navLinks.map((link) => (
                <NavbarMenuItem key={link.id} className="py-2">
                  <Link
                      href={`#${link.id}`}
                      className="w-full text-white/90 hover:text-white transition-colors text-lg"
                      onClick={handleLinkClick}
                  >
                    {link.title}
                  </Link>
                </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </motion.div>
  );
}