"use client";
import Image from "next/image";
import Loading from "../../components/loading";
import SubMenuServe from "../../components/submenu-serve";
import { aboutTimeline } from "../../constants/about";
import clsx from "clsx";

const AboutUsDetail = () => {
  return (
    <div>
      <Loading />
      <div className="pt-[64px] lg:pt-[107px] xl:pt-0">
        <div className="header-blog-detail">
          <div className="lg:container mx-auto px-5 py-10">
            <div className="mx-auto lg:mx-0 text-[26px] md:text-[30px] xl:text-[44px] text-[#002856] text-left">
              Transforming <span className="font-bold">Lives</span> with{" "}
              <span className="font-bold">Health</span> and{" "}
              <span className="font-bold">Happiness</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 xl:max-w-[1280px] gap-5 xl:gap-0 mx-auto pt-10 md:pt-20 pb-20 xl:pb-40 px-5 lx:px-0 text-[16px] text-[#002856]">
        <SubMenuServe />
        <div className="xl:col-span-2 order-1 xl:order-2 leading-[28px]">
          <div className="text-[20px] font-bold">Our mission</div>
          <div className="md:mt-3 italic">
            Providing safe, effective, and reliable healthcare solutions. Your
            well-being, our mission.
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-3 md:mt-8 items-center text-[#666666]">
            <div>
              <p>
                At Vapharco, our goal is to promote pleasure and health
                throughout the world by developing innovative and dependable
                pharmaceutical goods.
              </p>
              <p className="mt-1">
                <span className="font-bold">Improving Global Health</span>: Our
                goal is to increase treatment options and solve unmet medical
                needs by offering dependable and innovative pharmaceutical
                goods.
              </p>
              <p className="mt-1">
                <span className="font-bold">Positively Impacting Lives</span>:
                Our purpose is to improve the happiness and well-being of
                patients all around the world by means of our efforts.
              </p>
            </div>
            <Image
              src={"/Images/about/about_1.png"}
              className="w-full h-auto"
              width={410}
              height={259}
              priority
              alt="about 1"
            />
          </div>
          <p className="mt-5 text-[#666666]">
            Our continuous dedication to quality, sustainability, and changing
            healthcare meaningfully is reflected in our vision and mission
            statements. Come along with us on this path to a world that is
            happier and healthier.
          </p>
          <div className="mt-5 md:mt-10 text-[20px] font-bold">Our Vision</div>
          <div className="md:mt-3 italic">
            Here at Vapharco, we see a future driven by well-defined goals and
            constructive influence
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-5 md:mt-8 text-[#666666]">
            <Image
              src={"/Images/about/about_2.png"}
              className="w-full h-auto"
              width={410}
              height={220}
              priority
              alt="about 1"
            />
            <p>
              <span className="font-bold">Effective Supply Chain</span>: Our
              objective is to create an exceptional and trustworthy global
              supply chain network for the smooth distribution of pharmaceutical
              products. Our commitment is to improve accessibility to necessary
              medications and shorten delivery times by means of smart alliances
              and efficient logistics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-5 md:mt-10 text-[#666666]">
            <p className="order-2 md:order-2">
              <span className="font-bold">Increased Product Portfolio</span>:
              We're dedicated to broadening the scope of our offerings to
              include a wide variety of medications and medical supplies. Our
              goal is to provide a broad range of solutions in order to
              effectively treat a variety of medical illnesses and serve a wide
              range of healthcare demands.
            </p>
            <Image
              src={"/Images/about/about_3.png"}
              className="w-full h-auto"
              width={410}
              height={220}
              priority
              alt="about 1"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-5 md:mt-10 text-[#666666]">
            <Image
              src={"/Images/about/about_4.png"}
              className="w-full h-auto"
              width={410}
              height={220}
              priority
              alt="about 1"
            />
            <p>
              <span className="font-bold">Sustainable Growth</span>: We're
              committed to attaining profitability and sustainable growth in a
              way that benefits the environment and society. Our goal is to
              create long-lasting value for all of our stakeholders by striking
              a balance between economic success and social and environmental
              responsibility.
            </p>
          </div>
          <div className="mt-10 md:mt-20 text-[20px] text-center font-bold">
            <span className="text-[#FF375F]">Formation</span> & Development
            History
          </div>
          <div className="py-2 md:py-4">
            <div className="relative w-[160px] h-[1px] mx-auto bg-[#FF375F]">
              <div className="absolute w-[50px] h-[3px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF375F]" />
            </div>
          </div>
          <div className="italic text-center">
            Significant Events in the Creation and Growth of Companies
          </div>
          <div className="relative mt-5 md:mt-20">
            <div className="grid gap-5 md:gap-10">
              {aboutTimeline?.map((event, index) => {
                return (
                  <div
                    key={index}
                    className="relative grid md:grid-cols-2 gap-20"
                  >
                    <div
                      className={clsx(
                        "flex gap-2",
                        index % 2 === 0 ? "order-1" : "order-2"
                      )}
                    >
                      <div className="flex min-w-[40px] max-w-[40px] md:min-w-[80px] md:max-w-[80px] items-center justify-center border border-black border-opacity-10 rounded-[5px]">
                        <div className="-rotate-90 text-center whitespace-nowrap">
                          {event?.time}
                        </div>
                      </div>
                      <div className="p-3 text-[#666666] border border-black border-opacity-10 rounded-[5px]">
                        <p className="font-bold">{event?.title}</p>
                        <p>{event?.content}</p>
                      </div>
                    </div>
                    <div
                      className={clsx(
                        "hidden md:block",
                        index % 2 === 0 ? "order-2" : "order-1"
                      )}
                    >
                      <div className="absolute w-[30px] h-[30px] top-3 left-1/2 -translate-x-1/2 bg-[#FF375F] rounded-full">
                        <div />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute hidden md:block w-[2px] h-full pt-5 top-0 left-1/2 -translate-x-1/2">
              <div className="w-full h-full bg-[#FF375F]" />
            </div>
          </div>
          <div className="text-[#666666]">
            <p className="mt-10 font-bold">
              Prospects for the Future: Growth Into Southeast Asia
            </p>
            <p>
              With an eye on 2024, Vapharco intends to aggressively grow its
              market share in Southeast Asian nations like Singapore, Thailand,
              Indonesia, Laos, and Cambodia. The company's dedication to ongoing
              growth and regional expansion in the pharmaceutical industry is
              reflected in its strategic strategy.
            </p>
            <p className="mt-8">
              By reaching these important benchmarks, Vapharco has proven its
              unwavering dedication to development, market expansion, and
              providing high-quality pharmaceutical goods and services in
              Vietnam and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetail;
