import Image from "next/image";
import { partners } from "../constants/partner";
import Link from "next/link";

const PartnerComponent = () => {
  return (
    <div className="container mt-40 mx-auto">
      <p className="text-[#FF375F] text-center font-semibold">Our Partner</p>
      <div className="max-w-[650px] mx-auto text-[44px] font-bold text-[#002856] text-center">
        Our Trusted Partner
      </div>
      <div className="flex gap-5 mt-5 justify-center flex-wrap">
        {partners?.map((partner, index: number) => {
          return (
            <Link
              href={partner?.url}
              key={index}
              target={"_blank"}
              className="flex w-[230px] h-[120px] px-1 items-center hover:border-none hover:shadow-[1px_1px_10px_rgba(0,0,0,0.2)] justify-center border border-black border-opacity-10"
            >
              <Image
                src={partner?.img}
                className="w-full h-[80px] object-contain"
                width={230}
                height={80}
                priority
                alt="partner"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerComponent;
