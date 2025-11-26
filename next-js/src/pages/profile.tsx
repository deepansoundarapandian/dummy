"use client";

import { userData } from "@/context/UserData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UpdateProfile from "@/components/Profile/EditProfile/UpdateProfile";
import MyOrders from "@/components/Profile/MyOrders/MyOrders";
import Wishlist from "@/components/Profile/Wishlist";
import Addresses from "@/components/Profile/Addresses";
import Notifications from "@/components/Profile/Notifications";
import AlertDialog from "@/components/Notification/AlertDialog";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export default function ProfilePage() {

    const { selected, setSelected, loggedIn, setLoggedIn, newUser } = userData();

    const userId = loggedIn.userId;

    const currentUser = newUser.find((u: any) => u.id === userId);

    const router = useRouter();

    const [openAlert, setOpenAlert] = useState(false);

    const menuItems = [
        { id: "profile", label: "My Profile", icon: <AccountCircleOutlinedIcon /> },
        { id: "orders", label: "My Orders", icon: <ShoppingBagOutlinedIcon /> },
        { id: "wishlist", label: "Wishlist", icon: <FavoriteBorderOutlinedIcon /> },
        { id: "addresses", label: "Saved Addresses", icon: <LocationOnOutlinedIcon /> },
        { id: "notifications", label: "Notifications", icon: <NotificationsNoneOutlinedIcon /> },
        { id: "logout", label: "Logout", color: "#D9534F", icon: <LogoutOutlinedIcon /> },
    ];

    const title = {
        fontSize: "18px",
        fontWeight: 400,
        color: "#00171F",
    };

    const handleLogout = () => {
        setOpenAlert(true);
    };

    const logOff = () => {
        setLoggedIn({
            userId: null,
            userName: '',
            loggedIn: false
        });
        setSelected("profile");
        router.push("/");
    };

    const renderComponent = () => {
        switch (selected) {
            case "profile":
                return <UpdateProfile />;
            case "orders":
                return <MyOrders />;
            case "wishlist":
                return <Wishlist />;
            case "addresses":
                return <Addresses />;
            case "notifications":
                return <Notifications />;
            default:
                return <UpdateProfile />;
        }
    };

    return (
        <>
            <Container disableGutters>

                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        p: { xs: 0, md: 4 },
                        minHeight: { xs: "70vh", md: "90vh" },
                        color: "black",
                    }}
                >

                    {/* LEFT SIDE CONTENT */}
                    <Box
                        sx={{
                            minWidth: 340,
                            borderRadius: "10px",
                            p: 3,
                            height: "100%",
                            display: { xs: 'none', md: 'block' },
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                borderBottom: "1px solid #E6E6E6",
                                pb: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: "50%",
                                }}
                            >
                                {currentUser?.image ? (
                                    <img
                                        src={currentUser.image}
                                        alt="Profile"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '50%' }}
                                    />
                                ) : (
                                    <AccountCircleIcon sx={{ width: "100%", height: "100%", color: "#CDCDCD" }} />
                                )}
                            </Box>

                            <Box>
                                <Typography sx={{ ...title, textTransform: 'capitalize' }}>{loggedIn.userName}</Typography>
                                <Typography fontSize={13} color="#667479">
                                    {currentUser?.phoneNo}
                                </Typography>
                            </Box>
                        </Box>

                        <List sx={{ mt: 0 }}>
                            {menuItems.map((item) => (

                                <ListItem
                                    key={item.id}

                                    onClick={() => {
                                        if (item.id === "logout") {
                                            handleLogout();
                                        } else {
                                            setSelected(item.id);
                                        }
                                    }}

                                    sx={{
                                        borderRadius: "8px",
                                        mb: 1,
                                        cursor: "pointer",

                                        ...(selected === item.id && {
                                            bgcolor: "#00345926",
                                            color: "primary.main",
                                        }),

                                        ...(item.id === "logout" && {
                                            color: item.color,
                                        }),
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            ...(selected === item.id && {
                                                color: "primary.main",
                                            }),

                                            ...(item.id === "logout" && {
                                                color: "#D9534F",
                                            }),
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            ...(item.id === "logout" && {
                                                color: "#D9534F",
                                            }),
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* RIGHT SIDE CONTENT */}
                    {renderComponent()}

                </Box>
            </Container>

            {
                openAlert && <AlertDialog openAlert={openAlert} setOpenAlert={setOpenAlert} logOff={logOff} />
            }
        </>
    );
}
