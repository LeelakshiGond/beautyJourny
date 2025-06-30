"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    number: "15+",
    label: "Years of Excellence",
    icon: "🌟",
  },
  {
    number: "50+",
    label: "Beauty Services",
    icon: "✨",
  },
  {
    number: "1000+",
    label: "Happy Clients",
    icon: "💖",
  },
  {
    number: "100%",
    label: "Satisfaction Rate",
    icon: "⭐",
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive for perfection in every service, ensuring the highest quality standards in beauty treatments.",
    icon: "🏆",
  },
  {
    title: "Innovation",
    description:
      "We embrace the latest beauty trends and technologies to provide cutting-edge treatments.",
    icon: "🚀",
  },
  {
    title: "Care",
    description:
      "Your comfort and satisfaction are our top priorities. We treat every client like family.",
    icon: "💝",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Stylist",
    experience: "12 years",
    specialty: "Hair Styling & Color",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Maria Garcia",
    role: "Makeup Artist",
    experience: "8 years",
    specialty: "Bridal & Special Events",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Lisa Chen",
    role: "Skincare Specialist",
    experience: "10 years",
    specialty: "Facial Treatments",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent mb-6"
        >
          About Our Beauty Parlour
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          We are passionate about bringing out your natural beauty and helping
          you feel confident and radiant. Our journey began with a simple
          mission: to provide exceptional beauty services in a warm, welcoming
          environment.
        </motion.p>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2009, our beauty parlour started as a small salon
                with big dreams. We wanted to create a space where beauty meets
                comfort, where every client feels valued and beautiful.
              </p>
              <p>
                Over the years, we&apos;ve grown from a single room to a
                full-service beauty destination, but our commitment to
                excellence and personal care has never wavered. We&apos;ve
                invested in the latest technology and continuously train our
                team to stay ahead of beauty trends.
              </p>
              <p>
                Today, we&apos;re proud to serve hundreds of satisfied clients
                and continue to be a trusted name in beauty and wellness in our
                community.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">💄✨</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Beauty with Purpose
            </h3>
            <p className="text-gray-600">
              Every treatment we provide is designed to enhance your natural
              beauty and boost your confidence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Our Values
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Meet Our Expert Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {member.role} • {member.experience}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Beauty Services?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment and let us help you discover your most
            beautiful self
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-rose-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Book Your Session
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
