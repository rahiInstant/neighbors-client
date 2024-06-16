import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReportCheck = () => {
    
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/check-report?commentId=${id}`);
      return result.data;
    },
  });
  return data
};

export default useReportCheck;
