import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaArrowRight,
  FaRegCommentDots,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaShare,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 mt-6 gap-6">
      <div className="bg-white shadow p-6 col-span-2 h-fit">
        {/* Author section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="border-2 w-12 h-12 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src="/user.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-semibold">Abdur Rahaman</h1>
              <h1 className="font-light text-sm">06 May, 2024</h1>
            </div>
          </div>
          <div className="w-8 h-8 text-xl flex items-center justify-center border rounded-full cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
        {/* title */}
        <div className="mt-3  text-2xl font-semibold">
          What happen in our education system. It is a great scam to this. We
          are very much{" "}
        </div>
        {/* description */}
        <div className="mt-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio dolor ipsam. Facilis iusto beatae, vel provident
          reprehenderit unde, totam perspiciatis, earum voluptatum nisi vitae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio dolor ipsam. Facilis iusto beatae, vel provident
          reprehenderit unde, totam perspiciatis, earum voluptatum nisi vitae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio dolor ipsam. Facilis iusto beatae, vel provident
          reprehenderit unde, totam perspiciatis, earum voluptatum nisi vitae!
        </div>
        {/* Tags */}
        <div className="mt-3">
          <div className="font-medium italic">#education</div>
          <div className="font-medium italic">#save_us_from_scam</div>
        </div>
        {/* Reaction */}
        <div className="h-[1px] w-full mb-2 mt-5 bg-slate-300"></div>
        <div className=" flex justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 items-center">
              <FaRegThumbsUp className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
              (29)
            </div>
            <div className="flex gap-1 items-center">
              <FaRegThumbsDown className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
              (26)
            </div>
          </div>
          <div
            onClick={() => setShowCommentBox(!showCommentBox)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <FaRegCommentDots />
            Comment(45)
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaShare />
            Share
          </div>
        </div>
        <div className="h-[1px] w-full mt-2 mb-3 bg-slate-300"></div>

        {/* comment */}
        <div className={`mt-6 flex gap-2 ${showCommentBox ? "" : "hidden"} `}>
          <div className="w-10 h-10 border p-1">
            <img className="w-full h-full" src="/user.png" alt="" />
          </div>
          <form className="w-full">
            <textarea
              type="text"
              rows={4}
              className="w-full outline-none bg-[#f5f5f5] p-3"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="flex items-center gap-1.5 p-2 bg-[#115cb1] text-[#6cddff]"
              >
                comment <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white shadow p-6 h-fit">
        <h1 className="text-lg font-medium pb-2 border-b-2">Comments (69)</h1>
        <div className="mt-5 flex flex-col gap-6 overflow-y-scroll h-[450px]">
          {/* first comment */}
          <div className="flex gap-3">
            <div className="border w-8 h-8 ">
              <img
                className="w-full h-full rounded-full"
                src="/user.png"
                alt=""
              />
            </div>
            <div className="bg-[#f5f5f5] p-4 flex-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              nemo animi eveniet, ut quos odit sunt numquam voluptate laborum
              dolore placeat tempora nam. Dicta consequuntur quasi saepe! At,
              molestias nisi!
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border w-8 h-8 ">
              <img
                className="w-full h-full rounded-full"
                src="/user.png"
                alt=""
              />
            </div>
            <div className="bg-[#f5f5f5] p-4 flex-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              nemo animi eveniet, ut quos odit sunt numquam voluptate laborum
              dolore placeat tempora nam. Dicta consequuntur quasi saepe! At,
              molestias nisi!
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border w-8 h-8 ">
              <img
                className="w-full h-full rounded-full"
                src="/user.png"
                alt=""
              />
            </div>
            <div className="bg-[#f5f5f5] p-4 flex-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              nemo animi eveniet, ut quos odit sunt numquam voluptate laborum
              dolore placeat tempora nam. Dicta consequuntur quasi saepe! At,
              molestias nisi!
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border w-8 h-8 ">
              <img
                className="w-full h-full rounded-full"
                src="/user.png"
                alt=""
              />
            </div>
            <div className="bg-[#f5f5f5] p-4 flex-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              nemo animi eveniet, ut quos odit sunt numquam voluptate laborum
              dolore placeat tempora nam. Dicta consequuntur quasi saepe! At,
              molestias nisi!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
