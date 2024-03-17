import Image from "next/image";
import ImgSubscribe from "../../../public/Images/subscribe.png";

const SubScribeComponent = () => {
  return (
    <div className="relative mt-20 xl:mt-40 text-[14px] xl:text-[16px]">
      <Image
        src={ImgSubscribe}
        className="w-full h-[310px] object-cover"
        width={1920}
        height={310}
        priority
        alt="subscribe"
      />
      <div className="absolute w-full md:w-[570px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <input
          className="input-subscribe placeholder-white text-[14px]"
          placeholder="Enter your Email Address"
        />
        <button className="btn style4 mt-6 mx-auto">SUBSCRIBE NOW</button>
      </div>
    </div>
  );
};

export default SubScribeComponent;
