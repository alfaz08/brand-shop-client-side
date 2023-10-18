import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Navbar = () => {
  
  const {user,logOut} =useContext(AuthContext)
  
 const navLinks = <>
   <li><NavLink   to="/">Home</NavLink></li>
   <li><NavLink to="/login">Login</NavLink></li>
   <li><NavLink to="/contact">Contact</NavLink></li>
   {
    user && <>
    <li><NavLink to="/product">Add Product</NavLink></li>
    <li><NavLink to="/cart">My Cart</NavLink></li>
    </>
   }
 </>

 const handleLogOut=()=>{
  logOut()
  .then(()=>{
    toast('user logged out successfully')
  })
  .catch(error=>toast(error))
 }


  return (
    <div className="sticky-navbar">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <img className="hidden md:block w-24 rounded-full" src="https://i.ibb.co/LvCngJ2/Fashion-Style-1.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <>
      {
        user.displayName?
        <span className="mr-2 p-2 bg-purple-400 font-bold h-12 flex items-center rounded-xl">{user.displayName}</span>
        :
        <span className="mr-2  bg-amber-400 h-12 flex items-center rounded-xl">{user.email}</span>
      }
      {
        user.photoURL?
        <img className=" rounded-full mr-2 w-12 h-12" src={user.photoURL} />
        :
        <img className=" w-12" src="/src/assets/person.png" /> 
     }
    <a className="btn bg-purple-400 font-bold" onClick={handleLogOut}>Sign Out</a>
      </>
      :
      <Link to="/login"><button className="btn  bg-purple-400 text-white hover:bg-[#ecb3ff] hover:text-black">Login</button></Link>
    }
  </div>

</div>
    </div>
  );
};

export default Navbar;