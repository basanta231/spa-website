import React from 'react';
import Services from './Services';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <section className="w-full min-h-screen  flex flex-col">
     <div className="flex w-full h-screen">
  {/* Left Section - Text Content */}
  <div className="w-1/3 bg-[#1E2A38] text-white flex flex-col justify-center p-12 h-screen">
    <h1 className="text-5xl font-serif mb-4 leading-tight">Welcome to SoftUp Spa</h1>
    <p className="text-lg mb-6">
      Experience ultimate relaxation with our customizable massages and facials. Unwind, glow, and feel your best.
    </p>
    <a href="/contact" className="bg-[#556B2F] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#6B8E23] transition duration-300 text-center">
      BOOK AN APPOINTMENT
    </a>
  </div>

  {/* Right Section - Image */}
  <div className="w-2/3 bg-cover bg-center flex-grow" 
    style={{ backgroundImage: "url('/src/components/images/home_page_image.jpg')" }}>
  </div>
</div>

      
      <div className="flex-grow">
       
      <About /> 
       <Services />  
       <Contact/>
      </div>

      
  
    </section>
  );
};

export default Home;
