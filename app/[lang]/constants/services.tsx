import {
  IconDeliver,
  IconFoster,
  IconOptimize,
} from "../components/icons/icon-banner";
import ImgService1 from "../../../public/Images/service_1.png";
import ImgService2 from "../../../public/Images/service_2.png";
import ImgService3 from "../../../public/Images/service_3.png";
import ImgService4 from "../../../public/Images/service_4.png";
import ImgService5 from "../../../public/Images/service_5.png";

export const serviceContents = [
  {
    icon: <IconFoster />,
    img: ImgService1,
    key:"service_1",
    title: "Market Analysis & Entry Strategy",
    des: "Your trusted partner for seamless pharmaceutical export services to Vietnam.",
  },
  {
    icon: <IconOptimize />,
    img: ImgService2,
    key:"service_2",
    title: "Regulatory Compliance & Product Registration",
    des: "Efficient regulatory support: approved dossiers, communication aid, and compliance assurance.",
  },
  {
    icon: <IconDeliver />,
    img: ImgService3,
    key:"service_3",
    title: "Supply Chain & Logistics",
    des: "Offering warehousing, transportation, and quality inspection services.",
  },
  {
    icon: <IconFoster />,
    img: ImgService4,
    key:"service_4",
    title: "Marketing Initiatives and Brand Building",
    des: "Driving market growth through research, workshops, events, promotions, and tenders.",
  },
  {
    icon: <IconOptimize />,
    img: ImgService5,
    key:"service_5",
    title: "Partnership Management",
    des: "Dedicated sales reps drive product success.",
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
