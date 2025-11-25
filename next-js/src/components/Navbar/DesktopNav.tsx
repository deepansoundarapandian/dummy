"use client";

import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button,

} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import Link from "next/link";
import { userData } from "@/context/UserData";


const DesktopNav = ({ setAnchorEl, onOpenLogin, open }: { setAnchorEl: any, onOpenLogin: any, open: any }) => {

    const { loggedIn } = userData();

    const list = ["Home", "Category", "About", "Contact"];

    const handleOpen = (e: any) => setAnchorEl(e.currentTarget);

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "space-between",

            }}
        >
            {/* Left Desktop Logo */}
            <Image
                src="/assets/Frame.png"
                alt="Logo"
                width={100}
                height={40}
            />

            <Box sx={{ display: 'flex', gap: 4 }}>
                {/* Center Nav List */}
                <List sx={{ display: "flex", gap: 5 }}>
                    {list.map((item) => (
                        <ListItem key={item} sx={{ width: "auto", p: 0 }}>
                            <Link href="/">
                                <ListItemText
                                    primary={item}
                                    sx={{
                                        "& .MuiTypography-root": { fontWeight: 600 },
                                        color: 'primary.main'
                                    }}
                                />
                            </Link>
                        </ListItem>
                    ))}
                    {loggedIn.loggedIn ? (
                        <>
                            <ListItem
                                sx={{ width: "auto", p: 0, cursor: "pointer" }}
                                onClick={handleOpen}
                            >
                                <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                                    <AccountCircleRoundedIcon sx={{ color: 'primary.main' }} />
                                </ListItemIcon>

                                <ListItemText
                                    primary={loggedIn.userName}
                                    sx={{
                                        "& .MuiTypography-root": { fontWeight: 600 },
                                        textTransform: "capitalize",
                                        color: 'primary.main'
                                    }}
                                />

                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </ListItem>
                            <ListItem sx={{ width: "auto", padding: 0 }}>
                                <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                                    <ShoppingCartOutlinedIcon
                                        sx={{ width: 20, height: 20, color: 'primary.main' }}
                                    />
                                </ListItemIcon>
                                <Link href="/cart">
                                    <ListItemText
                                        primary="Cart"
                                        sx={{
                                            "& .MuiTypography-root": { fontWeight: 600 },
                                            color: 'primary.main'
                                        }}
                                    />
                                </Link>
                            </ListItem>
                        </>
                    ) : ''
                    }
                </List>

                {/* Right User Actions */}
                {loggedIn.loggedIn ? '' : (
                    <Button
                        variant="contained"
                        sx={{ fontWeight: 700 }}
                        onClick={onOpenLogin}
                    >
                        Login
                    </Button>
                )}
            </Box>
        </Box>
    )
}

export default DesktopNav