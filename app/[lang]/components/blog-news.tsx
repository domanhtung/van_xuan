"use client";
import Image from "next/image";
import { blogsPreview } from "../constants/blogs";
import ImgAddBlog from "../../../public/Images/add_blog.svg";
import ImgCommentBlog from "../../../public/Images/comment_blog.svg";
import { useMemo } from "react";
import { navigationsObj } from "../constants/header";
import Link from "next/link";

const BlogNews = () => {
  return (
    <div id={navigationsObj.blog} className="pt-20 xl:pt-40">
      <div className="py-10 xl:py-20 px-5 bg-[#F9F9F9] text-[14px] xl:text-[16px]">
        <div className="container mx-auto">
          <p className="text-[#FF375F] text-center font-semibold">
            Blog & News
          </p>
          <div className="max-w-[800px] mx-auto text-[30px] xl:text-[44px] font-bold text-[#002856] text-center">
            Read Our Latest News & Articles
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {blogsPreview?.map((item, index: number) => {
              const time = useMemo(() => {
                return {
                  date: item?.time?.getDate(),
                  month: item?.time?.toLocaleString("en-US", {
                    month: "short",
                  }),
                };
              }, [item?.time]);

              return (
                <div
                  key={index}
                  className="border group border-black border-opacity-10 cursor-pointer"
                >
                  <Link href={`/${navigationsObj?.blog}/${item?.slug}`}>
                    <div className="relative w-full h-[300px] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover group-hover:rotate-[4deg] group-hover:scale-[1.11] duration-500"
                        width={414}
                        height={293}
                        src={item?.img}
                        alt="blog"
                      />
                      <div className="absolute top-5 right-5 px-3 xl:px-4 py-2 bg-[#002856] text-white rounded-[50px]">
                        {item?.subject}
                      </div>
                    </div>
                    <div className="relative flex h-[60px] gap-2 p-5 items-center text-[#666666]">
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
                      <div className="absolute flex w-[70px] h-[70px] right-5 bottom-5 items-center justify-center bg-white rounded-full shadow-xl">
                        <div className="text-center font-semibold text-[#FF375F] leading-[20px]">
                          <div>{time?.date}</div>
                          <div>{time?.month}</div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="text-[18px] xl:text-[24px] group-hover:text-[#FF375F] text-[#002856] font-bold duration-500 text-ellipsis-2">
                        {item?.title}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
