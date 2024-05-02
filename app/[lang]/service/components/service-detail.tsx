"use client";
import Loading from "../../components/loading";
import SubMenuServe from "../../components/submenu-serve";
import { Suspense } from "react";
import ServiceContent from "./service-content";

const ServiceDetail = () => {
  return (
    <div>
      <Loading />
      <div className="pt-[64px] lg:pt-[107px] xl:pt-0">
        <div className="header-blog-detail">
          <div className="lg:container mx-auto px-5 py-10">
            <div className="mx-auto lg:mx-0 text-[26px] md:text-[30px] xl:text-[44px] text-[#002856] text-left">
              Your Trusted Partner in Pharmaceutical Excellence
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 xl:max-w-[1280px] gap-5 xl:gap-0 mx-auto pt-10 md:pt-20 pb-20 xl:pb-40 px-5 lx:px-0 text-[16px] text-[#002856]">
        <SubMenuServe />
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceContent />
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceDetail;
