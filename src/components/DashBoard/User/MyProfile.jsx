import { FaRegComments, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
const MyProfile = ({setKey}) => {
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
      <div className="mt-5 grid lg:grid-cols-3 gap-5">
        {postCard()}
        {postCard()}
        {postCard()}
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-lg italic font-medium">
          Best three post showed here. Click "show all" to see all post.
        </h1>
        <div onClick={() => setKey('1')} className="px-5 py-2 rounded-lg bg-[#1173b4] text-lg font-medium italic text-white w-fit mt-4 cursor-pointer">
          show all
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
