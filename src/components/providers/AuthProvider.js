import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase/getAuthDb";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user)
            else setUser(null)
        })

    }, [])


    const value = {
        user: user,
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )

}
