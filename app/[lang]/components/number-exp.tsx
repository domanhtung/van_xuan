"use client";
import Image from "next/image";
import ImgNumberExp from "../../../public/Images/number_exp.png";
import { navigations } from "../constants/header";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const contents = [
  {
    numb: 19,
    content: "Established Years",
  },
  {
    numb: 5,
    content: "Subsidiaries",
  },
  {
    numb: 250,
    content: "Employees",
  },
  {
    numb: 63,
    content: "Entered Provinces",
  },
];

interface Props {
  item: any;
  isAnimate: boolean;
}

const ContentItem = ({ item, isAnimate }: Props) => {
  let currentNumber = 0;
  const ref = useRef<any>();

  useEffect(() => {
    if (isAnimate) {
      const numberPercent = item?.numb > 20 ? Math?.floor(item?.numb / 20) : 1;
      const intervalId = setInterval(() => {
        if (ref?.current) {
          currentNumber += numberPercent;
          if (currentNumber >= item?.numb) {
            ref.current.innerHTML = item?.numb;
            clearInterval(intervalId);
          } else {
            ref.current.innerHTML = currentNumber;
          }
        }
      }, 70);
      return () => clearInterval(intervalId);
    }
  }, [isAnimate]);

  return (
    <div className="text-center text-[#002856]">
      <div ref={ref} className="text-[30px] xl:text-[40px] font-bold">
        {item?.numb}
      </div>
      <div className="text-[18px] xl:text-[24px]">{item?.content}</div>
    </div>
  );
};

const NumberExpComponent = () => {
  const currentRef = useRef<any>();
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (currentRef?.current) {
      const observer = new IntersectionObserver(function (entries) {
        if (entries?.[0]?.isIntersecting) {
          setIsAnimate(true);
          observer?.unobserve(currentRef?.current);
        }
      }, {});
      observer?.observe(currentRef?.current);
      return () =>
        observer?.unobserve &&
        currentRef?.current &&
        observer?.unobserve(currentRef?.current);
    }
  }, []);

  return (
    <div ref={currentRef} className="pt-20 xl:pt-40">
      <div className="relative">
        <Image
          src={ImgNumberExp}
          className="w-full h-[450px] sm:h-[200px] md:h-[200px] xl:h-[350px] object-cover"
          width={1920}
          height={350}
          priority
          alt="numb exp"
        />
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
          <div className="container grid h-full sm:grid-cols-2 md:grid-cols-4 mx-auto items-center">
            {contents?.map((item, index: number) => {
              return (
                <ContentItem key={index} item={item} isAnimate={isAnimate} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberExpComponent;
