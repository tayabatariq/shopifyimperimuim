import React from "react";

export default function Saiyan() {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
        {/* Badge */}
        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          Shopify Store Solutions by Imperium Media Group
        </span>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://i.postimg.cc/QtC1stkF/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online.jpg"
            alt="Shopify Dashboard"
            className="rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Welcome to Saiyan Productions — Shopify Experts at Imperium Media Group
            </h1>
            <p className="text-gray-600 leading-relaxed">
              At Saiyan Productions, we specialize in creating and managing high-performing Shopify stores. From setup and customization to optimization and marketing, our expert team helps brands build a strong online presence. Backed by the experience and resources of Imperium Media Group, we combine creativity and analytics to boost your eCommerce success.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Shopify? <br /> Because Growth Matters.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Shopify is one of the leading eCommerce platforms trusted by millions of businesses worldwide. It offers flexibility, scalability, and powerful tools to reach your audience. Saiyan Productions leverages these features with custom designs, optimized product pages, and strategic campaigns to convert visitors into loyal customers.
            </p>
          </div>
          <img
            src="https://i.postimg.cc/xdxgLB6b/discount-shopping-season-with-sale.jpg"
            alt="Shopify Products"
            className="rounded-lg shadow-md order-1 md:order-2"
          />
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.postimg.cc/B6FDtzk3/cozy-portrait-young-woman-knitted-blue-sweater-bright-pink-makeup-holding-shopping-bags-mobile-phone.jpg"
            alt="Shopify Mobile Store"
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let’s Build Your Store Together.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saiyan Productions is more than just a service—it’s your Shopify partner. Whether you’re launching your first online store or scaling to new markets, our team is here to guide you. With Imperium Media Group’s expertise, we ensure your eCommerce journey is smooth, profitable, and ready for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}