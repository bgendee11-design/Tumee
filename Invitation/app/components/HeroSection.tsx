"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroSectionProps = {
  Category: "PUBLIC" | "FAMILY" | "OCCUPATION";
  name?: string;
};

export default function HeroSection({ Category, name }: HeroSectionProps) {
  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-center text-center snap-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full flex justify-center mb-8"
        >
          {/* Video Section */}
          <div className="relative w-full h-[560px] overflow-hidden shadow-2xl ">
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="w-[100%] h-[560px] relative overflow-hidden"
            >
              <video
                src="/HeadVideo.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/6 mix-blend-multiply" />
            </motion.div>
          </div>
        </motion.div>

      </section>

      <section className="relative w-full flex flex-col items-center justify-center text-center snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center 3
          ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-96 h-80 flex items-center justify-center"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Sun - Top Right */}
                <motion.div
                  className="absolute top-8 right-12 text-4xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  ☀️
                </motion.div>
                
                {/* Bird - Top Left */}
                <motion.div
                  className="absolute top-16 left-8 text-3xl"
                  animate={{ 
                    x: [-20, 20, -20],
                    y: [0, -15, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                >
                  🕊️
                </motion.div>
                
                {/* Money Bag - Left */}
                <motion.div
                  className="absolute left-0 top-1/3 text-4xl"
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                >
                  ☁️
                </motion.div>
                
                {/* Birds - Right */}
                <motion.div
                  className="absolute right-4 top-1/2 text-3xl"
                  animate={{ 
                    x: [20, -20, 20],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                >
                  🕊️
                </motion.div>
            
              </div>

              {/* Circular Frame with Border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative w-64 h-64 rounded-full overflow-hidden"
              >
                {/* Outer Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px rgba(59, 130, 246, 0.4)",
                      "0 0 60px rgba(59, 130, 246, 0.6)",
                      "0 0 40px rgba(59, 130, 246, 0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Border */}
                <div className="absolute inset-0 rounded-full border-6 border-blue-400 shadow-2xl" />
                
                {/* Inner Decorative Border */}
                <div className="absolute inset-2 rounded-full border-2 border-blue-200 opacity-50" />
                
                {/* Animated Geometric Pattern Border */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-blue-300 scale-95"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Background Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-50 via-blue-50 to-blue-100" />
                
                {/* Child Image Container */}
                <motion.div 
                  className="relative w-56 h-56 rounded-full overflow-hidden"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/MainPic.jpg"
                    alt="Child"
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                  />
                  
                  {/* Image Overlay for Depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                </motion.div>

                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-30"
                  animate={{ 
                    opacity: [0.1, 0.4, 0.1],
                    x: [-50, 50, -50]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

            </motion.div>
          </div>


          <motion.div 
            className="font-serif text-brown-900/80 leading-relaxed max-w-sm mx-auto text-lg md:text-[16px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          >
            {Category === "PUBLIC" && (
              <motion.p 
                className="font-sans text-brown-900/80 leading-relaxed max-w-sm mx-auto text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Эрхэм хүндэт таныг гэр бүлийн хамт бидний хайрт хүү Д.Түмэнтөгөлдөрийн сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.
              </motion.p>
            )}
            {Category === "FAMILY" && (
              <motion.div 
                className="px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className='flex justify-center between-center'>
                  Эрхэм хүндэт <p className="font-bold px-2 text-gray-800"> {name} </p> таныг 
                </div>
                <div >гэр бүлийн хамт бидний хайрт хүү Д.Түмэнтөгөлдөрийн
                  сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.</div>
              </motion.div>
            )}
            {Category === "OCCUPATION" && (
              <motion.div 
                className="px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className='flex justify-center between-center'>
                  Эрхэм хүндэт <p className="font-bold px-2 text-gray-800"> {name}</p>
                </div>
                <p> хамт олон та бүгдийг бидний хайрт хүү Д.Түмэнтөгөлдөрийн сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.</p>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            className="flex justify-center mt-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-start mt-5 font-cursive text-brown-900/80 leading-relaxed max-w-sm mx-auto text-2xl ">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                Сүүний үнэртэй сэвлэг нялх багын гоёл
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                Сэвлэг даахиа үргээх эцэг өвгөдийн соёл
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Уран цагаан хайчаа хадаг идээтэй бэлдлээ
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                Өлзий дүүрэн ерөөлөөр
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                Өсөх насыг минь мялаана уу
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                Өхөөрдөж даахийг минь үргээнэ үү. 
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}