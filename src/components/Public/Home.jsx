import Anouncement from "./Anouncement";
import Banner from "./Banner";
import PostScroll from "./PostScroll";
import Tags from "./Tags";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const axiosPublic = useAxiosPublic();
  const {
    data,
    refetch: postFetch,
    isPending,
  } = useQuery({
    queryKey: ["all-post", search, sort, currentPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-post?search=${search}&sort=${sort}&currentPage=${currentPage}`
      );
      return res.data;
    },
  });
  useEffect(() => {
    const number_page = Math.ceil((data ? data[0] : 0) / 10);
    setNumberOfPage(number_page);
  }, [data]);
  // console.log("number of page", numberOfPage);
  const { data: announcement } = useQuery({
    queryKey: ["get-announce"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-announcement");
      return res.data;
    },
  });

  return (
    <div>
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
              data={data ? data[1] : []}
              postFetch={postFetch}
              isPending={isPending}
              numberOfPage={numberOfPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
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
