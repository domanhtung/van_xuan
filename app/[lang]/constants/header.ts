import facebook from "../../../public/Images/facebook.svg";
import twitter from "../../../public/Images/devicon_twitter.svg";
import telegram from "../../../public/Images/telegram.svg";
import linkedin from "../../../public/Images/linkedin.svg";

export const listSocial = [
  {
    idx: 1,
    img: facebook,
    url: "",
  },
  {
    idx: 2,
    img: twitter,
    url: "",
  },
  {
    idx: 3,
    img: telegram,
    url: "",
  },
  {
    idx: 4,
    img: linkedin,
    url: "",
  },
];

export const navigationsObj = {
  home: "home",
  services: "services",
  about: "about",
  blog: "blog",
  contact: "contact",
  gallery: "gallery",
  doctor: "doctor",
  pricing: "pricing",
};

export const navigations = [
  navigationsObj.home,
  navigationsObj.services,
  navigationsObj.about,
  navigationsObj.blog,
  navigationsObj.contact,
];

export const localeName = {
  en: "English",
  vn: "Vietnamese",
};
