const MyProfile = () => {
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
      <div className="mt-10 ">
        <div className="flex shadow items-center justify-between font-semibold  p-3 text-[#080808]">
          <div className="w-full text-center border-r-2">Post title</div>
          <div className="w-full text-center border-r-2">Up Vote</div>
          <div className="w-full text-center border-r-2">Down vote</div>
          <div className="w-full text-center border-r-2">Comment Button</div>
          <div className="w-full text-center">Delete Button</div>
        </div>
        <div className="flex shadow items-center justify-between  p-3 text-[#615e5e]">
          <div className="py-1 px-2  w-full text-center font-medium border-r-2">Music is dangerous form health. I is a cru</div>
          <div className="py-1 px-2  w-full text-center font-medium border-r-2">229</div>
          <div className="py-1 px-2  w-full text-center font-medium border-r-2">124</div>
          <div className="py-1 px-2  w-full text-center font-medium border-r-2">Comment Button</div>
          <div className="py-1 px-2  w-full text-center font-medium">Delete Button</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
