"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export const UserDataProvider = ({ children }: any) => {
    const [newUser, setNewUser] = useState([
        { name: 'deepan', email: 'd@gmail.com', password: '123', confirmPassword: '123' }
    ]);
    const [existUser, setExistUser] = useState([]);
    const [loggedIn, setLoggedIn] = useState({
        userName: 'Deepan',
        loggedIn: false
    })





    return (
        <UserContext.Provider value={{ newUser, setNewUser, existUser, setExistUser, loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const userData = () => useContext(UserContext);
