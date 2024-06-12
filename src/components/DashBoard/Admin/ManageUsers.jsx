const ManageUsers = () => {
  return (
    <div>
        <hr  className="border-b-2 border-orange-500 my-3"/>
      <table className=" w-full table-auto">
        <thead>
          <tr>
            <th>SN.</th>
            <th>user name</th>
            <th>email</th>
            <th>make Admin</th>
            <th>subscription</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center ">1</td>
            <td className="text-left">Abdur Rahaman</td>
            <td className="text-center">rahiurp20@gmail.com</td>
            <td>ok</td>
            <td>member</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
