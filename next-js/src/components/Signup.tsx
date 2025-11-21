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
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';

export default function SignupModal({ open, onClose, onOpenLogin, openMail }: any) {

    const { setNewUser } = userData();

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const confirmtogglePassword = () => {
        setConfirmPassword((prev) => !prev);
    }

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill all fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setNewUser((prev: any) => [...prev, formData]);
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        setSnackbarOpen(true);
        openMail();
        onClose();
    };



    return (
        <>
            <Modal
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}
                open={open}
                onClose={onClose}
            >
                <Box
                    sx={{
                        width: { xs: "100%", sm: "90%", md: "900px" },
                        bgcolor: "white",
                        borderRadius: "20px",
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
                            backgroundPosition: "right",
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
                            Registration
                        </Typography>

                        <Typography
                            sx={{
                                my: 2,
                                color: "grey.600",
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Please enter your details to complete the registration
                        </Typography>

                        <Typography
                            sx={{
                                color: "#474847",
                                mb: 1,
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Name
                        </Typography>

                        {/* Name Field */}
                        <TextField
                            fullWidth
                            placeholder="Enter your Name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            autoComplete="off"
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
                                            <PersonOutlinedIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

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
                            value={formData.email}
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
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={formData.password}
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
                                        <InputAdornment position="end" onClick={togglePassword} sx={{ cursor: "pointer" }}>
                                            {showPassword ? (
                                                <VisibilityOffIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                            ) : (
                                                <VisibilityOutlinedIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                            )}
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />


                        <Typography
                            sx={{
                                color: "#474847",
                                mb: 1,
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Confirm Password
                        </Typography>

                        {/* Confirm Password Field */}
                        <TextField
                            fullWidth
                            type={confirmPassword ? "text" : "password"}
                            placeholder="Enter your Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleChange("confirmPassword", e.target.value)}
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
                                        <InputAdornment position="end" sx={{ cursor: "pointer" }} onClick={confirmtogglePassword}>
                                            {confirmPassword ? (
                                                <VisibilityOffIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                            ) : (
                                                <VisibilityOutlinedIcon sx={{ color: "#A3A3A3", width: "16px" }} />
                                            )}
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        {/* Login Button */}

                        <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 400, width: '100%', }} onClick={handleSubmit}>Sign up</Button>

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
                            Already have an account? {" "}
                            <span
                                style={{
                                    color: "#063F7F",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: "13px",
                                }}
                                onClick={onOpenLogin}
                            >
                                Login
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Modal>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Signup successful!"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            />

        </>

    );
}
