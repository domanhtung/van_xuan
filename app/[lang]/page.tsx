import AboutUs from "./components/about";
import BannerComponent from "./components/banner";
import BlogNews from "./components/blog-news";
import ContactComponent from "./components/contact";
import GalleryExhibition from "./components/gallery-exhibition";
import SimpleMap from "./components/googlemap";
import Loading from "./components/loading";
import NumberExpComponent from "./components/number-exp";
import PartnerComponent from "./components/partner";
import ServicesComponent from "./components/services";
import SubScribeComponent from "./components/subscribe";
import Testimonials from "./components/testimonials";

export default async function IndexPage() {
  const googleMapKey = process?.env?.GOOGLE_MAP_KEY || "";

  return (
    <div>
      <Loading />
      <BannerComponent />
      <AboutUs />
      <ServicesComponent />
      <NumberExpComponent />
      <PartnerComponent />
      <GalleryExhibition />
      <Testimonials />
      <BlogNews />
      <ContactComponent />
      <SubScribeComponent />
      <SimpleMap mapKey={googleMapKey} />
    </div>
  );
}
