"use client";
import Image from "next/image";
import ImgAddBlog from "../../../../public/Images/add_blog.svg";
import ImgCommentBlog from "../../../../public/Images/comment_blog.svg";
import { useMemo } from "react";
import { blogsPreview } from "../../constants/blogs";

const BlogList = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="max-w-[800px] mx-auto text-[30px] xl:text-[44px] font-bold text-[#002856] text-center">
        Blog & News
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
              className="border group border-black border-opacity-10"
            >
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
              <div className="px-5 pb-5 text-[18px] xl:text-[24px] group-hover:text-[#FF375F] text-[#002856] font-bold duration-500">
                {item?.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
