"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    icon: MapPinIcon,
    title: "Visit Us",
    details: ["123 Beauty Street", "Downtown District", "City, State 12345"],
    description: "Located in the heart of the city",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Available for appointments",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    details: ["info@beautyparlour.com", "bookings@beautyparlour.com"],
    description: "We'll respond within 24 hours",
  },
  {
    icon: ClockIcon,
    title: "Opening Hours",
    details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
    description: "Extended hours available",
  },
];

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our website, by calling us, or visiting our salon in person. We recommend booking at least 24 hours in advance.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Late cancellations may incur a fee. Please call us as soon as possible if you need to reschedule.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes! We offer gift certificates in various denominations. They make perfect gifts for birthdays, holidays, or any special occasion.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards, debit cards, and digital payments. We also offer payment plans for certain services.",
  },
  {
    question: "Do you use cruelty-free products?",
    answer:
      "Yes, we are committed to using cruelty-free and environmentally friendly products whenever possible. We carefully select all our products.",
  },
  {
    question: "Can I bring my own products?",
    answer:
      "For hygiene and safety reasons, we prefer to use our professional products. However, if you have specific allergies or preferences, please discuss with us.",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We'd love to hear from you! Contact us for appointments, questions, or
          just to say hello.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
                <info.icon className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 font-medium mb-2">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-500">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form and Map */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="makeup">Makeup</option>
                    <option value="hair">Hair Styling</option>
                    <option value="nails">Nail Services</option>
                    <option value="spa">Spa Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your beauty needs or any questions you have..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our salon is located in the heart of downtown
                  </p>
                  <div className="bg-white/80 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-sm text-gray-700">
                      123 Beauty Street, Downtown District, City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <button className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-lg">🚗</span>
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-lg">🚶</span>
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-lg">🚌</span>
                </button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Getting Here
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 5 min walk from Central Station</p>
                  <p>• Free parking available</p>
                  <p>• Accessible entrance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and policies
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Beauty?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and experience the difference our expert
            team can make
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
