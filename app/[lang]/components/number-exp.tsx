"use client";
import Image from "next/image";
import ImgNumberExp from "../../../public/Images/number_exp.png";
import { navigations } from "../constants/header";

const contents = [
  {
    numb: 19,
    content: "Years of experience",
  },
  {
    numb: 1886,
    content: "Happy Patients",
  },
  {
    numb: 114,
    content: "Number of Doctors",
  },
  {
    numb: 189,
    content: "Number of Staffs",
  },
];

const NumberExpComponent = () => {
  return (
    <div className="pt-20 xl:pt-40">
      <div className="relative">
        <Image
          src={ImgNumberExp}
          className="w-full h-[450px] sm:h-[200px] md:h-[200px] xl:h-[350px] object-cover"
          width={1920}
          height={350}
          priority
          alt="numb exp"
        />
        <div className="absolute w-full h-full top-0 left-0">
          <div className="container grid h-full sm:grid-cols-2 md:grid-cols-4 mx-auto items-center">
            {contents?.map((item, index: number) => {
              return (
                <div key={index} className="text-center text-[#002856]">
                  <div className="text-[30px] xl:text-[40px] font-bold">
                    {item?.numb}
                  </div>
                  <div className="text-[18px] xl:text-[24px]">
                    {item?.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberExpComponent;
