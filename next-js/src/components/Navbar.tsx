// import {
//     AppBar,
//     Toolbar,
//     Container,
//     Box,
//     List,
//     ListItem,
//     ListItemText,
//     ListItemIcon,
//     Button
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import { userData } from "@/context/UserData";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import { useState } from "react";
// import {
//     Menu,
//     MenuItem,
//     Typography,

// } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";





// const Navbar = ({ onOpenLogin }: any) => {

//     const list = ["Home", "Category", "About", "Contact"];

//     const { loggedIn, setLoggedIn } = userData();

//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//     const open = Boolean(anchorEl);

//     const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null)
//     };

//     const handleLogout = () => {
//         setLoggedIn({
//             userName: 'Deepan',
//             loggedIn: false
//         })
//         setAnchorEl(null);
//     }

//     const loggedUser = (
//         <>
//             <ListItem
//                 sx={{ width: "auto", padding: 0, cursor: "pointer" }}
//                 onClick={handleOpen}
//             >
//                 <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
//                     <AccountCircleRoundedIcon
//                         sx={{ color: "black", width: 20, height: 20 }}
//                     />
//                 </ListItemIcon>

//                 <Link href="#">
//                     <ListItemText
//                         primary={loggedIn.userName}
//                         sx={{
//                             "& .MuiTypography-root": { fontWeight: 600 },
//                             textTransform: "capitalize",
//                         }}
//                     />
//                 </Link>

//                 {open ? (
//                     <KeyboardArrowUpIcon sx={{ ml: 0.5 }} />
//                 ) : (
//                     <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
//                 )}
//             </ListItem>



//             <ListItem sx={{ width: "auto", padding: 0 }}>
//                 <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
//                     <ShoppingCartOutlinedIcon
//                         sx={{ color: "black", width: 20, height: 20 }}
//                     />
//                 </ListItemIcon>
//                 <Link href="#">
//                     <ListItemText
//                         primary="Cart"
//                         sx={{
//                             "& .MuiTypography-root": { fontWeight: 600 },
//                         }}
//                     />
//                 </Link>
//             </ListItem>
//         </>
//     );




//     const menu = (
//         <Menu
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             PaperProps={{
//                 sx: {
//                     width: '220px',
//                     borderRadius: "16px",
//                     mt: 1.5,
//                     boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
//                 },
//             }}
//         >
//             <Typography variant="h6"
//                 sx={{
//                     padding: "8px 16px 12px 16px",
//                     color: "#00171F",
//                 }}
//             >
//                 Hello User
//             </Typography>

//             <Box sx={{ borderBottom: "1px solid #ebebeb", mb: 1 }} />

//             {/* Menu Items */}

//             {[
//                 { icon: <PersonOutlineIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "My Profile" },
//                 { icon: <ShoppingBagOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "My Orders" },
//                 { icon: <FavoriteBorderOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Wishlist" },
//                 { icon: <LocationOnOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Saved Addresses" },
//                 { icon: <NotificationsNoneOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Notifications" },
//             ].map((item) => (
//                 <MenuItem
//                     key={item.label}
//                     onClick={handleClose}
//                     sx={{
//                         py: 1.5,
//                         borderRadius: 1,
//                         "&:hover": { backgroundColor: "#f5f5f5" },
//                         borderBottom: '1px solid #E6E6E6'
//                     }}
//                 >
//                     <ListItemIcon sx={{ color: "#002A8A" }}>{item.icon}</ListItemIcon>
//                     <ListItemText
//                         primary={item.label}
//                         primaryTypographyProps={{
//                             fontSize: "14px",
//                             fontWeight: 400,
//                             color: "#474847",
//                         }}
//                     />
//                 </MenuItem>
//             ))}




//             {/* Logout */}
//             <MenuItem
//                 onClick={handleLogout}
//                 sx={{
//                     py: 1.5,
//                     mt: 1,
//                     borderRadius: 1,
//                     "&:hover": { backgroundColor: "#ffe5e5" },
//                 }}
//             >
//                 <ListItemIcon sx={{ color: "red" }}>
//                     <LogoutOutlinedIcon sx={{ width: 20, height: 20 }} />
//                 </ListItemIcon>
//                 <ListItemText
//                     primary="Logout"
//                     primaryTypographyProps={{
//                         fontSize: "14px",
//                         fontWeight: 400,
//                         color: "red",
//                     }}
//                 />
//             </MenuItem>
//         </Menu>
//     )


//     return (
//         <AppBar
//             elevation={0}
//             sx={{
//                 backgroundColor: "transparent",
//                 boxShadow: "none",
//                 color: "primary.main",
//                 position: 'relative',
//             }}
//         >
//             <Container disableGutters sx={{ mt: '30px' }} >
//                 <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: '0px' }}>
//                     {/* Logo Section */}
//                     <Box>
//                         <Image
//                             src="/assets/Frame.png"
//                             alt="Logo"
//                             width={100}
//                             height={60}
//                             style={{
//                                 height: "auto",
//                             }}
//                         />
//                     </Box>

//                     {/* Navigation + Button */}
//                     <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>

//                         <List sx={{ display: "flex", gap: 5 }}>
//                             {list.map((item) => (
//                                 <ListItem key={item} sx={{ width: "auto", padding: 0 }}>
//                                     <Link href='#'>
//                                         <ListItemText
//                                             primary={item}
//                                             sx={{
//                                                 "& .MuiTypography-root": { fontWeight: 600 },

//                                             }}
//                                         />
//                                     </Link>
//                                 </ListItem>
//                             ))}

//                             {
//                                 loggedIn.loggedIn ? loggedUser : ""
//                             }

//                         </List>
//                         {

//                             loggedIn.loggedIn ? '' : <Button
//                                 variant="contained" sx={{ color: 'text.primary', fontWeight: 700 }}
//                                 onClick={onOpenLogin}
//                             >
//                                 Login
//                             </Button>

//                         }
//                     </Box>

//                     {
//                         menu
//                     }
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// };

// export default Navbar;





























"use client";

import {
    AppBar,
    Toolbar,
    Box,
    Container,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
    Drawer,
    IconButton,
    Divider,
    Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { userData } from "@/context/UserData";

export default function Navbar({ onOpenLogin }: any) {
    const { loggedIn, setLoggedIn } = userData();
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const list = ["Home", "Category", "About", "Contact"];

    const open = Boolean(anchorEl);
    const handleOpen = (e: any) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        setLoggedIn({ loggedIn: false, userName: "" });
        handleClose();
    };


















    // ---------------- MOBILE DRAWER ----------------
    const MobileDrawer = (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
                sx: { width: 260, padding: "20px", color: 'black' },
            }}
        >
            <Typography fontWeight={700} mb={2}>
                Menu
            </Typography>

            {list.map((nav) => (
                <MenuItem key={nav} sx={{ py: 1.5 }}>
                    <Link href="#">{nav}</Link>
                </MenuItem>
            ))}

            <Divider sx={{ my: 2 }} />

            {loggedIn.loggedIn ? (
                <>
                    <MenuItem sx={{ color: 'black' }}>
                        <PersonOutlineIcon sx={{ width: 20, mr: 1 }} /> Profile
                    </MenuItem>
                    <MenuItem>
                        <ShoppingBagOutlinedIcon sx={{ width: 20, mr: 1 }} /> Orders
                    </MenuItem>
                    <MenuItem>
                        <FavoriteBorderOutlinedIcon sx={{ width: 20, mr: 1 }} /> Wishlist
                    </MenuItem>
                    <MenuItem>
                        <LocationOnOutlinedIcon sx={{ width: 20, mr: 1 }} /> Addresses
                    </MenuItem>
                    <MenuItem>
                        <NotificationsNoneOutlinedIcon sx={{ width: 20, mr: 1 }} /> Notifications
                    </MenuItem>

                    <Divider sx={{ my: 2 }} />

                    <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
                        <LogoutOutlinedIcon sx={{ width: 20, mr: 1 }} /> Logout
                    </MenuItem>
                </>
            ) : (
                <Button variant="contained" onClick={onOpenLogin}>
                    Login
                </Button>
            )}
        </Drawer>
    );




















    // ---------------- PROFILE MENU ----------------
    const ProfileMenu = (
                <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: '220px',
                    borderRadius: "16px",
                    mt: 1.5,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                },
            }}
        >
            <Typography variant="h6"
                sx={{
                    padding: "8px 16px 12px 16px",
                    color: "#00171F",
                    // border:1
                }}
            >
                Hello User
            </Typography>

            <Box sx={{ borderBottom: "1px solid #ebebeb",  }} />

            {/* Menu Items */}

            {[
                { icon: <PersonOutlineIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "My Profile" },
                { icon: <ShoppingBagOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "My Orders" },
                { icon: <FavoriteBorderOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Wishlist" },
                { icon: <LocationOnOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Saved Addresses" },
                { icon: <NotificationsNoneOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Notifications" },
            ].map((item) => (
                <MenuItem
                    key={item.label}
                    onClick={handleClose}
                    sx={{
                        py: 1.5,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#f5f5f5" },
                        borderBottom: '1px solid #E6E6E6'
                    }}
                >
                    <ListItemIcon sx={{ color: "#002A8A" }}>{item.icon}</ListItemIcon>
                    <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#474847",
                        }}
                    />
                </MenuItem>
            ))}




            {/* Logout */}
            <MenuItem
                onClick={handleLogout}
                sx={{
                    py: 1.5,
                    mt: 1,
                    borderRadius: 1,
                    "&:hover": { backgroundColor: "#ffe5e5" },
                }}
            >
                <ListItemIcon sx={{ color: "red" }}>
                    <LogoutOutlinedIcon sx={{ width: 20, height: 20 }} />
                </ListItemIcon>
                <ListItemText
                    primary="Logout"
                    primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "red",
                    }}
                />
            </MenuItem>
        </Menu>
    );














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







                        {/* LEFT (mobile hamburger) */}
                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" } }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon sx={{ width: 26, height: 26 }} />
                        </IconButton>


                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            <Image
                                src="/assets/sm.png"
                                alt="Logo"
                                width={90}
                                height={25}
                            />
                        </Box>

                        {/* RIGHT (mobile cart icon) */}
                        <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                            <ShoppingCartOutlinedIcon
                                sx={{ width: 22, height: 22, color: "black" }}
                            />
                        </IconButton>








                        {/* DESKTOP SECTION */}
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
                                            <Link href="#">
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
                                                <Link href="#">
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
                    </Toolbar>
                </Container>
            </AppBar>

            {MobileDrawer}
            {ProfileMenu}
        </>
    );
}
