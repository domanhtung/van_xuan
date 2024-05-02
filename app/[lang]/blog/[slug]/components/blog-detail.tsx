"use client";
import Image from "next/image";
import Link from "next/link";
import IconSearch from "../../../../../public/Images/icon_search.svg";
import { blogsPreview } from "../../../constants/blogs";
import IconCalendar from "../../../../../public/Images/calendar.svg";
import IconArrowRight from "../../../../../public/Images/arrow_right.svg";
import { useMemo } from "react";
import clsx from "clsx";
import ImgAddBlog from "../../../../../public/Images/add_blog.svg";
import ImgCommentBlog from "../../../../../public/Images/comment_blog.svg";
import BlogDetailTeamBuilding from "./team-bulding";
import { navigationsObj } from "../../../constants/header";
import FuturePharmaceutical from "./future-pharmaceutical";
import OverviewOfVietnam from "./overview-of-vietnam";
import Loading from "../../../components/loading";

const newCategory = [
  "Team building",
  "medicine",
  "pharmaceuticals",
  "Oncology",
  "Health care",
];

const tags = [
  "football",
  "health",
  "Oncology",
  "Team building",
  "Medicine",
  "Analgesic, Antipyretic",
];

interface Props {
  slug: string;
}

const BlogDetail = ({ slug }: Props) => {
  const currentBlog = blogsPreview?.find((blog) => blog?.slug === slug);

  return (
    <>
      <Loading />
      <div className="pt-[64px] lg:pt-[107px] xl:pt-0">
        <div className="header-blog-detail">
          <div className="lg:container mx-auto px-5 py-10">
            <div className="mx-auto lg:mx-0 text-[26px] md:text-[30px] xl:text-[44px] font-bold text-[#002856] text-left">
              {currentBlog?.title}
            </div>
            <div className="flex gap-2 mt-2 text-[12px] flex-wrap md:text-[16px] items-center">
              <span className="hover:text-[#FF375F]">
                <Link href={"/"}>Home</Link>
              </span>
              ~<span className="text-[#FF375F]">{currentBlog?.title}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 xl:max-w-[1280px] gap-5 xl:gap-0 mx-auto pt-20 pb-20 xl:pb-40 px-5 lx:px-0 text-[14px] lg:text-[16px] text-[#002856]">
        <div className="xl:pr-10 order-2 xl:order-1">
          <div className="bg-[#F9F9F9] p-5 rounded-[8px]">
            <div className="pb-3 lg:pb-5 text-[16px] lg:text-[20px] font-bold">
              Search Here
            </div>
            <div className="flex pl-5 items-center border border-[#FF375F] bg-white border-opacity-20 rounded-[10px]">
              <input
                className="w-full !h-[20px] bg-transparent outline-none"
                placeholder="Search"
              />
              <div className="p-3">
                <Image
                  src={IconSearch}
                  className="min-w-[20px]"
                  width={20}
                  height={20}
                  priority
                  alt="search"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F9] mt-5 p-5 rounded-[8px]">
            <div className="pb-3 lg:pb-5 text-[16px] lg:text-[20px] font-bold">
              Popular Posts
            </div>
            {blogsPreview?.map((item, index) => {
              const time = useMemo(() => {
                return `${item?.time?.getDate()} ${item?.time?.toLocaleString(
                  "en-US",
                  {
                    month: "short",
                  }
                )}, ${item?.time?.getFullYear()}`;
              }, [item?.time]);

              return (
                <Link href={`/${navigationsObj?.blog}/${item?.slug}`}>
                  <div
                    key={index}
                    className="flex gap-3 mt-4 group cursor-pointer"
                  >
                    <Image
                      src={item?.preview}
                      className="w-[85px] min-w-[85px] h-[85px] rounded-[4px] object-cover"
                      width={85}
                      height={85}
                      priority
                      alt="banner"
                    />
                    <div>
                      <p className="font-bold group-hover:text-[#FF375F] text-ellipsis-2">
                        {item?.title}
                      </p>
                      <div className="flex gap-2 items-center mt-2 text-[14px] text-[#888888]">
                        <Image
                          src={IconCalendar}
                          className="w-[12px] min-w-[12px] h-[12px]"
                          width={12}
                          height={12}
                          priority
                          alt="calendar"
                        />
                        {time}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="bg-[#F9F9F9] mt-5 p-5 rounded-[8px]">
            <div className="pb-2 text-[16px] lg:text-[20px] font-bold">
              News Category
            </div>
            {newCategory?.map((category) => {
              return (
                <div
                  key={category}
                  className="bg-[#FF375F] rounded-[15px] cursor-pointer"
                >
                  <div
                    className={clsx(
                      "flex w-full gap-2 items-center hover:w-[98%] mt-3 ml-auto rounded-[14px] font-semibold bg-white duration-150",
                      "group text-[15px] lg:text-[18px] p-4 lg:p-5"
                    )}
                  >
                    {category}
                    <Image
                      src={IconArrowRight}
                      className="min-w-[20px] opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 duration-150"
                      width={20}
                      height={20}
                      priority
                      alt="arrow right"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F9F9F9] mt-5 p-5 rounded-[8px]">
            <div className="pb-2 text-[16px] lg:text-[20px] font-bold">
              News Category
            </div>
            <div className="flex flex-wrap gap-3">
              {tags?.map((tag) => {
                return (
                  <div
                    key={tag}
                    className="px-3 py-2 bg-[#EFF0F2] text-[14px] hover:bg-[#FF375F] hover:text-white rounded-[50px] cursor-pointer duration-150"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 order-1 xl:order-2">
          <Image
            src={currentBlog?.img || ""}
            className="w-full h-auto md:h-[450px] object-cover"
            width={850}
            height={450}
            priority
            alt="hero img"
          />
          <div className="relative flex h-[60px] gap-2 pt-5 items-center text-[#666666]">
            <Image
              src={ImgAddBlog}
              width={15}
              height={15}
              priority
              alt="add blog"
            />
            <div>Admin</div>
            <Image
              src={ImgCommentBlog}
              width={15}
              height={15}
              priority
              alt="add blog"
            />
            <div>No Comment</div>
          </div>
          <div className="text-[20px] lg:text-[28px] text-[#002856] font-bold">
            {currentBlog?.title}
          </div>
          {currentBlog?.id === 1 && <BlogDetailTeamBuilding />}
          {currentBlog?.id === 2 && <FuturePharmaceutical />}
          {currentBlog?.id === 3 && <OverviewOfVietnam />}
          <div className="flex mt-5 lg:mt-10 gap-3 p-5 border border-black border-opacity-10 items-center">
            <span>Tags:</span>
            <span>{currentBlog?.tags?.join(", ")}</span>
          </div>
          <div className="mt-5 mg:mt-10 p-5 pb-10 border border-black border-opacity-10">
            <div className="text-[18px] lg:text-[24px] font-bold">
              Leave A Comment
            </div>
            <p className="mt-1 text-[#666666]">
              Your email address will not be published. Required fields are
              marked.
            </p>
            <textarea className="w-full h-[145px] mt-5 border border-black border-opacity-10 outline-none" />
            <div className="grid grid-cols-2 gap-5 mt-5">
              <input
                className="w-full !h-[50px] border px-5 border-black border-opacity-10 outline-none"
                placeholder="Name*"
              />
              <input
                className="w-full !h-[50px] border px-5 border-black border-opacity-10 outline-none"
                placeholder="Email Address*"
              />
            </div>
            <input
              className="w-full !h-[50px] mt-5 border px-5 border-black border-opacity-10 outline-none"
              placeholder="Phone Number*"
            />
            <button className="btn style2 w-full md:w-fit mt-5">
              Post A Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
