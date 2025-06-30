"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "Facial Treatment",
    category: "facial",
    title: "Luxury Facial Treatment",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    alt: "Makeup Application",
    category: "makeup",
    title: "Professional Makeup",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    alt: "Hair Styling",
    category: "hair",
    title: "Elegant Hair Styling",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
    alt: "Nail Art",
    category: "nails",
    title: "Creative Nail Art",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    alt: "Spa Treatment",
    category: "spa",
    title: "Relaxing Spa Session",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop",
    alt: "Beauty Products",
    category: "products",
    title: "Premium Beauty Products",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop",
    alt: "Lash Extensions",
    category: "lashes",
    title: "Lash Extensions",
  },
  {
    id: 8,
    type: "video",
    src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    alt: "Beauty Tutorial",
    category: "makeup",
    title: "Beauty Tutorial Video",
  },
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop",
    alt: "Beauty Salon",
    category: "salon",
    title: "Modern Salon Interior",
  },
];

const categories = [
  "all",
  "facial",
  "makeup",
  "hair",
  "nails",
  "spa",
  "products",
  "lashes",
  "salon",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Explore our beautiful transformations and state-of-the-art beauty
          treatments
        </motion.p>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? "bg-rose-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-rose-50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎥</div>
                      <p className="text-gray-600">Video Content</p>
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>

                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-rose-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              {selectedItem.type === "image" ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-gray-600 text-lg">Video Content</p>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-600 capitalize">
                    {selectedItem.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
