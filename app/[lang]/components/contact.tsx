"use client";

import { useEffect, useState } from "react";
import { contacts } from "../constants/contact";
import clsx from "clsx";
import { IconHideQuest, IconShowQuest } from "./icons/icon-quest";
import AOS from "aos";
import "aos/dist/aos.css";
import { navigations } from "../constants/header";

const ContactComponent = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>();
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <div
      id={navigations[4]}
      className="container grid lg:grid-cols-2 pt-20 xl:pt-40 mx-auto px-5 overflow-hidden text-[14px] xl:text-[16px]"
    >
      <div data-aos="fade-right" className="lg:pr-10">
        <div className="p-10 bg-[#002856]">
          <p className="text-[20px] text-white font-bold">
            Feel free to contact us for any query
          </p>
          <div className="grid grid-cols-2 mt-5 gap-5">
            <input
              className="input-normal h-[45px] lg:h-auto"
              placeholder="Full Name"
            />
            <input
              className="input-normal h-[45px] lg:h-auto"
              placeholder="Email Address"
            />
            <input
              className="input-normal h-[45px] lg:h-auto"
              placeholder="Phone Number"
            />
            <input
              className="input-normal h-[45px] lg:h-auto"
              placeholder="Booking Date"
            />
            <select className="input-normal h-[45px] lg:h-auto select-normal">
              <option>Department</option>
            </select>
            <select className="input-normal h-[45px] lg:h-auto select-normal">
              <option>Select Doctor</option>
            </select>
          </div>
          <select className="input-normal h-[45px] lg:h-auto select-normal mt-5">
            <option>Select Location</option>
          </select>
          <textarea className="input-normal mt-5" />
          <button className="btn style3 w-full mt-5">
            Book An Appointment
          </button>
        </div>
      </div>
      <div data-aos="fade-left" className="mt-10 lg:mt-0">
        <p className="text-[#FF375F] font-semibold text-center md:text-left">
          People Also Ask
        </p>
        <div className="text-[26px] md:text-[30px] xl:text-[44px] text-center md:text-left text-[#002856] font-bold">
          Frequently Asked Questions About The Patient For The Public
        </div>
        <div>
          {contacts?.map((contact, index: number) => {
            return (
              <div key={index}>
                <button
                  key={index}
                  className={clsx(
                    "flex w-full py-3 px-5 mt-4 gap-2 items-center justify-between text-left border rounded-[5px] text-[16px] xl:text-[20px] font-semibold text-[#002856]",
                    selectedQuestion === index
                      ? "border-r-[#FF3952] border-t-[#FF3952] border-l-[#FF3952] border-b-transparent"
                      : "border-[#002856]"
                  )}
                  onClick={() =>
                    setSelectedQuestion(
                      index == selectedQuestion ? undefined : index
                    )
                  }
                >
                  {contact?.title}
                  <span
                    className={clsx(
                      "font-bold leading-5",
                      selectedQuestion === index
                        ? "text-[#FF375F] text-[24px]"
                        : "text-[#002856] text-[20px]"
                    )}
                  >
                    {selectedQuestion === index ? (
                      <IconHideQuest />
                    ) : (
                      <IconShowQuest />
                    )}
                  </span>
                </button>
                <div
                  className={clsx(
                    "overflow-hidden duration-150",
                    selectedQuestion === index ? "h-auto" : "h-0"
                  )}
                >
                  <div className="p-5 border border-r-[#FF3952] border-b-[#FF3952] border-l-[#FF3952] border-t-transparent">
                    {contact?.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
