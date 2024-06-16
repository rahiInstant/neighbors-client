import { useQuery } from "@tanstack/react-query";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useComments from "../../../Hooks/useComments";
import { FaArrowLeft } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";

const ReportedComment = () => {
  const [feedChange, setFeedChange] = useState(true);
  const { user } = useAuth();
  const param = useParams();
  const axiosSecure = useAxiosSecure();
  const { userComment } = useComments(param.id);

  const handleReportedComment = (
    data,
    commentId,
    postId,
    emailComment,
    emailBlock
  ) => {
    data.preventDefault();
    const report = {
      feed: data.target.feedback.value,
      commentId,
      postId,
      emailBlock,
      emailComment,
    };
    console.log(report);
    axiosSecure
      .post("/comment-feedback", report)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div
        onClick={() => window.history.back()}
        className="w-10 h-10 mb-6 mx-5 hover:bg-slate-200 rounded-full border flex justify-center items-center duration-300 cursor-pointer"
      >
        <FaArrowLeft />
      </div>
      <div className="flex flex-col gap-2">
        {userComment?.map((item, idx) => {
          // console.log(!(item.email === user?.email))
          return (
            <div
              key={idx}
              className="shadow flex flex-col lg:items-center lg:flex-row gap-3 mx-5 p-3"
            >
              <div className="lg:w-[22%] w-full lg:border-r-2 h-full italic font-medium px-3 py-1">
                {item.email}
              </div>
              <div className="lg:w-[38%] w-full lg:border-r-2 h-full px-3">
                {item.comment}
              </div>
              <form
                // onSubmit={handleSubmit()}
                onSubmit={(data) =>
                  handleReportedComment(
                    data,
                    item._id,
                    item.postId,
                    item.email,
                    user.email
                  )
                }
                className="flex gap-3 px-3 py-1 lg:w-[40%] w-full"
              >
                <div className="relative h-fit  border rounded-md w-full">
                  <select
                    onChange={() => setFeedChange(false)}
                    name="feedback"
                    required
                    // disabled={
                    //   item.email === user?.email &&
                    //   isCommentExistInReport(item._id)
                    // }
                    className="py-3 px-5 text-lg appearance-none font-semibold rounded-md outline-none w-full"
                  >
                    <option className="hidden" value="">
                      -- feedback --
                    </option>
                    <option value="Hate-speech">Hate speech</option>
                    <option value="delete-comment">Vulnerable</option>
                    <option value="bla-bla-bla">bla-bla-bla</option>
                  </select>
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown className="text-2xl" />
                  </div>
                </div>
                <button
                  // item.email === user?.email ||
                  type="submit"
                  className={`py-3 px-5 text-lg font-semibold rounded-md border 
                    bg-blue-700 hover:bg-red-500
                   text-white  duration-200 cursor-pointer`}
                >
                  feedback
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportedComment;
