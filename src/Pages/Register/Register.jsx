import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:ml-80">
     <div className="">
     <div className="hero">
  <div className="hero-content flex-col md:w-[700px]">
    <div className="text-center lg:text-left">
    <img className="hidden md:block w-80" src="https://i.ibb.co/brfMXPh/203-2035339-register-user-register-online-icon-png.jpg" alt="" />
    </div>
    <div className="card w-full shadow-2xl bg-purple-400">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="email" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="email" placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
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
      <button  className=" text-white btn bg-purple-500 hover:bg-[#ecb3ff] hover:text-black"><FaGooglePlusG  className="text-white  text-2xl "></FaGooglePlusG>Login with google</button>
     </div>




    </div>
  </div>
</div>
     </div>
  


     <div>
     
     </div>


   </div>
  );
};

export default Register;