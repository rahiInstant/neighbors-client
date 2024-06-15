import useAxiosPublic from "./useAxiosPublic";

const useCheck = () => {
  const axiosPublic = useAxiosPublic();
  return function (name, email) {
    axiosPublic
      .post("/user-registration", { name, email, isAdmin:false})
      .then((res) => console.log(res.data));
  };
};

export default useCheck;
