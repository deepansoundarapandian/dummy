import {
    Box,
    Typography,
    Card,
    Button,
    OutlinedInput,
    Menu,
    MenuItem,
    InputAdornment,
} from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { userData } from "@/context/UserData";

const ContactInformation = () => {

    const { setNewUser, loggedIn } = userData();

    const countries = [
        { flag: "🇮🇳", code: "+91" },
        { flag: "🇺🇸", code: "+1" },
        { flag: "🇬🇧", code: "+44" },
        { flag: "🇦🇪", code: "+971" },
    ];

    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const userId = loggedIn.userId;

    const [anchorEl, setAnchorEl] = useState(null);

    const [phone, setPhone] = useState("");

    const open = Boolean(anchorEl);

    const handleCountryClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSelect = (country: any) => {
        setSelectedCountry(country);
        setAnchorEl(null);
    };

    const isValid = phone.length === 10;

    const storeNumber = () => {
        if (!isValid) {
            alert("Mobile Number must be 10 digits");
        } else {
            setNewUser((prev: any) =>
                prev.map((user: any) =>
                    user.id === userId
                        ? { ...user, phoneNo: `${selectedCountry.code} ${phone}` }
                        : user
                )
            );
        }
    };


    const title = {
        fontSize: "18px",
        fontWeight: 400,
        color: '#00171F'
    }

    return (
        <Card sx={{ p: 3, mb: 3, bgcolor: '#FDFDFD', borderRadius: '8px', boxShadow: "0 0 5px rgba(0,0,0,0.1)", }} >
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Typography sx={{ ...title,  }} mb={2}>
                    Contact Information
                </Typography>
                 <Button variant="contained" sx={{ textTransform: "none", borderRadius: '8px', display:{xs:'block',md:'none'} }} onClick={storeNumber}>
                        Change
                    </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexDirection: 'column' }}>

                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#242B33"
                    }}
                >
                    Phone Number
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    {/* INPUT FIELD */}
                    <OutlinedInput
                        value={phone}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/\D/g, "");
                            if (onlyNums.length <= 10) setPhone(onlyNums);
                        }}
                        placeholder="Enter 10 digit number"
                        startAdornment={
                            <InputAdornment position="start">
                                <Box
                                    onClick={handleCountryClick}
                                    sx={{
                                        cursor: "pointer",
                                        userSelect: "none",
                                        fontSize: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",

                                    }}
                                >
                                    <span style={{ alignSelf: 'self-start' }}> {selectedCountry.flag}</span>
                                    <span style={{ fontSize: '15px' }}>{selectedCountry.code}</span>
                                    <ArrowDropDownIcon />
                                </Box>
                            </InputAdornment>
                        }
                        endAdornment={
                            isValid ? (
                                <CheckCircleIcon
                                    sx={{ color: "primary.main", fontSize: 22 }}
                                />
                            ) : null
                        }
                        sx={{
                            width: "100%",
                            height: "44px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            bgcolor: "#FFFFFF",
                            color: "black",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#CDCDCD",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#CDCDCD",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#CDCDCD",
                            },
                        }}
                    />

                    <Button variant="contained" sx={{ textTransform: "none", borderRadius: '8px', display:{xs:'none',md:'block'} }} onClick={storeNumber}>
                        Change
                    </Button>

                    {/* COUNTRY SELECT MENU */}
                    <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                        {countries.map((c) => (
                            <MenuItem
                                key={c.code}
                                onClick={() => handleSelect(c)}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    fontSize: "20px",
                                    color: "black"
                                }}
                            >
                                <Box sx={{ fontSize: "22px", }}>
                                    {c.flag}
                                </Box>

                                <Typography sx={{ fontSize: "15px", pt: 0.5 }}>
                                    {c.code}
                                </Typography>
                            </MenuItem>

                        ))}
                    </Menu>

                </Box>
            </Box>
        </Card>
    )
}

export default ContactInformation;