const AnnounceMent = () => {
  return (
    <div>
      <div >
        <div className="p-1 border border-green-700 my-5 rounded-full w-fit">
          <img
            className="w-28 h-28 rounded-full border border-green-700"
            src="/user.png"
            alt=""
          />
        </div>
        <div className="flex gap-5 w-full flex-col">
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="name">
              Author Name
            </label>

            <input
              id="name"
              name="name"
              className="py-4 px-5 mt-2 w-full text-lg rounded-md  outline-none border "
              type="text"
              placeholder="Abdur Rahaman Rahi"
            />
          </div>
          <div className="w-full">
            <label className="block text-xl font-semibold  " htmlFor="photo">
              Title
            </label>
            <input
              className="py-4 px-5 w-full mt-2 text-lg rounded-md outline-none border "
              type="text"
              name="email"
              id="email"
              placeholder="Title goes here."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceMent;
