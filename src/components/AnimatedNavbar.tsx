"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Book Now", href: "/appointment" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact-us" },
];

export default function AnimatedNavbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      style={{
        backgroundColor: backgroundColor,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-rose-200/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent"
            >
              BeautyParlour
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} pathname={pathname} />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-rose-600 hover:bg-rose-100"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-current block transition-all"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-current block mt-1 transition-all"
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-current block mt-1 transition-all"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.name}
                item={item}
                pathname={pathname}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

function NavLink({
  item,
  pathname,
}: {
  item: { name: string; href: string };
  pathname: string;
}) {
  const isActive = pathname === item.href;

  return (
    <Link href={item.href}>
      <motion.div
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? "text-rose-600 bg-rose-100"
            : "text-gray-700 hover:text-rose-600 hover:bg-rose-50"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.name}
      </motion.div>
    </Link>
  );
}

function MobileNavLink({
  item,
  pathname,
  onClick,
}: {
  item: { name: string; href: string };
  pathname: string;
  onClick: () => void;
}) {
  const isActive = pathname === item.href;

  return (
    <Link href={item.href} onClick={onClick}>
      <motion.div
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive
            ? "text-rose-600 bg-rose-100"
            : "text-gray-700 hover:text-rose-600 hover:bg-rose-50"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {item.name}
      </motion.div>
    </Link>
  );
}
