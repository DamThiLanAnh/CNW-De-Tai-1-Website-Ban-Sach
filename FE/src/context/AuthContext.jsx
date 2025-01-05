import { createContext, useContext, useState } from 'react'
import { auth } from '../firebase/firebase_config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

// authProvider
export const AuthProvide = ({ children }) => {
    const [currenUser, setCurrenUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register a user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currenUser,
        registerUser
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
} 