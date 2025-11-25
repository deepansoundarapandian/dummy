import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
    Box,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { userData } from "@/context/UserData";
import { useRouter } from "next/navigation";

const ProfileMenu = ({ anchorEl, setAnchorEl, handleLogout }: { anchorEl: any, setAnchorEl: any, handleLogout: any }) => {

    const { setSelected } = userData();

    const router=useRouter();

    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);

    const profile = (link: string) => {
        setSelected(link);
        router.push("/profile")
    }

    return (
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
                }}
            >
                Hello User
            </Typography>

            <Box sx={{ borderBottom: "1px solid #ebebeb", }} />

            {/* Menu Items */}

            {[
                { icon: <PersonOutlineIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "My Profile", link: 'profile' },
                { icon: <ShoppingBagOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "My Orders", link: 'orders' },
                { icon: <FavoriteBorderOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Wishlist", link: 'wishlist' },
                { icon: <LocationOnOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Saved Addresses", link: '/addresses' },
                { icon: <NotificationsNoneOutlinedIcon sx={{ width: 20, height: 20, color: "#474847" }} />, label: "Notifications", link: 'notifications' },
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
                        onClick={()=>profile(item.link)}
                    />
                </MenuItem>
            ))}

            {/* Logout */}
            <MenuItem
                onClick={handleLogout}
                sx={{
                    py: 1.5,
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
    )
}

export default ProfileMenu;