"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Facial Treatments",
    description:
      "Rejuvenating facials with advanced skincare technology and premium products.",
    price: "$80-150",
    duration: "60-90 min",
    icon: "✨",
    features: ["Deep Cleansing", "Anti-Aging", "Hydration", "Brightening"],
    category: "skincare",
  },
  {
    id: 2,
    title: "Hair Styling",
    description:
      "Professional hair styling for any occasion with modern techniques.",
    price: "$60-120",
    duration: "45-90 min",
    icon: "💇‍♀️",
    features: ["Cut & Style", "Blow Dry", "Updos", "Special Occasions"],
    category: "hair",
  },
  {
    id: 3,
    title: "Makeup Artistry",
    description:
      "Professional makeup application for events, photoshoots, and special occasions.",
    price: "$100-200",
    duration: "60-120 min",
    icon: "💄",
    features: ["Bridal Makeup", "Party Glam", "Natural Look", "Airbrush"],
    category: "makeup",
  },
  {
    id: 4,
    title: "Nail Art & Care",
    description: "Creative nail designs and professional nail care services.",
    price: "$40-80",
    duration: "45-75 min",
    icon: "💅",
    features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"],
    category: "nails",
  },
  {
    id: 5,
    title: "Body Treatments",
    description: "Relaxing body treatments and therapeutic massages.",
    price: "$120-200",
    duration: "90-120 min",
    icon: "🧖‍♀️",
    features: ["Body Scrub", "Massage", "Wraps", "Detox"],
    category: "body",
  },
  {
    id: 6,
    title: "Lash & Brow Services",
    description: "Professional lash extensions and eyebrow shaping services.",
    price: "$80-150",
    duration: "60-90 min",
    icon: "👁️",
    features: ["Lash Extensions", "Brow Shaping", "Tinting", "Lamination"],
    category: "lashes",
  },
];

const categories = [
  "all",
  "skincare",
  "hair",
  "makeup",
  "nails",
  "body",
  "lashes",
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Experience the future of beauty with our cutting-edge services and
          expert professionals
        </motion.p>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-rose-50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() =>
                setSelectedService(
                  selectedService === service.id ? null : service.id
                )
              }
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-rose-500">
                    {service.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <motion.div
                initial={false}
                animate={{
                  height: selectedService === service.id ? "auto" : 0,
                  opacity: selectedService === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-600"
                      >
                        <span className="text-rose-500 mr-2">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Book Now Button */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link href="/appointment">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Book Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Beauty?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment and experience our premium beauty services
          </p>
          <Link href="/appointment">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-rose-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Book Your Session
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
