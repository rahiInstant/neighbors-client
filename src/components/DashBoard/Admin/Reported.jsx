import { TbMessageReport } from "react-icons/tb";
import { MdOutlineReport } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const Reported = () => {
  const reportCard = () => {
    return (
      <div className="shadow p-5 rounded-md ">
        <h1 className="text-2xl font-semibold text-center">
          Lorem ipsum dolor sit amet. dolor sit amet.
        </h1>
        <div className="mt-5 space-y-2 text-lg">
          <h1 className=" flex  items-center gap-1">
            <span className="font-medium flex items-center gap-1">
              <MdOutlineReport className="text-blue-600 w-6 h-6" /> Report by:
            </span>{" "}
            Abdur Rahaman
          </h1>
          <h1 className=" flex items-center gap-1">
            <span className="font-medium flex items-center gap-1">
              <TbMessageReport className="text-red-600 w-6 h-6" />
              Report for:
            </span>{" "}
            Abdur Rahaman
          </h1>
        </div>
        <p className="italic font-semibold border border-red-600 text-red-600 py-3 px-5 w-full rounded-md text-center mt-4">
          <span className="">Feedback:</span> Against community
        </p>
        <form className="flex items-center gap-3 mt-4">
          <div className="relative h-fit  border rounded-md w-full ">
            <select
              name="origin"
              required
              className=" py-3 px-5 text-lg   appearance-none font-semibold rounded-md outline-none w-full"
            >
              <option className="hidden" value="">
                -- Action --
              </option>
              <option value="ban-user">Ban User</option>
              <option value="delete-comment">Delete Comment</option>
            </select>
            <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
              <IoIosArrowDown className="text-2xl" />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-lg font-semibold rounded-md border bg-red-600 text-white hover:bg-red-500 duration-200 cursor-pointer"
          >
            action
          </button>
        </form>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reportCard()}
      {reportCard()}
      {reportCard()}
    </div>
  );
};

export default Reported;
