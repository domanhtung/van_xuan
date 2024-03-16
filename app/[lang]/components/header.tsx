"use client";
import Image from "next/image";
import phoneNumber from "../../../public/Images/phone_numb.svg";
import openTime from "../../../public/Images/open_time.svg";
import language from "../../../public/Images/language.svg";
import logo from "../../../public/Images/logo.png";
import Link from "next/link";
import { listSocial, navigations } from "../constants/header";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const HeaderComponent = () => {
  const headerRef = useRef<any>();
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => {
        if ((window as any)?.pageYOffset > headerRef?.current?.offsetTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div
      className={clsx(
        "absolute w-full top-0 left-0 bg-white z-50",
        !isSticky && "animation-head"
      )}
    >
      <div className="flex container mx-auto py-3 text-[14px] items-center border-b border-black border-opacity-25">
        <div className="flex pr-4 mr-4 gap-2 items-center border-r border-black border-opacity-25">
          <Image
            src={phoneNumber}
            width={16}
            height={16}
            priority
            alt="phone number"
          />
          (+024) 592 71 449
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src={openTime}
            width={16}
            height={16}
            priority
            alt="open time"
          />
          Mon - Fri: 08:00 am - 05:00 pm
        </div>
        <div className="flex ml-auto pr-4 mr-4 gap-2 items-center">
          <Image
            src={language}
            width={16}
            height={16}
            priority
            alt="language"
          />
          <select className="outline-none">
            <option>English</option>
            <option>Vietnamese</option>
          </select>
        </div>
        <div className="flex gap-4 items-center">
          {listSocial?.map((social) => {
            return (
              <Link
                key={social?.idx}
                href={social?.url}
                className="duration-200 hover:-translate-y-1"
              >
                <Image
                  src={social?.img}
                  width={20}
                  height={20}
                  priority
                  alt="social"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div
        ref={headerRef}
        className={clsx(
          "shadow-xl",
          isSticky && "fixed w-full top-0 left-0 bg-white animation-header"
        )}
      >
        <div className="flex container mx-auto py-3 items-center justify-between">
          <Image src={logo} width={120} height={50} priority alt="logo" />
          <ul className="flex gap-10 items-center">
            {navigations?.map((nav: string) => {
              return (
                <span
                  className="capitalize font-semibold text-[#002856] cursor-pointer"
                  key={nav}
                >
                  {nav}
                </span>
              );
            })}
          </ul>
          <button className="btn style1">Get Free Quote</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
