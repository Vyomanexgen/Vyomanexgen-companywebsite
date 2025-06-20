import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioHeading from "./PortfolioHeading";

const portfolioData = [
  {
    id: 1,
    title: "Educational Platform",
    description: "Interactive learning Management system",
    image: "/images/timetoclimb-3-1.gif",
    icon: "/images/books.png",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution With Advanced Features",
    image: "/images/116.gif",
    icon: "images/buy.png",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Real-time analytics dashboard For Financial Data",
    image: "/images/Dasahboard.gif",
    icon: "/images/stockgraph.png",
  },
  {
    id: 4,
    title: "Restaurant App",
    description: "Digital Menu and ordering system for Restaurant",
    image: "/images/original-2a00a1da8fdfc5ef2f0e1f562682b061.gif",
    icon: "/images/chefhat.png",
  },
  {
    id: 5,
    title: "Travel Booking Portal",
    description: "Comprehensive travel Planning and book Platform",
    image: "/images/63be5f30749ff7be7bb4a633ffac763f (1).gif",
    icon: "/images/Aeroplane.png",
  },
  {
    id: 6,
    title: "Healthcare Mobile App",
    description: "Healthcare management system for Healthcare providers",
    image: "/images/original-632b549f7b0d06bc33eadac1830ccc4a.gif",
    icon: "/images/heartbeat.png",
  },
];

export default function PortfolioSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative pt-36 pb-32 px-4 md:px-20 bg-[#f3f3f3] z-0 overflow-visible"
      id="PortFolio"
    >
      <PortfolioHeading />

      <div className="bg-white rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-10 md:p-20 lg:p-24 relative z-10 mt-19 min-h-[500px] overflow-visible w-full max-w-full">
        <div className="flex justify-center items-center mb-6 z-[20] relative">
          <span
            className="text-lg md:text-2xl lg:text-base font-semibold text-gray-900 text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Let's Build Something Meaningful — here's how&nbsp;
            <span className="text-purple-600 font-bold">we do it</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 mt-19">
          {portfolioData.map((item, index) => {
            const isHovered = hovered === index;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Card */}
                <motion.div
                  animate={{ y: isHovered ? 10 : 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className={`relative z-10 p-6 rounded-2xl text-white text-center shadow-xl transition-all duration-300 w-full
                    bg-[#9e69d2] group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-400 ${
                    isHovered ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white" : ""
                  }`}
                  style={{ height: "250px" }}
                >
                  {/* Top Left Icon */}
                  <div className="absolute top-4 left-4 w-8 h-8">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Top Right Cursor */}
                  <div className="absolute top-4 right-4 w-8 h-8">
                    <img
                      src="/images/Arrow.png"
                      alt="Cursor"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex items-center justify-start gap-4 mt-10 mr-10">
                    <h1 className="text-2xl font-bold whitespace-nowrap">
                      {item.title}
                    </h1>
                  </div>
                  <h6 className="text-sm text-gray-100 mt-4 mr-20">
                    {item.description}
                  </h6>
                </motion.div>

                {/* GIF below card, keeps hover state */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 w-full h-[250px] rounded-xl overflow-hidden shadow-lg bg-white flex justify-center items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain rounded-md"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center mb-10 z-[20] relative">
          <p className="text-md text-gray-600 font-medium">
            "Innovation isn't optional — it's essential".
          </p>
          <div className="mt-2 text-xs text-gray-500 font-medium">— Daniel Rossi</div>
        </div>
      </div>
    </section>
  );
}