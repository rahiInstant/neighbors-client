import { FaRegComments, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const PostCard = ({ title, upVote, downVote }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col text-[#615e5e] shadow">
      <div className="text-center font-medium italic border-b p-5">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center justify-center  p-3  w-full border-b border-r">
          <FaRegThumbsUp className="w-5 h-5" /> ({upVote})
        </div>
        <div className="flex gap-1 items-center justify-center  p-3 w-full border-b">
          <FaRegThumbsDown className="w-5 h-5" /> ({downVote})
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={() => navigate(`/post/comment/2485215hgrtd784`)}
          className="p-2  w-full flex justify-center border-r"
        >
          <FaRegComments className="w-8 h-8 text-green-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
        </div>
        <div className="p-2  w-full flex justify-center">
          <RiDeleteBin4Fill className="w-8 h-8 text-red-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
