"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  StarIcon,
  SparklesIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
// TODO: Import 3D/Three.js components when ready

const beautyServices = [
  {
    id: 1,
    title: "Facial Treatments",
    description: "Rejuvenating facials with premium skincare products",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    price: "₹6,640",
    duration: "60-90 min",
    icon: "✨",
    features: ["Deep Cleansing", "Anti-Aging", "Hydration", "Brightening"],
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 2,
    title: "Hair Styling",
    description: "Professional hair styling for any occasion",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop",
    price: "₹4,980",
    duration: "45-90 min",
    icon: "💇‍♀️",
    features: ["Cut & Style", "Blow Dry", "Updos", "Special Occasions"],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Makeup Artistry",
    description: "Professional makeup for events and special occasions",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop",
    price: "₹9,960",
    duration: "60-120 min",
    icon: "💄",
    features: ["Bridal Makeup", "Party Glam", "Natural Look", "Airbrush"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Nail Art & Care",
    description: "Creative nail designs and professional nail care",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    price: "₹3,735",
    duration: "45-75 min",
    icon: "💅",
    features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 5,
    title: "Body Treatments",
    description: "Relaxing body treatments and therapeutic massages",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
    price: "₹12,450",
    duration: "90-120 min",
    icon: "🧖‍♀️",
    features: ["Body Scrub", "Massage", "Wraps", "Detox"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Lash & Brow Services",
    description: "Professional lash extensions and eyebrow shaping",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    price: "₹6,640",
    duration: "60-90 min",
    icon: "👁️",
    features: ["Lash Extensions", "Brow Shaping", "Tinting", "Lamination"],
    gradient: "from-amber-500 to-orange-500",
  },
];

const floatingElements = [
  { icon: "💄", delay: 0, duration: 3, left: "10%", top: "20%" },
  { icon: "✨", delay: 0.5, duration: 3.5, left: "85%", top: "15%" },
  { icon: "🌸", delay: 1, duration: 4, left: "20%", top: "80%" },
  { icon: "💎", delay: 1.5, duration: 3.2, left: "75%", top: "85%" },
  { icon: "🌟", delay: 2, duration: 3.8, left: "50%", top: "10%" },
  { icon: "💖", delay: 2.5, duration: 3.3, left: "90%", top: "70%" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, -50, -100],
            x: [0, index % 2 === 0 ? 30 : -30, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-2xl sm:text-3xl pointer-events-none"
          style={{
            left: element.left,
            top: element.top,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-full mb-6 shadow-lg"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>Premium Beauty Experience</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Transform Your
                <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Beauty Journey
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Experience luxury beauty treatments with cutting-edge
                technology. Our expert stylists deliver personalized results
                that enhance your natural beauty.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 text-sm text-gray-600"
              >
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="ml-1">4.9/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <HeartIcon className="w-4 h-4 text-rose-500" />
                  <span>500+ Happy Clients</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/appointment">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg"
                  >
                    Book Your Session
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 text-base sm:text-lg"
                  >
                    View Services
                  </motion.button>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Beauty Services
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Satisfaction
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              {/* Main Image Placeholder */}
              <div className="relative">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-purple-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                        💄✨
                      </div>
                      <div className="text-base sm:text-lg font-medium text-gray-700 px-4">
                        Premium Beauty Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white p-4 rounded-lg shadow-lg"
                >
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="font-semibold text-gray-900">
                    Expert Stylists
                  </div>
                  <div className="text-sm text-gray-600">
                    Certified professionals
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white p-4 rounded-lg shadow-lg"
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold text-gray-900">Modern Tech</div>
                  <div className="text-sm text-gray-600">Latest equipment</div>
                </motion.div>
              </div>

              {/* Mobile Feature Cards */}
              <div className="lg:hidden grid grid-cols-2 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white p-3 rounded-lg shadow-lg"
                >
                  <div className="text-xl mb-1">🌟</div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Expert Stylists
                  </div>
                  <div className="text-xs text-gray-600">
                    Certified professionals
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white p-3 rounded-lg shadow-lg"
                >
                  <div className="text-xl mb-1">⚡</div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Modern Tech
                  </div>
                  <div className="text-xs text-gray-600">Latest equipment</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-full mb-6 shadow-lg"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Our Premium Services</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Discover Our
              <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Beauty Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional expertise and modern
              innovation. Our comprehensive range of beauty services is designed
              to enhance your natural beauty.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beautyServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Price Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                  >
                    <span className="text-sm font-bold text-gray-900">
                      {service.price}
                    </span>
                  </motion.div>

                  {/* Service Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-3xl"
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-4 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  {/* Duration */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                  </motion.div>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {service.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.9 + index * 0.1 + featureIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mr-2"></div>
                            {feature}
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>

                  {/* Book Now Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/appointment">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                      >
                        Book Now
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 pointer-events-none rounded-2xl"
                />
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-3 mx-auto"
              >
                View All Services
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Beauty Parlour?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of traditional expertise and modern
              innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Stylists",
                description:
                  "Our certified beauty professionals bring years of experience and continuous training to deliver exceptional results.",
                icon: "👩‍🎨",
              },
              {
                title: "Modern Technology",
                description:
                  "State-of-the-art equipment and advanced beauty techniques for optimal results and comfort.",
                icon: "🚀",
              },
              {
                title: "Personalized Care",
                description:
                  "Every treatment is customized to your unique needs, ensuring the best possible outcome.",
                icon: "✨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
