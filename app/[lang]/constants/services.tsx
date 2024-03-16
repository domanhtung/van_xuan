import {
  IconDeliver,
  IconFoster,
  IconOptimize,
} from "../components/icons/icon-banner";
import ImgService1 from "../../../public/Images/service_1.jpg";
import ImgService2 from "../../../public/Images/service_2.jpg";

export const serviceContents = [
  {
    icon: <IconFoster />,
    img: ImgService1,
    title: "Business Development Services Agency Services",
    des: "It is a long established fact that reader will be distracted by the readable.",
  },
  {
    icon: <IconOptimize />,
    img: ImgService1,
    title: "Regulatory Services",
    des: "It is a long established fact that reader will be distracted by the readable.",
  },
  {
    icon: <IconDeliver />,
    img: ImgService2,
    title: "Product Manager",
    des: "It is a long established fact that reader will be distracted by the readable.",
  },
  {
    icon: <IconDeliver />,
    img: ImgService2,
    title: "Product Manager",
    des: "It is a long established fact that reader will be distracted by the readable.",
  },
];

export const IconArrowRight = () => {
  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.30667 4.59008L0 1.28341L0.946667 0.350078L5.18667 4.59008L0.946667 8.83008L0 7.88341L3.30667 4.59008Z"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  );
};
