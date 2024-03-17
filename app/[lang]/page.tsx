import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import AboutUs from "./components/about";
import BannerComponent from "./components/banner";
import BlogNews from "./components/blog-news";
import ContactComponent from "./components/contact";
import FooterComponent from "./components/footer";
import GalleryExhibition from "./components/gallery-exhibition";
import SimpleMap from "./components/googlemap";
import HeaderComponent from "./components/header";
import NumberExpComponent from "./components/number-exp";
import PartnerComponent from "./components/partner";
import ServicesComponent from "./components/services";
import SubScribeComponent from "./components/subscribe";
import Testimonials from "./components/testimonials";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="relative xl:pt-[160px]">
      <HeaderComponent dictionary={dictionary} />
      <BannerComponent />
      <AboutUs />
      <ServicesComponent />
      <NumberExpComponent />
      <PartnerComponent />
      <Testimonials />
      <GalleryExhibition />
      <BlogNews />
      <ContactComponent />
      <SubScribeComponent />
      <SimpleMap />
      <FooterComponent />
    </div>
  );
}
