import { createContext, useContext, useState } from 'react';
import { auth } from '../firebase/firebase_config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

// authProvider
export const AuthProvide = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register a user
    const registerUser = async (email, password) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // setCurrentUser(userCredential.user); // Set the current user after successful registration
    };

    const value = {
        currentUser,
        registerUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
