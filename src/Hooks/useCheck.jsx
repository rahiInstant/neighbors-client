import useAxiosPublic from "./useAxiosPublic";

const useCheck = () => {
  const axiosPublic = useAxiosPublic();
  return function (name, email, isAdmin) {
    axiosPublic
      .post("/user-registration", { name, email, isAdmin })
      .then((res) => console.log(res.data));
  };
};

export default useCheck;
