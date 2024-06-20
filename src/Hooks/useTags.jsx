import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTags = () => {
  const axiosPublic = useAxiosPublic();
  const { data:tags, isPending: tagPending } = useQuery({
    queryKey: ["all-available-tag"],
    queryFn: async () => {
      const result = await axiosPublic.get("/all-tag");
      return result.data;
    },
  });
  // console.log(tags)
  return { tags, tagPending };
};

export default useTags;
