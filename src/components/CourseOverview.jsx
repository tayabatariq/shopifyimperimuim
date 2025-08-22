"use client";
import { motion } from "framer-motion";
import CourseSummary from "./CourseSummary";

export default function CourseOverview() {
  const days = [
    {
      day: "Day 1",
      title: "Setup & Branding",
      desc: "Learn to create your Shopify account, customize your theme, and build a strong brand identity."
    },
    {
      day: "Day 2",
      title: "Products & Design",
      desc: "Master product listings, store layouts, and essential Shopify apps."
    },
    {
      day: "Day 3",
      title: "Marketing & Ads",
      desc: "Learn proven TikTok Ads and social media strategies to drive sales."
    },
    {
      day: "Day 4",
      title: "Scaling & Growth",
      desc: "Advanced tactics to scale your store, automate processes, and grow long-term."
    }
  ];

  return (
 <>

    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 text-[#c7004d]"
        >
          Course Overview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Our 4-Day Shopify Training is designed to transform you from a beginner 
          into a confident store owner. Each session combines practical lessons, 
          real-world examples, and actionable strategies you can implement instantly.
        </motion.p>

        {/* Days Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {days.map((d, index) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-xl transition bg-white"
            >
              <span className="inline-block bg-[#c7004d] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {d.day}
              </span>
              <h3 className="text-xl font-bold mb-2">{d.title}</h3>
              <p className="text-gray-600">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

<section
  className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
  style={{ backgroundImage: "url('https://gempages.net/cdn/shop/articles/shopify-landing-pages_1024x1024.webp?v=1693445704')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-black/80" />

  <div className="relative max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Benefits</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-8 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <h3 className="text-xl font-semibold mb-3 text-[#c7004d]">Hands-on Training</h3>
        <p className="text-gray-600">
          Practical, step-by-step lessons you can implement instantly.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <h3 className="text-xl font-semibold mb-3 text-[#c7004d]">Learn from Experts</h3>
        <p className="text-gray-600">
          Guidance from experienced Shopify professionals.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-8 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <h3 className="text-xl font-semibold mb-3 text-[#c7004d]">Real Results</h3>
        <p className="text-gray-600">
          Proven strategies that helped brands grow online.
        </p>
      </motion.div>
    </div>
  </div>
</section>


<CourseSummary/>

 </>
  );
}
