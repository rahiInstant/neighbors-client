import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RotatingLines } from "react-loader-spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import toast from "react-hot-toast";
const Reported = () => {
  const axiosSecure = useAxiosSecure();
  const showSwal = withReactContent(Swal);
  const successMsg = (msg) => toast.success(msg);
  const { data: reported, isPending, refetch:reportFetchAgain } = useQuery({
    queryKey: ["all-reported-comment"],
    queryFn: async () => {
      const result = await axiosSecure.get("/all-feed");
      return result.data;
    },
  });
  console.log(reported);
  if (isPending) {
    return (
      <div className="flex justify-center">
        <RotatingLines
          visible={true}
          height="60"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  function handleReportInfo(authorInfo, commenterInfo) {
    console.log(authorInfo, commenterInfo);
    showSwal.fire({
      showConfirmButton: false,
      width: "42rem",
      html: (
        <div className="h-56 flex flex-col gap-5">
          <div className="w-full p-4 rounded-md border">
            <h1>
              <span className="font-semibold text-black">Commenter name</span>:{" "}
              {commenterInfo.name}
            </h1>
            <h1>
              <span className="font-semibold text-black">Commenter Email</span>:{" "}
              {commenterInfo.email}
            </h1>
            <h1>
              <span className="font-semibold text-black">Comment</span>:{" "}
              {commenterInfo.comment}
            </h1>
          </div>
          <div className="w-full p-4 rounded-md border">
            <h1>
              <span className="font-semibold text-black">Author name</span>:{" "}
              {authorInfo.name}
            </h1>
            <h1>
              <span className="font-semibold text-black">Author Email</span>:{" "}
              {authorInfo.email}
            </h1>
            <h1>
              <span className="font-semibold text-black">Post title</span>:{" "}
              {authorInfo.title}
            </h1>
            <h1>
              <span className="font-semibold text-black">Post body</span>:{" "}
              {authorInfo.body}
            </h1>
            <h1>
              <span className="font-semibold text-black">Posting time</span>:{" "}
              {new Date(authorInfo.postingTime).toUTCString()}
            </h1>
            <h1>
              <span className="font-semibold text-black">Up vote</span>:{" "}
              {authorInfo.upVote}, Down vote: {authorInfo.downVote}, Tag:{" "}
              {authorInfo.tags}
            </h1>
          </div>
        </div>
      ),
    });
  }

  function handleReportAction(
    e,
    commenterId,
    commenterEmail,
    commentId,
    reportId
  ) {
    e.preventDefault();
    const form = e.target;
    const action = form.action.value;
    axiosSecure
      .post("/report-action", {
        action: action,
        commenterId,
        commenterEmail,
        commentId,
        reportId,
      })
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data)
          reportFetchAgain()
          successMsg(`"${action}" action complete successfully.`);
        }
      });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reported?.map((item, idx) => {
        return (
          <div key={idx} className="shadow p-5 rounded-md relative">
            {/* <FaInfoCircle className="absolute right-5 w-6 h-6 text-red-600"/> */}
            {/* <p className="font-semibold border bg-amber-700 text-white py-3 px-5 w-full rounded-md text-center cursor-pointer">
              All Info
            </p> */}
            <div className="space-y-2 text-xl">
              <h1 className="text-center font-semibold flex items-center gap-1">
                <span className="font-medium flex items-center gap-1">
                  Report:
                </span>{" "}
                {item.feed}
              </h1>
              <h1 className=" flex  items-center gap-1">
                <span className="font-medium flex items-center gap-1">
                  Report by:
                </span>{" "}
                {item.authorInfo.email}
              </h1>
              <h1 className=" flex items-center gap-1">
                <span className="font-medium flex items-center gap-1">
                  Report for:
                </span>{" "}
                {item.commenterInfo.email}
              </h1>
            </div>
            <p
              onClick={() =>
                handleReportInfo(item.authorInfo, item.commenterInfo)
              }
              className="italic cursor-pointer font-semibold border border-red-600 text-red-600 py-3 px-5 w-full rounded-md text-center mt-4"
            >
              All Info of Report
            </p>
            <form
              onSubmit={(e) =>
                handleReportAction(
                  e,
                  item.commenterInfo._id,
                  item.commenterInfo.email,
                  item.commentId,
                  item._id
                )
              }
              className="flex items-center gap-3 mt-4"
            >
              <div className="relative h-fit  border rounded-md w-full ">
                <select
                  name="action"
                  required
                  className=" py-3 px-5 text-lg   appearance-none font-semibold rounded-md outline-none w-full"
                >
                  <option className="hidden" value="">
                    -- Action --
                  </option>
                  <option value="ban-user">Ban User</option>
                  <option value="delete-comment">Delete Comment</option>
                  <option value="delete-report">Delete Report</option>
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
      })}
      {/* {reportCard()}
      {reportCard()}
      {reportCard()} */}
    </div>
  );
};

export default Reported;
