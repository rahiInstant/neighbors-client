import { FaArrowLeft } from "react-icons/fa";
import { Radio, Tabs } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProfile from "./User/MyProfile";
import MyPosts from "./User/MyPosts";
import AddPosts from "./User/AddPosts";
import AdminProfile from "./Admin/AdminProfile";
import ManageUsers from "./Admin/ManageUsers";
import Reported from "./Admin/Reported";
import AnnounceMent from "./Admin/AnnounceMent";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ColorRing } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import usePosts from "../../Hooks/usePosts";
import useUserInfo from "../../Hooks/useUserInfo";
const Dashboard = () => {
  const [key, setKey] = useState("0");
  const { user } = useAuth();
  const { refetchPost } = usePosts();
  const { userInfo, userDataPending } = useUserInfo();
  console.log(userInfo);
  if (userDataPending) {
    return (
      <div className="flex justify-center mt-5">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  const route = {
    adminRoute: [
      { name: "Admin Profile", content: <AdminProfile /> },
      { name: "Manage Users", content: <ManageUsers /> },
      { name: "Reported comments/ Activities", content: <Reported /> },
      { name: "Make Announcement", content: <AnnounceMent /> },
    ],
    userRoute: [
      { name: "My Profile", content: <MyProfile setKey={setKey} /> },
      { name: "My Post", content: <MyPosts /> },
      { name: "Add post", content: <AddPosts /> },
    ],
  };

  return (
    <div className="mx-4 sm:mx-6 lg:mx-10">
      <div className="max-w-7xl mx-auto p-6 shadow my-8 ">
        <Link
          to="/"
          className="w-10 h-10 hover:bg-slate-200 rounded-full border flex justify-center items-center duration-300 cursor-pointer"
        >
          <FaArrowLeft />
        </Link>
        <div className="mt-6 flex items-center justify-center flex-col bg-[url('/Snow.svg')] h-40 rounded-lg ">
          <h1 className=" font-semibold mt-2 text-white text-center">
            <span className="text-[40px]">Welcome Back,</span>
            <br className="lg:hidden"/> <span className="text-[30px] lg:text-[40px] max-lg:italic">{user?.displayName}</span>
          </h1>
        </div>
        <div>
          <Radio.Group
            // onChange={handleModeChange}
            // value={mode}
            style={{
              marginBottom: 8,
            }}
          >
            {/* <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button> */}
          </Radio.Group>
          <Tabs
            // defaultActiveKey="1"
            activeKey={key}
            onTabClick={(i) => {
              refetchPost();
              setKey(i);
            }}
            // tabPosition={mode}
            style={{
              height: "auto",
            }}
            tabBarStyle={{
              fontWeight: "bold",
            }}
            items={route[userInfo?.isAdmin ? "adminRoute" : "userRoute"].map(
              (item, i) => {
                return {
                  label: item.name,
                  key: `${i}`,
                  children: item.content,
                };
              }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
