"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  SparklesIcon,
  CheckCircleIcon,
  HeartIcon,
  TrophyIcon,
  FireIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

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
    transformation: "Bridal Glow Transformation",
    beforeImage:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop",
    highlight: "Perfect bridal look that lasted all day!",
    serviceCategory: "bridal",
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
    transformation: "Skin Radiance Journey",
    beforeImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    highlight: "2 years of consistent results!",
    serviceCategory: "facial",
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
    transformation: "Natural Lash Enhancement",
    beforeImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    highlight: "Natural-looking lashes that last!",
    serviceCategory: "lashes",
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
    transformation: "VIP Luxury Experience",
    beforeImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop",
    highlight: "Premium VIP treatment experience!",
    serviceCategory: "vip",
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
    transformation: "Corporate Event Makeover",
    beforeImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop",
    highlight: "Perfect for corporate events!",
    serviceCategory: "event",
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
    transformation: "Spa Wellness Journey",
    beforeImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    highlight: "Ultimate relaxation experience!",
    serviceCategory: "spa",
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
    transformation: "Hair Style Transformation",
    beforeImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
    highlight: "Perfect hair for my face shape!",
    serviceCategory: "hair",
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
    transformation: "Creative Nail Art Design",
    beforeImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    highlight: "Long-lasting nail art design!",
    serviceCategory: "nails",
  },
];

const stats = [
  {
    number: "2000+",
    label: "Happy Clients",
    icon: "😊",
    color: "from-rose-500 to-pink-500",
  },
  {
    number: "4.9",
    label: "Average Rating",
    icon: "⭐",
    color: "from-yellow-400 to-orange-500",
  },
  {
    number: "25+",
    label: "Expert Stylists",
    icon: "👩‍🎨",
    color: "from-purple-500 to-indigo-500",
  },
  {
    number: "5000+",
    label: "Services Completed",
    icon: "✨",
    color: "from-cyan-500 to-blue-500",
  },
];

const features = [
  {
    title: "Traditional & Modern",
    description:
      "Blend of traditional Indian beauty techniques with modern technology",
    icon: "🌸",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Hygiene First",
    description: "100% sanitized equipment and premium quality products",
    icon: "🧼",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Expert Stylists",
    description: "Certified professionals with 5+ years of experience",
    icon: "👩‍🎨",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Affordable Luxury",
    description: "Premium services at reasonable prices with EMI options",
    icon: "💰",
    gradient: "from-green-500 to-emerald-500",
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

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
    <main className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-white overflow-hidden relative">
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
      <section className="max-w-6xl mx-auto text-center mb-12 sm:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
          >
            ✨
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent mb-4 sm:mb-6">
            Client Testimonials
          </h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-full mb-6 shadow-lg"
          >
            <TrophyIcon className="w-4 h-4" />
            <span>Trusted by 2000+ Happy Clients</span>
          </motion.div>
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
      <section className="max-w-6xl mx-auto mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-rose-100">
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
      <section className="max-w-6xl mx-auto mb-12 sm:mb-20 relative z-10">
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
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-rose-100"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="text-2xl sm:text-3xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <div
                className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
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
      <section className="max-w-6xl mx-auto mb-12 sm:mb-20 relative z-10">
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-rose-100 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`text-3xl mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Slider */}
      <section className="max-w-6xl mx-auto mb-12 sm:mb-20 relative z-10">
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-200"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-200"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </motion.button>

          {/* Testimonial Cards */}
          <div className="relative h-[500px] sm:h-[600px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? 300 : -300,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction === 1 ? -300 : 300,
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl h-full border border-rose-100">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                      >
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mr-4 flex-shrink-0 border-4 border-rose-100 shadow-lg"
                        />
                        {testimonials[currentIndex].verified && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                            {testimonials[currentIndex].name}
                          </h3>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <HeartIcon className="w-5 h-5 text-rose-500" />
                          </motion.div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                          📍 {testimonials[currentIndex].location}
                        </p>
                        <div className="flex items-center gap-2">
                          {[...Array(testimonials[currentIndex].rating)].map(
                            (_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                  delay: 0.8 + i * 0.1,
                                  type: "spring",
                                }}
                              >
                                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                              </motion.div>
                            )
                          )}
                          <span className="text-sm font-semibold text-gray-600 ml-2">
                            {testimonials[currentIndex].rating}/5
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Transformation Highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="mb-4 flex flex-wrap gap-2"
                    >
                      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                        <FireIcon className="w-4 h-4" />
                        {testimonials[currentIndex].transformation}
                      </div>
                      {testimonials[currentIndex].beforeAfter && (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-xs font-medium inline-flex items-center gap-1">
                          📸 Before/After
                        </div>
                      )}
                    </motion.div>

                    {/* Review */}
                    <div className="flex-1 mb-6">
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic relative"
                      >
                        <span className="text-4xl text-rose-300 absolute -top-2 -left-2">
                          &ldquo;
                        </span>
                        {showEnglish
                          ? testimonials[currentIndex].reviewEnglish
                          : testimonials[currentIndex].review}
                        <span className="text-4xl text-rose-300 absolute -bottom-2 -right-2">
                          &rdquo;
                        </span>
                      </motion.blockquote>

                      {/* Highlight Quote */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-4 p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border-l-4 border-rose-500"
                      >
                        <p className="text-sm font-semibold text-rose-700">
                          💫 {testimonials[currentIndex].highlight}
                        </p>
                      </motion.div>
                    </div>

                    {/* Before/After Toggle */}
                    {testimonials[currentIndex].beforeAfter && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mb-4"
                      >
                        <button
                          onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                          className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                            showBeforeAfter
                              ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                              : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105"
                          }`}
                        >
                          <SparklesIcon className="w-4 h-4" />
                          {showBeforeAfter ? "Hide" : "Show"} Before & After
                          Photos
                        </button>
                      </motion.div>
                    )}

                    {/* Before/After Images */}
                    {testimonials[currentIndex].beforeAfter &&
                      showBeforeAfter && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="mb-4"
                        >
                          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 border border-rose-200">
                            <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">
                              Transformation Results
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center">
                                <div className="bg-white rounded-lg p-2 shadow-md mb-2">
                                  <p className="text-xs font-medium text-gray-600 mb-2">
                                    Before
                                  </p>
                                  <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                      src={
                                        testimonials[currentIndex].beforeImage
                                      }
                                      alt="Before"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="bg-white rounded-lg p-2 shadow-md mb-2">
                                  <p className="text-xs font-medium text-gray-600 mb-2">
                                    After
                                  </p>
                                  <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                      src={
                                        testimonials[currentIndex].afterImage
                                      }
                                      alt="After"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center mt-3">
                              <span className="text-xs text-rose-600 font-medium">
                                ✨ Amazing transformation achieved!
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    {/* Footer */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <span className="text-sm text-gray-600 font-medium">
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
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl mb-4"
          >
            💖
          </motion.div>
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
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-rose-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center gap-2"
              >
                Book Your Session
                <ArrowRightIcon className="w-4 h-4" />
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
