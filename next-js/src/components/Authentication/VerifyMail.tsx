import { useEffect, useRef, useState } from "react";
import MiniNotification from "../Notification/MiniNotification";
import {
    Box,
    Modal,
    IconButton,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditSquareIcon from '@mui/icons-material/EditSquare';

export default function VerifyMail({ open, onClose, openLogin }: any) {

    const [otp, setOtp] = useState("");
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([
        null, null, null, null
    ]);

    const [snackOpen, setSnackOpen] = useState(false);
    const [otpSnackBar, setotpSnackBar] = useState(false);
    const [verifySnackBar, setVerifySnackBar] = useState(false);

    useEffect(() => {
        if (open) {
            generateOtp();
            setTimeout(() => {
                inputRefs.current[0]?.focus();
            }, 50);
        }
    }, [open]);

    const generateOtp = () => {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();

        setOtp(newOtp);
        setSnackOpen(true);
        setInputs(["", "", "", ""]);
        inputRefs.current[0]?.focus();
    };

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const updated = [...inputs];
            updated[index] = value;
            setInputs(updated);

            // Auto move to next input
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && inputs[index] === "" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        if (inputs.join("") === otp) {
            setotpSnackBar(true);
            onClose();
        } else {
            setVerifySnackBar(true);
        }

        setInputs(["", "", "", ""]);

        inputRefs.current[0]?.focus();
    };

    const goToLogin = () => {
        openLogin();
        onClose();
    }

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

                        <IconButton
                            sx={{ position: "absolute", top: 16, right: 16 }}
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </IconButton>

                        <img
                            src="/assets/Frame.png"
                            width="115px"
                            height="40px"
                            alt="logo"
                            style={{ marginTop: "20px" }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                color: "#00171F",
                                fontSize: { xs: "22px", md: "28px" },
                                mt: "20px",
                                textAlign: { xs: 'center', md: 'start' }
                            }}
                        >
                            Verify Your Email
                        </Typography>

                        <Typography
                            sx={{
                                my: 2,
                                color: "grey.600",
                                fontSize: { xs: "14px", md: "16px" },
                                textAlign: { xs: 'center', md: 'start' }
                            }}
                        >
                            Please enter 4 digit OTP sent on email address
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: { xs: 'center', md: 'start' } }}>
                            <EditSquareIcon sx={{ color: "#FFA733", mr: 1, width: '18px', height: '18px' }} />
                            <Typography sx={{ fontSize: "15px", color: "#D6920F" }}>
                                example@email.com
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'start' }, }}>
                            {[0, 1, 2, 3].map((i) => (
                                <TextField
                                    key={i}
                                    inputRef={(el) => (inputRefs.current[i] = el)}
                                    value={inputs[i]}
                                    onChange={(e) => handleChange(i, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(i, e)}
                                    inputProps={{
                                        maxLength: 1,
                                        style: {
                                            textAlign: "center",
                                            fontSize: "20px",
                                            color: 'black'
                                        },
                                    }}


                                    sx={{
                                        width: "70px",
                                        height: "70px",
                                        color: 'black',
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#DADADA !important",
                                        },

                                    }}
                                />
                            ))}

                        </Box>

                        <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 400, width: '100%', }} onClick={handleVerify}>Verify</Button>

                        {/* Resend / Didn't get OTP */}
                        <Box
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography sx={{ fontSize: '14px', color: "#757675", cursor: "pointer" }}>
                                Didn’t get OTP?
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#063F7F",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: '14px',
                                }}
                                onClick={generateOtp}
                            >
                                Resend OTP
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                                color: "#474847",
                                fontWeight: 600,
                                fontSize: "14px",
                            }}
                            onClick={goToLogin}
                        >
                            ← Return to login
                        </Typography>
                    </Box>
                </Box>
            </Modal>

            <MiniNotification snackbarOpen={verifySnackBar} setSnackbarOpen={setVerifySnackBar} content='Incorrect OTP' color='error' />
            <MiniNotification snackbarOpen={otpSnackBar} setSnackbarOpen={setotpSnackBar} content='OTP Verified Successfully! 🎉' color='success' />
            <MiniNotification snackbarOpen={snackOpen} setSnackbarOpen={setSnackOpen} content={`OTP ${otp}`} color='info' origin={{ vertical: "top", horizontal: "right" }} />
        </>
    );
}















