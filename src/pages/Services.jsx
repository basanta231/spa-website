import React from 'react';
import massage from '../components/images/massage.jpg';
import skin_care from '../components/images/skin_care.jpg';
import body_treatment from '../components/images/body_treatment.jpg';
import hand_foot_treatment from '../components/images/hand_foot_treatment.jpg';
import hair_removal from '../components/images/hair_removal.jpg';
import hydrotherapy from '../components/images/hydrotherapy.jpg';

const Services = () => {
  const servicesTop = [
    {
      image: massage,
      title: 'Massage Therapy',
      description: 'Boost hydration and restore radiance to tired skin with our signature facials.',
    },
    {
      image: skin_care,
      title: 'Skin Care & Facials',
      description: 'Relax your body and soul with therapeutic massages tailored for you.',
    },
    {
      image: body_treatment,
      title: 'Body Treatments',
      description: 'Experience unique treatments like hot stone and aromatherapy.',
    },
  ];

  const servicesBottom = [
    {
      image: hand_foot_treatment,
      title: 'Hand & Foot Treatments',
      description: 'Experience unique treatments like hot stone and aromatherapy.',
    },
    {
      image: hair_removal,
      title: 'Hair Removal',
      description: 'Experience unique treatments like hot stone and aromatherapy.',
    },
    {
      image: hydrotherapy,
      title: 'Hydrotherapy & Steam Treatments',
      description: 'Experience unique treatments like hot stone and aromatherapy.',
    },
  ];

  // Testimonials from happy customers
  const testimonials = [
    {
      name: "-Kishan Magar",
      review: "Absolutely loved the massage! The ambiance was perfect, and the staff was amazing. 💆‍♂️ The experience was so relaxing, and I felt completely rejuvenated afterward!",
    },
    {
      name: "-Sapana Ranabhat",
      review: "Best spa experience ever! ✨ My skin feels incredibly smooth and refreshed after the facial treatment. The products they used were of high quality, and the service was exceptional.",
    },
    {
      name: "-Lamine Yamal",
      review: "Highly recommend their hydrotherapy! 🚿 It was both relaxing and refreshing. The warm water and steam made me feel like I was in paradise. Will definitely be back!",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#798d50]">
      {/* Services Section */}
      <h2 className="text-5xl font-bold font-serif text-center mb-12 text-black">Our Services</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {servicesTop.map((service, index) => (
          <div key={index} className=" bg-[#1E2A38]  text-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 text-center">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
              <p className=" text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-12 ">
        {servicesBottom.map((service, index) => (
          <div key={index} className="bg-[#1E2A38]  text-white  rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 text-center">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Page Testimonials Section */}
      <div className="w-full py-22 mt-16 bg-[#1E2A38] text-black
      ">
        <h2 className="text-4xl font-serif text-center text-white mb-10">What Our Guests Say</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F5F5] p-8 rounded-2xl shadow-lg text-center">
              <p className="italic text-lg">"{testimonial.review}"</p>
              <h4 className="mt-4 font-semibold text-xl">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
