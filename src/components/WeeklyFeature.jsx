import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function WeeklyFeature() {
  const [scrollY, setScrollY] = useState(0);
  const headingControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      const height = rect.height;

      let relativeScroll = currentScroll - offsetTop;
      relativeScroll = Math.max(0, Math.min(relativeScroll, height));

      setScrollY(relativeScroll);

      // 🔥 FAST PROGRESS (jaldi animation start)
      const progress = Math.min(relativeScroll / (height * 0.4), 1);

      // Heading (same)
      const maxMove = 200;
      const moveX = Math.min(relativeScroll, maxMove);

      headingControls.start({
        x: -moveX,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      });

      // 👉 Image move left → right FAST
      imageControls.start({
        x: progress * 250,
        transition: { type: "spring", stiffness: 80, damping: 20 },
      });

      // 👉 Text appear EARLY
      if (progress > 0.2) {
        textControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        });
      } else {
        textControls.start({
          opacity: 0,
          x: -50,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingControls, imageControls, textControls]);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-[#fafafa] relative flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Gradient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 opacity-20 rounded-full blur-3xl"></div>

      {/* LEFT TEXT */}
      <motion.div
        animate={textControls}
        initial={{ opacity: 0, x: -50 }}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-10 max-w-xs"
      >
        <h2 className="text-3xl font-bold mb-2">Premium Chair</h2>
        <p className="text-gray-600 text-sm mb-2">
          Handcrafted modern product
        </p>
        <p className="text-xl font-semibold">₹12,999</p>
      </motion.div>

      {/* Center Content */}
      <div className="z-10 text-center px-6 flex flex-col items-center">
        <h3 className="text-pink-500 font-semibold text-lg tracking-wider uppercase animate-pulse">
          Weekly Feature
        </h3>

        <motion.h1
          className="text-[80px] md:text-[140px] lg:text-[180px] font-bold tracking-tight leading-none text-black mt-2"
          animate={headingControls}
        >
          Unique Product
        </motion.h1>

        <p className="mt-6 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Single handcrafted product. Scroll to explore its motion.
        </p>

        {/* IMAGE */}
        <motion.div
          animate={imageControls}
          className="mt-12 w-72 md:w-96 lg:w-[500px] h-72 md:h-96 lg:h-[500px] rounded-3xl shadow-2xl bg-white flex items-center justify-center overflow-hidden"
          style={{
            transform: `rotateX(${scrollY * 0.05}deg) rotateY(${scrollY * 0.1}deg)`,
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
            alt="Handcrafted Product"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-10 flex flex-col items-center gap-4">
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Single Sell
        </button>
        <p className="text-gray-500 text-sm">
          Scroll down to see rotation effect
        </p>
      </div>
    </section>
  );
}