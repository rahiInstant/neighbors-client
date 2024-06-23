import { FaComment, FaCommentAlt, FaItunesNote, FaUser } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { PieChart, Pie } from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RotatingLines } from "react-loader-spinner";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const AdminProfile = () => {
  const successMsg = (msg) => toast.success(msg);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data, isPending } = useQuery({
    queryKey: ["estimated"],
    queryFn: async () => {
      const result = await axiosSecure.get("/estimated-data");
      return result.data;
    },
  });
  if (isPending) {
    return (
      <div className="flex justify-center">
        <RotatingLines
          visible={true}
          height="60"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  const handleAddTag = (e) => {
    e.preventDefault();
    const form = e.target;
    const tag = form.tag.value;
    console.log(tag);
    axiosSecure
      .post("/add-tag", { tag, email: user?.email, name: user?.displayName })
      .then((res) => {
        if (res?.data?.insertedId) {
          form.reset();
          successMsg("Add tag successfully.");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Neighbors | Dashboard</title>
      </Helmet>
      <div className="mt-5 flex items-center flex-col">
        <img
          className="w-28 h-28 rounded-full border-4 border-[#30a01a91]"
          src="/user.png"
          alt=""
        />
        <h1 className="text-[35px] font-bold ">{user?.displayName}</h1>
        <p className="text-lg italic">{user?.email}</p>
        <div className="mt-3 py-1 px-8 bg-[#2d9e16] font-medium text-xs w-fit text-white rounded-full">
          admin
        </div>
      </div>
      <div className="flex gap-5 items-center mt-6 flex-col lg:flex-row">
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="border rounded-md p-6 flex items-center gap-3 ">
            <FaUser className="w-6 h-6 text-green-700" />
            <h1 className="text-2xl font-bold">
              {data ? data[0]?.value : 0} Users
            </h1>
          </div>
          <div className="border rounded-md p-6 flex items-center gap-3">
            <BsPostcard className="w-6 h-6 text-green-700" />
            <h1 className="text-2xl font-bold">
              {data ? data[1]?.value : 0} Posts
            </h1>
          </div>
          <div className="border rounded-md p-6 flex items-center gap-3 ">
            <FaCommentAlt className="w-6 h-6 text-green-700" />
            <h1 className="text-2xl font-bold">
              {data ? data[2]?.value : 0} Comments
            </h1>
          </div>
        </div>
        <div className="p-5 border rounded-md flex items-center justify-center  w-full">
          <PieChart width={400} height={240}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            />
          </PieChart>
        </div>
      </div>
      <form onSubmit={handleAddTag} className="mt-6">
        <div className="flex gap-5 w-full lg:flex-row flex-col">
          <input
            id="tag"
            name="tag"
            className="py-4 px-5 w-full text-lg rounded-md  outline-none border "
            type="text"
            placeholder="#education"
            required
          />
          <button
            className="py-4 px-5 bg-[#115aad] rounded-md text-xl font-semibold text-white w-full lg:w-[200px] block"
            type="submit"
          >
            Add Tag
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;
