"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Countdowncard from "../Components/Countdowncard";
import { useRouter } from "next/navigation";
const gameItems = [{id:1},{id:12},{id:2},{id:41},{id:4},{id:3},{id:9},{id:8},];

const page = () => {
  const itemsPerView = 6;
  const cardWidth = 170;
  const cardGap = 20;
  const visibleWidth = itemsPerView * (cardWidth + cardGap) - cardGap;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, menuItems.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  const router = useRouter();

  return (
    <>
      <Navbar />

      <div className="my-10 flex flex-col justify-center items-center text-center text-5xl text-green-600">
        <div className="font-sans text-gray-600 text-[28px] mr-[440px] mt-2 mb-[40px]">
          Welcome to the guiding star in your world of gaming
        </div>

        <div className="font-sans-serif font-extrabold text-gray-950 text-[20px] mr-[900px] mt-2">
          Popular Right Now
        </div>

        <div className="h-[2px] my-3 w-[80px] bg-yellow-300 mr-[1020px]"></div>

        <div
          className="relative mx-auto overflow-hidden"
          style={{ width: `${visibleWidth}px` }} // 1140px
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-[20px]"
            style={{
              transform: `translateX(-${
                currentIndex * (cardWidth + cardGap)
              }px)`,
            }}
          >
            {gameItems.map((item) => (
              <div
                key={item.id}
                className="my-4 h-[294.66px] w-[170px] overflow-hidden shadow-lg mb-7 rounded-lg flex-shrink-0"
                onClick={()=>{
                  router.push("/Gamepage/game")
                }}
              >
                <Image
                  
                  width={250}
                  height={200}
                  className="w-[170px] h-[226.5px] object-cover"
                  src="/co9zu1.webp"
                  alt="image"
                />
                <div className="mt-[18px] text-left ml-2 mr-2">
                  <div className="font-bold text-gray-700 text-[16px] mb-2">
                    Mecha Break
                  </div>
                  <p className="text-gray-700 text-[12px] mt-[12px] mb-2 flex justify-between items-center w-full">
                    <span className="text-gray-500">Shooter</span>
                    <span className="flex items-center gap-[2px]">
                      <span className="font-semibold text-black">8</span>
                      <span className="text-green-500 text-[12px]">★</span>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-2 hover:bg-gray-50 disabled:opacity-40"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-2 hover:bg-gray-50 disabled:opacity-40"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <Countdowncard />
    </>
  );
};

export default page;
