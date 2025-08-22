"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CourseSummary() {
  const summary = [
    "4-Day Intensive Shopify Training",
    "Step-by-step Store Setup to Scaling",
    "Learn Marketing, TikTok Ads & Growth",
    "For Entrepreneurs, Freelancers & Students",
    "Earn a Professional Certificate",
    "Live, Practical & Actionable Sessions"
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Everything You’ll Get in <span className="text-[#c7004d]">One Training</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12"
        >
          A complete, practical journey from setting up your store 
          to growing and scaling with real strategies & support.
        </motion.p>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {summary.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              <CheckCircle className="w-6 h-6 text-[#c7004d] flex-shrink-0 mt-1" />
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
