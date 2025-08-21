import React from "react";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiArrowRightWideLine,
} from "react-icons/ri";
import googleimg from '../assets/googlepartner.png'
import trustpilot from '../assets/trustpilot.png'

const Footer = () => {
  return (
    <footer className="bg-[#0b2242] text-white pt-16 font-sans">
      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        
        {/* Our Office */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Office</h3>
          <p className="text-gray-300 text-sm leading-6 flex items-start gap-2">
            <RiMapPinLine className="text-white text-xl" />
            Atrium House, 574<br /> Manchester Rd, Bury BL9 9SW
          </p>
          <p className="text-gray-300 text-sm leading-6 flex items-center gap-2 mt-2">
            <RiPhoneLine className="text-white text-xl" /> 0800 861 1045
          </p>
          <p className="text-gray-300 text-sm leading-6 flex items-center gap-2 mt-2">
            <RiMailLine className="text-white text-xl" /> info@imperiummedia.org.uk
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-11 h-11 border border-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:bg-white hover:scale-110"
            >
              <RiFacebookLine className="text-white text-xl hover:text-[#002472]" />
            </a>
            <a
              href="#"
              className="w-11 h-11 border border-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:bg-white hover:scale-110"
            >
              <RiLinkedinLine className="text-white text-xl hover:text-[#002472]" />
            </a>
          </div>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="text-lg font-bold mb-4">Site Map</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Contact Us",
              "Our Services",
              "Submit Your CV",
              "Terms And Conditions",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 text-sm flex items-center gap-2 transition-all duration-300 hover:text-red-500 hover:translate-x-1"
                >
                  <RiArrowRightWideLine /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            {["Support Line", "Linktree"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 text-sm flex items-center gap-2 transition-all duration-300 hover:text-red-500 hover:translate-x-1"
                >
                  <RiArrowRightWideLine /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner Logos */}
        <div>
          <img
            src={googleimg}
            alt="Google Partner"
            className="mb-4 max-w-[150px] rounded-lg p-2"
          />
          <img
            src={trustpilot}
            alt="Trustpilot Partner"
            className="max-w-[150px] rounded-lg p-2"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-12 bg-[#09182b] py-5 px-8 text-left">
        <p className="text-sm text-gray-300">© Imperium Media Group Limited, All Rights Reserved.</p>
        <p className="text-sm text-gray-300">Company Number - 15176383</p>
      </div>
    </footer>
  );
};

export default Footer;
