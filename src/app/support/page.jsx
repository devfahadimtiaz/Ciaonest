"use client";

import { useState } from "react";
import { HelpCircle, Clock, DollarSign, Home, Shield, XCircle, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

export default function SupportPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // Add form submission logic here
  };
  const topics = [
    {
      id: 1,
      icon: <HelpCircle className="w-12 h-12 text-[#B71C1C]" />,
      title: "Top FAQ's",
      description: "Get fast answers to our most commonly asked questions.",
      link: "#"
    },
    {
      id: 2,
      icon: <Clock className="w-12 h-12 text-[#B71C1C]" />,
      title: "Booking with Student.com",
      description: "Learn about the booking process at Student.com.",
      link: "#"
    },
    {
      id: 3,
      icon: <DollarSign className="w-12 h-12 text-[#B71C1C]" />,
      title: "Fees and Payments",
      description: "Information on rental fees and how to manage payments.",
      link: "#"
    },
    {
      id: 4,
      icon: <Home className="w-12 h-12 text-[#B71C1C]" />,
      title: "Availability and Pricing",
      description: "Get answers about our availability and pricing plans.",
      link: "#"
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12 text-[#B71C1C]" />,
      title: "Security and Privacy",
      description: "Learn about our privacy policies and how we protect information.",
      link: "#"
    },
    {
      id: 6,
      icon: <XCircle className="w-12 h-12 text-[#B71C1C]" />,
      title: "Cancellation Policy",
      description: "Learn about our cancellation policies and procedures.",
      link: "#"
    }
  ];

  return (
    <div className="w-full w-100%">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-white min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            How can we help
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#B71C1C]">
            you today?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We&apos;re here to help at Student.com. Please browse the topics below to quickly find answers to your questions, and continue your journey with Student.com.
          </p>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Popular <span className="text-[#B71C1C]">topics</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Browse through our most popular help topics
          </p>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    {topic.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {topic.description}
                </p>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-gray-900 font-semibold text-sm hover:text-[#B71C1C] transition-colors group-hover:gap-3">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Suspendisse ultrices gravida dictum fusce placerat ultricies integer
            </p>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* First Row - Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Name<span className="text-[#B71C1C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Phone<span className="text-[#B71C1C]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Row - Email and Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Email Address<span className="text-[#B71C1C]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Subject<span className="text-[#B71C1C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your message..."
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button and Social Icons */}
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-[#B71C1C] hover:bg-[#8B1515] text-white font-semibold py-3 px-8 rounded-lg transition-colors uppercase tracking-wide"
                    >
                      Send Message
                    </button>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#B71C1C] hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#B71C1C] hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#B71C1C] hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Pinterest"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#B71C1C] hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
