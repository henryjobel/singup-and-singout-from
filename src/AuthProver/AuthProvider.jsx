import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from './../Firebaseauth/fireBase.config';

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {


    const [user , setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth ,email, password)
    }
    const singInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSbuscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("current user jou",currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSbuscribe()
        }
    },[])

    const authInfo = {
         user, 
        createUser ,
        singInUser,
        logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;