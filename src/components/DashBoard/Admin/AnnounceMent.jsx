const AnnounceMent = () => {
  return (
    <div>
      <form>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="p-5 shadow rounded-md w-full lg:w-48 flex items-center justify-center">
            <img
              className="w-28 h-28 border rounded-full border-green-700"
              src="/user.png"
              alt=""
            />
          </div>
          <div className="flex gap-3 flex-col w-full">
            <div className="w-full">
              <label className="block text-xl font-semibold  " htmlFor="name">
                Author Name
              </label>
              <input
                disabled
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
        <textarea
          required
          className="outline-none border rounded-md py-4 px-5 w-full mt-2 h-[145px]"
          name="comment"
          rows={4}
          id=""
          maxLength={250}
          minLength={150}
          placeholder="write something about this spot withing 150-250 words."
        ></textarea>
        <button
          className="py-4 px-5 rounded-md bg-[#115aad] mt-3 w-full text-xl font-semibold text-white"
          type="submit"
        >
          Make Announcement
        </button>
      </form>
    </div>
  );
};

export default AnnounceMent;
