import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const AnnounceMent = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const successMsg = (msg) => toast.success(msg);
  const { register, handleSubmit, reset } = useForm();
  const handleAnnouncement = (e) => {
    console.log(e);
    const { title, announce } = e;
    const announcementObj = {
      title,
      announce,
      email: user?.email,
      date: new Date(),
    };
    axiosSecure.post("/store-announcement", announcementObj).then((res) => {
      if (res?.data?.insertedId) {
        successMsg("Announcement successfully.");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleAnnouncement)}>
        <div className="gap-5">
          <div className="p-5 shadow rounded-md w-full lg:w-48 flex items-center justify-center">
            <img
              className="w-28 h-28 border rounded-full border-green-700"
              src="/user.png"
              alt=""
            />
          </div>
          <div className="flex gap-3 mt-5 flex-col lg:flex-row w-full">
            <div className="w-full">
              <label className="block text-xl font-semibold  " htmlFor="name">
                Author Name
              </label>
              <input
                disabled
                id="name"
                name="name"
                className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border "
                type="text"
                placeholder={user?.displayName}
              />
            </div>
            <div className="w-full">
              <label className="block text-xl font-semibold  " htmlFor="photo">
                Title
              </label>
              <input
                {...register("title")}
                className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border "
                type="text"
                name="title"
                placeholder="Title goes here."
              />
            </div>
          </div>
        </div>
        <textarea
          {...register("announce")}
          required
          className="outline-none border rounded-md py-4 px-5 w-full mt-5 h-[145px]"
          name="announce"
          rows={4}
          id=""
          minLength={5}
          placeholder="write announcement here."
        ></textarea>
        <button
          className="py-4 px-5 rounded-md bg-[#115aad] mt-3 w-full text-xl font-semibold text-white"
          type="submit"
        >
          Make Announcement
        </button>
      </form>
    </div>
  );
};

export default AnnounceMent;
