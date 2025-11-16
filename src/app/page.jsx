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
Users
} from "lucide-react";

import Image from "next/image";
import lums from "../components/assets/images/lums.png";
import umt from "../components/assets/images/umt.png";
import fast from "../components/assets/images/fast.png";
import uol from "../components/assets/images/uol.png";
import gulberg from "../components/assets/images/gulberg.png";
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
          <h2 className="text-black text-2xl font-bold">
            POPULAR Areas
          </h2>
          <hr className="border-2 color-primary"/>
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
    </div>
  );
}
