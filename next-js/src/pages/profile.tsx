"use client";

import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container, useMediaQuery, useTheme
} from "@mui/material";

import UpdateProfile from "@/components/UpdateProfile";
import MyOrders from "@/components/MyOrders";
import Wishlist from "@/components/Wishlist";
import Addresses from "@/components/Addresses";
import Notifications from "@/components/Notifications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { userData } from "@/context/UserData";

export default function ProfilePage() {

    const { selected, setSelected } = userData();
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            case "logout":
                return <Typography color="red">Logging out...</Typography>;
            default:
                return <UpdateProfile />;
        }
    };

    return (
        <Container >
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    p: { xs: 0, md: 4 },
                    minHeight: "90vh",
                    color: "black",

                }}
            >
                {/* LEFT SIDEBAR */}
                <Box
                    sx={{
                        width: 340,
                        borderRadius: "10px",
                        p: 3,
                        height: "100%",
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    {/* User info */}
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
                            <AccountCircleIcon
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    color: "#CDCDCD",
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography sx={{ ...title }}>Username</Typography>
                            <Typography fontSize={13} color="#667479">
                                +91 0123456789
                            </Typography>
                        </Box>
                    </Box>

                    {/* Menu List */}
                    <List sx={{ mt: 0 }}>
                        {menuItems.map((item) => (
                            <ListItem
                                key={item.id}
                                onClick={() => setSelected(item.id)}
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
    );
}
