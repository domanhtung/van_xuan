"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { galleryExhibition } from "../constants/gallery";
import { navigations } from "../constants/header";

const GalleryExhibition = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="container pt-20 xl:pt-40 mx-auto px-5 text-[14px] xl:text-[16px]">
      <p className="text-[#FF375F] text-center font-semibold">
        Gallery Exhibitionr
      </p>
      <div className="max-w-[800px] mx-auto text-[30px] xl:text-[44px] font-bold text-[#002856] text-center">
        Discover Your Health & Recovery Works For Our Medical Clinic
      </div>
      <div className="my-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          pagination={pagination}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {galleryExhibition?.map((content, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="pt-[35px] pb-20">
                  <Image
                    src={content}
                    className="w-full"
                    width={320}
                    height={340}
                    priority
                    alt="avatar"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryExhibition;
