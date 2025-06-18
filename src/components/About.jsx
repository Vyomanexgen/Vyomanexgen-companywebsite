/** App.js **/
import React from 'react';
import './About.css'; // Assuming you have a CSS file for styles

function About() {
  return (
    <section
      id="about"
    
    >
<div className="bg-white rounded-4xl shadow-2xl p-4 xs:p-6 sm:p-10 md:p-20 lg:p-24 relative z-10 mt-19 min-h-[500px] overflow-visible w-full max-w-[1600px] mx-auto container">

      <header className="header">
        <p>Hello! We are Team <span className="highlight">Vyoma</span></p>
        <h1>Our goal is to change <br /><span className="highlight-main">your digital vision into reality</span></h1>
        <p className="description">
          Our team of digital architects combines creativity with technical expertise to craft solutions that not only meet your needs but exceed your wildest expectations. From concept to deployment, we guide you through every step of your digital transformation journey.
        </p>
      </header>

      <div className="carousel">
        <div className="card tilt-left">
          to provide valuable services that meet customer needs and contribute to their well-being
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="card">
          Our team of digital architects combines creativity with technical expertise to meet your your wildest expectations
          <div className="dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="card tilt-right">
          Vyoma Services embodies our mission to elevate your digital presence beyond earthly limitations
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
        </div>
      </div>

     <div className="stats-wrapper">
  <div className="stats">
    <div className="stat">
      <h2>2+ Years</h2>
      <p>Industry Experience</p>
    </div>
    <div className="stat">
      <h2>10+ Projects</h2>
      <p>Successfully Delivered</p>
    </div>
    <div className="stat">
      <h2>24/7 Support</h2>
      <p>Customer Assistance</p>
    </div>
  </div>
</div>



    </div>
    </section>
  );
}

export default About;