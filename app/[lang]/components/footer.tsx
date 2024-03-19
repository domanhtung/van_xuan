"use client";
import Image from "next/image";
import Logo from "../../../public/Images/logo.png";
import {
  IconCopyright,
  IconList,
  IconLocation,
  IconMail,
  IconSupport,
} from "../constants/footer";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="bg-[#002856] text-[14px] xl:text-[16px]">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 py-10 sm:py-20 xl:py-[120px] text-white">
          <div className="px-3 lg:col-span-4">
            <Link href={"/"}>
              <Image
                src={Logo}
                className="w-[100px] lg:w-[157px] h-[24px] lg:h-[36px]"
                width={157}
                height={36}
                priority
                alt="logo"
              />
            </Link>
            <p className="mt-5">
              Van Xuan Pharmaceuticals is Your Reliable Distributor for
              Essential Medications. Ensuring precision and efficiency in
              pharmaceutical distribution for individuals and healthcare
              providers
            </p>
          </div>
          <div className="px-3 lg:col-span-3">
            <div className="text-[18px] xl:text-[24px] font-semibold">
              Contact information
            </div>
            <div className="w-[65px] h-[2px] mt-3 bg-[#FF375F]" />
            <div className="flex gap-1 mt-6">
              <IconLocation />
              Shophouse 2B, 1st floor Green Pearl Mega Mall, No 378, Minh Khai
              Road, Hai Ba Trung District, Hanoi, Vietnam
            </div>
            <div className="flex gap-1 mt-3">
              <IconSupport />
              +258-456-8790
            </div>
            <div className="flex gap-1 mt-3">
              <IconMail />
              info@duch.com
            </div>
          </div>
          <div className="px-3 lg:col-span-2">
            <div className="text-[18px] xl:text-[24px] font-semibold">
              Quick Links
            </div>
            <div className="w-[65px] h-[2px] mt-3 bg-[#FF375F]" />
            <div className="flex gap-1 mt-4 items-center list-footer">
              <IconList /> About Us
            </div>
            <div className="flex gap-1 mt-2 items-center list-footer">
              <IconList /> Our Services
            </div>
            <div className="flex gap-1 mt-2 items-center list-footer">
              <IconList /> Pricing Plan
            </div>
            <div className="flex gap-1 mt-2 items-center list-footer">
              <IconList /> Privacy Policy
            </div>
          </div>
          <div className="px-3 lg:col-span-3">
            <div className="text-[18px] xl:text-[24px] font-semibold">
              Subscribe Newsletter
            </div>
            <div className="w-[65px] h-[2px] mt-3 bg-[#FF375F]" />
            <input
              className="input-normal h-[45px] lg:h-[55px] mt-3"
              placeholder="Your Email"
            />
            <button className="btn style3 w-full mt-4">Subscribe Now</button>
          </div>
        </div>
        <div className="sm:h-[70px] py-5 border-t border-white border-opacity-10">
          <div className="grid sm:flex h-full justify-center gap-3 items-center">
            <div className="flex items-center gap-1 text-white">
              <IconCopyright />
              Duch. All Rights Reserved By
              <span>HiBootstrap</span>
            </div>
            {/* <div className="flex gap-2 items-center justify-center sm:justify-start text-white">
              Follow Us On:
              {listSocial?.map((social) => {
                return (
                  <Link
                    key={social?.idx}
                    href={social?.url}
                    className="flex w-[32px] min-w-[32px] h-[32px] items-center justify-center bg-white rounded-full duration-200 hover:-translate-y-1"
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
