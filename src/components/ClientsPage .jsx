import React, { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

const ClientsPage = () => {
  const scrollRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const clients = [
    {
      title: "DBD Plastering",
      logo: "DBD",
      color: "bg-gray-500",
      shadow: "bg-pink-600",
      category: "Construction",
      description:
        "Professional plastering and construction services with modern techniques.",
      services: [
        "Shopify Store Setup",
        "Payment Integration",
        "Mobile Optimization",
      ],
      results: [
        "200% Online Bookings",
        "150% Revenue Growth",
        "50+ Projects Completed",
      ],
    },
    {
      title: "Opal Energy",
      logo: "OE",
      color: "bg-blue-900",
      shadow: "bg-green-600",
      category: "Energy Solutions",
      description:
        "Renewable energy company specializing in solar and wind power solutions.",
      services: [
        "E-commerce Platform",
        "Multi-currency Support",
        "Analytics Integration",
      ],
      results: ["300% Revenue Growth", "25 Countries Served", "99.9% Uptime"],
    },
    {
      title: "Simpli Green",
      logo: "SG",
      color: "bg-green-700",
      shadow: "bg-yellow-500",
      category: "Eco Solutions",
      description:
        "Sustainable products and eco-friendly solutions for modern businesses.",
      services: [
        "SEO Optimization",
        "Content Strategy",
        "Conversion Optimization",
      ],
      results: [
        "250% Organic Traffic",
        "180% Conversion Rate",
        "Carbon Neutral Store",
      ],
    },
    {
      title: "AH Accountants",
      logo: "AH",
      color: "bg-indigo-700",
      shadow: "bg-red-500",
      category: "Financial Services",
      description:
        "Professional accounting and financial advisory services for businesses.",
      services: [
        "Custom B2B Portal",
        "Client Management System",
        "Automated Invoicing",
      ],
      results: [
        "400% Client Efficiency",
        "300% Process Automation",
        "24/7 Support",
      ],
    },
    {
      title: "Fashion Forward",
      logo: "FF",
      color: "bg-purple-700",
      shadow: "bg-blue-500",
      category: "Fashion Retail",
      description:
        "Trendy fashion retailer with cutting-edge style and quality products.",
      services: [
        "AR Try-on Features",
        "Social Commerce",
        "Influencer Integration",
      ],
      results: [
        "350% Social Engagement",
        "75% Mobile Sales",
        "1M+ App Downloads",
      ],
    },
    {
      title: "TechFlow Solutions",
      logo: "TF",
      color: "bg-slate-800",
      shadow: "bg-orange-500",
      category: "Technology",
      description:
        "Advanced technology solutions and software development services.",
      services: [
        "Enterprise Platform",
        "API Integration",
        "Security Implementation",
      ],
      results: ["500% B2B Sales", "100+ Enterprise Clients", "Zero Downtime"],
    },
  ];

  const trainingStats = [
    { icon: Clock, value: "4 Days", label: "6-8 Hours per Day" },
    { icon: Users, value: "500+", label: "Students Trained" },
    { icon: Award, value: "100%", label: "Certification Rate" },
    { icon: BookOpen, value: "11", label: "Comprehensive Modules" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center py-32 px-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Clients          </h1>
          <div className="text-gray-200">
            <a href="#" className="hover:text-[#ff3c3c]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="hover:text-[#ff3c3c]">
              Pages
            </a>{" "}
            / <span className="text-[#e6005c]">Clients</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-medium mb-4">Our Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 max-w-4xl mx-auto leading-tight mb-8">
            Take a look at some of the businesses that we have helped transform
            and grow.
          </h2>

          {/* Training Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {trainingStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clients Scrollable Row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative group w-80 h-96 flex-shrink-0 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Shadow Box */}
                <div
                  className={`absolute bottom-2 right-2 w-full h-80 rounded-2xl ${client.shadow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                >
                  <div className="absolute inset-6 text-white flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {client.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-4">
                        {client.description}
                      </p>
                      <h4 className="font-semibold mb-2 text-sm">Services:</h4>
                      <div className="space-y-1">
                        {client.services.map((service, idx) => (
                          <p key={idx} className="text-xs opacity-80">
                            • {service}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Key Results:
                      </h4>
                      {client.results.map((result, idx) => (
                        <p
                          key={idx}
                          className="text-xs bg-white/20 rounded px-2 py-1 mb-1"
                        >
                          {result}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Card */}
                <div
                  className={`absolute top-0 left-0 w-full h-80 rounded-2xl ${client.color} flex flex-col items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-3 group-hover:-translate-x-3 text-white`}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span className="text-3xl font-bold">{client.logo}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {client.title}
                  </h3>
                  <p className="text-sm opacity-80">{client.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ClientsPage;
