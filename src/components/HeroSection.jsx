import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HeroSection.css";

const textOptions = [
  "WEB DEVELOPMENT",
  "MOBILE APPLICATIONS",
  "INNOVATIVE UI/UX DESIGNS",
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % textOptions.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  // Scroll to contact section
const scrollToContact = () => {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    const yOffset = -80; // adjust as needed for your header height
    const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};



  return (
    <section
      id="hero"
      ref={ref}
      className="w-full overflow-hidden font-sans mt-[98px] md:mt-[115px]"
    >
      <div className="relative mx-4 md:mx-20 p-0.5 rounded-[2.5rem] bg-white shadow-2xl">
        <div className="relative rounded-[2.5rem] bg-[#7038f3] text-white p-6 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-visible">

          {/* === Background Decorations === */}
          <img
            src="/images/Group 15.png"
            alt="bg1"
            className="group15-image absolute top-[79px] right-[350px] w-56 md:w-78 z-0 drop-shadow-lg pointer-events-none select-none"
          />
          <img
            src="/images/Group 18.png"
            alt="bg2"
            className="group18-image absolute bottom-[-2px] right-[148px] w-49 md:w-52 h-38 md:h-76 z-0 drop-shadow-md object-contain pointer-events-none select-none"
          />

          {/* === LEFT CONTENT === */}
          <motion.div
            key={inView ? "animate-left" : "reset-left"}
            initial={{ x: -500, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            className="w-full md:w-1/2 z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">Vyomanexgen</h2>
            <p className="mt-2 text-white text-lg font-medium">
              Your digital transformation studio.
            </p>
            <p className="mt-8 text-2xl font-bold text-white demo">Elevate your digital presence with</p>
            <div className="text-2xl font-extrabold text-white flex items-center gap-2 contains">
              Cutting-edge{" "}
              <span className="h-10 overflow-hidden inline-block align-middle">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#f78e7c] to-[#fadd82] bg-clip-text text-transparent"
                  >
                    {textOptions[index]}
                  </motion.div>
                </AnimatePresence>
              </span>
            </div>
          </motion.div>

          {/* === RIGHT CONTENT === */}
          <motion.div
            key={inView ? "animate-right" : "reset-right"}
            initial={{ x: 200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "spring", stiffness: 50, delay: 0.2 }}
            className="w-full md:w-1/2 mt-16 md:mt-0 relative flex justify-center items-center h-80 md:h-96 overflow-visible z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 w-full h-full flex items-center justify-center z-0"
            >
              {/* Optional inner background animation or element */}
            </motion.div>

            <img
              src="/images/phoneimage.png"
              alt="Mobile UI"
              className="relative z-10 w-80 md:w-172 max-h-[580px] mt-[120px] object-contain drop-shadow-6xl"
            />
          </motion.div>
        </div>

        {/* === CTA BUTTON === */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="flex justify-start px-6 md:px-20 mt-8 mb-6"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-[#6E38F3] to-[#8659f2] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-lg"
          >
            <span>Get Started</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
