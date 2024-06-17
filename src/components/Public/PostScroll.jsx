import PropTypes from "prop-types";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { RotatingLines } from "react-loader-spinner";
const PostScroll = ({ data, postFetch, isPending }) => {
  const axiosPublic = useAxiosPublic();
  if (isPending) {
    return (
      <div className="flex justify-center">
        <RotatingLines
          visible={true}
          height="60"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  console.log(data);
  const handleReaction = (reactionObj, id) => {
    axiosPublic
      .patch(`/update-reaction?postId=${id}`, reactionObj)
      .then((res) => {
        if (res.data.modifiedCount >= 1) {
          postFetch();
        }
      });
  };

  return (
    <div className="">
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
                  <h1 className="font-semibold">{item.name}</h1>
                  <h1 className="font-light text-sm">
                    {new Date(item.postingTime).toLocaleString()}
                  </h1>
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
                <div
                  onClick={() => handleReaction({ upVote: 1 }, item._id)}
                  className="flex gap-1 items-center"
                >
                  <FaRegThumbsUp className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
                  ({item.upVote})
                </div>
                <div
                  onClick={() => handleReaction({ downVote: 1 }, item._id)}
                  className="flex gap-1 items-center"
                >
                  <FaRegThumbsDown className="w-7 h-7 cursor-pointer p-1 hover:bg-slate-100 rounded-full" />{" "}
                  ({item.downVote})
                </div>
              </div>
              <div className="underline ">Comment(40)</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

PostScroll.propTypes = {
  data: PropTypes.array,
  postFetch: PropTypes.func,
  isPending: PropTypes.bool,
};

export default PostScroll;
