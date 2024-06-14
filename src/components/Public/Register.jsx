import { FaFacebook, FaUpload } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className=" p-5 mt-5  rounded-md mx-5 border">
        <div className="flex items-center justify-center flex-col bg-[url('/log.jpg')] border bg-no-repeat bg-cover h-40 rounded-lg ">
          <h1 className="text-[40px] font-semibold mt-2 text-[#f1f1f1]">
            Please Register !!!
          </h1>
        </div>
        <form className="mt-5 sm:p-5">
          <div className="flex gap-5 lg:flex-row flex-col">

            <div className="flex gap-3 flex-auto flex-col text-[#1b1a1a]">
              <div className="w-full">
                <label className="block text-xl font-semibold  " htmlFor="name">
                  User Name
                </label>

                <input
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
                  id="name"
                  name="name"
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
