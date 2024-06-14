import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className=" p-5 mt-5  rounded-md mx-5 border">
        <div className="flex items-center justify-center flex-col bg-[url('/log.jpg')] border bg-no-repeat bg-cover h-40 rounded-lg ">
          <h1 className="text-[40px] font-semibold mt-2 text-[#f1f1f1]">
            Welcome Back !!!
          </h1>
        </div>
        <form className="mt-5">
          <div className="flex gap-3 w-full flex-col sm:flex-row text-[#1b1a1a]">
            <div className="w-full">
              <label className="block text-xl font-semibold  " htmlFor="name">
                Email
              </label>

              <input
                id="name"
                name="name"
                className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border bg-[#ffffff] "
                type="email"
                placeholder="Abdur Rahaman Rahi"
              />
            </div>
            <div className="w-full">
              <label className="block text-xl font-semibold  " htmlFor="photo">
                Password
              </label>
              <input
                className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border bg-[#fff] "
                type="password"
                name="email"
                id="email"
                placeholder="rahiurp20@gmail.com"
              />
            </div>
          </div>
          <button
            className="py-4 px-5 mt-4 bg-[#0b50a0] w-full rounded-md text-white text-xl font-bold"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="flex flex-row gap-5 mt-4">
          <button
            //   onClick={handleGoogleSignIn}
            className=" w-full flex text-xl items-center justify-center gap-2 py-3 border rounded-lg border-[#0b50a0]  font-medium hover:bg-[#0b50a0] hover:text-white duration-150"
            type="submit"
          >
            <IoLogoGoogle className="text-3xl" />
            Google
          </button>
          <button
            //   onClick={handleGithubSignIn}
            className="flex  items-center justify-center gap-2 w-full  py-3 border rounded-lg border-[#0b50a0] text-xl font-medium hover:bg-[#0b50a0] hover:text-white duration-150"
            type="submit"
          >
            <FaFacebook className="text-3xl" />
            Facebook
          </button>
        </div>
        <p className="mt-4 text-center font-medium">
          Haven't any account?{" "}
          <Link className="text-[#0b50a0] font-semibold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
