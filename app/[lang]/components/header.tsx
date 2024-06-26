"use client";
import Image from "next/image";
import phoneNumber from "../../../public/Images/phone_numb.svg";
import openTime from "../../../public/Images/open_time.svg";
import language from "../../../public/Images/language.svg";
import logo from "../../../public/Images/logo.png";
import Link from "next/link";
import { listSocial, navigations, navigationsObj } from "../constants/header";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "../../../i18n-config";
import { IconScrollUp } from "../constants/footer";
import { scrollToView } from "../utils";

const HeaderComponent = ({ dictionary }: any) => {
  const headerRef = useRef<any>();
  const stickyRef = useRef<any>();
  const scrollTopRef = useRef<any>();
  const mobileNavRef = useRef<any>();
  const router = useRouter();
  const pathName = usePathname();
  const [isShowNavbar, setIsShowNavbar] = useState<boolean>(false);
  const redirectedPathName = (locale: Locale | string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  const currentLanguage = useMemo(() => {
    const segments = pathName.split("/");
    return segments[1];
  }, [pathName]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => {
        if ((window as any)?.pageYOffset > headerRef?.current?.offsetTop) {
          if (stickyRef.current.className.includes("animation-head")) {
            stickyRef.current.className =
              stickyRef.current.className.replaceAll(" animation-head", "");
          }
          if (!headerRef.current.className.includes("animation-header")) {
            headerRef.current.className =
              headerRef.current.className + " animation-header";
          }
        } else {
          if (!stickyRef.current.className.includes("animation-head")) {
            stickyRef.current.className =
              stickyRef.current.className + " animation-head";
          }
          if (headerRef.current.className.includes("animation-header")) {
            headerRef.current.className =
              headerRef.current.className.replaceAll(" animation-header", "");
          }
        }
        if ((window as any)?.pageYOffset > 400) {
          if (scrollTopRef.current.className.includes("hide-scroll-top")) {
            scrollTopRef.current.className =
              scrollTopRef.current.className.replace(
                "hide-scroll-top",
                "show-scroll-top"
              );
          }
        } else {
          if (scrollTopRef.current.className.includes("show-scroll-top")) {
            scrollTopRef.current.className =
              scrollTopRef.current.className.replace(
                "show-scroll-top",
                "hide-scroll-top"
              );
          }
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window?.outerWidth >= 1024) {
      return;
    } else if (mobileNavRef?.current) {
      mobileNavRef.current.style.marginTop = `-${mobileNavRef.current.offsetHeight}px`;
    }
  }, []);

  const showMobileNav = () => {
    if (mobileNavRef?.current) {
      if (mobileNavRef.current.style.marginTop === "0px") {
        mobileNavRef.current.style.marginTop = `-${mobileNavRef.current.offsetHeight}px`;
        setIsShowNavbar(false);
      } else {
        mobileNavRef.current.style.marginTop = "0px";
        setIsShowNavbar(true);
      }
    }
  };

  const selectNavBar = (nav: string) => {
    scrollToView(nav, router);
    if (mobileNavRef?.current) {
      mobileNavRef.current.style.marginTop = `-${mobileNavRef.current.offsetHeight}px`;
    }
  };

  return (
    <>
      <div
        ref={scrollTopRef}
        className="hide-scroll-top fixed flex w-[30px] md:w-[45px] h-[30px] md:h-[45px] right-[20px] animate-bounce items-center justify-center bg-[#FF375F] duration-300 rounded-[5px] z-20"
        onClick={() => scrollToTop()}
      >
        <IconScrollUp />
      </div>
      <div
        ref={stickyRef}
        className="absolute w-full top-0 left-0 z-50 text-[14px] xl:text-[16px]"
      >
        <div className="relative hidden lg:block z-[1] bg-white">
          <div className="grid md:flex justify-center md:justify-start container mx-auto py-3 px-3 lg:px-5 text-[14px] items-center">
            <div className="hidden lg:flex md:pr-4 md:mr-4 gap-2 items-center justify-center md:justify-start md:border-r border-black border-opacity-25">
              <Image
                src={phoneNumber}
                width={16}
                height={16}
                priority
                alt="phone number"
              />
              (024) 63294103
            </div>
            <div className="hidden lg:flex gap-2 items-center justify-center md:justify-start">
              <Image
                src={openTime}
                width={16}
                height={16}
                priority
                alt="open time"
              />
              {dictionary?.header?.openTime}
            </div>
            {/* <div className="flex ml-auto gap-2 items-center justify-center">
              <div className="flex gap-2 items-center justify-center">
                <Image
                  src={language}
                  width={16}
                  height={16}
                  priority
                  alt="language"
                />
                <select
                  className="outline-none"
                  value={currentLanguage}
                  onChange={(e) => redirectedPathName(e?.target?.value)}
                >
                  {i18n.locales.map((locale) => {
                    return (
                      <option key={locale} value={locale}>
                        {dictionary?.header?.language?.[locale]}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div> */}
          </div>
        </div>
        <div className="relative hidden lg:block z-[1] bg-white">
          <div className="container mx-auto px-5">
            <div className="w-full h-[1px] bg-black opacity-25" />
          </div>
        </div>
        <div ref={headerRef}>
          <div
            className={clsx(
              "relative z-[1] bg-white",
              !isShowNavbar && "shadow-xl"
            )}
          >
            <div className="flex container mx-auto px-5 py-3 items-center justify-between">
              <Link href={"/"}>
                <Image
                  src={logo}
                  className="w-[120px] lg:w-[150px] h-[40px] lg:h-[50px]"
                  width={157}
                  height={36}
                  priority
                  alt="logo"
                />
              </Link>
              <ul className="hidden lg:flex gap-5 xl:gap-10 items-center">
                {navigations?.map((nav: string, index) => {
                  return (
                    <>
                      {nav === navigationsObj.about ||
                      nav === navigationsObj.service ? (
                        <Link key={index} href={`/${nav}`}>
                          <span className="capitalize font-semibold text-[#002856] cursor-pointer">
                            {dictionary?.header?.navName?.[nav]}
                          </span>
                        </Link>
                      ) : (
                        <span
                          className="capitalize font-semibold text-[#002856] cursor-pointer"
                          key={index}
                          onClick={() => scrollToView(nav, router)}
                        >
                          {dictionary?.header?.navName?.[nav]}
                        </span>
                      )}
                    </>
                  );
                })}
              </ul>
              <button
                className="btn hidden lg:block style1 text-[14px]"
                onClick={() => scrollToView(navigationsObj.contact, router)}
              >
                {dictionary?.header?.getQuote}
              </button>
              <button
                className="grid lg:hidden gap-1 p-2 border border-[#002856] rounded-[5px]"
                onClick={() => showMobileNav()}
              >
                {[...Array(3)]?.map((_, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-[20px] h-[2px] bg-[#FF375F]"
                    />
                  );
                })}
              </button>
            </div>
          </div>
          <div
            ref={mobileNavRef}
            className="overflow-hidden block lg:hidden z-0 duration-500 bg-white shadow-xl h-full mt-[-200%]"
          >
            <div className="container mx-auto">
              <ul className="grid lg:hidden px-5 py-5 gap-5 xl:gap-10 items-center">
                {navigations?.map((nav: string) => {
                  return (
                    <>
                      {nav === navigationsObj.about ||
                      nav === navigationsObj.service ? (
                        <Link
                          key={nav}
                          href={`/${nav}`}
                          onClick={() => selectNavBar(nav)}
                        >
                          <span className="capitalize font-semibold text-[#002856] cursor-pointer">
                            {dictionary?.header?.navName?.[nav]}
                          </span>
                        </Link>
                      ) : (
                        <span
                          className="capitalize font-semibold text-[#002856] cursor-pointer"
                          key={nav}
                          onClick={() => selectNavBar(nav)}
                        >
                          {dictionary?.header?.navName?.[nav]}
                        </span>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
