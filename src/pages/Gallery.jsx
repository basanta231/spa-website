import React from "react";
import spa1 from "../components/images/gallery1.jpg"
import spa2 from "../components/images/gallery2.jpg"
import spa3 from "../components/images/gallery3.jpg"
import spa4 from "../components/images/gallery4.jpg"
import spa5 from "../components/images/gallery5.jpg"
import spa6 from "../components/images/body_treatment.jpg";
import spa7 from "../components/images/body_treatment.jpg";
import spa8 from "../components/images/body_treatment.jpg";

const Gallery = () => {
  const images = [spa1, spa2, spa3, spa4, spa5, spa6, spa7, spa8,];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-serif mb-12">Our Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Spa ${index + 1}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
