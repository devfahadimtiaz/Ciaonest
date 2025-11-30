"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import dha from "../../components/assets/images/dha.png";
import gulberg from "../../components/assets/images/gulberg.png";
import johartown from "../../components/assets/images/johartown.png";
import raiwind from "../../components/assets/images/raiwind.png";
import lums from "../../components/assets/images/lums.png";
import umt from "../../components/assets/images/umt.png";
import fast from "../../components/assets/images/fast.png";
import uol from "../../components/assets/images/uol.png";

export default function FindRoomPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("United Kingdom");
  const carouselRef = useRef(null);

  const areas = [
    { id: 1, name: "DHA", image: dha },
    { id: 2, name: "Gulberg", image: gulberg },
    { id: 3, name: "Johar Town", image: johartown },
    { id: 4, name: "Raiwind", image: raiwind },
    { id: 5, name: "Werton", image: gulberg },
  ];

  const universities = [
    { id: 1, name: "Punjab University", logo: umt },
    { id: 2, name: "Lums", logo: lums },
    { id: 3, name: "Fast", logo: fast },
    { id: 4, name: "Comsats", logo: fast },
    { id: 5, name: "UMT", logo: umt },
    { id: 6, name: "UOL", logo: uol },
    { id: 7, name: "Ripha", logo: lums },
    { id: 8, name: "BNU", logo: fast },
  ];

  const cities = ["United Kingdom", "London", "Birmingham", "Leicester", "Nottingham", "Liverpool", "Coventry", "Sheffield", "Leeds"];

  const listings = [
    {
      id: 1,
      title: "Britannia South Bank, London",
      location: "London, England, GB",
      price: 295,
      rating: 5.0,
      reviews: 2,
      image: "/images/listing1.jpg"
    },
    {
      id: 2,
      title: "Moonraker Point, London",
      location: "London, England, GB",
      price: 265,
      rating: 5.0,
      reviews: 38,
      image: "/images/listing2.jpg"
    },
    {
      id: 3,
      title: "AXO Waterloo, London",
      location: "London, England, GB",
      price: 200,
      rating: 5.0,
      reviews: 0,
      image: "/images/listing3.jpg"
    },
    {
      id: 4,
      title: "Rainhause Place, London",
      location: "London, England, GB",
      price: 330,
      rating: 5.0,
      reviews: 0,
      image: "/images/listing4.jpg"
    },
    {
      id: 5,
      title: "Louise House, London",
      location: "London, England, GB",
      price: 297,
      rating: 4.7,
      reviews: 13,
      image: "/images/listing5.jpg"
    },
    {
      id: 6,
      title: "Elephant & Castle, London",
      location: "London, England, GB",
      price: 385,
      rating: 5.0,
      reviews: 0,
      image: "/images/listing6.jpg"
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search logic here
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col items-center justify-center heroSectionFindRoom"
       
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Find A Room
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Smart filters, verified hosts, and secure bookings — all in one
            place. 
          </p>

          {/* Search Box */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Search By Area"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#B71C1C] hover:bg-[#8B1515] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Explore More Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Explore More Areas
          </h2>

          {/* Carousel */}
          <div className="relative max-w-7xl mx-auto">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#B71C1C] hover:bg-[#8B1515] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Carousel Container - 3 visible cards */}
            <div className="overflow-hidden px-20">
              <div
                ref={carouselRef}
                className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {areas.map((area) => (
                  <div
                    key={area.id}
                    className="shrink-0 w-[calc(33.333%-21px)] min-w-[280px] group cursor-pointer"
                  >
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                      {/* Image */}
                      <Image
                        src={area.image}
                        alt={area.name}
                        fill
                        className="object-cover"
                      />

                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

                      {/* Area Name Badge - Centered at Top */}
                      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-black/70 backdrop-blur-sm text-white px-8 py-2.5 rounded-full text-base font-medium shadow-lg">
                          {area.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#B71C1C] hover:bg-[#8B1515] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </section>

      {/* Explore By Universities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Explore By Universities
          </h2>

          {/* Universities Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
            {universities.map((university) => (
              <div
                key={university.id}
                className="flex flex-col items-center gap-3 cursor-pointer group transition-transform hover:scale-110"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center p-3 group-hover:shadow-xl transition-shadow">
                  <Image
                    src={university.logo}
                    alt={university.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {university.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Listing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Feature Listing
          </h2>

          {/* City Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cities.map((city, index) => (
              <button
                key={index}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCity === city
                    ? "bg-[#B71C1C] text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {city === "United Kingdom" && (
                  <span className="mr-2">🇬🇧</span>
                )}
                {city}
              </button>
            ))}
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                  </div>
                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{listing.location}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-sm font-semibold">{listing.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({listing.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-lg font-bold text-gray-900">
                        £{listing.price} <span className="text-sm font-normal text-gray-600">/week</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
