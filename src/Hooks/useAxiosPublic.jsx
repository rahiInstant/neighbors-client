import axios from "axios";

const publicInstance = axios.create({
  baseURL: "https://neighbors-server.vercel.app",
  withCredentials: true,
});
// http://localhost:5000
const useAxiosPublic = () => {
  return publicInstance;
};

export default useAxiosPublic;
