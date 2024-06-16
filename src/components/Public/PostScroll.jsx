import { IoIosArrowDown } from "react-icons/io";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import moment from 'moment'
const PostScroll = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["all-post"],
    queryFn: async () => {
      const res = await axiosPublic.get("/all-post");
      return res.data;
    },
  });
  console.log(data);
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
      {data?.map((item, idx) => {
        return (
          <div key={idx} className="bg-white shadow p-6 mt-6">
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
                  <h1 className="font-semibold">{item.userName}</h1>
                  <h1 className="font-light text-sm">{new Date(item.postingTime).toLocaleString()}</h1>
                </div>
              </div>
              <div className="w-8 h-8 text-xl flex items-center justify-center border rounded-full cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-3  text-2xl ">
              {item.title}
              <Link
                to={`/details/${item._id}`}
                className="text-[#1f5cdf] font-medium italic text-base cursor-pointer"
              >
                see more...
              </Link>
            </div>
            <div className="mt-3">
              <div className="font-medium italic">#{item.tags}</div>
              {/* <div className="font-medium italic">#save_us_from_scam</div> */}
            </div>

            <div className="italic flex justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center">
                  <FaRegThumbsUp className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
                  ({item.upVote})
                </div>
                <div className="flex gap-1 items-center">
                  <FaRegThumbsDown className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
                  ({item.downVote})
                </div>
              </div>
              <div className="underline ">Comment(45)</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostScroll;
