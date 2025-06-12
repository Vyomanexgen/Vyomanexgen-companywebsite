import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Split the word into characters
const headingText = "Portfolio".split("");

export default function ProtfolioHeading() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time it comes into view
    threshold: 0.2,     // trigger when 50% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 180,
        damping: 12,
      },
    }),
  };

  return (
    <h2
      ref={ref}
      className="absolute top-8 left-1/2 transform -translate-x-1/2 font-extrabold bg-gradient-to-r from-[#4641cb] via-[#3f84c4] to-[#36b39a] text-transparent bg-clip-text opacity-30 tracking-widest pointer-events-none select-none z-0 text-[64px] xs:text-[72px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[160px] flex"
    >
      {headingText.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
}
