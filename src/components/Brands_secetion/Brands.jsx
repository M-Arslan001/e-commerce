/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../../assets/brand/br-1.png";
import img2 from "../../assets/brand/br-2.png";
import img3 from "../../assets/brand/br-3.png";
import img4 from "../../assets/brand/br-4.png";
import img5 from "../../assets/brand/br-5.png";

const Brands = () => {
  const images = [img1, img2, img3, img4, img5];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div
      ref={containerRef}
      className="py-8 sm:mt-24 md:block bg-gray-200 dark:bg-white/30 overflow-hidden"
    >
      <div className="container">
        <motion.div
          className="flex justify-between items-center opacity-50"
          style={{ x }}
        >
          {images.map((item, index) => (
            <div key={index} className="mx-4">
              <img
                src={item}
                alt={`Brand ${index + 1}`}
                className="w-full h-[20px] sm:h-[35px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
