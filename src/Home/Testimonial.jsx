import React from "react";
import "./Testimonial.css";
import sarah from '../Images/Testimonial/sarah.jpg';
import david from '../Images/Testimonial/david.jpg';
import emily from '../Images/Testimonial/emily.jpg';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    img: sarah,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    text: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
  },
  {
    img: david,
    name: "David Patel",
    role: "Project Manager",
    text: "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
  },
  {
    img: emily,
    name: "Emily Carter",
    role: "Operations Manager",
    text: "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-inner">
        {/* <h2 className="testimonial-title">What people say</h2> */}
        {/* <p className="testimonial-subtitle">
          Discover what our satisfied customers have to say.
        </p> */}

 <Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  className="testimonial-swiper"
>
  {testimonials.map((t, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-layout">
        
        <div className="testimonial-left">
          <img src={t.img} alt={t.name} />
        </div>

        <div className="testimonial-right">
          <h2 className="big-heading">What our client says</h2>
          <h3 className="client-name">{t.name}</h3>
          <h4 className="client-role">{t.role}</h4>
          <p className="client-text">{t.text}</p>
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default Testimonial;
