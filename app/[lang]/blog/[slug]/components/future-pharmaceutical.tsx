import Image from "next/image";
import Img1 from "../../../../../public/Images/blog_6.png";
import Img3 from "../../../../../public/Images/blog_1_4.jpg";

const FuturePharmaceutical = () => {
  return (
    <div className="text-[#666666] leading-[28px]">
      <p className="pt-3">
        The landscape of Vietnam's pharmaceutical sector is undergoing a
        profound metamorphosis, driven by escalating healthcare expenditures and
        an expanding middle-class demographic. This article embarks on a journey
        to unravel Vietnam's strategic roadmap, delineating the trajectory until
        2030 and envisioning the horizon stretching out to 2045.
      </p>
      <p className="pt-3">
        In October, Vietnam's Prime Minister issued Decision NO. 1165/QD-TTg,
        endorsing the 'National Strategy for Development of Vietnam’s
        Pharmaceutical Industry to 2030,' with a visionary outlook extending to
        2045. This strategic move reflects a broader initiative aimed at
        nurturing the pharmaceutical sector in response to the expanding middle
        class and the subsequent rise in healthcare expenditure.
      </p>
      <p className="pt-3">
        However, the pharmaceutical realm is inherently intricate. Ensuring the
        highest quality standards is paramount to safeguarding the well-being of
        Vietnamese consumers. This necessitates rigorous monitoring and
        regulation as the industry evolves, presenting numerous opportunities
        for foreign expertise to contribute.
      </p>
      <p className="pt-3">
        Furthermore, the advent of next-generation free trade agreements is
        expected to unlock investment prospects by dismantling market entry
        barriers. For instance, the European Union Vietnam Free Trade Agreement
        (EVFTA) eliminated over half of the tariffs on pharmaceutical imports
        from the EU upon its implementation.
      </p>
      <p className="pt-3">
        Nevertheless, both new entrants and established foreign firms operating
        in Vietnam's pharmaceutical landscape must possess a deep understanding
        of industry dynamics to navigate effectively amidst evolving trends and
        regulations.
      </p>
      <div className="pt-3">
        <Image
          className="w-full h-auto md:h-[450px] object-cover"
          src={Img1}
          width={800}
          height={450}
          priority
          alt="img 3"
        />
      </div>
      <div className="pt-3 text-[18px] lg:text-[22px] text-[#002856] font-bold">
        Objectives of Vietnam's Pharmaceutical Industry
      </div>
      <p className="pt-3">
        The objectives of Vietnam's pharmaceutical industry are outlined in the
        National Strategy for Development of Vietnam’s Pharmaceutical Industry
        to 2030, setting forth fundamental goals that serve as guiding
        principles for the sector's advancement. These objectives form the
        cornerstone of the strategy, providing a framework for its development.
        They encompass:
      </p>
      <ul className="list-disc mt-3 pl-5">
        <li>
          Ensuring access to essential medicines for Vietnamese citizens at
          affordable prices.
        </li>
        <li>
          Enhancing the country's research capabilities and fostering the
          production of original brand-name drugs.
        </li>
        <li>
          Establishing Vietnam as a regional hub for the manufacturing,
          processing, and innovation of brand-name pharmaceuticals.
        </li>
        <li>
          Elevating the country's pharmaceutical regulatory system to Maturity
          Level 4, in accordance with World Health Organization standards,
          signifying advanced performance and continuous improvement.
        </li>
        <li>
          Harnessing the potential of medicinal herbs, drugs, and products to
          create high-quality and high-value goods.
        </li>
        <li>
          Promoting the domestic production of medicinal raw materials to reduce
          dependency on imports. Optimizing medication usage to ensure efficient
          and effective healthcare delivery.
        </li>
      </ul>
      <div className="pt-3 text-[18px] lg:text-[22px] text-[#002856] font-bold">
        Targets for Vietnam's Pharmaceutical Sector
      </div>
      <p className="pt-3">
        The outlined objectives can be further detailed into specific targets as
        follows:
      </p>
      <ul className="list-disc mt-3 pl-5">
        <li>
          Ensure proactive and prompt provision of 100 percent of drugs for
          disease prevention and treatment needs.
        </li>
        <li>
          Manufacture 80 percent of drugs consumed domestically, constituting 70
          percent of the market value of all drugs sold in Vietnam.
        </li>
        <li>
          Produce 20 percent of the raw materials essential for domestic drug
          production.
        </li>
        <li>
          Generate adequate vaccines to meet 100 percent of expanded vaccination
          demand and 30 percent of service vaccination demand.
        </li>
        <li>
          Develop a minimum of 100 original brand-name drugs, vaccines, and/or
          biological products.
        </li>
        <li>
          Establish eight areas for sustainable exploitation of natural
          medicinal herbs and between two and five areas for large-scale
          medicinal herb production.
        </li>
        <li>
          Standardize medicinal ingredients for domestic drug production,
          including extracts, essential oils, and medicinal powders.
        </li>
        <li>
          Achieve World Health Organization (WHO) Maturity Level 3 or higher,
          indicating a stable and well-functioning regulatory system.
        </li>
        <li>
          Ensure 100 percent of drug trading establishments adhere to good
          practice standards.
        </li>
        <li>
          Ensure all drug testing, vaccine, and biological product testing
          facilities meet good laboratory practice (GLP) standards.
        </li>
        <li>
          Have at least 20 percent of drug manufacturing facilities meet EU-GMP,
          PICs-GMP, or equivalent standards.
        </li>
        <li>
          Monitor and manage all drugs in the market for effectiveness and
          safety according to Ministry of Health regulations.
        </li>
        <li>
          Attain a ratio of 1 person per 100 inpatient beds and two people per
          1,000 prescriptions dispensed to outpatients with insurance cards in
          clinical pharmacy.
        </li>
        <li>
          Implement complete digital transformation within the pharmaceutical
          industry.
        </li>
        <li>
          Digitize information and data on drugs licensed for circulation in
          Vietnam and add them to the Pharmaceutical Industry Data Bank.
        </li>
        <li>
          Interconnect 100 percent of drug manufacturing, wholesale,
          import-export, and retail establishments nationwide.
        </li>
        <li>
          Deploy artificial intelligence in pharmaceutical industry activities.
        </li>
        <li>
          Achieve a ratio of 4 pharmacists per 10,000 people, with pharmacists
          trained in clinical pharmacy constituting at least 20 percent.
        </li>
      </ul>
      <p className="pt-3">
        With these targets in mind, Vietnam's pharmaceutical industry is
        projected to reach a value of US$20 billion by 2045, with advancements
        in drug testing, distribution, and clinical pharmacy comparable to those
        of leading nations.
      </p>
    </div>
  );
};

export default FuturePharmaceutical;
