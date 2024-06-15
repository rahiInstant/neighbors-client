import { FaPen } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import usePosts from "../../../Hooks/usePosts";
import PostCard from "./PostCard";
const MyProfile = ({ setKey }) => {
  const { user } = useAuth();
  const { data, refetchPost } = usePosts();
  return (
    <div>
      <div className="mt-5 flex items-center flex-col">
        <div className="flex justify-center">
          <div className="border relative h-fit w-fit flex flex-col rounded-full">
            <img
              className="w-32 border p-1 lg:w-40 h-32 lg:h-40 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button className="p-2 absolute bottom-0 right-1 lg:right-8 bg-white  rounded-full flex items-center justify-center border text-[#15701a] border-[#15701a]  font-medium hover:bg-[#15701a] hover:text-white duration-150">
              <FaPen className="w-4 h-4" />
            </button>
          </div>
        </div>
        <h1 className="text-[35px] font-bold ">{user?.displayName}</h1>
        <p className="text-lg italic">{user?.email}</p>
        <div className="mt-3 py-1 px-8 bg-[#be6512] font-medium text-xs w-fit text-white rounded-full">
          silver
        </div>
      </div>
      <div className="mt-5 grid lg:grid-cols-3 gap-5">
        {data?.slice(0, 3).map((item, idx) => {
          return (
            <PostCard
              key={idx}
              title={item.title}
              upVote={item.upVote}
              downVote={item.downVote}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-lg italic font-medium">
          Best three post showed here. Click "show all" to see all post.
        </h1>
        <div
          onClick={() => {
            refetchPost();
            setKey("1");
          }}
          className="px-5 py-2 rounded-lg bg-[#1173b4] text-lg font-medium italic text-white w-fit mt-4 cursor-pointer"
        >
          show all
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
