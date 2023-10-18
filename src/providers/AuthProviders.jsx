import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
  
  const [user,setUser]=useState(null)
  const [loading,setLoading] =useState(true)
  //onauth state change
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    }); 
    
    return ()=>{
      unsubscribe()
    }
   },[])

  //logout
  const logOut=()=>{
    return signOut(auth);
  }


  //google signin
  const googleLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  
   //email and password signup
   const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

   //signin
   const signIn =(email,password)=>{
   
    return signInWithEmailAndPassword(auth,email,password)
   } 

  const authentications={
     googleLogin,
     createUser,
     signIn,
     logOut,
     user,
     loading

  }


  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
