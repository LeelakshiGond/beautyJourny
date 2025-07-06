"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Beauty",
    price: 8299,
    duration: "month",
    description: "Perfect for occasional beauty treatments",
    features: [
      "1 Facial Treatment",
      "1 Hair Styling",
      "1 Nail Service",
      "Basic Consultation",
      "Email Support",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Premium Glow",
    price: 16599,
    duration: "month",
    description: "Most popular choice for beauty enthusiasts",
    features: [
      "3 Facial Treatments",
      "2 Hair Styling Sessions",
      "2 Nail Services",
      "1 Makeup Session",
      "Priority Booking",
      "SMS Reminders",
      "Exclusive Products",
    ],
    popular: true,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 3,
    name: "Luxury Experience",
    price: 33199,
    duration: "month",
    description: "Ultimate beauty transformation package",
    features: [
      "Unlimited Facial Treatments",
      "Unlimited Hair Styling",
      "Unlimited Nail Services",
      "2 Makeup Sessions",
      "1 Body Treatment",
      "VIP Priority Booking",
      "Personal Beauty Consultant",
      "Exclusive Events Access",
      "Premium Product Samples",
    ],
    popular: false,
    color: "from-purple-500 to-fuchsia-500",
  },
];

const addOnServices = [
  {
    name: "Lash Extensions",
    price: 12499,
    duration: "session",
    description: "Professional lash extensions for stunning eyes",
  },
  {
    name: "Bridal Package",
    price: 41499,
    duration: "package",
    description: "Complete bridal beauty transformation",
  },
  {
    name: "Spa Day",
    price: 24899,
    duration: "day",
    description: "Full day of relaxation and beauty treatments",
  },
  {
    name: "Makeup Lesson",
    price: 9999,
    duration: "session",
    description: "Learn professional makeup techniques",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"month" | "year">("month");

  const getPrice = (basePrice: number) => {
    return billingCycle === "year" ? Math.round(basePrice * 10) : basePrice;
  };

  const getSavings = (basePrice: number) => {
    return billingCycle === "year" ? Math.round(basePrice * 2) : 0;
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
          Pricing Plans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Choose the perfect beauty package that fits your lifestyle and budget
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`text-sm font-medium ${
              billingCycle === "month" ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() =>
              setBillingCycle(billingCycle === "month" ? "year" : "month")
            }
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              billingCycle === "year" ? "bg-rose-500" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingCycle === "year" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              billingCycle === "year" ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
          {billingCycle === "year" && (
            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
              Save 20%
            </span>
          )}
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-rose-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{getPrice(plan.price).toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-500">/{billingCycle}</span>
                </div>
                {billingCycle === "year" && (
                  <p className="text-sm text-green-600 font-medium">
                    Save ₹{getSavings(plan.price).toLocaleString("en-IN")} per
                    year
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                    }}
                    className="flex items-center text-gray-600"
                  >
                    <CheckIcon className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Add-on Services */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Additional Services
          </h2>
          <p className="text-lg text-gray-600">
            Enhance your beauty experience with our premium add-on services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOnServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-rose-500">
                  ₹{service.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-gray-500">
                  /{service.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our pricing and packages
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-6"
        >
          {[
            {
              question: "Can I change my plan anytime?",
              answer:
                "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
            },
            {
              question: "What's included in the consultation?",
              answer:
                "Our consultation includes a skin analysis, personalized treatment recommendations, and a detailed beauty plan tailored to your needs.",
            },
            {
              question: "Do you offer refunds?",
              answer:
                "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, we'll refund your payment.",
            },
            {
              question: "Can I cancel my subscription?",
              answer:
                "Yes, you can cancel your subscription at any time. There are no cancellation fees or penalties.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
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
      <section className="max-w-4xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your plan and begin your transformation today
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-rose-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
