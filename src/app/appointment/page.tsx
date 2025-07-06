"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "facial",
    name: "Facial Treatment",
    duration: "60 min",
    price: "₹6,640",
    description: "Rejuvenating facial with premium products",
    popular: false,
    icon: "✨",
  },
  {
    id: "makeup",
    name: "Professional Makeup",
    duration: "90 min",
    price: "₹9,960",
    description: "Full makeup application for special occasions",
    popular: true,
    icon: "💄",
  },
  {
    id: "hair",
    name: "Hair Styling",
    duration: "45 min",
    price: "₹4,980",
    description: "Professional hair styling and blowout",
    popular: false,
    icon: "💇‍♀️",
  },
  {
    id: "nails",
    name: "Nail Services",
    duration: "75 min",
    price: "₹3,735",
    description: "Manicure and pedicure with nail art",
    popular: false,
    icon: "💅",
  },
  {
    id: "spa",
    name: "Spa Treatment",
    duration: "120 min",
    price: "₹12,450",
    description: "Full body spa treatment and massage",
    popular: false,
    icon: "🧖‍♀️",
  },
  {
    id: "lash",
    name: "Lash Extensions",
    duration: "120 min",
    price: "₹14,940",
    description: "Professional lash extension application",
    popular: false,
    icon: "👁️",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

const stylists = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Facial & Makeup",
    rating: 4.9,
    experience: "8 years",
    image: "SJ",
  },
  {
    id: 2,
    name: "Emma Davis",
    specialty: "Hair Styling",
    rating: 4.8,
    experience: "6 years",
    image: "ED",
  },
  {
    id: 3,
    name: "Maria Garcia",
    specialty: "Nail Art",
    rating: 4.9,
    experience: "5 years",
    image: "MG",
  },
  {
    id: 4,
    name: "Lisa Chen",
    specialty: "Body Treatments",
    rating: 4.7,
    experience: "7 years",
    image: "LC",
  },
];

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedStylist, setSelectedStylist] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1 && !selectedService) {
      newErrors.service = "Please select a service";
    }

    if (currentStep === 2) {
      if (!selectedDate) newErrors.date = "Please select a date";
      if (!selectedTime) newErrors.time = "Please select a time";
    }

    if (currentStep === 3 && !selectedStylist) {
      newErrors.stylist = "Please select a stylist";
    }

    if (currentStep === 4) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Booking submitted:", {
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      stylist: selectedStylist,
      ...formData,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getSelectedService = () =>
    services.find((s) => s.id === selectedService);
  const getSelectedStylist = () =>
    stylists.find((s) => s.id === selectedStylist);

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
          >
            <div className="text-6xl mb-6">🎉</div>
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Appointment Booked Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;ve sent a confirmation email to {formData.email}. Please
              check your inbox for details.
            </p>

            {/* Appointment Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-800 mb-4">
                Appointment Details:
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">
                    {getSelectedService()?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {new Date(selectedDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stylist:</span>
                  <span className="font-medium">
                    {getSelectedStylist()?.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Back to Home
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setSelectedService("");
                  setSelectedDate("");
                  setSelectedTime("");
                  setSelectedStylist(null);
                  setFormData({ name: "", email: "", phone: "", notes: "" });
                }}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Book Another
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-8 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent mb-4 sm:mb-6"
        >
          Book Your Appointment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
        >
          Choose your preferred service and time slot. We&apos;ll confirm your
          appointment and send you a reminder.
        </motion.p>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
        >
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step
                        ? "bg-gradient-to-r from-rose-500 to-pink-500"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Choose Your Service
              </h2>
              {errors.service && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  <ExclamationCircleIcon className="w-5 h-5" />
                  {errors.service}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedService === service.id
                        ? "border-rose-500 bg-rose-50 shadow-lg"
                        : "border-gray-200 hover:border-rose-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-2xl">{service.icon || "✨"}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-rose-600">
                        {service.price}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {service.duration}
                        </span>
                        {service.popular && (
                          <span className="px-2 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                >
                  Next: Select Date & Time
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Select Date & Time
              </h2>

              {/* Date Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  <CalendarIcon className="w-4 h-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full p-4 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.date && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Time Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  <ClockIcon className="w-4 h-4 inline mr-2" />
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={`w-full p-4 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.time ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.time}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                >
                  Next: Choose Stylist
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Stylist Selection */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Choose Your Stylist
              </h2>
              {errors.stylist && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  <ExclamationCircleIcon className="w-5 h-5" />
                  {errors.stylist}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stylists.map((stylist) => (
                  <motion.div
                    key={stylist.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedStylist(stylist.id)}
                    className={`p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedStylist === stylist.id
                        ? "border-rose-500 bg-rose-50 shadow-lg"
                        : "border-gray-200 hover:border-rose-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold mr-3 sm:mr-4 text-sm sm:text-base">
                        {stylist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          {stylist.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          ⭐ {stylist.rating}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{stylist.specialty}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!selectedStylist}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                >
                  Next: Your Details
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Personal Details */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                <UserIcon className="w-6 h-6 inline mr-2" />
                Your Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-4 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm flex items-center gap-1 mt-1">
                      <ExclamationCircleIcon className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-4 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm flex items-center gap-1 mt-1">
                      <ExclamationCircleIcon className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="max-w-4xl mx-auto mt-12 sm:mt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg">
            <div className="text-2xl sm:text-3xl mb-3">⏰</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              Flexible Hours
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Open 7 days a week with extended hours for your convenience
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg">
            <div className="text-2xl sm:text-3xl mb-3">🎁</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              First Visit Discount
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              20% off your first service when you book online
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl mb-3">📱</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              Easy Rescheduling
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Change or cancel your appointment up to 24 hours in advance
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
