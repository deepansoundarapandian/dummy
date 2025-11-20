import {
    Box,
    Modal,
    IconButton,
    Typography,
    TextField,
    Button,
    Snackbar,
    Alert
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { useEffect, useRef, useState } from "react";

export default function VerifyMail({ open, onClose }: any) {

    const [otp, setOtp] = useState("");                        // stores generated OTP
    const [snackOpen, setSnackOpen] = useState(false);         // snackbar visibility
    const [inputs, setInputs] = useState(["", "", "", ""]);    // input box values
    const inputRefs = useRef<any>([]);                         // refs for auto-focus

    useEffect(() => {
        if (open) generateOtp();
    }, [open]);


    const generateOtp = () => {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setOtp(newOtp);
        setSnackOpen(true);
        console.log("OTP:", newOtp);
    };

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newArr = [...inputs];
            newArr[index] = value;
            setInputs(newArr);

            // Move to next input automatically
            if (value && index < 4) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: any) => {
        if (e.key === "Backspace" && !inputs[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        if (inputs.join("") === otp) {
            alert("OTP Verified Successfully! 🎉");
        } else {
            alert("Incorrect OTP ");
        }
    };


    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={snackOpen}
                autoHideDuration={3000}
                onClose={() => setSnackOpen(false)}
            >
                <Alert severity="info">OTP: {otp}</Alert>
            </Snackbar>

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
                            backgroundPosition: "center",
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
                        {/* Close */}
                        <IconButton
                            sx={{ position: "absolute", top: 16, right: 16 }}
                              onClick={onClose}
                        >
                            <CloseIcon />
                        </IconButton>

                        {/* Logo */}
                        <img
                            src="/assets/Frame.png"
                            width="115px"
                            height="40px"
                            alt="logo"
                            style={{ marginTop: "20px" }}
                        />

                        {/* Title */}
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#00171F",
                                fontSize: { xs: "22px", md: "28px" },
                                mt: "20px",
                            }}
                        >
                            Verify Your Email
                        </Typography>

                        {/* Subtitle */}
                        <Typography
                            sx={{
                                my: 2,
                                color: "grey.600",
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Please enter 4 digit OTP sent on email address
                        </Typography>

                        {/* -------- EMAIL ROW -------- */}
                        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                            <EditSquareIcon sx={{ color: "#FFA733", mr: 1, width: '18px', height: '18px' }} />
                            <Typography sx={{ fontSize: "15px", color: "#D6920F" }}>
                                example@email.com
                            </Typography>
                        </Box>

                        {/* -------- OTP INPUT BOXES -------- */}
                        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                            {[1, 2, 3, 4].map((i) => (
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

                        {/* Verify Button */}
                        <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 400, width: '100%', }} onClick={handleVerify}>Verify</Button>

                        {/* Resend / Didn't get OTP */}
                        <Box
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: "space-between",
                                // fontSize: { xs: "12px", md: "14px" },
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

                        {/* Return to login */}
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
                        >
                            ← Return to login
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}



















// slotProps={{
//     input: {
//         sx: {
//             textAlign: "center",
//             fontSize: "20px",
//             padding: 0,
//         },
//         // maxLength: 1,
//     },
// }}












