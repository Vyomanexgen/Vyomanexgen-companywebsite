import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import './Contact.css'; // Assuming you have a CSS file for styles

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    region: '+91',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [width, height] = useWindowSize();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_nzz4dqu',
      'template_pqc0vc7',
      formData,
      'He_1j-g1lwbuF7wHb'

     
    )
      .then((res) => {
        console.log('Success!', res.status, res.text);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3500);
        setFormData({
          fullName: '',
          email: '',
          region: '+91',
          phone: '',
          message: '',
        });
      })
      .catch((err) => console.error('FAILED...', err))
      .finally(() => {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 2000);
      });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const line1 = "You bring the";
  const line2 = "idea";
  const line3 = "We'll bring the";
  const line4 = "code";
  const line5 = "design";
  const line6 = "and";
  const line7 = "momentum";

  return (
    <div id='Contact' className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
      
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-4 lg:pr-8">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-gray-800 text-center lg:text-left">Have a Project in Mind?</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            {['fullName', 'email'].map((fieldName) => (
              <div key={fieldName} className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
                <label htmlFor={fieldName} className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
                  {fieldName === 'fullName' ? 'Full Name' : 'Email'}
                </label>
                <input
                  type={fieldName === 'email' ? 'email' : 'text'}
                  name={fieldName}
                  id={fieldName}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
                  placeholder={fieldName === 'fullName' ? 'Rehman' : 'rehman@gmail.com'}
                  value={formData[fieldName]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/3 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
                <label htmlFor="region" className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
                  Region
                </label>
                <select
                  name="region"
                  id="region"
                  className="block w-full border-0 p-0 text-gray-900 focus:ring-0 focus:outline-none sm:text-sm"
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
              </div>

              <div className="w-full sm:w-2/3 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
                <label htmlFor="phone" className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
                  placeholder="9213456780"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
              <label htmlFor="message" className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
                placeholder="Hi, My name is Rehman..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`w-full py-3 rounded-md text-white font-semibold transition duration-300 ${
                isSubmitting ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'
              }`}
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Make It Happen'}
            </motion.button>

            {/* Success Animation */}
            {isSuccess && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-green-600 text-center font-medium text-lg"
                >
                  <span className="typing-text">✔️ Your message was sent successfully!</span>
                </motion.div>
                <Confetti width={width} height={height} />
              </>
            )}
          </form>
        </div>

        {/* Right Section: Animated Text + GIF */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-end justify-center relative mt-12 lg:mt-0 min-h-[300px] lg:min-h-[400px] text-right">
          <motion.div
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left leading-tight z-10 relative"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.p variants={wordVariants}>{line1}</motion.p>
            <motion.p className="text-purple-500 inline-block" variants={wordVariants}>{line2}</motion.p>
            <motion.p variants={wordVariants}>{line3}</motion.p>
            <motion.p variants={wordVariants}>{line4}</motion.p>
            <motion.p className="text-purple-500 inline-block" variants={wordVariants}>{line5}</motion.p>
            <motion.p variants={wordVariants}>{line6}</motion.p>
            <motion.p className="text-purple-500 inline-block" variants={wordVariants}>{line7}</motion.p>
          </motion.div>

          <img
            src='/public/images/ba33deedeec1010e9dc4d8a59e1bd2261-ezgif.com-crop (1).gif'
            alt="Cute Character"
            className="absolute z-0 object-contain w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] transform -translate-y-1/2 hidden sm:block sm:right-[60px] lg:right-[53px]"
            style={{ top: '60%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
