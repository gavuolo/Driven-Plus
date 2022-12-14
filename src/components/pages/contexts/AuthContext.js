import React, { createContext, useState } from 'react';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const tokenLocalStorage = localStorage.getItem("userToken");
    const [user, setUser] = useState({})
    const [token, setToken] = useState(tokenLocalStorage);

        
    function addToken(token) {
        setToken(token)
        localStorage.setItem('userToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken, addToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;