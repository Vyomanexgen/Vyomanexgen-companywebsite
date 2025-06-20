// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import Confetti from 'react-confetti';
// import { useWindowSize } from '@react-hook/window-size';
// import './Contact.css'; // Assuming you have a CSS file for styles

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     region: '+91',
//     phone: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [width, height] = useWindowSize();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     emailjs.send(
//       'service_nzz4dqu',
//       'template_pqc0vc7',
//       formData,
//       ''

     
//     )
//       .then((res) => {
//         console.log('Success!', res.status, res.text);
//         setIsSuccess(true);
//         setTimeout(() => setIsSuccess(false), 3500);
//         setFormData({
//           fullName: '',
//           email: '',
//           region: '+91',
//           phone: '',
//           message: '',
//         });
//       })
//       .catch((err) => console.error('FAILED...', err))
//       .finally(() => {
//         setTimeout(() => {
//           setIsSubmitting(false);
//         }, 2000);
//       });
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const wordVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const line1 = "You bring the";
//   const line2 = "idea";
//   const line3 = "We'll bring the";
//   const line4 = "code";
//   const line5 = "design";
//   const line6 = "and";
//   const line7 = "momentum";

//   return (
//     <div id='Contact' className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
      
//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 p-4 lg:pr-8">
//           <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-gray-800 text-center lg:text-left">Have a Project in Mind?</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">

//             {['fullName', 'email'].map((fieldName) => (
//               <div key={fieldName} className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
//                 <label htmlFor={fieldName} className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
//                   {fieldName === 'fullName' ? 'Full Name' : 'Email'}
//                 </label>
//                 <input
//                   type={fieldName === 'email' ? 'email' : 'text'}
//                   name={fieldName}
//                   id={fieldName}
//                   className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
//                   placeholder={fieldName === 'fullName' ? 'Name' : 'Name@gmail.com'}
//                   value={formData[fieldName]}
//                   onChange={handleChange}
//                 />
//               </div>
//             ))}

//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="w-full sm:w-1/3 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
//                 <label htmlFor="region" className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
//                   Region
//                 </label>
//                 <select
//                   name="region"
//                   id="region"
//                   className="block w-full border-0 p-0 text-gray-900 focus:ring-0 focus:outline-none sm:text-sm"
//                   value={formData.region}
//                   onChange={handleChange}
//                 >
//                   <option value="+91">+91</option>
//                   <option value="+1">+1</option>
//                   <option value="+44">+44</option>
//                 </select>
//               </div>

//               <div className="w-full sm:w-2/3 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
//                 <label htmlFor="phone" className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
//                   placeholder="your number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
//               <label htmlFor="message" className="absolute -top-2 left-2 -mt-px inline-block bg-white px-2 text-xs font-medium text-gray-900">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="4"
//                 className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
//                 placeholder="Enter the Text..."
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <motion.button
//               type="submit"
//               className={`w-full py-3 rounded-md text-white font-semibold transition duration-300 ${
//                 isSubmitting ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'
//               }`}
//               disabled={isSubmitting}
//               whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//               whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//             >
//               {isSubmitting ? 'Sending...' : 'Make It Happen'}
//             </motion.button>

//             {/* Success Animation */}
//             {isSuccess && (
//               <>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="mt-4 text-green-600 text-center font-medium text-lg"
//                 >
//                   <span className="typing-text">✔️ Your message was sent successfully!</span>
//                 </motion.div>
//                 <Confetti width={width} height={height} />
//               </>
//             )}
//           </form>
//         </div>

//         {/* Right Section: Animated Text + GIF */}
//         <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-end justify-center relative mt-12 lg:mt-0 min-h-[300px] lg:min-h-[400px] text-right">
//           <motion.div
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left leading-tight z-10 relative"
//             initial="hidden"
//             animate="visible"
//             variants={textVariants}
//           >
//             <motion.p variants={wordVariants}>{line1}</motion.p>
//             <motion.p className="text-purple-500 inline-block" variants={wordVariants}>{line2}</motion.p>
//             <motion.p variants={wordVariants}>{line3}</motion.p>
//             <motion.p variants={wordVariants}>{line4}</motion.p>
//             <motion.p className="text-purple-500 inline-block" variants={wordVariants}>{line5}</motion.p>
//             <motion.p variants={wordVariants}>{line6}</motion.p>
//             <motion.p className="text-purple-500 inline-block" variants={wordVariants}>{line7}</motion.p>
//           </motion.div>

//           <img
//             src='/images/ba33deedeec1010e9dc4d8a59e1bd2261-ezgif.com-crop (1).gif'
//             alt="Cute Character"
//             className="absolute z-0 object-contain w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] transform -translate-y-1/2 hidden sm:block sm:right-[60px] lg:right-[53px]"
//             style={{ top: '60%' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
 // .sendForm('service_nzz4dqu', 'template_pqc0vc7', formRef.current, 'He_1j-g1lwbuF7wHb')

//  emailjs.sendForm(
//       'service_nzz4dqu',       // <-- replace this 'template_pqc0vc7', formRef.current, 'He_1j-g1lwbuF7wHb'
//       'template_pqc0vc7',      // <-- replace this
//       formRef.current,
//       'He_1j-g1lwbuF7wHb'       // <-- replace this
//     ).then(() => {
//       setStatus('success');
//       setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
//     }).catch(() => {
//       setStatus('error');
//     });
//   };
// export default Contact;



// <-- MODIFIED: Import useEffect
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// You can replace this with the actual URL of your GIF
const afrimojiHi = "/images/ba33deedeec1010e9dc4d8a59e1bd2261-ezgif.com-crop (1).gif";


// --- Your Custom Input Components (FloatingLabelInput, PhoneInput, FloatingLabelTextarea) go here ---
// (No changes to these components, so they are omitted for brevity. Copy them from the previous version.)
// A custom input component with a "floating label"
const FloatingLabelInput = ({ label, type = 'text', name, value, onChange, placeholder = " " }) => {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="block w-full px-4 py-3 text-base text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 peer transition-shadow"
      />
      <label
        htmlFor={name}
        className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};

// A custom phone input with a static region code
const PhoneInput = ({ label, name, value, onChange, placeholder = " " }) => {
    return (
        <div className="relative mb-6">
            <div className="flex items-center w-full rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-purple-600 focus-within:border-purple-600 transition-shadow">
                <span className="px-4 py-3 text-gray-500 bg-gray-100 border-r border-gray-400 rounded-l-lg">+91</span>
                <input
                    type="tel"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className="block w-full px-4 py-3 text-base text-gray-900 bg-transparent border-none appearance-none focus:outline-none peer"
                />
            </div>
             <label
                htmlFor={name}
                className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
                {label}
            </label>
        </div>
    );
};


// Custom textarea with floating label
const FloatingLabelTextarea = ({ label, name, value, onChange, placeholder = " " }) => {
  return (
    <div className="relative mb-6">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        required
        className="block w-full px-4 py-3 text-base text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 peer transition-shadow"
      />
      <label
        htmlFor={name}
        className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};


const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ error: false, message: '' });
  const [showSuccessView, setShowSuccessView] = useState(false);

  // <-- NEW: This effect handles the 100-second timer -->
  useEffect(() => {
    if (!showSuccessView) return;

    // Set a timer to automatically reset the form after 100 seconds
    const timer = setTimeout(() => {
      setShowSuccessView(false);
      setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
    }, 100000); // 100 seconds = 100,000 milliseconds

    // This is a cleanup function that React runs if the component
    // unmounts, to prevent memory leaks.
    return () => clearTimeout(timer);
  }, [showSuccessView]); // This effect runs only when showSuccessView changes to true


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus.error) {
        setSubmitStatus({ error: false, message: '' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ error: false, message: '' });

    const templateParams = {
        ...formData,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    //  emailjs.sendForm(
//       'service_nzz4dqu',       // <-- replace this 'template_pqc0vc7', formRef.current, 'He_1j-g1lwbuF7wHb'
//       'template_pqc0vc7',      // <-- replace this
//       formRef.current,
//       'He_1j-g1lwbuF7wHb'       // <-- replace this
//     )

    emailjs
      .send('service_nzz4dqu', 'template_pqc0vc7', templateParams, 'He_1j-g1lwbuF7wHb')
      .then(
        () => {
          setShowSuccessView(true);
        },
        () => {
          setSubmitStatus({ error: true, message: 'Failed to send. Please try again.' });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const CheckmarkIcon = () => (
    <svg className="w-16 h-16 text-green-500 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M5 13.3L8.6 17L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />
    </svg>
  );

  return (
    <div id='Contact' className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-6xl mx-auto p-6 sm:p-12 rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10 items-center">
          
          <motion.div
            className="w-full order-2 lg:order-1 sm:-ml-4 md:-ml-8"
          >
            <AnimatePresence mode="wait">
              {showSuccessView ? (
                // <-- MODIFIED: Success View now has no button and informs the user of the auto-reset -->
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
                  className="text-center py-8"
                >
                  <CheckmarkIcon />
                  <h2 className="text-3xl font-bold text-gray-800 mt-4">Message Sent!</h2>
                  <p className="text-gray-600 mt-2">Thank you for reaching out. We'll get back to you soon.</p>
                  
                <p className="text-gray-500 mt-6 text-sm animate-pulse">The form will reset automatically...</p>
                <p className="text-gray-500 mt-6 text-sm animate-pulse">The form will reset automatically in 1000 seconds.</p>
<button
  onClick={() => {
    setShowSuccessView(false);
    setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
  }}
  className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
>
  Reset Now & Fill Again
</button>

                </motion.div>
              ) : (
                // FORM VIEW
                <motion.div
                    key="form"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.h2 variants={formItemVariants} className="text-3xl font-bold text-gray-800 mb-8">
                        Have a Project in Mind?
                    </motion.h2>

                    <motion.form ref={form} onSubmit={sendEmail} variants={formItemVariants} noValidate>
                        <FloatingLabelInput name="user_name" label="Full Name" value={formData.user_name} onChange={handleChange} />
                        <FloatingLabelInput name="user_email" label="Email" type="email" value={formData.user_email} onChange={handleChange} />
                        <PhoneInput name="user_phone" label="Phone" value={formData.user_phone} onChange={handleChange} />
                        <FloatingLabelTextarea name="message" label="Message" value={formData.message} onChange={handleChange} />

                        {submitStatus.error && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-3 mb-4 rounded-lg text-center font-semibold bg-red-100 text-red-800"
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            className="w-full bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Make It Happen'}
                        </motion.button>
                    </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right side: Animated text and GIF (UNCHANGED) */}
          <div
            className="relative flex items-center justify-center h-full min-h-[300px] lg:min-h-full order-1 lg:order-2 lg:translate-x-8"
            style={
              typeof window !== "undefined" && window.innerWidth < 400
              ? { transform: "translateX(12px)" }
              : undefined
            }
          >
            <motion.div
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 text-center leading-tight"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.span variants={textVariants} custom={0} className="block">You bring the</motion.span>
              <motion.span variants={textVariants} custom={1} className="text-purple-600 text-[1.4em] font-extrabold block my-2">idea</motion.span>
              <motion.span variants={textVariants} custom={2} className="block">We'll bring the</motion.span>
              <motion.div variants={textVariants} custom={3}>
              <span className="text-blue-500">code </span> <br />
              <span className="text-pink-500 ml-[-37px] design">design</span>
              </motion.div>
              <motion.div variants={textVariants} custom={4}>
              <span>
                <span
                className="
                  ml-22
                  demo
                "
                >
                and&nbsp;
                <span className="text-violet-500 flex items-center justify-center" style={{marginLeft: '4px', marginTop: '-45px'}}>
                 <span className='momentum'>momentum</span>
                  
                  <motion.span
                  
                  className="inline-block w-32 h-32 sm:w-40 sm:h-40 align-middle relative mome"
                    // Move left for large screens only
                    style={{
                      top: '-46px',
                      marginLeft: '0px',
                      // Use a media query for large screens
                      ...(typeof window !== "undefined" && window.innerWidth >= 1024
                        ? { marginLeft: '-5px' }
                        : {})
                    }}
                  >
                    <img src={afrimojiHi} alt="Waving dog saying hi" className="w-full h-full object-contain puppy" />
                  </motion.span>
                </span>
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;