"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const IMAGES = [
  "/List1Pic.jpeg",
  "/List2Pic.jpeg",
  "/List3Pic.jpeg",
];

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative w-full py-6 text-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
          <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-brown-600/30"></div>
          <span className="text-sm uppercase tracking-widest text-brown-600 font-semibold">
            Зургийн цомог
          </span>
          <div className="h-[1px] w-12 bg-brown-600/30"></div>
        </div>
        <div className="relative max-w-sm mx-auto px-4">
          <div className="overflow-hidden rounded-3xl shadow-xl" ref={emblaRef}>
            <div className="flex">
              {IMAGES.map((src, index) => (
                <div
                  className="flex-[0_0_100%] min-w-0 relative aspect-[3/4]"
                  key={index}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors hover:bg-black/60 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors hover:bg-black/60 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
