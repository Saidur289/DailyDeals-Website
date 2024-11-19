import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const handleSingIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleSignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                console.log(currentUser);
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const handleLoginGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        handleSignUp,
        handleSingIn,
        handleSignOut,
        user,
        setUser,
        updateUser,
        handleLoginGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;