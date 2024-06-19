import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComments = (id) => {
  const axiosPublic = useAxiosPublic();
  const { data: userComment, refetch: commentRefetch } = useQuery({
    queryKey: ["user-comment",id],
    queryFn: async () => {
      const result = await axiosPublic.get(`/all-user-comment?postId=${id}`);
      return result.data;
    },
  });
  console.log(userComment)
  return { userComment, commentRefetch };
};

export default useComments;
