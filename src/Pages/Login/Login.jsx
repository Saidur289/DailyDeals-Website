import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const {handleSingIn, setUser, handleLoginGoogle} = useContext(AuthContext)
    const location = useLocation()
    const [err, setError] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value
        setError('')
        handleSingIn(email, password)
        .then((result) => {
          setUser(result.user)
          e.target.reset()
          navigate(location?.state? location.state : '/')
        })
        .catch((error) => {
          setError(error.message)
        })
      
       }
       const handleGoogle = () => {
        handleLoginGoogle()
        .then((result) => {
          setUser(result.user)
          navigate(location?.state? location.state : '/')
        })
        .catch((error) => {
          setError(error.message)
        })
      }
       const handleForgetPassword = () => {
        navigate("/forget", {state: {email}});
       }
    return (
        <div className="flex min-h-screen justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none shadow-lg p-10">
           <h1 className="font-semibold text-center">Login Your Account</h1>
         <form onSubmit={handleLogin} className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="email"
               name="email"
               placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input
               type="password"
               name="password"
               placeholder="password"
               className="input input-bordered"
               required
             />
             <label className="label">
               <a onClick={handleForgetPassword} className="label-text-alt link link-hover">
                 Forgot password?
               </a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-3 rounded-lg transition duration-300">Login</button>
           </div>
         </form>
         {
            err && <p className="text-red-500 text-center">{err}</p>
        }
         <p className="text-center font-semibold">Do Not Have An Account? <Link className="text-red-500 " to = '/register'>Register</Link></p>
         <h1 onClick={handleGoogle} className="flex items-center justify-center gap-3 mt-3 bg-green-900 hover:bg-green-700 text-white text-sm py-3 rounded-lg transition duration-300"><FaGoogle></FaGoogle> Sign In With Google</h1>
       </div>
       
       
      </div>
    );
};

export default Login;