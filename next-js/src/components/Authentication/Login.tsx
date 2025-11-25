import {
    Box,
    Modal,
    IconButton,
    Typography,
    TextField,
    InputAdornment,
    Button
} from "@mui/material";
import { userData } from "@/context/UserData";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Snackbar from '@mui/material/Snackbar';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from "react";

export default function LoginModal({ open, onClose, onOpenSignup }: any) {

    const { newUser, setLoggedIn } = userData();

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });


    const handleChange = (field: string, value: string) => {
        setLoginData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        if (!loginData.email || !loginData.password) {
            alert("Please fill all fields");
            return;
        }

        const existingUser = newUser.find(
            (u: any) => u.email === loginData.email && u.password === loginData.password
        );

        if (existingUser) {
            setSnackbarOpen(true);
            setLoggedIn({
                userId: existingUser.id,
                userName: existingUser.name,
                loggedIn: true
            })
            onClose();
        } else {
            alert("Invalid email or password!");
        }

        setLoginData({
            email: "",
            password: "",
        });

    };

    return (
        <>
            <Modal
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}
                open={open}
                onClose={onClose}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "900px" },
                        height: { xs: "100vh", md: "auto" },  
                        bgcolor: "white",
                        borderRadius: { xs: 0, md: "20px" }, 
                        boxShadow: 24,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        overflow: "hidden",
                    }}
                >
                    {/* -------- Left Image Section -------- */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            height: { xs: "180px", md: "auto" },
                            backgroundImage: "url('/assets/Herro Banner5.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: { xs: "none", md: "block" },
                        }}
                    />

                    {/* -------- Right Form Section -------- */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            p: { xs: 3, md: 4 },
                            position: "relative",
                        }}
                    >
                        {/* Close Button */}
                        <IconButton
                            onClick={onClose}
                            sx={{
                                position: "absolute",
                                top: 16,
                                right: 16,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {/* Logo */}
                        <img
                            src="/assets/Frame.png"
                            width="115px"
                            height="40px"
                            alt="img"
                            style={{ marginTop: "20px" }}
                        />

                        {/* Heading */}
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#00171F",
                                fontSize: { xs: "22px", md: "28px" },
                                mt: "20px",
                            }}
                        >
                            Login To Your Account
                        </Typography>

                        <Typography
                            sx={{
                                my: 2,
                                color: "grey.600",
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Please enter your email address to continue
                        </Typography>

                        {/* Email Label */}
                        <Typography
                            sx={{
                                color: "#474847",
                                mb: 1,
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Email Address
                        </Typography>

                        {/* Email Field */}
                        <TextField
                            fullWidth
                            placeholder="Enter your email"
                            autoComplete="off"
                            value={loginData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-input::placeholder": {
                                    color: "#A3A3A3",
                                    opacity: 1,
                                    fontSize: "14px",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#DADADA !important",
                                },
                            }}
                            slotProps={{
                                input: {
                                    sx: {
                                        height: "50px",
                                        padding: "0 14px",
                                        color: '#003459'
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailOutlinedIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        {/* Password Label */}
                        <Typography
                            sx={{
                                color: "#474847",
                                mb: 1,
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Password
                        </Typography>

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            value={loginData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-input::placeholder": {
                                    color: "#A3A3A3",
                                    opacity: 1,
                                    fontSize: "14px",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#DADADA !important",
                                },
                            }}
                            slotProps={{
                                input: {
                                    sx: {
                                        height: "50px",
                                        padding: "0 14px",
                                        color: '#003459'
                                    },

                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <VisibilityOutlinedIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        {/* Login Button */}
                        <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 400, width: '100%', }} onClick={handleSubmit}>Login</Button>

                        {/* Terms & Policy */}
                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: "center",
                                color: "#757675",
                                fontSize: { xs: "12px", md: "14px" },
                            }}
                        >
                            By continuing, I agree to the{" "}
                            <span
                                style={{
                                    color: "#003459",
                                    fontWeight: 600,
                                    fontSize: "13px",
                                }}
                            >
                                Terms of Use & Privacy Policy
                            </span>
                        </Typography>

                        {/* Sign Up */}
                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: "center",
                                color: "#757675",
                                fontSize: { xs: "12px", md: "14px" },
                            }}
                        >
                            Don’t have an account?{" "}
                            <span
                                style={{
                                    color: "#063F7F",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: "13px",
                                }}
                                onClick={onOpenSignup}
                            >
                                Sign Up
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Modal>


            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Login successful!"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            />
        </>

    );
}
