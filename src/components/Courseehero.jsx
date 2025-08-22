import React from 'react'
import { Clock, Users, Award } from "lucide-react";
import { ShoppingBag, Palette, Globe, TrendingUp } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CourseOverview from './CourseOverview';
"use client";
import { motion } from "framer-motion";
const Courseehero = () => {


    
const courses = [
  {
    id: 1,
    title: "Shopify Mastery",
    desc: "4-Day Intensive Shopify E-Commerce Program.",
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/manonlaptop.jpg?v=1725081063",
    link: "#",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Learn modern UI/UX principles with hands-on projects.",
    img: "https://images.squarespace-cdn.com/content/v1/6308ed9e1770132a1b52c705/c1a6b8ef-a047-4c7a-b055-04f4e55de390/CarmenPHOTO17MOCKUPq.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "React Development",
    desc: "Master React.js & build responsive web apps.",
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/website-design.jpg?v=1691011202",
    link: "#",
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "SEO, Ads, and strategies to grow your business.",
    img: "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6822507c77da44e768815303_annie2-45.webp",
    link: "#",
  },
];

 const items = [
    {
      icon: <ShoppingBag className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Store Setup",
      desc: "Learn to create a fully functional Shopify store from scratch."
    },
    {
      icon: <Palette className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Design & Branding",
      desc: "Customize themes, layouts, and visuals to create a unique brand."
    },
    {
      icon: <Globe className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Global Selling",
      desc: "Learn payment gateways, shipping, and selling internationally."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Growth & Marketing",
      desc: "Master SEO, ads, and email marketing to boost online sales."
    }
  ];

   const items2 = [
    {
      icon: <Clock className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Program Duration",
      desc: "4 Days | 6–8 Hours per Day of Intensive Training"
    },
    {
      icon: <Users className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Who Can Join?",
      desc: "Entrepreneurs, Freelancers, Students, and Professionals who want to build Shopify stores."
    },
    {
      icon: <Award className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />,
      title: "Certification",
      desc: "Earn a recognized certificate after completing this professional training."
    }
  ];
  return (
    <>
      <section className="relative bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shopify Mastery Training
          </h1>
          <p className="text-lg md:text-xl mb-8">
            4-Day Intensive Program (6–8 Hours per Day) <br />
            Master Shopify E-Commerce with Professional Certification
          </p>
          <a
            href="#register"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://cdn.shopify.com/shopify-training-banner.jpg')",
          }}
        ></div>
      </section>

      <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Course Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Duration */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Clock className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Program Duration</h3>
            <p>4 Days | 6–8 Hours per Day of Intensive Training</p>
          </div>

          {/* Audience */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Users className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Who Can Join?</h3>
            <p>
              Entrepreneurs, Freelancers, Students, and Professionals who want
              to build Shopify stores.
            </p>
          </div>

          {/* Certification */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Award className="w-12 h-12 text-[#c7004d] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p>
              Earn a recognized certificate after completing this professional
              training.
            </p>
          </div>
        </div>
      </div>
    </section>

     <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          What You’ll Learn
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Explore Our Courses
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <a
                    href={course.link}
                    className="bg-[#c7004d] text-white px-6 py-2 rounded-lg font-medium hover:bg-black transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

<CourseOverview/>

    
    </>
  )
}

export default Courseehero
