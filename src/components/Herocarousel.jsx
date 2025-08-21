import React from "react";
import Slider from "react-slick";
import carosal1 from "../assets/carousel-1.jpg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Herocarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      title: "Master Shopify & Build Profitable Stores",
      text: "Join our 4-day intensive Shopify Mastery Training and become a certified e-commerce expert.",
      img: 'https://img.freepik.com/premium-photo/flat-lay-office-desk-minimalism-laptop-coffee-notebook-plants_1346134-26164.jpg?w=360',
    },
    {
      id: 2,
      title: "Hands-On Practical Training",
      text: "Work on real-world projects, design high-converting stores, and learn from industry experts.",
      img: "https://a.storyblok.com/f/165154/1280x720/112c670518/01_shopify-analytics-track-performance-header.jpg/m/",
    },
    {
      id: 3,
      title: "Get Certified & Launch Your Career",
      text: "Receive a professional certification that boosts your freelancing, job, and business opportunities.",
      img: "https://images.ctfassets.net/wp1lcwdav1p1/3zWgunIoXjmsVWbVlrO4en/eed60c3c44a616d3a18c007a578e9416/GettyImages-1303466068.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive",
    },
  ];

  return (
    <div className="w-full h-[90vh]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[90vh]">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                {slide.text}
              </p>
              <div className="flex gap-4">
                <button className="bg-[#c7004d] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#a8003d] transition">
                  Join Now
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Herocarousel;
