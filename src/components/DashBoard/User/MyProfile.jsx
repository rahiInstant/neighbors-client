import { FaPen } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import usePosts from "../../../Hooks/usePosts";
import PostCard from "./PostCard";
import useUserInfo from "../../../Hooks/useUserInfo";
const MyProfile = ({ setKey }) => {
  const { user } = useAuth();
  const { data, refetchPost } = usePosts();
  const {userInfo} = useUserInfo()
  return (
    <div>
      <div className="mt-5 flex items-center flex-col">
        <div className="flex justify-center">
          <div className="border relative h-fit w-fit flex flex-col rounded-full">
            <img
              className="w-32 border p-1 lg:w-40 h-32 lg:h-40 rounded-full"
              src={user?.photoURL?user?.photoURL:'/user.png'}
              alt=""
            />
            <button className="p-2 absolute bottom-0 right-1 lg:right-8 bg-white  rounded-full flex items-center justify-center border text-[#15701a] border-[#15701a]  font-medium hover:bg-[#15701a] hover:text-white duration-150">
              <FaPen className="w-4 h-4" />
            </button>
          </div>
        </div>
        <h1 className="text-[35px] font-bold ">{user?.displayName}</h1>
        <p className="text-lg italic">{user?.email}</p>
        <div className={`mt-3 py-1 px-8 ${userInfo?.isMember?'bg-[#b38f1a]':'bg-[#5c5c5b]'} font-medium text-xs w-fit text-white rounded-full`}>
          {userInfo?.isMember?'Gold':'Silver'}
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
              id={item._id}
            />
          );
        })}
      </div>
      {data?.length == 0 ? (
        <div className="border px-5 py-4 rounded-md w-full h-40 flex items-center justify-center text-xl font-medium">
          No Post Yet!!!
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-center mt-2">
          <h1 className="text-lg italic font-medium text-center md:text-left">
            Best three post showed here. Click "show all" to see all post.
          </h1>
          <div
            onClick={() => {
              refetchPost();
              setKey("1");
            }}
            className="px-5 py-2 w-full md:w-auto rounded-lg bg-[#1173b4] text-lg font-medium italic text-white text-center mt-4 cursor-pointer"
          >
            show all
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
