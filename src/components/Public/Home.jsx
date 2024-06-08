import Banner from "./Banner";
import PostScroll from "./PostScroll";
import Tags from "./Tags";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div>
                <PostScroll/>
                <Tags/>
            </div>
        </div>
    );
};

export default Home;