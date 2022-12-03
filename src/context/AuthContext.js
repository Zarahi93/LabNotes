/* eslint linebreak-style: ["error", "windows"] */
import { useContext, createContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    signInWithRedirect,
    signOut,
    onAuthStateChanged 
} from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

const [user, setUser] = useState({});

const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

const logOut = () =>{
    signOut(auth)
}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
setUser(currentUser)
console.log('User', currentUser);
});
return () =>{
    unsubscribe();
}
},[])

    return (
        <AuthContext.Provider value={{ googleSingIn,logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
