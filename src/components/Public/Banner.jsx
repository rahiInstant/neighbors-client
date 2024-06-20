import { Typewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";
const Banner = ({ setSearch }) => {
  const parts = ["felling.", "emotion.", "thought."];
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search.value;
    console.log(searchText);
    setSearch(searchText);
    form.reset();
  };
  return (
    <div className="h-[400px] sm:h-[550px] md:h-[650px] lg:[750px] bg-[url('/Banner.svg')] bg-no-repeat bg-cover -z-10">
      <div className="flex max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-full justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <div className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold text-[#28b1c9] flex flex-col items-center">
            <span className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[85px] text-center block">
              Connect with us
            </span>
            <div className="flex items-center gap-2.5">
              to express{" "}
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
          </div>
          <div className="mt-4 md:mt-7 lg:mt-10 flex justify-center w-full">
            <form onSubmit={handleSearch} className="flex">
              <input
                name="search"
                type="text"
                placeholder="media"
                className="p-4 text-sm lg:text-lg outline-none rounded-tl-lg rounded-bl-lg w-full "
              />
              <input
                type="submit"
                value="search"
                className="p-4 font-medium text-white  cursor-pointer text-lg rounded-tr-lg rounded-br-lg bg-[#0f7d9e]"
              />
            </form>
          </div>
        </div>
        {/* <div className="w-[50%]"></div> */}
      </div>
    </div>
  );
};

Banner.propTypes = {
  setSearch: PropTypes.func,
};

export default Banner;
