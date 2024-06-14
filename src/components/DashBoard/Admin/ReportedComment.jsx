import { IoIosArrowDown } from "react-icons/io";

const ReportedComment = () => {
  const oneComment = () => {
    {
      /* one comment */
    }
    return (
      <div className="shadow flex flex-col lg:items-center lg:flex-row gap-3 mx-5 p-3">
        <div className="lg:w-[22%] w-full lg:border-r-2 h-full italic font-medium px-3 py-1">
          rahiurp20@gmail.com
        </div>
        <div className="lg:w-[38%] w-full lg:border-r-2 h-full px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ab?
        </div>
        <form className="flex gap-3 px-3 py-1 lg:w-[40%] w-full">
          <div className="relative h-fit  border rounded-md w-full">
            <select
              name="origin"
              required
              className="py-3 px-5 text-lg appearance-none font-semibold rounded-md outline-none w-full"
            >
              <option className="hidden" value="">
                -- feedback --
              </option>
              <option value="Hate speech">Hate speech</option>
              <option value="delete-comment">Vulnerable</option>
              <option value="bla-bla-bla">bla-bla-bla</option>
            </select>
            <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
              <IoIosArrowDown className="text-2xl" />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-lg font-semibold rounded-md border bg-blue-700 text-white hover:bg-red-500 duration-200 cursor-pointer"
          >
            feedback
          </button>
        </form>
      </div>
    );
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex flex-col gap-2">
        {oneComment()}
        {oneComment()}
        {oneComment()}
        {oneComment()}
        {oneComment()}
      </div>
    </div>
  );
};

export default ReportedComment;
