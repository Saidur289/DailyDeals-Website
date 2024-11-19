import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="bg-[#F9FAFB]">
      <h1 className="text-2xl font-bold text-center py-5">
        Welcome To Your Profile
      </h1>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 text-center space-y-3">
        <img
          src={user?.photoURL}
          alt={`${user?.name}'s profile`}
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {user?.displayName}
        </h2>
        <p className="text-gray-600">{user?.email}</p>
       
       <Link to = '/updatePro'>
       <button className=" bg-green-600 hover:bg-green-700 text-white text-sm py-3  px-5 mt-4 rounded-lg transition duration-300">
          Update Profile
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Profile;
