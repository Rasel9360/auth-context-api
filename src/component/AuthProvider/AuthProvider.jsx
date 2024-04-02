import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create  user profile
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login  to existing account
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  logout the current user
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)

    }

    // onAuthState change
    useEffect(()=>{
        const unSubsCriber = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>{
            unSubsCriber();
        }
    },[])

    const authInfo = { user, loading, createUser, signInUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}