import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "L'IA a transformé ma façon de prospecter. J'ai vu mes résultats s'améliorer dès le premier mois d'utilisation. Une formation qui change vraiment la donne !",
    author: "Thomas D.",
    role: "Directeur Commercial",
    rating: 5
  },
  {
    text: "Formation concrète avec des outils directement applicables. J'ai pu automatiser 40% de mes tâches commerciales et me concentrer sur l'essentiel.",
    author: "Marie L.",
    role: "Entrepreneure",
    rating: 5
  },
  {
    text: "Un accompagnement expert et personnalisé qui m'a permis de maîtriser l'IA pour mes ventes. +30% de leads qualifiés en seulement quelques semaines !",
    author: "Pierre M.",
    role: "Commercial",
    rating: 5
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const TestimonialsCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = Math.abs(page % testimonials.length);
  
  // Assurez-vous que l'index est toujours positif
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const paginate = (newDirection: number) => {
    const newPage = wrap(0, testimonials.length, page + newDirection);
    setPage([newPage, newDirection]);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full"
          >
            <div className="bg-brand-50 rounded-xl shadow-lg p-8 mx-auto max-w-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current h-6 w-6" />
                ))}
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "{testimonials[testimonialIndex].text}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-brand-600 text-lg">
                  {testimonials[testimonialIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === testimonialIndex ? 'bg-brand-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;