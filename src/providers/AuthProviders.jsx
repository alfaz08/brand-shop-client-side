import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
  
  const [user,setUser]=useState(null)


  //google signin
  const googleLogin =()=>{
    return signInWithPopup(auth,googleProvider)
  }
  
   //email and password signup
   const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }


  const authentications={
     googleLogin,
     createUser,
     
  }


  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
