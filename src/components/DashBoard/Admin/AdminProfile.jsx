import { FaComment, FaCommentAlt, FaItunesNote, FaUser } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
const AdminProfile = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
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
        <div className="mt-3 py-1 px-8 bg-[#2d9e16] font-medium text-xs w-fit text-white rounded-full">
          admin
        </div>
      </div>
      <div className="flex gap-5 items-center mt-6 flex-col lg:flex-row">
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="border rounded-md p-6 flex items-center gap-3 ">
            <FaUser className="w-6 h-6 text-green-700" />
            <h1 className="text-2xl font-bold">10 Users</h1>
          </div>
          <div className="border rounded-md p-6 flex items-center gap-3">
            <BsPostcard className="w-6 h-6 text-green-700" />
            <h1 className="text-2xl font-bold">50 Posts</h1>
          </div>
          <div className="border rounded-md p-6 flex items-center gap-3 ">
            <FaCommentAlt className="w-6 h-6 text-green-700" />
            <h1 className="text-2xl font-bold">123 Comments</h1>
          </div>
        </div>
        <div className="p-5 border rounded-md flex items-center justify-center  w-full">
            <PieChart width={400} height={240}>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              />
            </PieChart>
        </div>
      </div>
      <form className="mt-6">
        <div className="flex gap-5 w-full lg:flex-row flex-col">
          <input
            id="title"
            name="title"
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
