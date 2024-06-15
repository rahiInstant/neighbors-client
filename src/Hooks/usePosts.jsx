import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const usePosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data, isPending, refetch } = useQuery({
    queryKey: ["show-user-data", user],
    queryFn: async () => {
      const result = await axiosSecure.get(`show-post?email=${user?.email}`);
      return result.data;
    },
    enabled: !!user,
  });
  return { data, isPending, refetchPost:refetch };
};

export default usePosts;
