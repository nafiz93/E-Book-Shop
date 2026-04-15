import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../../assets/images/hero.png'

const Banner = () => {
  return (
    <div className="w-6/12 mx-auto">
      <div className="flex flex-col-reverse md:flex-col lg:flex-col">
        <div>
          <h1 className="text-center mb-5 mt-10 font-inter text-[40px] md:text-[50px] lg:text-[72px] font-bold leading-[50px] md:leading-[60px] lg:leading-[84px] ">
          We Build <br /> <span className="text-[#9F62F2]">Productive</span> Apps
        </h1>
        <small className="text-center block">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </small>
        </div>

        <div className="flex items-center gap-5 md:gap-8 lg:gap-10-5 justify-center flex-nowrap">
          <li className="flex items-center gap-2 whitespace-nowrap mt-5 md:mt-0 lg:mt-0">
            <FaGooglePlay /> <span className="font-medium ">Google Play</span>
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap mt-5 md:mt-0 lg:mt-0">
            <FaAppStoreIos /> <span className="font-medium ">App Store</span>
          </li>
        </div>
      </div>

        <div className="mt-10">
          <img src={hero} alt="Hero Image" />
        </div>
    </div>
  );
};

export default Banner;
