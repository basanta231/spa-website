import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen bg-[#556B2F] ">
      {/* Left Side - Full Image */}
      <div 
        className="w-full md:w-2/3 bg-cover bg-center md:mt-20"
        style={{ backgroundImage: "url('/src/components/images/Spa-interior.jpg')" }}
      ></div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/3  bg-[#1E2A38] text-white flex flex-col justify-start p-8 mt-12 md:mt-20">
        <h2 className="text-4xl font-serif mb-6 mt-12 leading-tight">About SoftUp Spa</h2>
        <p className="text-lg mb-6">
          At SoftUp Spa, we provide a tranquil escape where you can revitalize your 
          body and mind. Our expert therapists offer tailored treatments to ensure 
          complete relaxation.
        </p>
        <h3 className="text-3xl font-serif mb-6 mt-12 leading-tight">Our Mission</h3>
        <p className="text-lg">
          We are dedicated to well-being, using premium natural ingredients and 
          innovative techniques to bring rejuvenation to every client.
        </p>
      </div>
    </section>
  );
};

export default About;
