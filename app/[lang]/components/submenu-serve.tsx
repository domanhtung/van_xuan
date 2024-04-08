"use client";
import Image from "next/image";
import IconSearch from "../../../public/Images/icon_search.svg";
import { serviceContents } from "../constants/services";
import { countries } from "../constants/countries";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { navigationsObj } from "../constants/header";

const SubMenuServe = () => {
  const router = useRouter();

  const scrollToView = (id: string) => {
    if (typeof document !== "undefined") {
      const element = document?.getElementById(id);
      if (element?.scrollIntoView) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      } else {
        router && router?.push(`/${navigationsObj.service}?service=${id}`);
      }
    }
  };

  return (
    <div className="sticky-service xl:pr-10 order-2 xl:order-1 pb-10 no-scroll">
      <div className="bg-[#F9F9F9] p-5 rounded-[8px]">
        <div className="pb-3 lg:pb-5 text-[16px] lg:text-[20px] font-bold">
          Search Here
        </div>
        <div className="flex pl-5 items-center border border-[#FF375F] bg-white border-opacity-20 rounded-[10px]">
          <input
            className="w-full !h-[20px] bg-transparent outline-none"
            placeholder="Search"
          />
          <div className="p-3">
            <Image
              src={IconSearch}
              className="min-w-[20px]"
              width={20}
              height={20}
              priority
              alt="search"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] mt-5 p-5 rounded-[8px]">
        <div className="pb-3 lg:pb-5 text-[16px] lg:text-[20px] font-bold">
          We serve
        </div>
        <div className="grid gap-5">
          {serviceContents?.map((serve, index) => {
            return (
              <div
                key={index}
                className="flex gap-5 items-center cursor-pointer"
                onClick={() => scrollToView(serve.key)}
              >
                <Image
                  src={serve.img}
                  className="w-[85px] min-w-[85px] h-[85px] rounded-[4px] object-cover"
                  width={85}
                  height={85}
                  priority
                  alt="serve"
                />
                <div className="text-[20px] font-bold">{serve.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#002856] mt-5 p-5 rounded-[8px]">
        <div className="pb-3 lg:pb-5 text-[16px] lg:text-[20px] text-white font-bold">
          Feel free to contact us for any query
        </div>
        <div className="grid gap-5">
          <input
            className="!h-[50px] px-5 border-white border border-opacity-25 bg-transparent text-white rounded-[5px] outline-none"
            placeholder="Full Name"
          />
          <input
            className="!h-[50px] px-5 border-white border border-opacity-25 bg-transparent text-white rounded-[5px] outline-none"
            placeholder="Email Address"
          />
          <select
            defaultValue={""}
            className="w-full !h-[50px] px-5 border-white border border-opacity-25 bg-transparent text-white rounded-[5px] outline-none"
          >
            <option value={""} className="bg-[#002856] text-white" disabled>
              Your location
            </option>
            {countries?.map((country, index) => {
              return (
                <option
                  key={country.sortname}
                  value={country.name}
                  className="bg-[#002856] text-white"
                >
                  {country.name}
                </option>
              );
            })}
          </select>
          <textarea
            className="px-5 border-white border border-opacity-25 bg-transparent text-white rounded-[5px] outline-none"
            placeholder="Message..."
          />
          <button className="btn style3">Book An Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default SubMenuServe;
