import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";

const AddPosts = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const option = ["education", "entertainment", "media", "football", "fire"];
  const handlePost = (data) => {
    const { title, tags, upVote, downVote, body } = data;
    axiosSecure
      .post(`/user-post`, {
        title,
        tags,
        upVote: parseInt(upVote),
        downVote: parseInt(downVote),
        userName: user?.displayName,
        email: user?.email,
        body,
        postingTime: new Date().toUTCString(),
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit(handlePost)}
        className="p-5 border w-full rounded-md"
      >
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
              placeholder={user?.displayName}
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
              placeholder={user?.email}
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
                {...register("title")}
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
                {...register("tags")}
                name="tags"
                required
                className=" py-4 px-5 text-lg   appearance-none font-semibold rounded-lg outline-none w-full"
              >
                <option className="hidden" value="">
                  -- Tags --
                </option>
                {option.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      #{item}
                    </option>
                  );
                })}
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
              {...register("body")}
              required
              className="outline-none border rounded-md py-4 px-5 w-full mt-2 h-[145px]"
              name="body"
              rows={4}
              id=""
              minLength={10}
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
              {...register("upVote")}
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
              {...register("downVote")}
              className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border "
              type="number"
              name="down-vote"
              id="down-vote"
              defaultValue={0}
            />
          </div>
        </div>
        <button
          className="py-4 px-5 rounded-md bg-[#115aad] mt-5 w-full text-xl font-semibold text-white"
          type="submit"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPosts;
