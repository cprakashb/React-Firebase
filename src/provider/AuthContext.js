import React, { useContext, useState, useEffect } from "react"
import { firebaseAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "../auth/auth.js"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // updates when user logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    // invokes firebase createUserWithEmailAndPassword function to register user
    function signUp(email, password) {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    // invokes firebase signInWithEmailAndPassword function for user login
    function signIn(email, password) {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    // invokes firebase signOut function to logout the user 
    function logout() {
        return signOut(firebaseAuth)
    }

    const value = {
        currentUser,
        signIn,
        signUp,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}