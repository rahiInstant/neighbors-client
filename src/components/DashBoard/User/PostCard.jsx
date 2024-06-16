import { FaRegComments, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import usePosts from "../../../Hooks/usePosts";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';
const PostCard = ({ title, upVote, downVote, id }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { refetchPost } = usePosts();
  const successMsg = (msg) => toast.success(msg);
  const handlePostDelete = (id) => {
    axiosSecure.delete(`/delete-post?postId=${id}`).then((res) => {
      if(res.data?.deletedCount>=1) {
        successMsg('Delete post successfully.')
        refetchPost();
      }
      
      console.log(res.data);
    });
  };
  ''.substring
  return (
    <div className="flex flex-col text-[#615e5e] shadow">
      <div className="text-center font-medium italic border-b p-5">{title.substring(0,15)}...</div>
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
          onClick={() => navigate(`/post/comment/${id}`)}
          className="p-2  w-full flex justify-center border-r"
        >
          <FaRegComments className="w-8 h-8 text-green-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
        </div>
        <div
          onClick={() => handlePostDelete(id)}
          className="p-2  w-full flex justify-center"
        >
          <RiDeleteBin4Fill className="w-8 h-8 text-red-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title:PropTypes.string
}
export default PostCard;