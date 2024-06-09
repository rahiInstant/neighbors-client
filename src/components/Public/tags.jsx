const Tags = () => {
    const tags = (text) => {
        return(        <div className="font-medium bg-[#ffc49c71] w-fit py-1 px-3 rounded-full">
          {text}
        </div>)
    }
  return (
    <div className="shadow bg-white p-4">
      <h1 className="text-xl font-semibold">Tags</h1>
      <div className="mt-6 flex gap-3 flex-wrap">
        {tags('#education')}
        {tags('#health')}
        {tags('#physics')}
        {tags('#math')}
        {tags('#planning')}
        {tags('#physics')}
        {tags('#math')}
        {tags('#planning')}
        {tags('#physics')}
        {tags('#math')}
        {tags('#planning')}
      </div>
    </div>
  );
};

export default Tags;
