"use client";
import { useState } from "react";
import heroBackground from "../components/assets/images/herobackground.png";
import Image from "next/image";
export default function Home() {

  const [activeTab, setActiveTab] = useState("apartment");

  return (
    <div className=" w-full flex-col justify-center">
      <section className="relative bg-cover bg-center bg-no-repeat heroSection min-h-screen flex flex-col items-center justify-center">
        {/* Blur overlay */}

        {/* Content */}
        <div className=" text-center text-white gap-10">
          <h1 className="text-4xl font-bold mb-4 w-200 tracking-widest font-montserrat">
            We Help You Find Your Dream Student Home In Lahore
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            📍 Smart, secure, and AI-assisted housing just for you.
          </p>

          <section>
              <div className="container mx-auto w-150 px-8 py-3 flex justify-between items-center bg-tranparent-grey rounded-4xl ">
                <button className="">
                  Appartment
                </button>
                
                <button>
                  House
                </button>
                
                <button>
                  Flats
                </button>
              </div>
          </section>

          
          
        </div>
      </section>
    </div>
  );
}
