import { FaRegComments } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
const MyProfile = () => {
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
      <div className="mt-5 flex items-center flex-col">
        <img
          className="w-28 h-28 rounded-full border-4 border-[#30a01a91]"
          src="/user.png"
          alt=""
        />
        <h1 className="text-[35px] font-bold ">Abdur Rahaman Rahi</h1>
        <p className="text-lg italic">rahiurp20@gmail.com</p>
        <div className="mt-3 py-1 px-8 bg-[#be6512] font-medium text-xs w-fit text-white rounded-full">
          silver
        </div>
      </div>
      <div className="mt-5">
        <div className="flex shadow items-center justify-between font-semibold  p-3 text-[#080808] ">
          <div className="w-[60%] text-center border-r-2">Post title</div>
          <div className="w-[10%] text-center border-r-2">Up Vote</div>
          <div className="w-[10%] text-center border-r-2">Down vote</div>
          <div className="w-[10%] text-center border-r-2">Comment</div>
          <div className="w-[10%] text-center">Delete</div>
        </div>
        {postCard()}
        {postCard()}
        {postCard()}
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-lg italic font-medium">
          Best three post showed here. Click "show all" to see all post.
        </h1>
        <div className="px-5 py-2 rounded-lg bg-[#1173b4] text-lg font-medium italic text-white w-fit mt-4 cursor-pointer">
          show all
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
