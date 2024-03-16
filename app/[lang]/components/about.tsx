"use client";
import Image from "next/image";
import ImgAbout1 from "../../../public/Images/about_1.png";
import IconChecked from "../../../public/Images/checked.svg";
import { aboutServe } from "../constants/about";
import { useState } from "react";
import clsx from "clsx";

const AboutUs = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="grid container mx-auto mt-40 gap-20 grid-cols-2">
      <div>
        <Image
          src={ImgAbout1}
          className="w-full"
          width={620}
          height={641}
          priority
          alt="about 1"
        />
      </div>
      <div>
        <div className="mt-3 text-[#FF375F] font-semibold">About Us</div>
        <div className="max-w-[600px] text-[44px] font-bold text-[#002856]">
          Distributing Pharmaceuticals since 2005
        </div>
        <p className="leading-[28px] text-[#666666]">
          We've been dedicated to distributing pharmaceuticals with precision
          and reliability. Our longstanding commitment ensures that individuals
          and healthcare providers alike have access to the medications they
          need, delivered with care and efficiency.
        </p>
        <div>
          <div className="grid grid-cols-3 mt-6">
            {aboutServe?.map((serve) => {
              return (
                <div key={serve?.idx}>
                  <div
                    className={clsx(
                      "w-fit px-2 py-2 text-[18px] font-bold text-[#002856] cursor-pointer border-b-[2px]",
                      tab === serve?.idx
                        ? "border-[#FF375F]"
                        : "border-transparent"
                    )}
                    onClick={() => setTab(serve?.idx)}
                  >
                    {serve?.tab}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about-tab-content">
            <div className="grid grid-cols-2 mt-10 gap-5 items-center">
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
                <p className="text-[20px] font-bold text-[#002856]">
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
