"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export const UserDataProvider = ({ children }: any) => {
    const [newUser, setNewUser] = useState([{
        email:"d@gmail.com",password:"123"
    }]);
    const [existUser, setExistUser] = useState([]);


    console.log(newUser);
    

    return (
        <UserContext.Provider value={{ newUser, setNewUser, existUser, setExistUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const userData = () => useContext(UserContext);
