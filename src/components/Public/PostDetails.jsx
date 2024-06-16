import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaArrowRight,
  FaRegCommentDots,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaShare,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const PostDetails = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const axiosPublic = useAxiosPublic();
  const param = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["post-detail"],
    queryFn: async () => {
      const result = await axiosPublic.get(`post-detail?postId=${param.id}`);
      return result.data;
    },
  });
  const { data: userComment } = useQuery({
    queryKey: ["user-comment"],
    queryFn: async () => {
      const result = await axiosPublic.get(
        `/all-user-comment?postId=${param.id}`
      );
      return result.data;
    },
  });
  console.log(userComment);
  const handleComment = (comment) => {
    axiosPublic
      .post(`/user-comment`, {
        ...comment,
        email: user?.email,
        postId: data?._id,
      })
      .then((res) => {
        reset();
        console.log(res.data);
      });
  };
  console.log(data);
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
              <h1 className="font-semibold">{data?.userName}</h1>
              <h1 className="font-light text-sm">
                {new Date(data?.postingTime).toLocaleString()}
              </h1>
            </div>
          </div>
          <div className="w-8 h-8 text-xl flex items-center justify-center border rounded-full cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
        {/* title */}
        <div className="mt-3  text-2xl font-semibold">{data?.title}</div>
        {/* description */}
        <div className="mt-3 text-justify">{data?.body}</div>
        {/* Tags */}
        <div className="mt-3">
          <div className="font-medium italic">#{data?.tags}</div>
          {/* <div className="font-medium italic">#save_us_from_scam</div> */}
        </div>
        {/* Reaction */}
        <div className="h-[1px] w-full mb-2 mt-5 bg-slate-300"></div>
        <div className=" flex justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 items-center">
              <FaRegThumbsUp className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
              ({data?.upVote})
            </div>
            <div className="flex gap-1 items-center">
              <FaRegThumbsDown className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
              ({data?.downVote})
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
          <form onSubmit={handleSubmit(handleComment)} className="w-full">
            <textarea
              {...register("comment")}
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
          {/* {userComment?.map((item, idx) => {
            return (
              <div key={idx} className="flex gap-3">
                <div className="border w-8 h-8 ">
                  <img
                    className="w-full h-full rounded-full"
                    src="/user.png"
                    alt=""
                  />
                </div>
                <div className="bg-[#f5f5f5] p-4 flex-1">
                  <div className="font-semibold mb-1">Abdur Rahaman Rahi</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum, nemo animi eveniet, ut quos odit sunt numquam
                    voluptate laborum dolore placeat tempora nam. Dicta
                    consequuntur quasi saepe! At, molestias nisi!
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
