"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Award, Share2, GraduationCap, Gift, CheckCircle, FileText, Target, ThumbsUp } from "lucide-react";

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneNo: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const steps = [
    {
      id: 1,
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "1. Fill the form",
      description: "If you find your choice of accommodation available at a lower price, we will match that price at your time of booking."
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8 text-white" />,
      title: "2. To meet Criteria",
      description: "If you find your choice of accommodation available at a lower price, we will match that price at your time of booking."
    },
    {
      id: 3,
      icon: <ThumbsUp className="w-8 h-8 text-white" />,
      title: "3. Enjoy Benifits",
      description: "If you find your choice of accommodation available at a lower price, we will match that price at your time of booking."
    }
  ];
  const benefits = [
    {
      id: 1,
      icon: <Award className="w-12 h-12 text-[#B71C1C]" />,
      title: "Official Certificate Of Recognition",
      description: "Get an official digital certificate showcasing your partnership with CiaoNest. Curated business experience. One-Pager format combination quality for 120$+ (2 months).",
      link: "#"
    },
    {
      id: 2,
      icon: <Share2 className="w-12 h-12 text-[#B71C1C]" />,
      title: "Feature On CiaoNest's Social Media",
      description: "Your property will be featured across our social media channels, reaching thousands of students. We'll share property-of-the-week on Instagram Stories, monthly blog features highlighting unique stories.",
      link: "#"
    },
    {
      id: 3,
      icon: <GraduationCap className="w-12 h-12 text-[#B71C1C]" />,
      title: "Free Skill-Building Workshops",
      description: "Access exclusive monthly workshops designed to help you grow as a landlord. Get hosting, property marketing, tenant relations—host like a professional—all for no extra cost!",
      link: "#"
    },
    {
      id: 4,
      icon: <Gift className="w-12 h-12 text-[#B71C1C]" />,
      title: "Referral Rewards",
      description: "Ambassador earn (CAD 'Reward Of The Month) for every new verified landlord or tenant you bring to the platform. Bonus rewards for each completed rental.",
      link: "#"
    },
    {
      id: 5,
      icon: <CheckCircle className="w-12 h-12 text-[#B71C1C]" />,
      title: "Ambassador Of The Month Recognition",
      description: "Top-level active Ambassadors get a digital certificate, feature on our 'About our Ambassadors' page, shout-out in our monthly newsletter (70,000+ readers).",
      link: "#"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Become A Partner
              </h1>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Join Student As A Trusted Housing Partner.
                </p>
                <p>
                  List Your Property With Ease And Connect Directly With Verified Students.
                </p>
                <p>
                  Start Earning Confidently Through A Secure And Reliable Platform.
                </p>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative">
              <div className="flex items-center justify-center gap-6">
                {/* Business Woman */}
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-[#B71C1C] rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-gray-500 text-sm">Business Woman</span>
                    </div>
                  </div>
                </div>

                {/* Graduate Student */}
                <div className="relative w-64 h-64 mt-12">
                  <div className="absolute inset-0 bg-[#B71C1C] rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-gray-500 text-sm">Graduate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Benefits
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-gray-100 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center font-bold text-gray-900 mb-4 text-base leading-tight min-h-[48px]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed min-h-[120px]">
                  {benefit.description}
                </p>

                {/* View Details Link */}
                <div className="flex items-center justify-center">
                  <button className="flex items-center gap-2 text-gray-900 font-semibold text-sm hover:text-[#B71C1C] transition-colors group-hover:gap-3">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Steps
          </h2>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-[#B71C1C] rounded-3xl p-8 text-white hover:shadow-2xl transition-shadow"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fill the Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Fill the form
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              to become our partner
            </p>

            {/* Form */}
            <div className="bg-gray-100 rounded-3xl p-10">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* First Row - Two Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Name |"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Name |"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Second Row - Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email |"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone |"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Third Row - Full Width Phone Number */}
                  <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Phone no"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                    required
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#B71C1C] hover:bg-[#8B1515] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}
