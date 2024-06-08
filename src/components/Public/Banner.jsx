import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  const parts = ["felling.", "emotion.", "thought."];
  return (
    <div className="h-[700px] bg-[url('/Banner.svg')] bg-no-repeat bg-cover">
      <div className="flex max-w-screen-2xl mx-auto  h-full ">
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
            <form className="flex ">
              <input
                type="text"
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

export default Banner;
