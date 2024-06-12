const AddPosts = () => {
  return (
    <div className=" ">
      <form className="p-5 border w-full rounded-md">
        <div className="flex items-center gap-5">
          <div className="p-1 border border-green-700 my-5 rounded-full w-fit">
            <img
              className="w-28 h-28 rounded-full border border-green-700"
              src="/user.png"
              alt=""
            />
          </div>
          <div>
          <h1 className="text-[40px] font-medium text-[#2e2c2c]">Add Your Post</h1>
          <p className="text-xl italic">share your feeling, emotion, thoughts</p>
          </div>
        </div>
        <div className="flex gap-5 w-full flex-col sm:flex-row ">
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="name">
              Author Name
            </label>

            <input
              id="name"
              name="name"
              className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border "
              type="text"
              disabled
              placeholder="Abdur Rahaman Rahi"
            />
          </div>
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="photo">
              Author Email
            </label>
            <input
              disabled
              className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border "
              type="email"
              name="email"
              id="email"
              placeholder="rahiurp20@gmail.com"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPosts;
