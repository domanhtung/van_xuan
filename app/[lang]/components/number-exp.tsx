import Image from "next/image";
import ImgNumberExp from "../../../public/Images/number_exp.png";

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
    <div className="relative mt-40">
      <Image
        src={ImgNumberExp}
        className="w-full object-contain"
        width={1920}
        height={350}
        priority
        alt="numb exp"
      />
      <div className="absolute w-full h-full top-0 left-0">
        <div className="container grid h-full grid-cols-4 mx-auto items-center">
          {contents?.map((item, index: number) => {
            return (
              <div key={index} className="text-center text-[#002856]">
                <div className="text-[40px] font-bold">{item?.numb}</div>
                <div className="text-[24px]">{item?.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NumberExpComponent;
