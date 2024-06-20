import axios from "axios";
import useAuth from "./useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const auth = useAuth();
  const signOut = auth?.logOut;
  // const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access_token");
      console.log(token);
      config.headers.authorization = `Bearer_${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      console.log(response);
      return response;
    },
    async function (error) {
      const status = error?.response?.status;
      if (status == 401 || status == 403) {
        await signOut();
        <Navigate to={"/sign-in"} />;
        // navigate("/sign-in");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
