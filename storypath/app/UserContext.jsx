import React, { createContext, useContext, useState } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Wrap the app and provide user state
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
