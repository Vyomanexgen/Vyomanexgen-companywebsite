import { useState } from "react";
import { motion } from "framer-motion";
import ServiceHeading from "./ServiceHeading";

const cards = [
  {
    id: 0,
    title: "Mobile Applications",
    text: "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android devices.",
    leftIcon: "/images/mobileicon.png",
    rightIcon: "/images/318456-removebg-preview.png",
    gif: "/images/2835b06c053a1fdab58a4b8d7006f73b.gif",
  },
  {
    id: 1,
    title: "Web Applications",
    text: "Custom web applications built with modern technologies, responsive design, and optimized performance that engage users and drive results.",
    leftIcon: "/images/white-globe-icon-24-removebg-preview.png",
    rightIcon: "/images/318456-removebg-preview.png",
    gif: "/images/Difference between a Full Stack Developer and a Software Engineer-7.gif",
  },
  {
    id: 2,
    title: "UX/UI Designs",
    text: "User-centered design research and intuitive interfaces that create meaningful connections between users and your digital products.",
    leftIcon: "/images/palette-and-paint-brush-sign-white-icon-vector-15479498-removebg-preview.png",
    rightIcon: "/images/318456-removebg-preview.png",
    gif: "/images/1_9BrpVqQkpXGPP4fLcrk5Dw.gif",
  },
  {
    id: 3,
    title: "Billing Software",
    text: "Billing software is a type of business application used to automate and streamline the process of creating, managing, and tracking invoices, bills, and other financial documents",
    leftIcon: "/public/images/billing.png",
    rightIcon: "/images/318456-removebg-preview.png",
    gif: "/images/9413885.jpg",
  },
];

export default function ServicesWaveSection() {
  const [activeCard, setActiveCard] = useState({});

  const toggleCard = (id) => {
    setActiveCard((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative py-55 bg-[#f9fafb]" id="services">
      <ServiceHeading />

      <div className="relative max-w-7xl mx-auto bg-white rounded-3xl shadow-lg px-6 sm:px-14 py-16 z-10">
       <p className="text-justify text-lg sm:text-xl md:text-2xl text-gray-800 font-medium mb-14 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
  We offer comprehensive digital solutions designed to transform your business and elevate your online presence to new heights.
</p>


        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8">
          {cards.map((card, index) => {
            const marginTop = index % 2 === 0 ? "md:mt-20" : "md:-mt-10"; // wave pattern
            const isActive = activeCard[card.id];

            return (
              <motion.div
                key={card.id}
                className={`relative bg-gradient-to-br from-[#d8b4fe] to-[#a5f3fc] text-white rounded-xl w-full md:w-1/3 h-[260px] sm:h-[280px] px-6 py-6 shadow-md cursor-pointer ${marginTop} ${
                  index === 1 ? "z-10 from-[#c084fc] to-[#5eead4]" : ""
                }`}
                onClick={() => toggleCard(card.id)}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }} // reduce animation delay
              >
                {index === 1 && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="relative bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-1 py-1 mt-[-39px] ml-[90px] rounded shadow-md whitespace-nowrap">
                      See who is working for you
                      <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-green-100"></div>
                    </div>
                  </div>
                )}

                {!isActive ? (
                  <>
                    <div className="absolute left-4 top-4">
                      <img
                        src={card.leftIcon}
                        alt="left icon"
                        className="w-12 h-12 sm:w-12 sm:h-12"
                      />
                    </div>
                    <div className="absolute right-4 top-4">
                      <img
                        src={card.rightIcon}
                        alt="right icon"
                        className="w-8 h-8 sm:w-9 sm:h-9"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mt-16">{card.title}</h3>
                    <p className="text-sm sm:text-base mt-2">{card.text}</p>
                  </>
                ) : (
                  <img
                    src={card.gif}
                    alt="gif"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Button */}
        <div className="text-center mt-14">
          <a href="#PortFolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-400 to-cyan-200 text-white px-10 py-3 rounded-full font-semibold shadow-lg text-lg sm:text-xl"
            >
              Portfolio
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
