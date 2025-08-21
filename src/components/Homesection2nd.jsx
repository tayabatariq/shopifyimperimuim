import React from 'react'
import { ShoppingCart, Palette, Package, CreditCard, BarChart, Flame, LineChart, Award } from "lucide-react";


import { Briefcase, TrendingUp, ShoppingBag, Laptop, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { Users, Globe } from "lucide-react";
const Homesection2nd = () => {



      const skills = [
    { icon: <ShoppingCart className="w-8 h-8 text-[#c7004d]" />, text: "Launch and configure a complete Shopify store" },
    { icon: <Palette className="w-8 h-8 text-[#c7004d]" />, text: "Design high-converting themes & custom pages" },
    { icon: <Package className="w-8 h-8 text-[#c7004d]" />, text: "Manage products, variants, collections, and inventory" },
    { icon: <CreditCard className="w-8 h-8 text-[#c7004d]" />, text: "Configure payments, taxes, and shipping" },
    { icon: <BarChart className="w-8 h-8 text-[#c7004d]" />, text: "Optimize SEO, email, and social media campaigns" },
    { icon: <Flame className="w-8 h-8 text-[#c7004d]" />, text: "Implement upselling, cross-selling, and A/B testing" },
    { icon: <LineChart className="w-8 h-8 text-[#c7004d]" />, text: "Track KPIs, analytics, and store performance" },
    { icon: <Award className="w-8 h-8 text-[#c7004d]" />, text: "Earn a Professional Certification" },
  ];




  const audience = [
    { icon: <Briefcase className="w-8 h-8 text-[#c7004d]" />, text: "Entrepreneurs launching their first online store" },
    { icon: <TrendingUp className="w-8 h-8 text-[#c7004d]" />, text: "Digital marketers wanting to expand into e-commerce" },
    { icon: <ShoppingBag className="w-8 h-8 text-[#c7004d]" />, text: "E-commerce managers managing Shopify stores" },
    { icon: <Laptop className="w-8 h-8 text-[#c7004d]" />, text: "Freelancers looking for high-demand skills" },
    { icon: <GraduationCap className="w-8 h-8 text-[#c7004d]" />, text: "Students & beginners seeking future-proof careers" },
  ];


    const stats = [
    { icon: <Users className="w-8 h-8 text-[#c7004d]" />, title: "500+", subtitle: "Students Trained" },
    { icon: <Globe className="w-8 h-8 text-[#c7004d]" />, title: "10+", subtitle: "Countries Reached" },
    { icon: <Award className="w-8 h-8 text-[#c7004d]" />, title: "100%", subtitle: "Practical Training" },
    { icon: <Briefcase className="w-8 h-8 text-[#c7004d]" />, title: "Industry", subtitle: "Level Projects" },
  ];
  return (
    <>
     <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="relative">
          <img
            src="https://images.ctfassets.net/wp1lcwdav1p1/5HX85I2zLsXYSSruC8670C/93ccb22b55d7638fc4109b118a7fd630/GettyImages-1313131428.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive"
            alt="Shopify Training"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-[#c7004d] text-white px-4 py-2 rounded-lg shadow-md">
            4-Day Shopify Mastery
          </div>
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Imperium Media for Shopify Training?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold">Imperium Media</span>, we
            specialize in empowering entrepreneurs, marketers, and e-commerce
            managers with <span className="font-semibold">hands-on Shopify
            skills</span>. Our Shopify Mastery Training is designed to take you
            from beginner to pro in just 4 days. With expert instructors,
            real-world projects, and professional certification, you’ll gain the
            confidence to launch and grow profitable online stores.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-[#c7004d] font-bold">✔</span> Industry Expert Trainers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c7004d] font-bold">✔</span> Real-World Projects & Practical Assignments
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c7004d] font-bold">✔</span> Globally Recognized Certification
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c7004d] font-bold">✔</span> 30-Day Post-Training Support
            </li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-[#c7004d] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#a8003d] transition">
              Explore Courses
            </button>
            <button className="border-2 border-black text-black px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
    
    

    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What You’ll Learn in Shopify Mastery Training
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          By the end of this 4-day intensive program, you’ll have the skills and
          confidence to launch, optimize, and scale a fully functional Shopify store.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {skill.icon}
              <p className="mt-4 text-gray-700 font-medium text-sm md:text-base">
                {skill.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-[#c7004d] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#a8003d] transition">
            View Full Curriculum
          </button>
        </div>
      </div>
    </section>



      <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Is Shopify Mastery Training Right for You?
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you’re just starting your e-commerce journey or looking to scale your skills,
          this program is designed for entrepreneurs, professionals, and dreamers who want to
          thrive in the digital economy.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audience.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {item.icon}
              <p className="mt-4 text-gray-700 font-medium text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-[#c7004d] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#a8003d] transition">
            Enroll Now
          </button>
        </div>
      </div>
    </section>


        <section
      className="relative w-full h-[50vh] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/shutterstock/videos/1101594689/thumb/4.jpg?ip=x480')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative h-full flex items-start justify-center px-6">
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Shopify Journey?
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Take the first step towards building your own successful e-commerce business.
            Join <span className="font-semibold">Imperium Media’s Shopify Mastery Training</span> today
            and unlock your digital future.
          </p>
          <button className="bg-[#c7004d] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#a8003d] transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>


  <section className="w-full py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Why Choose Imperium Media’s Shopify Training?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Homesection2nd