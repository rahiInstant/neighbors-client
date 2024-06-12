import { FaRegComments, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";

const MyPosts = () => {
  const postCard = () => {
    return (
      <div className="flex flex-col text-[#615e5e] shadow">
        <div className="text-center font-medium italic border-b p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corrupti deserunt voluptatibus. Distinctio, reprehenderit! Quaerat?
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center justify-center  p-3  w-full border-b border-r">
            <FaRegThumbsUp className="w-5 h-5" /> (29)
          </div>
          <div className="flex gap-1 items-center justify-center  p-3 w-full border-b">
            <FaRegThumbsDown className="w-5 h-5" /> (26)
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-2  w-full flex justify-center border-r">
            <FaRegComments className="w-8 h-8 text-green-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
          </div>
          <div className="p-2  w-full flex justify-center">
            <RiDeleteBin4Fill className="w-8 h-8 text-red-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="mt-5 grid lg:grid-cols-3 gap-5">
        {postCard()}
        {postCard()}
        {postCard()}
        {postCard()}
        {postCard()}
        {postCard()}
        {postCard()}
        {postCard()}
      </div>
    </div>
  );
};

export default MyPosts;
