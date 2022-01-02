import "../Content/content.scss";
import bond from "../images/bond.jpg";
import taron from "../images/taron.jpg";
import kingsman from "../images/kingsman.jpg";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function Content() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div>
      <div className="w-full flex justify-center pb-[300px]">
        <div className="text-white grid justify-items-center w-full">
          <div
            className="flex flex-wrap w-10/12 mb-[300px] gap-28 justify-center 2xl:w-2/3 xl:mt-[200px]" 
            id="content1"
            data-aos="fade-up"
          >
            <div className="relative mt-28 xl:w-[40%]">
              <div className="con-text text-4xl mb-10">
                SUITS THAT CELEBRITY LOVE
              </div>
              <div className="con-text text-2xl">
                Our suits are made from the finest material that famous people
                absolutely love. We are the biggest company that provides suits
                for movies.
              </div>
              <div className="mt-20 con-text text-2xl bg-white text-black w-56">
                <a
                  className="w-full flex justify-center pb-3 pt-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  href=""
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>
            <img className="w-[500px]" src={bond} alt="" />
          </div>
          <div
            className="flex flex-wrap-reverse w-10/12 mb-[300px] gap-28 justify-center 2xl:w-2/3"
            data-aos="fade-up"
          >
            <img className="w-[500px]" src={taron} alt="" />
            <div className="relative mt-28 xl:w-[40%]">
              <div className="con-text text-4xl mb-10">OUR OWN MOVIE</div>
              <div className="con-text text-2xl">
                Our prestige and luxurious brand was so popular that it was made
                into world known movies with a movie star Taron Egerton.
              </div>
              <div className="mt-20 con-text text-2xl bg-white text-black w-56">
                <a
                  className="w-full flex justify-center pb-3 pt-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  href=""
                >
                  WATCH TRAILER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px] mb-[100px]" id="location">
        <img
          className="h-full w-full object-cover relative opacity-20"
          src={kingsman}
          alt=""
        />
        <div className="con-text text-white flex-col relative top-[-400px]">
          <div className="flex justify-center text-2xl md:text-5xl">
            YOU CAN FIND US ON:
          </div>
          <div className="flex justify-center mt-16 text-xl md:text-3xl">
            11 Savile Row, Mayfair
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
