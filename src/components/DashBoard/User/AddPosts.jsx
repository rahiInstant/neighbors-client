import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";
import useTags from "../../../Hooks/useTags";
import useUserInfo from "../../../Hooks/useUserInfo";
import { useNavigate } from "react-router-dom";

const AddPosts = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const { tags, tagPending } = useTags();
  const { userInfo, userDataPending } = useUserInfo();
  // const option = ["education", "entertainment", "media", "football", "fire"];
  const handlePost = (data) => {
    const { title, tags, upVote, downVote, body } = data;
    axiosSecure
      .post(`/user-post`, {
        title,
        tags,
        upVote: parseInt(upVote),
        downVote: parseInt(downVote),
        email: user?.email,
        body,
        postingTime: new Date(),
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div className="p-5 border rounded-md">
      <div className="flex justify-between flex-col lg:flex-row gap-5 pb-3 border-b-2 border-dashed">
        <div className="flex flex-col lg:flex-row items-center lg:gap-5">
          <div className="p-1 border border-green-700 rounded-full w-fit">
            <img
              className="w-28 h-28 rounded-full border border-green-700"
              src="/user.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[30px] lg:text-[40px] font-medium text-[#2e2c2c] text-center lg:text-left">
              Add Your Post
            </h1>
            <p className="text-xl italic">
              share your feeling, emotion, thoughts
            </p>
          </div>
        </div>
        {userInfo?.isMember ? (
          ""
        ) : (
          <div className="flex flex-row lg:flex-col gap-3 justify-center w-full lg:w-auto">
            <div className="flex items-center flex-col leading-[25px] font-semibold border px-3 py-2 rounded-md w-full lg:w-auto">
              <div className="text-[30px]">{5 - userInfo.postCount}</div>{" "}
              <div className="text-xl">free post left</div>
            </div>
            <div onClick={() => navigate('/membership')} className="cursor-pointer bg-green-700 w-full lg:w-auto text-white  hover:bg-green-800 duration-500 px-3 py-2 rounded-md flex flex-col items-center">
              <div className="font-medium">Get MemberShip</div>
              <div className="italic">to get unlimited post</div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit(handlePost)} className=" w-full mt-3">
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
                className=" py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full"
              >
                <option className="hidden" value="">
                  -- Tags --
                </option>
                {tags?.map((item, idx) => {
                  return (
                    <option key={idx} value={item.tag}>
                      #{item.tag}
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
          disabled={userInfo?.isMember ? false : userInfo.postCount >= 5}
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
