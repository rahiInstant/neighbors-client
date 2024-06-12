import { FaRegComments } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";

const MyPosts = () => {
    const postCard = () => {
        return (
          <div className="flex shadow items-center justify-between  p-3 text-[#615e5e]">
            <div className="w-[60%] py-1 px-2  border-r-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              corrupti deserunt voluptatibus. Distinctio, reprehenderit! Quaerat?
            </div>
            <div className="py-1 px-2 w-[10%] text-center border-r-2">229</div>
            <div className="py-1 px-2 w-[10%] text-center border-r-2">124</div>
            <div className="py-1 px-2 w-[10%] text-center border-r-2 flex justify-center">
              <FaRegComments className="w-8 h-8 text-green-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
            </div>
            <div className="py-1 px-2 w-[10%] text-center flex justify-center">
              <RiDeleteBin4Fill className="w-8 h-8 text-red-700 cursor-pointer hover:bg-slate-200 p-1 rounded-full" />
            </div>
          </div>
        );
      };
    return (
        <div>
                  <div className="mt-5">
        <div className="flex shadow items-center justify-between font-semibold  p-3 text-[#080808]">
          <div className="w-[60%] text-center border-r-2">Post title</div>
          <div className="w-[10%] text-center border-r-2">Up Vote</div>
          <div className="w-[10%] text-center border-r-2">Down vote</div>
          <div className="w-[10%] text-center border-r-2">Comment</div>
          <div className="w-[10%] text-center">Delete</div>
        </div>
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