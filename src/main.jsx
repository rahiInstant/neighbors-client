import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Public/Home.jsx";
import PostDetails from "./components/Public/PostDetails.jsx";
import Dashboard from "./components/DashBoard/Dashboard.jsx";
import SignIn from "./components/Public/SignIn.jsx";
import Register from "./components/Public/Register.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider.jsx";
import MemberShip from "./components/Public/MemberShip.jsx";
import ReportedComment from "./components/DashBoard/Admin/ReportedComment.jsx";
import { HelmetProvider } from "react-helmet-async";

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
        path: "/membership",
        element: <MemberShip />,
      },
      {
        path: "/post/comment/:id",
        element: <ReportedComment />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
