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

    const [orders, setOrders] = useState([
        {
            id: 1,
            title: "Reflex Plus Adult Cat Food Salmon",
            image: "/assets/order.png",
            product: "Dog Food",
            size: "385gm",
            price: 199.0,
            status: "Delivered",
            statusColor: "#0FA958",
            statusIcon: "●",
            deliveredAt: "02 Mar 2025, 09:20 AM",
        },
        {
            id: 2,
            title: "Reflex Plus Adult Cat Food Salmon",
            image: "/assets/order.png",
            product: "Dog Food",
            size: "385gm",
            price: 199.0,
            status: "Cancelled",
            statusColor: "#E71D36",
            statusIcon: "●",
            deliveredAt: "02 Mar 2025, 09:20 AM",
        },
        {
            id: 3,
            title: "Reflex Plus Adult Cat Food Salmon",
            image: "/assets/order.png",
            product: "Dog Food",
            size: "385gm",
            price: 199.0,
            status: "Shipped",
            statusColor: "#1D7CFF",
            statusIcon: "📦",
            deliveredAt: "02 Mar 2025, 09:20 AM",
        },
        {
            id: 4,
            title: "Reflex Plus Adult Cat Food Salmon",
            image: "/assets/order.png",
            product: "Dog Food",
            size: "385gm",
            price: 199.0,
            status: "Order Placed",
            statusColor: "#A020F0",
            statusIcon: "●",
            deliveredAt: "02 Mar 2025, 09:20 AM",
        },
        {
            id: 5,
            title: "Reflex Plus Adult Cat Food Salmon",
            image: "/assets/order.png",
            product: "Dog Food",
            size: "385gm",
            price: 199.0,
            status: "Delivered",
            statusColor: "#0FA958",
            statusIcon: "●",
            deliveredAt: "02 Mar 2025, 09:20 AM",
        },
    ]);


     const [cart, setCart] = useState([
        {
            id: 1,
            title: "Reflex Plus Adult Cat Food Salmon",
            productType: "Dog Food",
            size: "385gm",
            price: 199,
            img: "/assets/image 2 (2).png",
            qty: 1,
        },
        {
            id: 2,
            title: "NaturVet Dogs – Omega-Gold Plus Salmon Oil",
            productType: "Dog Food",
            size: "385gm",
            price: 199,
            img: "/assets/image 2 (2).png",
            qty: 1,
        },
    ]);


     const [selected, setSelected] = useState("profile");

    return (
        <UserContext.Provider value={{ newUser, setNewUser, existUser, setExistUser, loggedIn, setLoggedIn, orders, setOrders, selected, setSelected, cart, setCart }}>
            {children}
        </UserContext.Provider>
    );
};

export const userData = () => useContext(UserContext);
