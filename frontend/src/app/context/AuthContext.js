import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(null);
    const [username, setUsername] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Check authentication status on mount
        const token = localStorage.getItem('jwt_token');
        const storedUserType = localStorage.getItem('user_type');
        const storedUsername = localStorage.getItem('username');

        if (token) {
            setIsAuthenticated(true);
            setUserType(JSON.parse(storedUserType));
            setUsername(storedUsername);
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        //setUsername(user.username);
    };

    const logout = () => {
        // Clear all authentication-related data
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        localStorage.removeItem('user_type');

        // Reset auth state
        setIsAuthenticated(false);
        setUserType(null);
        setUsername(null);

        // Redirect to home page
        router.push('/');

        // Optional: Force a page reload to ensure clean state
        // Add a small delay to ensure the navigation happens first
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return ( <AuthContext.Provider value = {
            { isAuthenticated, login, logout, userType, username, setUserType } } > { children } 
            </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);