"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  HeartIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bridal Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    review:
      "मेरी शादी के लिए ब्राइडल मेकअप बहुत खूबसूरत था! टीम ने मुझे राजकुमारी जैसा महसूस कराया। मेहंदी से लेकर हेयर स्टाइलिंग तक सब कुछ परफेक्ट था। मेरी सासू माँ भी बहुत खुश हुईं। धन्यवाद!",
    reviewEnglish:
      "My bridal makeup was absolutely stunning! The team made me feel like a princess. Everything from mehendi to hair styling was perfect. Even my mother-in-law was very happy. Thank you!",
    service: "Complete Bridal Package (Mehendi + Makeup + Hair)",
    date: "March 2024",
    location: "Mumbai",
    beforeAfter: true,
    verified: true,
  },
  {
    id: 2,
    name: "Anjali Patel",
    role: "Regular Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review:
      "मैं यहाँ 2 साल से आ रही हूँ और मेरी त्वचा में बहुत सुधार हुआ है। फेशियल ट्रीटमेंट के बाद मेरी त्वचा चमकदार और स्वस्थ दिखती है। स्टाफ बहुत प्रोफेशनल है।",
    reviewEnglish:
      "I've been coming here for 2 years and my skin has improved dramatically. After facial treatments, my skin looks radiant and healthy. The staff is very professional.",
    service: "Monthly Gold Facial Treatment",
    date: "February 2024",
    location: "Delhi",
    beforeAfter: true,
    verified: true,
  },
  {
    id: 3,
    name: "Kavya Reddy",
    role: "First-time Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    review:
      "पहली बार लैश एक्सटेंशन करवाया और बहुत खुश हूँ! नेचुरल लग रहे हैं और मेरा मॉर्निंग रूटीन आसान हो गया है। सभी दोस्तों ने पूछा कि मैंने क्या किया है।",
    reviewEnglish:
      "Got lash extensions for the first time and I'm so happy! They look natural and my morning routine is so much easier. All my friends asked what I did.",
    service: "Natural Lash Extensions",
    date: "January 2024",
    location: "Bangalore",
    beforeAfter: false,
    verified: true,
  },
  {
    id: 4,
    name: "Meera Singh",
    role: "VIP Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    review:
      "VIP एक्सपीरियंस वाकई में बेहतरीन है। पर्सनलाइज्ड कंसल्टेशन से लेकर प्रीमियम प्रोडक्ट्स तक सब कुछ टॉप-नॉच है। हर बार खूबसूरत महसूस करती हूँ।",
    reviewEnglish:
      "The VIP experience is truly exceptional. From personalized consultation to premium products, everything is top-notch. I feel beautiful every time I visit.",
    service: "VIP Beauty Package with Gold Facial",
    date: "December 2023",
    location: "Chennai",
    beforeAfter: true,
    verified: true,
  },
  {
    id: 5,
    name: "Riya Gupta",
    role: "Event Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review:
      "कंपनी के एनुअल फंक्शन के लिए टीम बुक की और सभी 25 लोगों का मेकअप बहुत खूबसूरत किया। टाइम पर सब कुछ हुआ और सभी खुश थे।",
    reviewEnglish:
      "Booked the team for our company's annual function and they did beautiful makeup for all 25 people. Everything was on time and everyone was happy.",
    service: "Group Event Styling (25 people)",
    date: "November 2023",
    location: "Hyderabad",
    beforeAfter: false,
    verified: true,
  },
  {
    id: 6,
    name: "Zara Khan",
    role: "Spa Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    review:
      "स्पा डे पैकेज खुद को दिया सबसे अच्छा गिफ्ट था। बॉडी ट्रीटमेंट बहुत रिलैक्सिंग थे और स्टाफ ने पूरा ध्यान रखा। फ्रेश और एनर्जेटिक महसूस कर रही हूँ।",
    reviewEnglish:
      "The spa day package was the best gift I gave myself. The body treatments were very relaxing and the staff took great care. I feel fresh and energetic.",
    service: "Luxury Spa Day Package",
    date: "October 2023",
    location: "Pune",
    beforeAfter: true,
    verified: true,
  },
  {
    id: 7,
    name: "Aditi Verma",
    role: "Hair Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    review:
      "मेरे बालों का कलर और कट बहुत खूबसूरत हुआ है। स्टाइलिस्ट ने मेरी फेस शेप के हिसाब से सुझाव दिया और परिणाम शानदार है।",
    reviewEnglish:
      "My hair color and cut turned out beautiful. The stylist suggested according to my face shape and the result is amazing.",
    service: "Hair Color + Cut + Styling",
    date: "September 2023",
    location: "Kolkata",
    beforeAfter: true,
    verified: true,
  },
  {
    id: 8,
    name: "Pooja Sharma",
    role: "Nail Art Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review:
      "नेल आर्ट बहुत खूबसूरत किया है। डिज़ाइन मेरी पसंद के अनुसार किया और 3 हफ्ते से चल रहा है। सभी ने तारीफ की।",
    reviewEnglish:
      "The nail art is beautiful. The design was done according to my preference and has lasted for 3 weeks. Everyone complimented it.",
    service: "Gel Nail Art with Rhinestones",
    date: "August 2023",
    location: "Ahmedabad",
    beforeAfter: false,
    verified: true,
  },
];

const stats = [
  { number: "2000+", label: "Happy Clients", icon: "😊" },
  { number: "4.9", label: "Average Rating", icon: "⭐" },
  { number: "25+", label: "Expert Stylists", icon: "👩‍🎨" },
  { number: "5000+", label: "Services Completed", icon: "✨" },
];

const features = [
  {
    title: "Traditional & Modern",
    description:
      "Blend of traditional Indian beauty techniques with modern technology",
    icon: "🌸",
  },
  {
    title: "Hygiene First",
    description: "100% sanitized equipment and premium quality products",
    icon: "🧼",
  },
  {
    title: "Expert Stylists",
    description: "Certified professionals with 5+ years of experience",
    icon: "👩‍🎨",
  },
  {
    title: "Affordable Luxury",
    description: "Premium services at reasonable prices with EMI options",
    icon: "💰",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <main className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4">✨</div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent mb-4 sm:mb-6">
            Client Testimonials
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
        >
          Hear from our satisfied clients about their beauty transformation
          experiences. From bridal makeup to daily beauty care, discover why
          thousands choose us.
        </motion.p>
      </section>

      {/* Language Toggle */}
      <section className="max-w-6xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <button
              onClick={() => setShowEnglish(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !showEnglish
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setShowEnglish(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                showEnglish
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              English
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Slider */}
      <section className="max-w-6xl mx-auto mb-12 sm:mb-20">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? 300 : -300,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction === 1 ? -300 : 300,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl h-full">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start mb-4 sm:mb-6">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                            {testimonials[currentIndex].name}
                          </h3>
                          {testimonials[currentIndex].verified && (
                            <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-xs text-gray-500 mb-2">
                          📍 {testimonials[currentIndex].location}
                        </p>
                        <div className="flex items-center gap-2">
                          {[...Array(testimonials[currentIndex].rating)].map(
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                              />
                            )
                          )}
                          <span className="text-sm text-gray-600 ml-1">
                            {testimonials[currentIndex].rating}/5
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Review */}
                    <div className="flex-1">
                      <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                        "
                        {showEnglish
                          ? testimonials[currentIndex].reviewEnglish
                          : testimonials[currentIndex].review}
                        "
                      </blockquote>

                      {/* Before/After Badge */}
                      {testimonials[currentIndex].beforeAfter && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full mb-4">
                          <SparklesIcon className="w-3 h-3" />
                          Before/After Available
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-600 font-medium">
                          {testimonials[currentIndex].service}
                        </span>
                        <span className="text-xs text-gray-500">
                          {testimonials[currentIndex].date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-rose-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white"
        >
          <div className="text-4xl sm:text-5xl mb-4">💖</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Join Our Happy Clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Experience the same exceptional service and results that our clients
            love. Book your appointment today and transform your beauty journey!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-rose-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
              >
                Book Your Session
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rose-500 transition-all duration-300 text-base sm:text-lg"
              >
                View Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
