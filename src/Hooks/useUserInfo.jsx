import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userInfo, isPending: userDataPending } = useQuery({
    queryKey: ["isUserExist", user],
    queryFn: async () => {
      const result = await axiosSecure.get(`/user-info?email=${user?.email}`);

      return result.data;
    },
    enabled: !!user,
  });
  return { userInfo, userDataPending };
};

export default useUserInfo;
