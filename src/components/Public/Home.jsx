import { IoIosArrowDown } from "react-icons/io";
import Anouncement from "./Anouncement";
import Banner from "./Banner";
import PostScroll from "./PostScroll";
import Tags from "./Tags";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-20 max-w-screen-xl mx-auto mb-20">

        <div className="grid grid-cols-4 mt-5 gap-6">
          <div>
            <Anouncement />
          </div>
          <div className="col-span-2">
            <PostScroll />
          </div>
          <div>
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
