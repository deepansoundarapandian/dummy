"use client";

import {
    AppBar,
    Toolbar,
    Box,
    Container,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { userData } from "@/context/UserData";
import { useRouter } from "next/navigation";
import DesktopNav from "./DesktopNav";
import ProfileMenu from "./ProfileMenu";
import MobileDrawer from "./MobileDrawer";

export default function Navbar({ onOpenLogin }: any) {

    const router = useRouter();

    const { setLoggedIn, setSelected } = userData();
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        setLoggedIn({ loggedIn: false, userName: "" });
        handleClose();
    };

    const handleNav = (nav: string) => {
        setSelected(nav);
        router.push('/profile');
    };

    return (
        <>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    color: "black",
                    position: "relative",
                }}
            >
                <Container disableGutters sx={{ mt: "30px" }}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 0,
                        }}
                    >

                        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                            >
                                <MenuIcon sx={{ width: 26, height: 26 }} />
                            </IconButton>

                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}
                            >
                                <Image
                                    src="/assets/sm.png"
                                    alt="Logo"
                                    width={90}
                                    height={25}
                                />
                            </Box>


                            <IconButton >
                                <Link href="/cart">
                                    <ShoppingCartOutlinedIcon
                                        sx={{ width: 22, height: 22, color: "black" }}
                                    />
                                </Link>
                            </IconButton>
                        </Box>

                        <DesktopNav setAnchorEl={setAnchorEl} onOpenLogin={onOpenLogin} open={open} />

                    </Toolbar>
                </Container>
            </AppBar>

            <MobileDrawer handleNav={handleNav} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} handleLogout={handleLogout} onOpenLogin={onOpenLogin} />

            <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleLogout={handleLogout} />
        </>
    );
}



















