import React from "react";

export default function App() {
  return (
    <div className="bg-gray-100 py-10 px-4" id="Footer">
  <div className="bg-white w-[90%] max-w-[1440px] mx-auto p-10 rounded-3xl shadow-2xl">
    <div className="flex justify-center mb-6">
        <img
          src="/images/vyomanexgenlogo.png" // <-- change this path to your image file
          alt="Vyomanexgen Logo"
          className="w-25 h-auto"
        />
      </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">
            <span className="text-[#7a73ff] text-3xl font-bold">Vyoma</span>
         
            <span className="text-sky-400 text-3xl font-bold">nexgen</span>
          </h1>

          <p className="text-gray-700 text-base mb-4">
            You bring the idea. We’ll bring the design, code, and momentum.
          </p>

          <button className="bg-purple-300 text-white py-2 px-6 rounded-full text-base font-semibold hover:bg-purple-400 transition">
            Design the Date
          </button>
        </div>

 <div className="flex justify-center items-start flex-wrap gap-24 mt-8">
  {/* Contact Section */}
  <div className="flex flex-col gap-2 min-w-[250px]">
    <h3 className="text-lg font-semibold mb-2">Say Hello!</h3>
    <p className="text-gray-800 text-sm flex items-center gap-2">
      <img src="images/email.png" alt="email" className="w-5 h-5" />
      vyomanexgenservices@gmail.com
    </p>
    <p className="text-gray-800 text-sm flex items-center gap-2">
      <img src="images/phone.png" alt="phone" className="w-5 h-5" />
      +91 7358105293
    </p>
   
  </div>

  {/* Social Section */}
  <div className="flex flex-col gap-2 min-w-[250px]">
    <h3 className="text-lg font-semibold mb-2">More about us</h3>
   
    <p className="text-gray-800 text-sm flex items-center gap-2">
      <img src="images/images.png" alt="x" className="w-5 h-5" />
      x.com/Vyomanexgen
    </p>
    <p className="text-gray-800 text-sm flex items-center gap-2">
      <img src="images/instagram.png" alt="insta" className="w-5 h-5" />
      @Vyomanexgen
    </p>
  </div>
</div>

      </div>
    </div>
  );
}
