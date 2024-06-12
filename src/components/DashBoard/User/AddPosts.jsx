import { IoIosArrowDown } from "react-icons/io";
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
            <h1 className="text-[40px] font-medium text-[#2e2c2c]">
              Add Your Post
            </h1>
            <p className="text-xl italic">
              share your feeling, emotion, thoughts
            </p>
          </div>
        </div>
        {/* first part */}
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
        {/* second part */}
        <div className="flex gap-5 w-full flex-col sm:flex-row mt-5 h-fit">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full">
              <label className="block text-xl font-semibold  " htmlFor="name">
                Post Title
              </label>

              <input
                id="title"
                name="title"
                className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border "
                type="text"
                placeholder="This is an incident."
                required
              />
            </div>
            <div className="relative h-fit  border rounded-md w-full">
              
              <select
                name="origin"
                required
                className=" py-4 px-5 text-lg   appearance-none font-semibold rounded-lg outline-none w-full"
              >
                <option className="hidden" value="">
                  -- Tags --
                </option>
                <option value="education">#education</option>
                <option value="entertainment">#entertainment</option>
                <option value="media">#media</option>
                <option value="football">#football</option>
                <option value="fire">#fire</option>
              </select>
              <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="photo">
              Post Description
            </label>
            <textarea
              required
              className="outline-none border rounded-md py-4 px-5 w-full mt-2 h-[145px]"
              name="comment"
              rows={4}
              id=""
              maxLength={250}
              minLength={150}
              placeholder="write something about this spot withing 150-250 words."
            ></textarea>
          </div>
        </div>
        {/* Third part */}
        <div className="flex gap-5 w-full flex-col sm:flex-row mt-5">
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="name">
              Up Vote
            </label>

            <input
              id="up-vote"
              name="up-vote"
              className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border "
              type="number"
              defaultValue={0}
            />
          </div>
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="photo">
             Down Vote
            </label>
            <input
              className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border "
              type="number"
              name="down-vote"
              id="down-vote"
              defaultValue={0}
            />
          </div>
        </div>
        <button className="py-4 px-5 rounded-md bg-[#115aad] mt-5 w-full text-xl font-semibold text-white" type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPosts;
