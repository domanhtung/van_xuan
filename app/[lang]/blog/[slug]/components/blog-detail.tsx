"use client";
import Link from "next/link";

const BlogDetail = () => {
  return (
    <div className="header-blog-detail">
      <div className="container mx-auto px-5 py-10">
        <div className="max-w-[800px] mx-auto lg:mx-0 text-[30px] xl:text-[44px] font-bold text-[#002856] text-center lg:text-left">
          Blog Details Left Sidebar
        </div>
        <div className="flex gap-2 mt-2 items-center">
          <span className="hover:text-[#FF375F]">
            <Link href={"/"}>Home</Link>
          </span>
          ~<span className="text-[#FF375F]">Blog Details Left Sidebar</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
