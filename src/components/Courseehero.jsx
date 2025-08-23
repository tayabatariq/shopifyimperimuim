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
import Coursessliders from './Coursessliders';
const Courseehero = () => {


    

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

     <Coursessliders/>

<CourseOverview/>

    
    </>
  )
}

export default Courseehero
