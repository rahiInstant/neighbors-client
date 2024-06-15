import PostCard from "./PostCard";
import usePosts from "../../../Hooks/usePosts";

const MyPosts = () => {
  const { data } = usePosts();
  console.log(data);
  return (
    <div>
      <div className="mt-5 grid lg:grid-cols-3 gap-5">
        {data?.map((item, idx) => {
          return (
            <PostCard
              key={idx}
              title={item.title}
              upVote={item.upVote}
              downVote={item.downVote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
