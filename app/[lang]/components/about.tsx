"use client";
import Image from "next/image";
import ImgAbout1 from "../../../public/Images/about_1.png";
import IconChecked from "../../../public/Images/checked.svg";
import { aboutServe } from "../constants/about";
import { useState } from "react";
import clsx from "clsx";
import { navigationsObj } from "../constants/header";

const AboutUs = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div
      id={navigationsObj.about}
      className="grid container mx-auto px-5 pt-20 xl:pt-40 gap-5 xl:gap-20 lg:grid-cols-2 text-[14px] xl:text-[16px]"
    >
      <div>
        <Image
          src={ImgAbout1}
          className="w-full h-auto sm:h-[400px] lg:h-[641px] object-contain"
          width={620}
          height={641}
          priority
          alt="about 1"
        />
      </div>
      <div>
        <div className="mt-3 text-[#FF375F] text-center md:text-left font-semibold">
          About Us
        </div>
        <div className="max-w-[600px] text-[24px] sm:text-[30px] xl:text-[44px] text-center md:text-left font-bold text-[#002856]">
          Welcome to PatekPharm
        </div>
        <p className="leading-[28px] text-[#666666]">
          A pioneering pharmaceutical trading company based in Singapore,
          dedicated to serving the vibrant and diverse markets of Southeast
          Asia, including Singapore, Vietnam, Thailand, Indonesia, and Malaysia.
          Established with a vision to enhance the distribution of
          pharmaceuticals with precision and reliability, we are committed to
          being a trusted partner in the region's medical and pharmaceutical
          sectors.
        </p>
        <div>
          <div className="grid md:flex 2xl:grid md:grid-cols-3 gap-3 md:gap-0 mt-3 xl:mt-6 md:justify-between">
            {aboutServe?.map((serve) => {
              return (
                <div
                  key={serve?.idx}
                  className={clsx(
                    "w-full md:w-fit xl:px-2 xl:py-2 text-[14px] xl:text-[18px] font-bold text-[#002856] cursor-pointer border-b-[2px]",
                    tab === serve?.idx
                      ? "border-[#FF375F]"
                      : "border-black border-opacity-5 md:border-opacity-100 md:border-transparent"
                  )}
                  onClick={() => setTab(serve?.idx)}
                >
                  {serve?.tab}
                </div>
              );
            })}
          </div>
          <div className="about-tab-content">
            <div className="grid sm:grid-cols-2 mt-5 xl:mt-10 gap-5 items-center">
              <div className="relative">
                <Image
                  src={aboutServe?.[tab - 1]?.img}
                  className="relative w-full h-auto z-[1]"
                  width={375}
                  height={390}
                  alt="serve"
                />
                <div
                  style={{ height: "calc(100% + 8px)" }}
                  className="absolute w-1/2 h-full top-[-4px] left-[-4px] bg-[#FF375F] z-0"
                />
              </div>
              <div>
                <p className="text-[18px] xl:text-[20px] font-bold text-[#002856]">
                  {aboutServe?.[tab - 1]?.title}
                </p>
                {aboutServe?.[tab - 1]?.contents?.map(
                  (content, index: number) => {
                    return (
                      <div key={index} className="flex gap-2 mt-3">
                        <div className="flex w-[35px] min-w-[35px] h-[35px] items-center justify-center rounded-full bg-[#F3F4F6] grayscale">
                          <Image
                            src={IconChecked}
                            width={20}
                            height={20}
                            priority
                            alt="checked"
                          />
                        </div>
                        <div className="mt-2 leading-[24px] text-[#666666]">
                          {content}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
