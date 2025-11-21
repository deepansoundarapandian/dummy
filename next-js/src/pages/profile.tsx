"use client";

import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Card,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    MenuItem,
    Container
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfilePage() {

    const title = {
        fontSize: "18px",
        fontWeight: 400,
        color: '#00171F'
    }

    return (
        <Container >
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    p: 4,
                    // bgcolor: "#F7F7F7",
                    minHeight: "100vh",
                    color:'black'
                }}
            >
                {/* ---------------- LEFT SIDEBAR ---------------- */}
                <Box
                    sx={{
                        width: 340,
                        bgcolor: "#FFF",
                        borderRadius: "10px",
                        p: 3,
                        height: "100%",
                    }}
                >
                    {/* Username */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, borderBottom: '1px solid #E6E6E6', pb: 1 }}>
                        <Box sx={{
                            width: 55,
                            height: 55,
                            borderRadius: "50%",

                        }}>
                            <AccountCircleIcon sx={{ width: '100%', height: '100%', color: '#CDCDCD' }} />
                        </Box>
                        <Box>
                            <Typography sx={{ ...title }}>Username</Typography>
                            <Typography fontSize={13} color="#667479">
                                +91 0123456789
                            </Typography>
                        </Box>
                    </Box>

                    <List sx={{ mt: 0, }}>
                        <ListItem
                            sx={{
                                borderRadius: "8px",
                                bgcolor: "#00345926",
                                mb: 1,
                            }}
                        >
                            <ListItemIcon>
                                <AccountCircleOutlinedIcon sx={{ color: "#000" }} />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" sx={{ fontSize: '10px' }} />
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <ShoppingBagOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <FavoriteBorderOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Wishlist" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <LocationOnOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Saved Addresses" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <NotificationsNoneOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <LogoutOutlinedIcon sx={{ color: "#D9534F" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Logout"
                                primaryTypographyProps={{ color: "#D9534F" }}
                            />
                        </ListItem>
                    </List>
                </Box>

                {/* ---------------- RIGHT CONTENT ---------------- */}
                <Box sx={{ flexGrow: 1 }}>
                    {/* ---- Contact Information Card ---- */}
                    <Card sx={{ p: 3, mb: 3, bgcolor: '#EBEEEF', borderRadius: '8px' }}>
                        <Typography sx={{ ...title }} mb={2}>
                            Contact Information
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                value="+91 01234567890"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Button variant="contained" sx={{ textTransform: "none", borderRadius: '8px' }}>
                                Change
                            </Button>
                        </Box>
                    </Card>

                    {/* ---- Personal Information Card ---- */}
                    <Card sx={{ p: 3, bgcolor: '#EBEEEF', borderRadius: '8px', }}>
                        <Typography sx={{ ...title }} mb={3}>
                            Personal Information
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {/* IMAGE + UPLOAD */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap:1 }}>

                                <AccountCircleIcon sx={{ width: '130px', height: '130px', color: '#CDCDCD' , borderRadius:'50%'}} />

                                <Button
                                    variant="outlined"
                                    sx={{
                                        textTransform: "none",
                                        borderRadius: "10px",
                                        // px: 3,
                                        width: '80%',
                                        mx: 'auto'
                                    }}
                                >
                                    Upload
                                </Button>
                            </Box>

                            {/* FORM INPUTS */}
                            <Box sx={{ display: "grid", gap: 2, flexGrow: 1 }}>
                                <TextField label="Name" fullWidth placeholder="Enter your name" />
                                <TextField
                                    label="Email Address"
                                    fullWidth
                                    placeholder="Enter your email address"
                                />

                                <TextField
                                    label="Birth Date"
                                    placeholder="DD / MM / YYYY"
                                    fullWidth
                                />

                                <TextField select label="Nationality" fullWidth>
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="USA">USA</MenuItem>
                                    <MenuItem value="UK">UK</MenuItem>
                                </TextField>

                                {/* Gender Section */}
                                <Box>
                                    <Typography fontSize={14} fontWeight={600} mb={1}>
                                        Gender
                                    </Typography>
                                    <RadioGroup row defaultValue="male">
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                    </RadioGroup>
                                </Box>
                            </Box>

                        </Box>
                        {/* <Button
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    width: 200,
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                }}
                            >
                                Update Profile
                            </Button> */}
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}
