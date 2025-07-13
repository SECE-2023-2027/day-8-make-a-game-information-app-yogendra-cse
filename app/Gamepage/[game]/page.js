"use client";
import Navbar from "@/app/Components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faGamepad,
  faCheckCircle,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import Gamescopeui from "../../Components/Gamescopepage"
const page = () => {
  const [play, setPlay] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-[url('/your-thumbnail.jpg')] bg-cover bg-center bg-no-repeat pt-[10px] pb-[100px]">
    

        <div className="mx-[180px] mt-[200px]">
          <div className="flex flex-row gap-[20px]">
            <div className="relative w-[253px] h-[339px] rounded-lg bg-gray-700">
              <Image
                src="/co9zu1.webp"
                alt="image"
                width={253}
                height={337}
                className="w-full h-full rounded-lg"
              />
              <div className="font-[Roboto] absolute -top-[130px] left-2 text-white font-extrabold text-[42px] h-16 whitespace-nowrap">
                Mecha Break
              </div>
              <div className="font-extrabold absolute text-[20px] -top-[60px] left-2 whitespace-nowrap text-white font-[Roboto] w-16 h-16">
                7/1/2025 (11 days ago)
              </div>
            </div>
            <div className="relative w-[620px] h-[340px] rounded-lg bg-black flex items-center justify-center">
              <div className="font-extrabold absolute text-[20px] -top-[60px] left-2 whitespace-nowrap text-white font-[Roboto] w-16 h-16">
                Full release
              </div>
              {!play ? (
                <>
                  <Image
                    src="/your-thumbnail.jpg"
                    alt="Mecha Break Cover"
                    width={620}
                    height={260}
                    className="h-[290px] object-cover"
                    unoptimized
                  />
                  <button
                    onClick={() => setPlay(true)}
                    className="absolute inset-0 flex justify-center items-center text-white text-6xl"
                  >
                    <Image
                      src="/youtubePlay.jpeg"
                      alt="Play Button"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </button>
                </>
              ) : (
                <iframe
                  className="w-[620px] h-[290px]" // same logic as image
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="relative w-[340px] h-[360px] flex flex-col gap-[20px]">
              <div className="bg-gray-800 rounded-lg h-[330px] mb-[30px] px-4 py-4 text-white">
                <div className="border border-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={solidStar}
                        className="text-green-400"
                      />
                      <span className="text-xl font-bold">8.0</span>
                    </div>
                    <div className="text-sm text-gray-300">15 user ratings</div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={solidStar}
                        className="text-yellow-400"
                      />
                      <span className="text-xl font-bold">4.5</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      1 critic ratings
                    </div>
                  </div>

                  <div className="flex gap-1 my-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={solidStar}
                        className={`text-white text-sm ${
                          i < 8 ? "opacity-100" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="flex flex-col items-center border border-white py-2 rounded-lg">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-white text-xl mb-1"
                    />
                    <div className="text-xs">WANT</div>
                    <div className="font-bold">115</div>
                  </div>
                  <div className="flex flex-col items-center border border-white py-2 rounded-lg">
                    <FontAwesomeIcon
                      icon={faGamepad}
                      className="text-white text-xl mb-1"
                    />
                    <div className="text-xs">PLAYING</div>
                    <div className="font-bold">27</div>
                  </div>
                  <div className="flex flex-col items-center border border-white py-2 rounded-lg">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-white text-xl mb-1"
                    />
                    <div className="text-xs">PLAYED</div>
                    <div className="font-bold">24</div>
                  </div>
                </div>
              </div>
              <div className="font-extrabold absolute text-[20px] -top-[60px] left-2 whitespace-nowrap text-white font-[Roboto] w-16 h-16">
                Amazing Season
              </div>
            </div>
          </div>
        </div>
      </div>
        <Gamescopeui/>
    </>
  );
};

export default page;
