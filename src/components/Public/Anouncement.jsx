import PropTypes from "prop-types";
const Anouncement = ({ data }) => {
  
  return (
    <div className="shadow bg-white p-4">
      <h1 className="text-xl font-semibold">Announcement</h1>
      <div className="mt-6">
        {data?.map((item, idx) => {
          return (
            <div key={idx}>
              <div className=" p-3 cursor-pointer hover:bg-[#f8f8f8]">
                <h1 className="font-semibold">
                  {item.title}
                </h1>
                <p>{item.announce.substring(0,400)}...</p>
                <h1 className="italic font-medium mt-1">{new Date(item.date).toLocaleString()}</h1>
              </div>
              <hr />
            </div>
          );
        })}

        {/* <div className=" p-3 cursor-pointer hover:bg-[#f5f5f5]">
          <h1 className="">This is a great day for us and we enjoy this...</h1>
          <h1 className="italic font-medium mt-1">2 days ago</h1>
        </div> */}
      </div>
    </div>
  );
};

Anouncement.propTypes = {
  data: PropTypes.array,
};

export default Anouncement;
