import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeddUser = localStorage.getItem('isLoggedIn');
        if (storeddUser === '1') {
            setIsLoggedIn(true)
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const logintHandler = () => {
        localStorage.setItem('isLoggedIn', 1);
        setIsLoggedIn(true);
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogOut: logoutHandler,
                onLogin: logintHandler
            }}
        >
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContext;