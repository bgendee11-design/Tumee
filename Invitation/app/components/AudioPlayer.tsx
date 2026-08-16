"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp4");
    audioRef.current.loop = true;

    // .. секундын дараа автоматаар эхлүүлэх
    const timer = setTimeout(() => {
      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.log("Auto play blocked:", e);
        });

    }, 1000); // 1000ms = 1 секунд


    return () => {
      clearTimeout(timer);
      audioRef.current?.pause();
    };

  }, []);


  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) =>
          console.log("Play failed:", e)
        );
    }
  };


  return (
    <motion.button
      onClick={togglePlay}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay: 1 }}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 ${
        isPlaying 
        ? "bg-blue-900/100" 
        : "bg-blue-900/80"
      }`}
    >
      <div className="absolute inset-0 rounded-full border-4 border-blue-900/30 animate-ping"></div>

      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-white relative z-10" />
      ) : (
        <VolumeX className="w-6 h-6 text-white relative z-10" />
      )}
    </motion.button>
  );
}