import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase/getAuthDb";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [userId, setUserId] = useState(null)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) setUserId(user.uid)
            else setUserId(null)
        })

    }, [])


    const value = {
        userId: userId,
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )

}
