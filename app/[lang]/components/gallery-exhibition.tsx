"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { galleryExhibition } from "../constants/gallery";

const GalleryExhibition = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="container mt-40 mx-auto">
      <p className="text-[#FF375F] text-center font-semibold">
        Gallery Exhibitionr
      </p>
      <div className="max-w-[650px] mx-auto text-[44px] font-bold text-[#002856] text-center">
        Discover Your Health & Recovery Works For Our Medical Clinic
      </div>
      <div className="my-swiper">
        <Swiper
          slidesPerView={4}
          spaceBetween={4}
          pagination={pagination}
          modules={[Pagination]}
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
