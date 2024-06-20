import useAxiosPublic from "./useAxiosPublic";

const useCheck = () => {
  const axiosPublic = useAxiosPublic();
  return function (name, email) {
    axiosPublic
      .post("/user-registration", { name, email, isAdmin:false, isMember:false})
      .then((res) => '');
  };
};

export default useCheck;
