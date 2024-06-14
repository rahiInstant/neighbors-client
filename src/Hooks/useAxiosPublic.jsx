import axios from "axios";

const publicInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return publicInstance
};

export default useAxiosPublic;
