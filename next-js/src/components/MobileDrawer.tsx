import {
    Box,
    MenuItem,
    Typography,
    Drawer,
    IconButton,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { userData } from "@/context/UserData";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileDrawer = ({ handleNav, drawerOpen, setDrawerOpen, handleLogout, onOpenLogin }: { handleNav: any, drawerOpen: any, setDrawerOpen: any, handleLogout: any, onOpenLogin: any }) => {

    const { loggedIn } = userData();
    const [activeNav, setActiveNav] = useState("Home");

    const list = ["Home", "Category", "About", "Contact"];

    const loginList = [
        { name: "Profile", to: "/profile", },
        { name: "orders", to: "/profile", },
        { name: "wishlist", to: "/profile", },
        { name: "addressess", to: "/profile", },
        { name: "notifications", to: "/profile", }
    ];

    return (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
                sx: {
                    width: { xs: "100%", md: 260 },
                    padding: "20px",
                    bgcolor: "#FFFFFF",
                    color: "black",
                    borderRadius: 0,
                    position: 'relative'
                },
            }}
        >
            <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 10,
                    color: '#103559'
                }}
            >
                <CloseIcon />
            </IconButton>

            {/* LOGO*/}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    mb: 4,
                    mt: 1
                }}
            >
                <Image
                    src="/assets/sm.png"
                    alt="Logo"
                    width={90}
                    height={25}
                />
            </Box>

            {/* NAVIGATION LIST */}
            <Box sx={{ width: "100%" }}>
                {list.map((nav) => (
                    <Box
                        key={nav}
                        sx={{
                            borderBottom: "1px solid #3B3B4333",
                            py: 1,
                        }}
                    >
                        <MenuItem
                            disableRipple
                            onClick={() => setActiveNav(nav)}
                            sx={{
                                p: 0,
                                fontSize: "18px",
                                color: activeNav === nav ? "primary.main" : "#3B3B4399",
                                fontWeight: activeNav === nav ? 600 : 400,
                            }}
                        >
                            <Link
                                href="/"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none"
                                }}
                            >
                                {nav}
                            </Link>
                        </MenuItem>
                    </Box>
                ))}
            </Box>

            {/* AFTER LOGIN */}
            {loggedIn.loggedIn ? (
                <Box sx={{ width: "100%" }}>
                    {loginList.map((nav) => (
                        <Box
                            key={nav.name}
                            sx={{
                                borderBottom: "1px solid #3B3B4333",
                                py: 1,
                            }}
                        >
                            <MenuItem
                                disableRipple
                                onClick={() => setActiveNav(nav.name)}
                                sx={{
                                    p: 0,
                                    color: activeNav === nav.name ? "primary.main" : "#3B3B4399",
                                    fontWeight: activeNav === nav.name ? 600 : 400,
                                }}
                            >
                                <Typography sx={{ fontSize: "18px", }}
                                    onClick={() => handleNav(nav.name)}
                                >
                                    {nav.name}
                                </Typography>
                            </MenuItem>
                        </Box>
                    ))}

                    <MenuItem
                        onClick={handleLogout}
                        sx={{
                            color: "red",
                            fontWeight: 500,
                            px: 0,
                            fontSize: '18px'
                        }}
                    >
                        Logout
                    </MenuItem>

                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={onOpenLogin}
                        sx={{
                            mt: 6,
                            textTransform: "none",
                            borderRadius: "25px",
                            py: 1.2,
                            px: '50px'
                        }}
                    >
                        Login
                    </Button>
                </Box>
            )}
        </Drawer>
    )
}

export default MobileDrawer;