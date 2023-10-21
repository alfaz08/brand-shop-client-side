import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const {googleLogin} =useContext(AuthContext)
  const {signIn}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()
  const [loginError,setLoginError] =useState('')

  const handleSocialLogin = (media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  const handleSubmit =(e)=>{
    

    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;

    signIn(email,password)
   .then(res=>{
    console.log(res.user)
    navigate(location?.state?location.state:'/')
   })
   .catch(error=>{
    console.log(error)
    setLoginError(error.message)
    toast.error(error.message)
    e.target.reset()
   })
    
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:ml-32">
     <div className="hidden md:block ">
       <img className="h-[530px] w-[420px] mt-32" src="https://i.ibb.co/Qkbj5bY/Screenshot-2023-10-18-115151.jpg" alt="" />
     </div>
     <div className="">
     <div className="hero">
  <div className="hero-content flex-col md:w-[700px] ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome to our website and explore it</p>
    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-purple-400">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
        <button  className="btn  bg-purple-500 text-white hover:bg-[#ecb3ff] hover:text-black">Login</button>
        </div>
      </form>



      <p className="text-center mt-4 mb-4 ">
        <span className="text-lg ">Don't have an account please</span>
        <Link to="/register"  className=" font-bold text-blue-600 text-xl hover:text-white"> Register</Link>
      </p>


      <div className="flex items-center justify-center">
     <hr className="mr-2 ml-4 w-36 border-black" />
      <span>or</span>
      <hr className="ml-2 mr-4 w-36 border-black"/>
     </div>
     <div className="text-center mb-4 mt-4 ">
      <button onClick={()=>handleSocialLogin(googleLogin)}  className=" text-white btn bg-purple-500 hover:bg-[#ecb3ff] hover:text-black"><FaGooglePlusG  className="text-white  text-2xl "></FaGooglePlusG>Login with google</button>
     </div>




    </div>
  </div>
</div>



     </div>

     <ToastContainer></ToastContainer>
 
    </div>
  );
};

export default Login;