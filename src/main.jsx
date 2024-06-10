import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Public/Home.jsx";
import PostDetails from "./components/Public/PostDetails.jsx";
import Dashboard from "./components/DashBoard/Dashboard.jsx";
import AddPosts from "./components/DashBoard/User/AddPosts.jsx";
import MyPosts from "./components/DashBoard/User/MyPosts.jsx";
import MyProfile from "./components/DashBoard/User/MyProfile.jsx";
import AdminProfile from "./components/DashBoard/Admin/AdminProfile.jsx";
import AnnounceMent from "./components/DashBoard/Admin/AnnounceMent.jsx";
import ManageUsers from "./components/DashBoard/Admin/ManageUsers.jsx";
import Reported from "./components/DashBoard/Admin/Reported.jsx";
import SignIn from "./components/Public/SignIn.jsx";
import Register from "./components/Public/Register.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider.jsx";
import MemberShip from "./components/Public/MemberShip.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <PostDetails />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/membership',
        element:<MemberShip/>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-post",
        element: <AddPosts />,
      },
      {
        path: "my-posts",
        element: <MyPosts />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "announcement",
        element: <AnnounceMent />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "reported",
        element: <Reported />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
