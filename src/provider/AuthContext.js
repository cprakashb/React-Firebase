import React, { useContext, useState, useEffect } from "react"
import { firebaseAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "../auth/auth.js"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    function signUp(email, password) {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

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