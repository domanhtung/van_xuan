"use client";
import { navigationsObj } from "../constants/header";
import imgCategory1 from "../../../public/Images/category_1.png";
import imgCategory2 from "../../../public/Images/category_2.png";
import imgCategory3 from "../../../public/Images/category_3.png";
import imgCategory4 from "../../../public/Images/category_4.png";
import imgCategory5 from "../../../public/Images/category_5.png";
import imgCategory6 from "../../../public/Images/category_6.png";
import Image from "next/image";
import { scrollToView } from "../utils";

const categories = [
  {
    img: imgCategory1,
    name: "Analgesic, Antipyretic",
    product: "17 products",
  },
  {
    img: imgCategory2,
    name: "Oncology",
    product: "9 products",
  },
  {
    img: imgCategory3,
    name: "Antiviral",
    product: "13 products",
  },
  {
    img: imgCategory4,
    name: "Antiemetic",
    product: "9 products",
  },
  {
    img: imgCategory5,
    name: "Allergic reaction",
    product: "12 products",
  },
  {
    img: imgCategory6,
    name: "Other products",
    product: "50++",
  },
];

const GalleryExhibition = () => {
  return (
    <div className="pt-20 xl:pt-40 text-[14px] xl:text-[16px]">
      <div className="py-10 bg-[#F9F9F9]">
        <div className="container mx-auto px-5">
          <p className="text-[#FF375F] text-center font-semibold">
            Popular Categories
          </p>
          <div className="max-w-[800px] mx-auto text-[30px] xl:text-[44px] font-bold text-[#002856] text-center">
            Discover Our Best-Selling Product Categories
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            {categories?.map((category, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-2 p-3 md:p-5 gap-1 items-center bg-white rounded-[20px]"
                >
                  <div>
                    <p className="text-[16px] xl:text-[20px] font-semibold">
                      {category?.name}
                    </p>
                    <p>{category?.product}</p>
                  </div>
                  <div>
                    <Image
                      src={category?.img}
                      className="w-full h-auto md:h-[150px] object-contain"
                      width={150}
                      height={150}
                      priority
                      alt="category"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex py-3 lg:pb-5 lg:py-10 justify-end">
            <button
              className="btn style1"
              onClick={() => scrollToView(navigationsObj.contact)}
            >
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryExhibition;
