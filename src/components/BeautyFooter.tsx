"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  SparklesIcon,
  HeartIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Facial Treatment", href: "/services" },
      { name: "Professional Makeup", href: "/services" },
      { name: "Hair Styling", href: "/services" },
      { name: "Nail Services", href: "/services" },
      { name: "Spa Treatment", href: "/services" },
      { name: "Lash Extensions", href: "/services" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about-us" },
      { name: "Our Team", href: "/about-us" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Gallery", href: "/gallery" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "Book Appointment", href: "/appointment" },
      { name: "FAQ", href: "/contact-us" },
      { name: "Privacy Policy", href: "/contact-us" },
      { name: "Terms of Service", href: "/contact-us" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: "📸" },
  { name: "Facebook", href: "#", icon: "📘" },
  { name: "Twitter", href: "#", icon: "🐦" },
  { name: "TikTok", href: "#", icon: "🎵" },
];

export default function BeautyFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Beauty Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 text-xl sm:text-2xl opacity-30"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 sm:top-40 right-10 sm:right-20 text-xl sm:text-2xl opacity-30"
        >
          💄
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 text-xl sm:text-2xl opacity-30"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 text-xl sm:text-2xl opacity-30"
        >
          💅
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl">✨</div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Beauty Parlour
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Experience luxury beauty treatments with cutting-edge
                  technology. Our expert stylists deliver personalized results
                  that enhance your natural beauty.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                    <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                    <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0" />
                    <span className="break-all">hello@beautyparlour.com</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                    <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span>123 Beauty Street, City, State 12345</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                    <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0" />
                    <span>Mon-Sun: 9AM-8PM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="text-xs sm:text-sm text-gray-400">
                  Follow us:
                </span>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200"
                    >
                      <span className="text-sm sm:text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
                <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                  Subscribe to our newsletter for beauty tips and exclusive
                  offers
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 sm:px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-pink-400 transition-colors duration-200 w-full sm:w-48"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                <span>© 2024 Beauty Parlour. All rights reserved.</span>
                <div className="flex items-center gap-1">
                  <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                  <span>Made with love</span>
                </div>
              </div>

              {/* Rewinity Labs Attribution */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-xs sm:text-sm text-gray-400">
                  Powered by
                </span>
                <motion.a
                  href="https://rewinitylabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                >
                  <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                  <span>Rewinity Labs</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
