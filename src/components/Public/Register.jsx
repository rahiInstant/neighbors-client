import { FaFacebook, FaUpload } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import useCheck from "../../Hooks/useCheck";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import auth from "../../auth/firebase.init";

const Register = () => {
  const { createUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  const [helmet, setHelmet] = useState("Neighbors | Register");
  const check = useCheck();
  const { register, handleSubmit } = useForm();
  const handleCreateUser = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name }).then(() => {
          check(name, email);
          successMsg("Registered successfully. Redirecting...");
          setHelmet("Redirecting...");
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 1000);
        });
      })
      .catch((err) => {
        const Msg = err?.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  };
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      <div className=" p-5 mt-5  rounded-md mx-5 border">
        <div className="flex items-center justify-center flex-col bg-[url('/log.jpg')] border bg-no-repeat bg-cover h-40 rounded-lg ">
          <h1 className="text-[40px] font-semibold mt-2 text-[#f1f1f1]">
            Please Register !!!
          </h1>
        </div>
        <form onSubmit={handleSubmit(handleCreateUser)} className="mt-5 sm:p-5">
          <div className="flex gap-5 lg:flex-row flex-col">
            <div className="flex gap-3 flex-auto flex-col text-[#1b1a1a]">
              <div className="w-full">
                <label className="block text-xl font-semibold  " htmlFor="name">
                  User Name
                </label>

                <input
                  {...register("name")}
                  id="name"
                  name="name"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border bg-[#ffffff] "
                  type="text"
                  placeholder="Abdur Rahaman Rahi"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-xl font-semibold  "
                  htmlFor="photo"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border bg-[#fff] "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="rahiurp20@gmail.com"
                />
              </div>
              <div className="w-full">
                <label className="block text-xl font-semibold  " htmlFor="name">
                  Password
                </label>
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border bg-[#ffffff] "
                  type="password"
                  placeholder="************"
                />
              </div>
              <button
                className="py-4 px-5 mt-4 bg-[#0b50a0] w-full rounded-md text-white text-xl font-bold"
                type="submit"
              >
                Register
              </button>
              <p className="mt-4 text-center font-medium">
                Haven't any account?{" "}
                <Link className="text-[#0b50a0] font-semibold" to="/sign-in">
                  SignIn
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
