import { IoIosArrowDown } from "react-icons/io";
import Anouncement from "./Anouncement";
import Banner from "./Banner";
import PostScroll from "./PostScroll";
import Tags from "./Tags";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const axiosPublic = useAxiosPublic();
  const { data, refetch: postFetch } = useQuery({
    queryKey: ["all-post"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-post?search=${search}&&sort=${sort}`
      );
      return res.data;
    },
  });
  return (
    <div>
      <Banner setSearch={setSearch} />
      <div className="mt-20 max-w-screen-xl mx-auto mb-20">
        <div className="grid grid-cols-4 mt-5 gap-6">
          <div>
            <Anouncement />
          </div>
          <div className="col-span-2">
            <PostScroll data={data} postFetch={postFetch} />
          </div>
          <div>
            <Tags setSearch={setSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
