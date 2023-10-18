import { Link, Navigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { useContext, useState} from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  const {googleLogin} =useContext(AuthContext)
  const {createUser}=useContext(AuthContext)
  const [error,setError] =useState("")
  const [loggedIn,setLoggedIn] =useState(false)



  const handleSocialLogin = (media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const name= e.target.name.value;
    const photo= e.target.photo.value;
    const email= e.target.email.value;
    const password= e.target.password.value;

      console.log(email,password,name,photo);

      if((!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) ){
        const errorMessage = "Password must be at least eight characters long with at least one Capital letter and one special character."
       setError(errorMessage);
       toast(errorMessage)
       
       const passwordInput = document.querySelector('input[name="password"]');
      if (passwordInput) {
        passwordInput.value = '';
      }
      }
      else{
        setError('')
        createUser(email,password)
        .then(res=>{
          console.log(res.user)
          toast.success('Registration Successful') 
          setLoggedIn(true)
        })
        .catch(error=>{
          console.error(error.message)
          toast.error(error.message)
        })
  
      }
  

   
  
      
    
  
  
}
  

  


  return (
    <div>
      {
        loggedIn && <Navigate to="/"></Navigate>
      }
      <div className="grid grid-cols-1 md:grid-cols-4 md:ml-80">
     <div className="">
     <div className="hero">
  <div className="hero-content flex-col md:w-[700px]">
    <div className="text-center lg:text-left">
    <img className="hidden md:block w-80" src="https://i.ibb.co/brfMXPh/203-2035339-register-user-register-online-icon-png.jpg" alt="" />
    </div>
    <div className="card w-full shadow-2xl bg-purple-400">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
        </div>
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
          <button className=" text-white btn bg-purple-500 hover:bg-[#ecb3ff] hover:text-black">Register</button>
        </div>
      </form>

      <p className="text-center mt-4 mb-4 ">
        <span className="text-lg ">Already have an account please</span>
        <Link to="/login"  className=" font-bold text-blue-600 text-xl hover:text-white"> Login</Link>
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
  


     <div>
     
     </div>

    <ToastContainer/>
   </div>
    </div>
  );
};

export default Register;