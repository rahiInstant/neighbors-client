import { FaArrowLeft } from "react-icons/fa";
import { Radio, Tabs } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProfile from "./User/MyProfile";
const Dashboard = () => {
  const [mode, setMode] = useState("top");
  const [route, setRoute] = useState([]);
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  const isAdmin = false;
  const adminRoute = [
    { name: "Admin Profile" },
    { name: "Manage Users" },
    { name: "Reported comments/ Activities" },
    { name: "Make Announcement" },
  ];
  const userRoute = [
    { name: "My Profile" , content:<MyProfile/>},
    { name: "Add post" },
    { name: "My Post" },
  ];
  useEffect(() => {
    if (isAdmin) {
      setRoute(adminRoute);
    } else {
      setRoute(userRoute);
    }
  }, [isAdmin]);

  return (
    <div className="max-w-7xl mx-auto p-6 shadow mt-5 ">
      <Link to="/" className="w-10 h-10 hover:bg-slate-200 rounded-full border flex justify-center items-center duration-300 cursor-pointer">
        <FaArrowLeft />
      </Link>
      <div className="mt-6 flex items-center justify-center flex-col bg-[url('/Snow.svg')] h-40 rounded-lg ">

        <h1 className="text-[40px] font-semibold mt-2 text-white">Welcome Back, Rahi</h1>
      </div>
      <div>
        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{
            marginBottom: 8,
          }}
        >
          {/* <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button> */}
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{
            height: 'auto',

          }}
          tabBarStyle={{
            fontWeight:'bold'
          }}
          items={route.map((item, i) => {
            return {
              label: item.name,
              key: `${i}`,
              children: item.content,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Dashboard;
