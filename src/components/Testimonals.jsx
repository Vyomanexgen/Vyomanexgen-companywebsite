import React from "react";

export default function Testimonials() {
  return (
   <div className="bg-gray-100 py-12 px-14 text-center" id="Testimonals">
  <div className="bg-white max-w-7.5xl mx-auto rounded-3xl px-8 py-12 shadow-lg">

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">
          What Our <span className="text-purple-600">Clients</span> Say
        </h2>
        <p className="text-gray-700 mb-10">
          Don't just take our word for it. Here's what some of our{" "}
          <span className="text-purple-500 font-semibold">amazing clients</span> have to say about working with us.
        </p>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Card 1 */}
          <div className="relative z-10 bg-purple-200 text-left p-6 rounded-2xl shadow-md transform rotate-[-6deg] w-[90%] lg:w-[300px] -mb-4 lg:-mr-8 overflow-hidden">
            {/* Manual Circle (light purple) */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 opacity-50 rounded-full translate-x-1/3 -translate-y-1/3"></div>

            <div className="flex items-center gap-3 mb-4">
              <img src="/images/Home.jpg" alt="Michael Chen" className="w-11 h-11 rounded-full" />
              <div>
                <h4 className="font-semibold">A.Veera Ragavan</h4>
                <p className="text-sm italic text-gray-600">Director,Muhi</p>
              </div>
            </div>
            <p className="text-sm mb-2">
              "The website beautifully reflects our company’s vision, values, and commitment to excellence. 
"
            </p>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white text-left p-6 rounded-2xl shadow-md w-[90%] lg:w-[320px] z-20 overflow-hidden">
            {/* Manual Circle (light gray) */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gray-300 opacity-30 rounded-full translate-x-1/3 -translate-y-1/3"></div>

            <div className="flex items-center gap-3 mb-4">
              <img src="/images/emily.png" alt="Emily Rodriguez" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold">Emily Rodriguez</h4>
                <p className="text-sm italic text-gray-600">Marketing Director, GrowthCo</p>
              </div>
            </div>
            <p className="text-sm mb-2">
              "Working with Vyoma was a game-changer for our startup. They delivered a beautiful, functional mobile app
              that our users love."
            </p>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</p>
          </div>

          {/* Card 3 */}
          {/* Card 3 */}
<div className="relative z-10 bg-orange-200 text-left p-6 rounded-2xl shadow-md transform rotate-[6deg] w-[90%] lg:w-[300px] -mb-4 lg:-ml-8 overflow-hidden">
  {/* Manual Circle (bottom-right) */}
  <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-100 opacity-50 rounded-full translate-x-1/3 translate-y-1/3"></div>

  <div className="flex items-center gap-3 mb-4">
    <img src="/images/david.png" alt="David Thompson" className="w-10 h-10 rounded-full" />
    <div>
      <h4 className="font-semibold">David Thompson</h4>
      <p className="text-sm italic text-gray-600">CTO, DataFlow Systems</p>
    </div>
  </div>
  <p className="text-sm mb-2">
    "Working with Vyoma was a game-changer for our startup. They delivered a beautiful, functional mobile app
    that our users love."
  </p>
  <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</p>
</div>
        </div>
        {/* Quote */}
        <p className="mt-10 text-sm italic text-gray-600">
          “A satisfied customer is the best business strategy of all.”<br />
          — <span className="text-gray-800 font-medium">Michael LeBoeuf</span>
        </p>
      </div>
    </div>
  );
}
