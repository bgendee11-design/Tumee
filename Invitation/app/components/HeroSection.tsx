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
          {/* Жаазны сүүдэр болон буланг зөөллөж, гөлгөр болгосон */}
          <div className="relative w-full h-101 overflow-hidden shadow-2xl ">
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="w-full h-[420px] relative  overflow-hidden"
            >
              <Image
                src="/MainPic.jpg"
                alt="Main"
                fill
                className="object-cover"
                priority
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
          <div className="flex justify-center mb-2 mt-4">
            <div className="inline-flex items-center  px-8 py-3 ">
              <span className="font-cursive text-4xl text-brown-900">Сэвлэг үргээх ёслол</span>
            </div>
          </div>

          <div className="font-serif text-brown-900/80 leading-relaxed max-w-sm mx-auto text-lg md:text-base">
            {Category === "PUBLIC" && (
              <p className="font-sans text-brown-900/80 leading-relaxed max-w-sm mx-auto text-sm md:text-base">
                Эрхэм хүндэт таныг гэр бүлийн хамт бидний хайрт хүү Д.Түмэнтөгөлдөрийн сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.
              </p>
            )}
            {Category === "FAMILY" && (
              <div className="px-3">
                <div className='flex justify-center between-center'>
                  Эрхэм хүндэт <p className="font-bold px-2 text-gray-800"> {name} </p> таныг 
                </div>
                <div >гэр бүлийн хамт бидний хайрт хүү Д.Түмэнтөгөлдөрийн
                  сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.</div>
              </div>
            )}
            {Category === "OCCUPATION" && (
              <div className="px-3">
                <div className='flex justify-center between-center'>
                  Эрхэм хүндэт <p className="font-bold px-2 text-gray-800"> {name}</p>
                </div>
                <p> хамт олон та бүгдийг бидний хайрт хүү Д.Түмэнтөгөлдөрийн сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.</p>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4 ">
            <div className="text-start mt-5 font-cursive text-brown-900/80 leading-relaxed max-w-sm mx-auto text-2xl ">
              <p>Сүүний үнэртэй сэвлэг нялх багын гоёл</p>
              <p>Сэвлэг даахиа үргээх эцэг өвгөдийн соёл</p>
              <p>Уран цагаан хайчаа хадаг идээтэй бэлдлээ</p>
              <p>Өлзий дүүрэн ерөөлөөр</p>
              <p>Өсөх насыг минь мялаана уу</p>
              <p>Өхөөрдөж даахийг минь үргээнэ үү. </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}