import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-[#F5F5F5] text-center">
      {/* Heading */}
      <h2 className="text-5xl font-bold font-serif text-[#121212] mb-12">
        Book an Appointment
      </h2>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-200">
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d1d1d]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#191818]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#070707]"
          />
          <textarea
            placeholder="Preferred Date & Service"
            className="p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#121111]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#556B2F] text-white p-3 rounded-lg transition duration-300 hover:bg-[#6B8E23]"
          >
            Book Now
          </button>
        </form>
      </div>

    

      {/* Google Map Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-black">Our Location</h3>
        <iframe
          className="w-full max-w-4xl mx-auto h-64 mt-4 rounded-lg shadow-lg aspect-video border border-gray-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.422271660456!2d83.9720611!3d28.192346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594d4d4d4d4d4%3A0x8d8d8d8d8d8d8d8d8!2sPokhara%20Valley!5e0!3m2!1sen!2snp!4v1616581234567!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>


        {/* Contact Details Section */}
        <div className="mt-12  text-center">
        <h3 className="text-3xl font-semibold text-black mb-4">Contact Details</h3>
        <p className="text-lg text-[#333]">📍 Birauta-17, Pokhara, Nepal</p>
        <p className="text-lg text-[#333]">📞 <a href="tel:+9779801234567" className="hover:underline">+977-9801234567</a></p>
        <p className="text-lg text-[#333]">📧 <a href="mailto:info@softupspa.com" className="hover:underline">info@softupspa.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
