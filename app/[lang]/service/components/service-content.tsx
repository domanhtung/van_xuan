import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ServiceContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("service");

  useEffect(() => {
    if (search) {
      const element = document?.getElementById(search);
      if (element?.scrollIntoView) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }, [search]);

  return (
    <div className="xl:col-span-2 order-1 xl:order-2 leading-[28px]">
      <p className="text-[#666666]">
        In the Vietnamese market, Patekpharm Pte. Ltd Trading Company
        Limited is a prominent importer and distributor of pharmaceuticals. In
        addition to having a broad network that encompasses all 63 provinces and
        cities, we also have deep industry knowledge and a strong commitment to
        quality. Our primary goal is to provide thorough pharmaceutical business
        development services that meet the various needs of our partners and
        clients. We offer strategic solutions that are intended to drive growth
        and support success in the pharmaceutical industry, whether you are a
        pharmaceutical manufacturer looking to expand your presence in Vietnam
        or a healthcare institution in need of a trusted drug supplier.
      </p>
      <div id="service_1" className="pt-8 text-[20px] font-bold">
        Market Analysis and Entry Strategy
      </div>
      <Image
        src={"/Images/service/service_1.png"}
        className="w-full h-auto mt-3"
        width={844}
        height={303}
        priority
        alt="service"
      />
      <div className="text-[#666666]">
        <p className="mt-5">
          Conducting a thorough market analysis is critical for identifying
          intriguing possibilities, developing trends, and the competitive
          landscape in the dynamic Vietnamese pharmaceutical market. Our team
          uses thorough research approaches to delve deeply into market
          dynamics, consumer behavior, regulatory frameworks, and industry
          trends. By evaluating market data and insights, we can present a
          comprehensive picture of the market's potential and success paths.
        </p>
        <p className="mt-2">
          Following the market analysis, we specialize in creating customized
          market entry plans that are perfectly aligned with your company's
          objectives, regulatory needs, and target audience preferences. Our
          approach includes a thorough evaluation of your unique value
          proposition, competitive positioning, and market readiness. This
          allows us to recommend strategic entry options, like alliances,
          distribution channels, or regulatory compliance tactics.
        </p>
        <p className="mt-2">
          Our focus extends to delivering in-depth insights into specific market
          sectors, the best distribution methods, and effective pricing
          strategies to increase market penetration and revenue creation. We
          discover significant client categories, preferences, and purchase
          behaviors, allowing you to adjust your products and services
          accordingly. Furthermore, we examine several distribution channels to
          determine their reach, efficiency, and fit for your items in the
          Vietnamese market.
        </p>
        <p className="mt-2">
          Furthermore, our knowledge of pricing techniques guarantees that your
          services are competitively priced while maximizing profitability. We
          evaluate elements such as local pricing benchmarks, cost structures,
          and perceived value when recommending pricing models that appeal to
          the target audience and increase sales.
        </p>
      </div>
      <div id="service_2" className="pt-8 text-[20px] font-bold">
        Partner Identification and Relationship Management
      </div>
      <Image
        src={"/Images/service/service_2.png"}
        className="w-full h-auto mt-3"
        width={844}
        height={303}
        priority
        alt="service"
      />
      <div className="text-[#666666]">
        <p className="mt-5">
          At Patekpharm, our area of expertise is finding and assessing strategic
          business partners in the pharmaceutical and healthcare sectors. Our
          all-encompassing strategy includes the following crucial elements:
        </p>
        <ul className="list-disc mt-3 pl-5">
          <li>
            Partner Identification: Based on your unique requirements, we search
            and assess possible business partners using our broad network and
            industry knowledge. Regardless of your needs—manufacturers,
            distributors, wholesalers, or healthcare institutions—we carry out
            exhaustive investigation and due diligence to find collaborators
            that share your goals and principles.
          </li>
          <li>
            Evaluation and Selection: Using factors including market presence,
            reputation, skills, and brand compatibility, our team carefully
            assesses possible partners. We give preference to partners who
            exhibit a dedication to excellence, dependability, and common
            objectives in order to establish a solid basis for cooperation.
          </li>
          <li>
            Cooperative Negotiation and Contract Agreements: We support the
            creation of thorough contract agreements that specify duties,
            expectations, and reciprocal advantages. We also facilitate
            cooperative negotiation procedures. Establishing contracts that
            promote openness, trust, and a win-win collaboration from the start
            is our aim.
          </li>
          <li>
            Strategic Alliances for Market Access: Our area of expertise is
            creating market access and product distribution through strategic
            alliances. We build synergistic relationships with important
            stakeholders in order to expand our market reach, quicken our
            growth, and seize new opportunities.
          </li>
          <li>
            Relationship Management: The foundation of our strategy is the
            development of long-lasting relationships. With important
            stakeholders, we place a high priority on efficient communication,
            teamwork, and mutual gain in order to build lasting relationships.
            Our group is still committed to fostering these connections in order
            to maintain alignment and value generation.
          </li>
          <li>
            Ongoing Support and Collaboration: We think that during the course
            of a partnership, it is important to offer ongoing support and
            collaboration. Our commitment is to enable smooth collaborations
            that promote long-term success and progress, starting from the first
            meetings and continuing through ongoing relationship management.
          </li>
        </ul>
        <p className="mt-3">
          You receive a strategic partner committed to capitalizing on
          opportunities, maximizing resources, and cultivating long-lasting
          partnerships in the healthcare and pharmaceutical industries when you
          entrust us with your partner identification and relationship
          management needs.
        </p>
      </div>
      <div id="service_3" className="pt-8 text-[20px] font-bold">
        Regulatory Compliance and Product Registration
      </div>
      <Image
        src={"/Images/service/service_3.png"}
        className="w-full h-auto mt-3"
        width={844}
        height={303}
        priority
        alt="service"
      />
      <div className="text-[#666666]">
        <p className="mt-5">
          Ensuring compliance and obtaining product registration are essential
          steps towards market entry and long-term success in the constantly
          changing world of pharmaceutical laws. At Patekpharm, we provide
          all-inclusive services intended to handle regulatory mazes and
          expedite the pharmaceutical product's route to market.
        </p>
        <p className="mt-2">
          Regulatory solutions that are specifically designed to comply with
          regional laws, ordinances, and quality requirements are our team's
          area of expertise. In order to ensure that your goods satisfy all
          requirements for safety, efficacy, and quality, we offer strategic
          counsel to handle compliance needs unique to the Vietnamese
          pharmaceutical industry.
        </p>
        <p className="mt-2">
          Effective Product Registration Procedures: Working with regulatory
          agencies like the Ministry of Health and the Drug Administration
          Department, we are experts at facilitating effective licensing,
          approval, and registration processes for products. Our seasoned
          experts use their knowledge to handle paperwork, filings, and
          communications with regulatory agencies, guaranteeing prompt approvals
          and preparedness for the market.
        </p>
        <p className="mt-2">
          Regulatory Advisory Services: With our regulatory advising services,
          you can obtain a competitive advantage. To improve compliance and
          product visibility, we provide information on labeling specifications,
          packaging guidelines, and post-market surveillance tactics. You may
          effectively handle regulatory challenges and make well-informed
          decisions with the help of our consultancy services.
        </p>
        <p className="mt-2">
          Excellence in Quality Assurance: At the heart of everything we do is
          quality. To maintain regulatory compliance throughout the product life
          cycle, our quality assurance specialists carry out thorough audits and
          checks. To preserve product integrity and regulatory trust, we support
          the establishment of strong quality management systems and the
          resolution of compliance deficiencies.
        </p>
        <p className="mt-2">
          All-inclusive Pharmacovigilance Support: With our all-inclusive
          pharmacovigilance and post-market surveillance support, you can
          guarantee patient safety and regulatory compliance. To fulfill
          pharmacovigilance obligations and preserve product safety standards,
          we offer advice on adverse event reporting, risk management, and
          compliance monitoring.
        </p>
        <p className="mt-2">
          Proactive Regulatory Partnership: By working with us, you may take
          advantage of our proactive regulatory assistance. In order to help you
          modify your compliance tactics appropriately, we keep you updated on
          legislative changes, market trends, and best practices. Providing you
          with the information and resources you need to confidently handle
          regulatory obstacles is our mission.
        </p>
        <p className="mt-2">
          Let us be your dependable partner as you navigate product registration
          and regulatory compliance in the Vietnamese pharmacy business to
          Unlock Your Market Potential. You may realize the full commercial
          potential of your product and succeed in regulatory compliance with
          our knowledge and committed help.
        </p>
      </div>
      <div id="service_4" className="pt-8 text-[20px] font-bold">
        Marketing Initiatives and Brand Building
      </div>
      <Image
        src={"/Images/service/service_4.png"}
        className="w-full h-auto mt-3"
        width={844}
        height={303}
        priority
        alt="service"
      />
      <div className="text-[#666666]">
        <p className="mt-5">
          At Patekpharm, we are experts in developing targeted advertising
          campaigns and brand-building plans that increase consumer awareness
          and stimulate demand for pharmaceuticals. The following are the main
          tasks that are included in our extensive services:
        </p>
        <ul className="list-disc mt-3 pl-5">
          <li>
            Goal-Oriented Marketing Campaigns: We create specialized marketing
            campaigns based on your target market and business goals. We make
            sure that every campaign is planned to have the most possible impact
            and produce quantifiable outcomes, from defining the main message to
            picking the best platforms.
          </li>
          <li>
            Creative Advertising Activities: Our team develops and carries out
            creative advertising campaigns that connect with your target market
            and clearly convey the benefits of your offering. Using digital,
            print, or multimedia platforms, we use creative methods to draw
            viewers in and encourage interaction.
          </li>
          <li>
            Initiatives for Strategic Brand-Building: Developing a powerful
            pharmaceutical brand necessitates a methodical strategy. We create
            brand-building campaigns that improve market recognition, trust, and
            credibility for the brand. This includes creating guidelines for
            brand identification, creating a consistent brand message, and
            cultivating favorable brand connections.
          </li>
          <li>
            Market Research and Customer Insights: We use consumer insights and
            market research to guide our strategy. Our initiatives are
            customized to effectively connect with your target audience and
            cater to their unique requirements and preferences by taking into
            account market trends, consumer behavior, and competitive
            environments.
          </li>
          <li>
            Multi-Channel Marketing Integration: To maximize reach and
            engagement, our strategy places a strong emphasis on multi-channel
            marketing integration. We employ a combination of digital marketing,
            social media, traditional advertising, and direct outreach to
            guarantee your pharmaceutical items receive maximum visibility and
            thorough market coverage.
          </li>
          <li>
            Performance Tracking and Optimization: Data-driven decision-making
            is what we think is best. In order to maximize return on investment
            and promote ongoing improvements in marketing efficacy, our team
            keeps an eye on campaign performance data, evaluates outcomes, and
            continuously refines plans.
          </li>
        </ul>
        <p className="mt-3">
          By collaborating with us, we can help your pharmaceutical brand reach
          its greatest potential through targeted marketing campaigns and
          brand-building techniques. Working together, we'll increase demand,
          raise awareness, and position your items to succeed in the cutthroat
          pharmaceutical market.
        </p>
      </div>
      <div id="service_5" className="pt-8 text-[20px] font-bold">
        Supply Chain Management and Logistics
      </div>
      <Image
        src={"/Images/service/service_5.png"}
        className="w-full h-auto mt-3"
        width={844}
        height={303}
        priority
        alt="service"
      />
      <div className="text-[#666666]">
        <p className="mt-5">
          For the pharmaceutical sector to guarantee on-time delivery, product
          availability, and effective distribution, supply chain operations and
          logistical systems must be optimized. Our area of expertise at
          Patekpharm is creating and executing strategic supply chain solutions
          made especially for pharmaceutical goods.
        </p>
        <p className="mt-3">Important Services Provided:</p>
        <ul className="list-disc mt-3 pl-5">
          <li>
            Supply Chain Optimization: We concentrate on optimizing the
            purchasing, distribution, and inventory processes that make up the
            supply chain. Our objective is to strictly adhere to industry laws
            while optimizing procedures to cut costs, shorten lead times, and
            improve overall supply chain efficiency.
          </li>
          <li>
            Logistics Excellence: Our group uses effective networks for
            distribution, shipping, and warehouse management that are tailored
            to the particular needs of the pharmaceutical industry. To guarantee
            product integrity, traceability, and on-time delivery, we make use
            of cutting-edge technologies and industry best practices.
          </li>
          <li>
            Compliance and Regulatory Expertise: Managing the pharmaceutical
            supply chain requires a solid understanding of regulatory standards.
            Our vast experience in guaranteeing adherence to regulatory
            guidelines encompasses everything from product licensing to market
            expansion. Our experience enables companies to uphold operational
            excellence while navigating complicated laws with ease.
          </li>
          <li>
            Industry-Specific Insights: With years of experience in the cosmetic
            and pharmaceutical industries in specialist research and advice, we
            provide insightful information on market dynamics, industry trends,
            and new business possibilities. Our solutions are based on
            real-world experience and are designed to specifically solve the
            problems that pharmaceutical companies encounter.
          </li>
          <li>
            Partnership for Growth: We are dedicated to creating enduring
            relationships and promoting ongoing supply chain performance
            improvement. Through strong client collaboration, our goals are to
            improve customer happiness, attain operational excellence, and
            foster sustainable corporate growth.
          </li>
        </ul>
        <p className="mt-3">
          At Patekpharm, we provide cutting-edge supply chain and logistics
          solutions for the pharmaceutical sector by fusing real-world
          experience with extensive industry knowledge. Our commitment to
          quality, adherence to regulations, and customer-focused methodology
          distinguish us as a reliable collaborator within the pharmaceutical
          supply chain network.
        </p>
        <p className="mt-3">
          Join together with us to reduce risks, streamline your supply chain
          processes, and seize fresh chances for expansion in the cutthroat
          pharmaceutical sector.
        </p>
      </div>
    </div>
  );
};

export default ServiceContent;
