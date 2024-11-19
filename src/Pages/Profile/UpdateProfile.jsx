import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const {user, setUser, updateUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const photo = e.target.photo.value 
        const updatedData = {
            displayName: name,
            photoURL: photo
        }
        updateUser(updatedData)
        .then(() => {
            setUser({
                ...user,
                displayName: name,
                photoURL: photo,
              });
              
            navigate(-1)

        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center mt-5">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 space-y-3">
          <h1 className="font-semibold text-center">Update Now!</h1>
          <form  onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo-URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <button type="submit" className=" bg-green-600 hover:bg-green-700 mt-3 text-white text-sm py-3 rounded-lg transition duration-300">
          Update Information
        </button>
           
          </form>
        
        </div>
      </div>
    );
};

export default UpdateProfile;