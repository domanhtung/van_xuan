"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IconArrowRight, serviceContents } from "../constants/services";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { clsx } from "clsx";
import { navigationsObj } from "../constants/header";
import Link from "next/link";

const ServicesComponent = () => {
  return (
    <div
      id={navigationsObj.service}
      className="container pt-20 px-5 xl:pt-40 mx-auto text-[14px] xl:text-[16px]"
    >
      <p className="text-[#FF375F] text-center font-semibold">Our services</p>
      <div className="max-w-[800px] mx-auto text-[30px] xl:text-[44px] font-bold text-[#002856] text-center">
        We're Providing Best Services To Our Customers
      </div>
      <div className="relative mt-5 xl:mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
        >
          {serviceContents?.map((content, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Link href={`/${navigationsObj.service}?service=${content.key}`}>
                  <Image
                    src={content?.img}
                    className="w-full h-auto"
                    width={415}
                    height={290}
                    priority
                    alt="service"
                  />
                  <div className="relative h-[128px]">
                    <div
                      className={clsx(
                        "absolute w-[90%] md:h-[200px] left-1/2 bottom-0 p-5 -translate-x-1/2 bg-white shadow-xl cursor-pointer duration-150",
                        "hover:scale-105 hover:translate-y-[-20px]"
                      )}
                    >
                      <div className="flex gap-3 items-center">
                        <div className="service-icon flex w-[60px] xl:w-[70px] h-[60px] xl:h-[70px] min-w-[60px] xl:min-w-[70px] group items-center justify-center">
                          {content?.icon}
                        </div>
                        <div className="text-[16px] xl:text-[20px] font-bold text-[#002856]">
                          {content?.title}
                        </div>
                      </div>
                      <p className="mt-4 text-[#666666] leading-[28px]">
                        {content?.des}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex gap-3 pt-3 justify-center">
          <div className="swiper-button swiper-button-prev">
            <IconArrowRight />
          </div>
          <div className="swiper-button swiper-button-next">
            <IconArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
