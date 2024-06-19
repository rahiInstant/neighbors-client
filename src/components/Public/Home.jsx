import Anouncement from "./Anouncement";
import Banner from "./Banner";
import PostScroll from "./PostScroll";
import Tags from "./Tags";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const axiosPublic = useAxiosPublic();
  const {
    data,
    refetch: postFetch,
    isPending,
  } = useQuery({
    queryKey: ["all-post", search, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-post?search=${search}&sort=${sort}`
      );
      return res.data;
    },
  });
  const { data: announcement } = useQuery({
    queryKey: ["get-announce"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-announcement");
      return res.data;
    },
  });

  return (
    <div>
      {/* <Navbar announceCount={announcement?.length}/> */}
      <Banner setSearch={setSearch} />
      <div className="mt-20 max-w-screen-xl mx-auto mb-20">
        <div className="grid grid-cols-4 mt-5 gap-6">
          <div>
            <Anouncement data={announcement} />
          </div>
          <div className="col-span-2">
            <div className="pb-2 border-b flex items-center gap-2 text-center">
              {/*  */}
              <div
                onClick={() => setSort(!sort)}
                className="px-3 py-2 cursor-pointer bg-[#1e81c4] text-white w-full"
              >
                Sort by Popularity
              </div>
              <div
                onClick={() => setSearch("")}
                className="px-3 py-2 cursor-pointer bg-[#1e81c4] text-white w-full"
              >
                All Post
              </div>
            </div>
            <PostScroll
              data={data}
              postFetch={postFetch}
              isPending={isPending}
            />
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
