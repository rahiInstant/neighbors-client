import PostCard from "./PostCard";
import usePosts from "../../../Hooks/usePosts";

const MyPosts = () => {
  const { data } = usePosts();
  // console.log(data);
  return (
    <div>
      {data?.length == 0 ? (
        <div className="border px-5 py-4 rounded-md w-full h-40 flex items-center justify-center text-xl font-medium">
          No Post Yet!!!
        </div>
      ) : (
        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          {data?.map((item, idx) => {
            return (
              <PostCard
                key={idx}
                title={item.title}
                upVote={item.upVote}
                downVote={item.downVote}
                id={item._id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
