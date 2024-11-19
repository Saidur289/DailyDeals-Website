
import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
    const { handleSignUp, setUser, updateUser, handleLoginGoogle}  = useContext(AuthContext)
    const navigate = useNavigate()
    const [err, setError] = useState('')
    const [show, setShow] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value 
        const password = e.target.password.value 
        const photo = e.target.photo.value 
        if(!/[a-z]/.test(password)){
            setError('password must contain at least one lowercase')
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError('password must contain at least one Uppercase')
            return;
        }
        if(password.length < 6){
            setError('password must be 6 character')
            return;
        }
        handleSignUp(email, password)
        .then((result) => {
          setUser(result.user);
          // e.target.reset()
          const updatedData = {
            displayName: name,
            photoURL: photo
          }
          updateUser(updatedData)
          .then(() => {
            navigate('/')
          })
          .catch((error) => {
           setError(error.message)
          })

        })
        .catch((error) => {
          setError(error.message)
        })
       
    }
    const handleGoogle = () => {
      handleLoginGoogle()
      .then((result) => {
        setUser(result.user)
        navigate('/')
      })
      .catch((error) => {
        setError(error.message)
      })
    }
  return (
    <div className="min-h-screen flex justify-center items-center mt-5">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h1 className="font-semibold text-center">Register Now!</h1>
        <form onSubmit={handleSubmit} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={show? 'text': 'password'}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <p onClick={() => setShow(!show)} className="absolute top-12 right-6">{show? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</p>
        
          </div>
          <div className="form-control mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-3 rounded-lg transition duration-300">Register</button>
          </div>
        </form>
        {
            err && <p className="text-red-500">{err}</p>
        }
        <p className="p-3 text-center">Already Have an account? <Link className="text-red-500" to = '/login'>Login</Link></p>
        <h1 onClick={handleGoogle} className="flex items-center justify-center gap-3 mt-3 bg-green-900 hover:bg-green-700 text-white text-sm py-3 rounded-lg transition duration-300"><FaGoogle></FaGoogle> Sign Up With Google</h1>
      </div>
    </div>
  );
};

export default Register;
