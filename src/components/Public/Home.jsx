import Anouncement from "./Anouncement";
import Banner from "./Banner";
import PostScroll from "./PostScroll";
import Tags from "./Tags";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const axiosPublic = useAxiosPublic();
  const {
    data,
    refetch: postFetch,
    isPending,
  } = useQuery({
    queryKey: ["all-post", search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-post?search=${search}`);
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
      <Banner setSearch={setSearch} />
      <div className="mt-20 max-w-screen-xl mx-auto mb-20">
        <div className="grid grid-cols-4 mt-5 gap-6">
          <div>
            <Anouncement data={announcement} />
          </div>
          <div className="col-span-2">
            <div className="pb-2 border-b">
              {/*  */}
              <div className="relative h-fit  border w-[250px]">
                <select
                  name="category"
                  required
                  className=" py-4 px-5    appearance-none   outline-none w-full"
                >
                  <option className="hidden" value="">
                    -- Category --
                  </option>
                  <option value="Most Recent">Most Recent</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Most viewed">Most viewed</option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
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
