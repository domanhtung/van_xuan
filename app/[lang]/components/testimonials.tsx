"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../constants/testimonials";
import { Pagination } from "swiper/modules";
import doubleQuotes from "../../../public/Images/double_qoutes.svg";
import Image from "next/image";

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="container mt-20 xl:mt-40 mx-auto px-5 text-[14px] xl:text-[16px]">
      <p className="text-[#FF375F] text-center font-semibold">Testimonials</p>
      <div className="max-w-[650px] mx-auto text-[30px] xl:text-[44px] font-bold text-[#002856] text-center">
        Read Our Medical Clinic Clients Reviews Discovered For You
      </div>
      <div className="mt-5 xl:mt-10 my-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={pagination}
          modules={[Pagination]}
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials?.map((content, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="pt-[35px] pb-20">
                  <div className="pb-5 shadow-[1px_1px_10px_rgba(0,0,0,0.1)] rounded-[5px]">
                    <div className="relative h-[50px]">
                      <Image
                        src={content?.img}
                        className="absolute bottom-[10px] left-[20px] rounded-full z-0"
                        width={70}
                        height={70}
                        priority
                        alt="avatar"
                      />
                      <div className="absolute flex w-[35px] h-[35px] left-[65px] bottom-0 items-center justify-center rounded-full bg-white shadow-xl z-10">
                        <Image
                          src={doubleQuotes}
                          width={15}
                          height={15}
                          priority
                          alt="double qoutes"
                        />
                      </div>
                    </div>
                    <div className="px-5 mt-3">
                      <p className="text-[#666666]">{content?.comment}</p>
                      <p className="mt-5 text-[18px] xl:text-[24px] font-bold text-[#002856]">
                        {content?.name}
                      </p>
                      <p className="text-[#666666]">{content?.job}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
