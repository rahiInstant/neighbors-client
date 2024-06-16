import useTags from "../../Hooks/useTags";

const Tags = ({setSearch}) => {
  const { tags } = useTags();
  // console.log(tags);
  return (
    <div className="shadow bg-white p-4">
      <h1 className="text-xl font-semibold">Tags</h1>
      <div className="mt-6 flex gap-3 flex-wrap">
        {tags?.map((item, idx) => {
          return (
            <div
              // onClick={() => setSearch(item)}
              key={idx}
              className="font-medium bg-[#ffc49c71] w-fit py-1 px-3 rounded-full cursor-pointer"
            >
              #{item.tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
