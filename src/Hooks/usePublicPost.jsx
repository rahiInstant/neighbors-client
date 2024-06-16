import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePublicPost = () => {
  const axiosPublic = useAxiosPublic();
  return function() {
    
  }
//   const { data, refetch: postFetch } = useQuery({
//     queryKey: ["all-post"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/all-post");
//       return res.data;
//     },
//   });
  
};

export default usePublicPost;
