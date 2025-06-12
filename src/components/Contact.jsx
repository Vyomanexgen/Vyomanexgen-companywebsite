

import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import "./Contact.css"; // Import your custom CSS for styling
// The main App component that renders the contact section
export default function App() {
  return (
   
    <div className="w-full bg-gray-50" id="Contact">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
    <ContactSection />
  </div>
</div>
  );
}

// The Contact Section Component
function ContactSection() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Make It Happen");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // --- IMPORTANT ---
    // Replace with your actual Email.js Service ID, Template ID, and Public Key
    emailjs
      .sendForm(
        "service_nzz4dqu",
        "template_pqc0vc7",
        form.current,
        "He_1j-g1lwbuF7wHb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Message Sent!");
          form.current.reset(); // Clear the form fields
          setTimeout(() => {
            setButtonText("Make It Happen");
          }, 3000); // Reset button text after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setButtonText("Failed to Send");
           setTimeout(() => {
            setButtonText("Make It Happen");
          }, 3000);
        }
      );
  };

  return (
    <section className="bg-gray-50 w-full flex justify-center items-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* --- Left Side: Form --- */}
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Have a Project in Mind?
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="text-sm font-medium text-gray-600 mb-1 block">Full Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="text-sm font-medium text-gray-600 mb-1 block">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Mailid"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/4">
                <label htmlFor="region" className="text-sm font-medium text-gray-600 mb-1 block">Region</label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  defaultValue="+91"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                />
              </div>
              <div className="w-full sm:w-3/4">
                <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1 block">Phone</label>
                <input
                  type="tel"
                  name="user_phone"
                  id="phone"
                  placeholder=""
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1 block">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Share your thoughts..."
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none"
              />
            </div>
            <input type="hidden" name="timestamp" value={new Date().toLocaleString()} />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition-transform transform hover:scale-105"
            >
              {buttonText}
            </button>
          </form>
        </div>

        {/* --- Right Side: Text & GIF --- */}
        <div className="relative flex justify-center items-center h-full p-8 bg-gray-50/50 md:flex contnet">
          <div className="text-center md:text-left space-y-1 text-3xl lg:text-4xl font-bold text-gray-700 leading-tight">
            <div>You bring the</div>
            <div className="text-purple-600">idea</div>
            <div>We’ll bring the</div>
            <div className="text-purple-600">code</div>
            <div className="text-purple-600 text-5xl lg:text-6xl">design</div>
            <div>and</div>
            <div className="text-purple-600">momentum</div>
          </div>
          
          {/* --- This is the container for the GIF and the "Hi" bubble --- */}
          <div className="absolute bottom-1/4 right-9 lg:right-1 puppy-gif" >
            <div className="relative">
              {/* --- IMPORTANT: Replace this src with the path to your puppy GIF --- */}
              <img
                src="/images/ba33deedeec1010e9dc4d8a59e1bd2261-ezgif.com-crop (1).gif"
                alt="Cute puppy waving"
                className="w-36 lg:w-48 pointer-events-none"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
