"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IconArrowRight, serviceContents } from "../constants/services";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { clsx } from "clsx";

const ServicesComponent = () => {
  return (
    <div className="container mt-40 mx-auto">
      <p className="text-[#FF375F] text-center font-semibold">
        What's Happening
      </p>
      <div className="max-w-[650px] mx-auto text-[44px] font-bold text-[#002856] text-center">
        We're Providing Best Services To Our Customers
      </div>
      <div className="relative mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {serviceContents?.map((content, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={content?.img}
                  className="w-full h-auto"
                  width={415}
                  height={290}
                  priority
                  alt="service"
                />
                <div className="relative h-[128px]">
                  <div className="absolute w-[90%] left-1/2 bottom-0 p-5 -translate-x-1/2 bg-white shadow-xl">
                    <div className="flex gap-3 items-center">
                      <div className="service-icon flex min-w-[70px] group items-center justify-center">
                        {content?.icon}
                      </div>
                      <div className="text-[20px] font-bold text-[#002856]">
                        {content?.title}
                      </div>
                    </div>
                    <p className="mt-4 text-[#666666] leading-[28px]">
                      {content?.des}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
          <div className="swiper-button swiper-button-next">
            <IconArrowRight />
          </div>
          <div className="swiper-button swiper-button-prev">
            <IconArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
