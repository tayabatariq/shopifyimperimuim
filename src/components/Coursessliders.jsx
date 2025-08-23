import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Coursessliders = () => {
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
      {
        id: 5,
        title: "Full-Stack Development",
        desc: "Learn MERN stack & build scalable applications.",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", // idea: laptop with code editor open
        link: "#",
      },
      {
        id: 6,
        title: "Content Creation",
        desc: "Create engaging content for social media platforms.",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", // idea: person recording with phone/camera
        link: "#",
      },
      {
        id: 7,
        title: "Python Programming",
        desc: "Learn Python for web, data, and automation projects.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpwQb-ukHPtKOgCZYjmA3uL38YkGHvThgqQ&s", // idea: coding screen with Python logo style
        link: "#",
      },
      {
        id: 8,
        title: "Freelancing Success",
        desc: "Build a profitable freelancing career online.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // idea: freelancer working with laptop + coffee
        link: "#",
      },
    ];
    
  return (
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
  )
}

export default Coursessliders