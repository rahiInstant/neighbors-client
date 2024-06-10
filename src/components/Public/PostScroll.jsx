import { IoIosArrowDown } from "react-icons/io";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
const PostScroll = () => {
  return (
    <div className="">
      <div className="pb-2 border-b">
        {/*  */}
        <div className="relative h-fit  border w-[250px]">
          <select
            name="category"
            required
            className=" py-4 px-5    appearance-none   outline-none w-full"
          >
            <option className="hidden" value="">
              -- Category --
            </option>
            <option value="Most Recent">Most Recent</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Most viewed">Most viewed</option>
          </select>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow p-6 mt-6">
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
        <div className="mt-3  text-2xl ">
          What happen in our education system. It is a great scam to this. We
          are very much{" "}
          <Link to={`/details/255d4f5452d`} className="text-[#1f5cdf] font-medium italic text-base cursor-pointer">
            see more...
          </Link>
        </div>
        <div className="mt-3">
          <div className="font-medium italic">#education</div>
          <div className="font-medium italic">#save_us_from_scam</div>
        </div>
        
        <div className="italic flex justify-between mt-6">
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
          <div className="underline ">Comment(45)</div>
        </div>
      </div>
    </div>
  );
};

export default PostScroll;
