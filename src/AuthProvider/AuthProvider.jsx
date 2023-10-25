import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
   const [loading,setLoading] = useState(true);
   const [user,setUser] = useState({})

  //user registe with email and password 
   const register = (email,passwrod) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,passwrod)
   }
   const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
   //user login with google
    const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider);
    }
    
   //user with login 
   const logOut = () =>{
    setLoading(true)
    signOut(auth);
   } 
   //update profile 
   const handleUpdateProfile = (name,photo) =>{
    return updateProfile(auth.currentUser ,{
      displayName:name,
      photoURL:photo
    })
   }
   //using observer 
   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
      setLoading(false)
    })
   },[])
   

  const Alluser = {
    register,
    logOut,
    googleLogin,
  
    handleUpdateProfile,
    user ,
    signIn
  }
  return (
    <div>
      <AuthContext.Provider value={Alluser}>
      {children}
      </AuthContext.Provider>
     
    </div>
  );
};

export default AuthProvider;