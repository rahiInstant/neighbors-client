import { Typewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";
const Banner = ({ setSearch }) => {
  const parts = ["felling.", "emotion.", "thought."];
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search.value;
    console.log(searchText)
    setSearch(searchText);
    form.reset()
  };
  return (
    <div className="h-[700px] bg-[url('/Banner.svg')] bg-no-repeat bg-cover -z-10">
      <div className="flex max-w-screen-2xl mx-auto px-16 h-full ">
        <div className="w-[50%] flex flex-col justify-center">
          <div className="text-[50px] font-bold text-[#28b1c9]">
            <span className="text-[85px]">Connect with us</span> <br /> to
            express{" "}
            <Typewriter
              words={parts}
              cursor={true}
              cursorBlinking={true}
              typeSpeed={125}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={false}
            />
          </div>
          <div className="mt-10">
            <form onSubmit={handleSearch} className="flex ">
              <input
                name="search"
                type="text"
                placeholder="Search by tag without (#): media"
                className="p-4  text-lg outline-none rounded-tl-lg rounded-bl-lg w-[400px]"
              />
              <input
                type="submit"
                value="search"
                className="p-4 font-medium text-white  cursor-pointer text-lg rounded-tr-lg rounded-br-lg bg-[#0f7d9e]"
              />
            </form>
          </div>
        </div>
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setSearch: PropTypes.func,
};

export default Banner;
