import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoMdDoneAll } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";
const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: user, isPending } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/all-user");
      return result.data;
    },
  });
  // console.log(user);
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
  const handleIsAdmin = (email) => {
    axiosSecure
      .patch(`/make-admin`, { email: email })
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <hr className="border-b-2 border-orange-500 my-3" />
      <div className="overflow-x-scroll">
        <table className=" w-full  mb-5">
          <thead>
            <tr>
              <th>SN.</th>
              <th>user name</th>
              <th>email</th>
              <th>make Admin</th>
              <th>subscription</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((item, id) => {
              return (
                <tr key={id}>
                  <td className="text-center ">{id + 1}</td>
                  <td className="text-left">{item.name}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="">
                    <button
                      onClick={() => handleIsAdmin(item.email)}
                      className={`w-full flex justify-center  text-white`}
                    >
                      <FaRegUser
                        className={`p-2 w-8 h-8 rounded-md ${
                          item.isAdmin ? "bg-red-800" : "bg-green-800"
                        }`}
                      />
                    </button>
                  </td>
                  <td className="text-2xl">
                    {item.isMember ? (
                      <IoMdDoneAll className="text-green-600 mx-auto" />
                    ) : (
                      <RxCross2 className="text-red-600 mx-auto" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
