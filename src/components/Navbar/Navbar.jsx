import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaHome, FaUser } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
const Navbar = () => {
  const {handleSignOut, user} = useContext(AuthContext)
  const links = (
    <>
      {" "}
      <li>
        <NavLink className='flex items-center border-2 border-gray-200 justify-center' to='/'><FaHome className='mb-1'></FaHome> Home</NavLink>
      </li>
      <li>
        <NavLink className=' flex items-center border-2 border-gray-200 ' to = '/brands'><FaShop></FaShop> Brands</NavLink>
      </li>
      {
        user && (
          <li>
        <NavLink className='flex items-center border-2 border-gray-200 ' to = '/profile'><FaUser></FaUser> Profile</NavLink>
      </li>
        )
      }
    </>
  );
  return (
    <div className="navbar bg-[#F9FAFB]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl text-orange-400"><img className='w-14 h-14 rounded-full ' src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && (
            <div className='flex items-center gap-2'>
              <img src={user.photoURL} className='w-10 h-10 rounded-full' alt="" />
              <p>{user.email}</p>
            </div>
          )
        }
        {
          user && user?.email ? <Link to = '/'><p onClick={handleSignOut} className="btn bg-[#4CAF50] text-white">Log Out</p></Link>: <><Link to = '/login'><p className="btn bg-[#4CAF50] text-white">Login</p></Link>
          <Link to = '/register'><p className="btn bg-[#4CAF50] text-white">Register</p></Link>
          </>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
