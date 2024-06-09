const Anouncement = () => {
  return (
    <div className="shadow bg-white p-4">
      <h1 className="text-xl font-semibold">Announcement</h1>
      <div className="mt-6">
        <div className=" p-3 cursor-pointer hover:bg-[#f8f8f8]">
            <h1 className="">This is a great day for us and we enjoy this...</h1>
            <h1 className="italic font-medium mt-1">2 days ago</h1>
        </div>
        <hr />
        <div className=" p-3 cursor-pointer hover:bg-[#f5f5f5]">
            <h1 className="">This is a great day for us and we enjoy this...</h1>
            <h1 className="italic font-medium mt-1">2 days ago</h1>
        </div>
      </div>
    </div>
  );
};

export default Anouncement;
