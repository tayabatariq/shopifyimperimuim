import React from "react";

export default function Saiyan() {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Badge */}
        <span className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          An Imperium Media Group Subsidiary
        </span>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://imperiummedia.co.uk/img/aboutsaiyan.jpg"
            alt="camera"
            className="rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Welcome to Saiyan Productions — A Division of Imperium Media Group
            </h1>
            <p className="text-gray-600 leading-relaxed">
              At Saiyan Productions, we specialize in precision-driven YouTube ad
              management designed to elevate your brand and deliver measurable
              results. Whether you’re launching your first campaign or scaling
              an existing strategy, our expert team works closely with you to
              create, optimize, and manage ads that perform. Backed by the
              experience and resources of Imperium Media Group, we combine
              strategic creativity with data-driven insights to help your
              business thrive on the world’s most powerful video platform.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why YouTube Advertising? <br /> Because Attention Matters.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              YouTube is more than just a video platform—it’s a search engine,
              entertainment hub, and one of the most influential advertising
              spaces in the digital world. With billions of views per day, the
              opportunity to connect with your audience has never been greater.
              Saiyan Productions harnesses this potential through targeted ad
              placements, smart bidding strategies, and compelling creative
              execution that turns views into action.
            </p>
          </div>
          <img
            src="https://imperiummedia.co.uk/aboutsaiyan2.jpg"
            alt="camera"
            className="rounded-lg shadow-md order-1 md:order-2"
          />
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962eadcdb2"
            alt="camera"
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let’s Grow Together.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saiyan Productions isn’t just a service—it’s a partnership. We
              work with brands that are serious about growth and ready to invest
              in smart, scalable advertising. Whether you’re a startup aiming to
              build awareness or an established business ready to dominate new
              markets, our team is here to guide you every step of the way.
              Discover the difference a focused YouTube ad strategy can
              make—with Saiyan Productions, powered by Imperium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}