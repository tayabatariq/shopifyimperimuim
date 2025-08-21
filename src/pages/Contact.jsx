import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
    <section
  className="relative bg-cover bg-center py-32 px-10"
  style={{
    backgroundImage: "url('https://img.freepik.com/premium-photo/programmer-working-with-software-development-coding-office-aig_31965-342920.jpg?w=996')",
  }}
>
  <div className="text-left max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
      Contact Us
    </h1>
    <div className="text-gray-200">
      <a href="#" className="hover:text-[#ff3c3c]">Home</a> /{" "}
      <a href="#" className="hover:text-[#ff3c3c]">Pages</a> /{" "}
      <span className="text-[#e6005c]">Contact</span>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="flex flex-col md:flex-row justify-center gap-10 px-6 md:px-16 py-16 bg-white">
        {/* Left Form */}
        <div className="flex-1 min-w-[300px]">
          <button className="bg-[#e6005c]/10 text-[#e6005c] px-4 py-1 rounded mb-4">
            Contact
          </button>
          <h2 className="text-3xl font-bold text-[#000000] mb-6">
            If You Have Any Query,<br /> Please Contact Us
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
            />
            <textarea
              rows="5"
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e6005c] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#c7004d] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Map */}
        <div className="flex-1 min-w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18954.13978659825!2d-2.3155335977905755!3d53.570842833214385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba53db2ee6a93%3A0x34f141531a8b0fb1!2sAtrium%20House%2C%20574%20Manchester%20Rd%2C%20Bury%20BL9%209SW%2C%20UK!5e0!3m2!1sen!2s!4v1755632394728!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
