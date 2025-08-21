import React from "react";

export default function About() {
  return (
    <div className="w-full">
      {/* Header Section */}
     <section
  className="relative bg-cover bg-center py-32 px-10"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1631038506857-6c970dd9ba02?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
  <div className="text-left max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
      About Us
    </h1>
    <div className="text-gray-200">
      <a href="#" className="hover:text-[#ff3c3c]">Home</a> /{" "}
      <a href="#" className="hover:text-[#ff3c3c]">Pages</a> /{" "}
      <span className="text-[#e6005c]">About US</span>
    </div>
  </div>
</section>



      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVLRzoOVKw-nhwKty44hSmLGY0XtskgrC7A&s"
            alt="Work"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <span className="text-pink-600 font-medium">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b45] mt-2">
            Shopify Mastery Training
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We provide instructor-led Shopify training designed for
            entrepreneurs, digital marketers, and e-commerce managers.
            <br />
            <br />
            This 4-day intensive program (6–8 hours per day) will help you plan,
            structure, and execute a complete Shopify store launch strategy.
            From theme customization, product management, and workflow
            automation, to marketing, analytics, and professional certification
            – our course covers it all.
          </p>

          {/* Tabs */}
          <div className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex border-b">
              <button className="w-1/2 py-2 text-center bg-white font-medium text-[#0b0b45]">
                Mission
              </button>
              <button className="w-1/2 py-2 text-center bg-pink-600 text-white font-medium">
                Vision
              </button>
            </div>
            <div className="p-4 text-gray-600">
              Trainees will be able to design optimized stores, configure
              payments and shipping, integrate apps, execute advanced marketing
              strategies, and earn a professional Shopify Mastery Certificate.
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-pink-600 text-2xl mb-3">✔</div>
          <h3 className="font-semibold text-lg mb-2">Practical Learning</h3>
          <p className="text-gray-600 text-sm">
            Hands-on exercises including store creation, app integration, SEO
            setup, and A/B testing strategies.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-pink-600 text-2xl mb-3">✔</div>
          <h3 className="font-semibold text-lg mb-2">Dedicated Training</h3>
          <p className="text-gray-600 text-sm">
            Work closely with experts to build, customize, and optimize your
            Shopify store for growth and conversions.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-pink-600 text-2xl mb-3">✔</div>
          <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Post-training support for 30 days with close communication to ensure
            you achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
}