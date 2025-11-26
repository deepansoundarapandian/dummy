"use client";

import {
    AppBar,
    Toolbar,
    Box,
    Container,
    IconButton,
    useMediaQuery
} from "@mui/material";
import Badge from '@mui/material/Badge';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import { useState } from "react";
import { userData } from "@/context/UserData";
import { useRouter } from "next/navigation";
import DesktopNav from "./DesktopNav";
import ProfileMenu from "./ProfileMenu";
import MobileDrawer from "./MobileDrawer";
import { usePathname } from "next/navigation";
import theme from "@/themes/theme";

export default function Navbar({ onOpenLogin }: any) {

    const router = useRouter();
    const pathname = usePathname();

    const isMobile = useMediaQuery(theme.breakpoints.down("md")) && pathname === "/profile";

    const { setLoggedIn, setSelected, cart } = userData();
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [openAlert, setOpenAlert] = useState(false);

    const open = Boolean(anchorEl);

    const handleLogout = () => {
        setLoggedIn({ loggedIn: false, userName: "" });
        if (pathname === "/profile") {
            router.push("/")
        }
        setOpenAlert(false);
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
                <Container disableGutters sx={{ mt: { xs: 0, md: "30px" } }}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 0,
                        }}
                    >

                        {
                            isMobile ? '' : (
                                <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2 }}>
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


                                    <IconButton onClick={() => router.push('/cart')}>
                                        <Badge badgeContent={cart.length} color="primary">
                                            <ShoppingCartOutlinedIcon
                                                sx={{ width: 20, height: 20, color: 'primary.main' }}
                                            />
                                        </Badge>
                                    </IconButton>
                                </Box>
                            )
                        }

                        <DesktopNav setAnchorEl={setAnchorEl} onOpenLogin={onOpenLogin} open={open} />

                    </Toolbar>
                </Container>
            </AppBar>

            <MobileDrawer handleNav={handleNav} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} handleLogout={handleLogout} onOpenLogin={onOpenLogin} />

            <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleLogout={handleLogout} openAlert={openAlert} setOpenAlert={setOpenAlert} />
        </>
    );
}



















