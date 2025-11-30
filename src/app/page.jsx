"use client";
import { useState } from "react";
import {
  Building,
  House,
  Building2,
  Warehouse,
  BuildingIcon,
  Star,
  BookMarked,
  Brain,
  BadgeCheck,
  HandFist,
  Users,
} from "lucide-react";

import Image from "next/image";
import lums from "../components/assets/images/lums.png";
import umt from "../components/assets/images/umt.png";
import fast from "../components/assets/images/fast.png";
import uol from "../components/assets/images/uol.png";
import gulberg from "../components/assets/images/gulberg.png";

import ClientOne from "../components/assets/testimonials-clients/clientOne.png"
import ClientTwo from "../components/assets/testimonials-clients/clientTwo.png"
import ClientThree from "../components/assets/testimonials-clients/clientThree.png"
import ClientFour from "../components/assets/testimonials-clients/clientFour.png"
import ClientFive from "../components/assets/testimonials-clients/clientFive.png"
import ClientSix from "../components/assets/testimonials-clients/clientSix.png"
import ClientSeven from "../components/assets/testimonials-clients/clientSeven.png"
export default function Home() {
  const [activeTab, setActiveTab] = useState("apartment");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" w-full flex-col justify-center">
      {/* Hero Section */}
      <section className="relative  bg-cover bg-center bg-no-repeat heroSection min-h-screen flex flex-col items-center justify-center">
        {/* Blur overlay */}

        {/* Content */}
        <div className="  text-white gap-10">
          <h1 className="text-4xl font-bold mb-4 w-200 tracking-widest font-montserrat text-center">
            We Help You Find Your Dream Student Home In Lahore
          </h1>
          <p className="text-lg max-w-xl mx-auto text-center">
            📍 Smart, secure, and AI-assisted housing just for you.
          </p>
          <section className="mt-20">
            <div className=" relative z-20 container mx-auto w-150 px-8 py-3 flex justify-between items-center bg-gray-900/20 backdrop-blur-lg rounded-4xl ">
              <button
                className={`btn gap-1 ${
                  activeTab === "apartment" ? "btn-tab-active" : ""
                }`}
                onClick={() => handleTabChange("apartment")}
              >
                <Building size={20} />
                Appartment
              </button>
              <button
                className={`btn gap-1 ${
                  activeTab === "house" ? "btn-tab-active" : ""
                }`}
                onClick={() => handleTabChange("house")}
              >
                <House size={20} />
                House
              </button>
              <button
                className={`btn gap-1 ${
                  activeTab === "flats" ? "btn-tab-active" : ""
                }`}
                onClick={() => handleTabChange("flats")}
              >
                <BuildingIcon size={20} />
                Flats
              </button>
            </div>
            <div className=" relative z-10 container mx-auto w-200 px-8 py-3 flex justify-between items-center bg-white/80 rounded-md -mt-6">
              <div className="grid grid-cols-4 gap-10 items-end">
                <div className="p-4 ">
                  <label className="text-black ">Universities</label>
                  <input
                    className="bg-white text-black p-1 pl-4 w-45 text-sm "
                    text="text"
                    placeholder="Search by Univercities"
                  />
                </div>
                <div className=" p-4 ">
                  <label className="text-black ">Area</label>
                  <input
                    className="bg-white text-black p-1 pl-4 w-45 text-sm "
                    text="text"
                    placeholder="Search by Univercities"
                  />
                </div>
                <div className="p-4  ">
                  <label className="text-black">Amenities</label>
                  <input
                    className="bg-white text-black p-1 pl-4 w-45 text-sm "
                    text="text"
                    placeholder="Search by Univercities"
                  />
                </div>
                <div className=" p-4  ">
                  <button className="btn btn-primary ">Search</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* Explore Section */}
      <section className="relative bg-white h-130 w-full  flex flex-col items-center justify-center">
        <div className="text-center p-5 ">
          <h2 className="text-black text-2xl font-bold">
            Explore More Universities
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-10 pt-5">
          <div className="border border-gray-200 rounded-2xl">
            <Image class="w-full h-64 object-cover" src={lums} alt="lums" />
            <div className="p-5 py-10 text-black">
              <h3 className="text-2xl font-medium">LUMS</h3>
              <p className="text-sm">Available Listing</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-2xl">
            <Image class="w-full h-64 object-cover" src={uol} alt="lums" />
            <div className="p-5 py-10 text-black">
              <h3 className="text-2xl font-medium">UOL</h3>
              <p className="text-sm">Available Listing</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-2xl">
            <Image class="w-full h-64 object-cover" src={fast} alt="lums" />
            <div className="p-5 py-10 text-black">
              <h3 className="text-2xl font-medium">FAST</h3>
              <p className="text-sm">Available Listing</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-2xl">
            <Image class="w-full h-64 object-cover" src={umt} alt="lums" />
            <div className="p-5 py-10 text-black">
              <h3 className="text-2xl font-medium">UMT</h3>
              <p className="text-sm">Available Listing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white h-120 w-full  flex flex-col items-center justify-center">
        <div className="text-center p-5 ">
          <h2 className="text-black text-2xl font-bold">
            Explore More Universities
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-40 pt-5 items-start mt-5">
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <Star className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                Find your Perfect Match
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                Our system recommends the best rooms based on your preferences,
                university, and budget.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <BookMarked className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                Book Your Space
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                Secure your booking online in just a few clicks
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <House className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                Move in
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                Enjoy your new home hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white h-180 w-full  flex flex-col items-center justify-center">
        <div className="text-center p-5 ">
          <h2 className="text-black text-2xl font-bold">POPULAR Areas</h2>
          <hr className="border-2 color-primary" />
        </div>
        <div className="grid grid-cols-4 gap-10 pt-5 w-310">
          <div className=" flex p-4 rounded-2xl w-60 h-120 gulberg items-end justify-center">
            <h3 className="text-1xl font-medium ">Gulberg</h3>
          </div>
          <div className=" flex p-4 rounded-2xl w-60 h-120 johar items-end justify-center mt-10">
            <h3 className="text-1xl font-medium ">Johan Town</h3>
          </div>
          <div className=" flex p-4 rounded-2xl w-60 h-120 raiwind items-end justify-center">
            <h3 className="text-1xl font-medium ">Raiwind Road</h3>
          </div>
          <div className=" flex p-4 rounded-2xl w-60 h-120 dha items-end justify-center mt-10">
            <h3 className="text-1xl font-medium ">DHA</h3>
          </div>
        </div>
      </section>
      <section className="relative bg-white h-120 w-full  flex flex-col items-center justify-center">
        <div className="text-center p-5 ">
          <h2 className="text-black text-2xl font-bold">
            Explore More Universities
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-20 pt-5 items-start mt-5 w-7xl">
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <Brain className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                🧠 AI-Based Matching
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                Get smart recommendations tailored to your needs
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <BadgeCheck className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                Verified Listing
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                Every property is checked for authenticity and safety.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <HandFist className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                💬 24/7 Support
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                We’re always here to help.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-light-primary rounded-md">
              <Users className="color-primary " />
            </div>

            <div className="py-4  text-black">
              <h3 className="text-2xl font-medium text-center w-60 color-dark-blue">
                🌍 Community Living
              </h3>
              <p className="text-sm py-4 text-center w-60 color-dark-blue">
                Meet students from your own or nearby universities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-white flex flex-col items-center text-center relative overflow-hidden">
        {/* Heading */}
        <p className="text-gray-500 text-sm mb-6">
          Let’s see what people think of Tripto
        </p>

        {/* Center Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 mx-auto mb-6">
          <Image
            src={ClientOne}
            alt="Main reviewer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote */}
        <div className="max-w-xl mx-auto px-6">
          <p className="text-gray-700 text-lg leading-relaxed relative">
            <span className="text-pink-300 text-4xl align-top">“</span>
            This place is exactly like the picture posted on Tripto. Great
            service, we had a great stay!
            <span className="text-pink-300 text-4xl align-top">”</span>
          </p>

          <h3 className="mt-6 font-semibold text-lg text-gray-800">
            Ethan Rogrinho
          </h3>
          <p className="text-gray-500 text-sm">Malaysia</p>
        </div>

        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Avatar top-left */}
          <Image
            src={ClientTwo}
            alt="clienttwo"
            className="absolute top-20 left-32 w-12 h-12 rounded-full shadow-md"
          />
          {/* Avatar top-right */}
          <Image
            src={ClientThree}
            alt="clientthree"
            className="absolute top-24 right-40 w-12 h-12 rounded-full shadow-md"
          />
          {/* Avatar mid-left */}
          <Image
            src={ClientFour}
            alt="clientFour"
            className="absolute top-60 left-20 w-12 h-12 rounded-full shadow-md"
          />
          {/* Avatar mid-right */}
          <Image
            src={ClientSix}
            alt="clientFive"
            className="absolute top-56 right-20 w-12 h-12 rounded-full shadow-md"
          />
          {/* Avatar bottom-left */}
          <Image
            src={ClientFive}
            alt="clientSix"
            className="absolute bottom-24 left-52 w-12 h-12 rounded-full shadow-md"
          />
          {/* Avatar bottom-right */}
          <Image
            src={ClientSeven}
            alt="clientSeven"
            className="absolute bottom-20 right-52 w-12 h-12 rounded-full shadow-md"
          />
        </div>
      </section>
       <section className="relative bg-white h-130 w-full  flex flex-col items-center justify-center">
        <div className="text-center p-5 ">
          <h2 className="text-black text-2xl font-bold">
            Start Your Journey with CiaoNest
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-40 pt-5 items-start mt-5">
          <div className="flex flex-col items-center justify-center">
            <Image src={fast} alt="Text"/>
            <div className=" w-full bg-gray-200 p-5 flex flex-row items-center justify-center" >
              <button className="btn btn-primary">Explore Runs</button>
               </div>
          </div>
          <div className="flex flex-col items-center justify-center">
             <Image src={fast} alt="Text"/>
            <div className=" w-full bg-gray-200 p-5 flex flex-row items-center justify-center" >
              <button className="btn btn-primary">List Your Property</button>
               </div>
          </div>
          <div className="flex flex-col items-center justify-center">
             <Image src={fast} alt="Text"/>
            <div className=" w-full bg-gray-200 p-5 flex flex-row items-center justify-center" >
              <button className="btn btn-primary">Contact Support</button>
               </div>
          </div>
        </div>
      </section>
    </div>
  );
}
