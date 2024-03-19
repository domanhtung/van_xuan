"use client";
import Image from "next/image";
import banner from "../../../public/Images/banner.png";
import { bannerContents } from "../constants/banner";
import { navigationsObj } from "../constants/header";
import { scrollToView } from "../utils";

const BannerComponent = () => {
  return (
    <div id={navigationsObj.home}>
      <Image
        src={banner}
        className="w-full h-[630px] lg:h-[730px] object-cover"
        width={1920}
        height={730}
        priority
        alt="banner"
      />
      <div className="relative h-[500px] sm:h-[400px] lg:h-[125px] text-[14px] xl:text-[16px]">
        <div className="absolute w-full left-0 bottom-0">
          <div className="container mx-auto px-5">
            <div className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[68px] text-center sm:text-left text-[#002856]">
              Transforming <span className="font-semibold">Lives</span> <br />{" "}
              with <span className="font-semibold">Health</span> and{" "}
              <span className="font-semibold">Happiness</span>
            </div>
            <div className="mt-4 text-[#002856]">
              Providing safe, effective, and reliable healthcare solutions. Your
              well-being, our mission.
            </div>
            <div className="sm:flex gap-2 mt-5 xl:mt-10 items-center justify-between">
              <button className="btn w-full sm:w-auto style2">
                Book An Appointment
              </button>
              <button
                className="btn w-full sm:w-auto mt-2 sm:mt-0 style0"
                onClick={() => scrollToView(navigationsObj.about)}
              >
                More About Us
              </button>
            </div>
            <div className="grid lg:grid-cols-3 mt-5 xl:mt-10 gap-4">
              {bannerContents?.map((value, index: number) => {
                return (
                  <div key={index} className="p-5 bg-white shadow-xl">
                    <div className="service-icon w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] flex group items-center justify-center">
                      {value?.icon}
                    </div>
                    <div className="mt-2 lg:mt-3 font-bold text-[18px] xl:text-[22px] text-[#002856]">
                      {value?.title}
                    </div>
                    <div className="mt-2 lg:mt-3 text-[#666666]">
                      {value?.des}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
