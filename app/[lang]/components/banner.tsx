import Image from "next/image";
import banner from "../../../public/Images/banner.png";
import { IconFoster } from "./icons/icon-banner";
import { bannerContents } from "../constants/banner";

const BannerComponent = () => {
  return (
    <div>
      <Image
        src={banner}
        className="w-full  h-[730px] object-cover"
        width={1920}
        height={730}
        priority
        alt="banner"
      />
      <div className="relative h-[125px]">
        <div className="absolute w-full left-0 bottom-0">
          <div className="container mx-auto">
            <div className="text-[68px] text-[#002856]">
              Transforming <span className="font-semibold">Lives</span> <br />{" "}
              with <span className="font-semibold">Health</span> and{" "}
              <span className="font-semibold">Happiness</span>
            </div>
            <div className="mt-4 text-[#002856]">
              Providing safe, effective, and reliable healthcare solutions. Your
              well-being, our mission.
            </div>
            <div className="flex mt-10 items-center justify-between">
              <button className="btn style2">Book An Appointment</button>
              <button className="btn style0">More About Us</button>
            </div>
            <div className="grid grid-cols-3 mt-10 gap-4">
              {bannerContents?.map((value, index: number) => {
                return (
                  <div className="p-5 bg-white shadow-xl">
                    <div className="service-icon flex group items-center justify-center">
                      {value?.icon}
                    </div>
                    <div className="mt-3 font-bold text-[22px] text-[#002856]">
                      {value?.title}
                    </div>
                    <div className="mt-3 text-[#666666]">{value?.des}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
