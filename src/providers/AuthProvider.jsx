import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext(null);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
  setLoading(true)
  return signOut(auth)
}


useEffect(()=>{
  const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
    console.log(currentUser)
    setUser(currentUser);
    setLoading(false)
  });
  return ()=>{
    return unSubscribe();
  }

},[])

const updateProfileAndPhoto=(user,name,photo)=>{
  return updateProfile((user),{
    displayName:name,photoURL:photo
  })
}


const registerWithGoogle=()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)
}

const signIn=(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password)
}

  const authInfo={user,createUser,loading,signIn,logOut,updateProfileAndPhoto,registerWithGoogle}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider >
  );
};

export default AuthProvider;