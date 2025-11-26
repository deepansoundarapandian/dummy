import { userData } from "@/context/UserData";
import MiniNotification from "../Notification/MiniNotification";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    Box,
    Modal,
    IconButton,
    Typography,
    TextField,
    InputAdornment,
    Button
} from "@mui/material";

export default function SignupModal({ open, onClose, onOpenLogin, openMail }: any) {

    const { setNewUser } = userData();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [formSnackBar, setFormSnackBar] = useState(false);
    const [verifySnackBar, setVerifySnackBar] = useState(false);
    const [emailError, setEmailError] = useState(false);

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

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };


    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.password) {
            setFormSnackBar(true);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setVerifySnackBar(true);
            return;
        }

        if (!validateEmail(formData.email)) {
            setEmailError(true);
            return;
        }

        const newUserData = {
            id: uuidv4(),
            ...formData
        };

        setNewUser((prev: any) => [...prev, newUserData]);

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
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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

                        <img
                            src="/assets/Frame.png"
                            width="115px"
                            height="40px"
                            alt="img"
                            style={{ marginTop: "20px" }}
                        />

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

                        <Typography
                            sx={{
                                color: "#474847",
                                mb: 1,
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Email Address
                        </Typography>

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

                        <Typography
                            sx={{
                                color: "#474847",
                                mb: 1,
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Password
                        </Typography>

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

                        <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 400, width: '100%', }} onClick={handleSubmit}>Sign up</Button>

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

            <MiniNotification snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} content='Signup successful !' color='success' />
            <MiniNotification snackbarOpen={formSnackBar} setSnackbarOpen={setFormSnackBar} content='Please fill all the fields !' color='error' />
            <MiniNotification snackbarOpen={verifySnackBar} setSnackbarOpen={setVerifySnackBar} content='Passwords does not match !' color='error' />
            <MiniNotification snackbarOpen={emailError} setSnackbarOpen={setEmailError} content='Please enter a valid email !' color='error' />
        </>
    );
}
