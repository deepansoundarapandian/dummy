import {
    Box,
    Typography,
    Card,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    MenuItem,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

const PersonalInformation = ({ profileData, setProfileData }: { profileData: any, setProfileData: any }) => {

    const title = {
        fontSize: "18px",
        fontWeight: 400,
        color: '#00171F'
    }


    const handleChange = (field: any, value: any) => {
        setProfileData((prev: any) => ({ ...prev, [field]: value }));
    };

    // IMAGE UPLOAD Handler
    const handleImageUpload = (e: any) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileData((prev: any) => ({
                ...prev,
                image: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };


    const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
        <OutlinedInput
            onClick={onClick}
            value={value}
            inputRef={ref}
            readOnly
            placeholder="DD / MM / YYYY"
            sx={{
                width: "100%",
                height: "44px",
                borderRadius: "8px",
                bgcolor: "#FFFFFF",
                color: "black",
                cursor: "pointer",
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
            endAdornment={
                <InputAdornment position="end">
                    <IconButton edge="end">
                        <CalendarMonthIcon />
                    </IconButton>
                </InputAdornment>
            }
        />
    ));

    return (
        <Card sx={{ p: 3, bgcolor: '#FDFDFD', borderRadius: '8px', boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
            <Typography sx={{ ...title }} mb={3}>
                Personal Information
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexDirection:{xs:'column', md:'row'} }}>
                {/* IMAGE + UPLOAD */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems:'center' }}>

                    <Box
                        sx={{
                            width: 130,
                            height: 130,
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {profileData.image ? (
                            <img
                                src={profileData.image}
                                alt="Profile"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        ) : (
                            <AccountCircleIcon sx={{ width: "100%", height: "100%", color: "#CDCDCD" }} />
                        )}
                    </Box>

                    <Button
                        variant="outlined"
                        component="label"
                        sx={{
                            textTransform: "none",
                            borderRadius: "10px",
                            width: {xs:'20%', md:'80%'},
                            mx: 'auto'
                        }}
                    >
                        Upload
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImageUpload}
                        />
                    </Button>
                </Box>

                {/* FORM INPUTS */}
                <Box sx={{ display: "grid", gap: 2, flexGrow: 1, color: 'black' }}>

                    <Box>
                        <Typography sx={{ mb: '3px' }}>Name</Typography>
                        <OutlinedInput
                            placeholder="Enter Your Name"
                            value={profileData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            type="text"
                            sx={{
                                width: '100%',
                                height: "44px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                bgcolor: "#FFFFFF",
                                color: 'black',
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#CDCDCD",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#CDCDCD",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#CDCDCD",
                                }
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography sx={{ mb: '3px' }}>Email</Typography>
                        <OutlinedInput
                            placeholder="Enter Your Email address"
                            value={profileData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            type="email"
                            sx={{
                                width: '100%',
                                height: "44px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                bgcolor: "#FFFFFF",
                                color: 'black',
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#CDCDCD",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#CDCDCD",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#CDCDCD",
                                }
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography sx={{ mb: '3px' }}>Birth Date</Typography>
                        <DatePicker
                            selected={profileData.birthDate}
                            onChange={(d) => handleChange("birthDate", d)}
                            dateFormat="dd/MM/yyyy"
                            wrapperClassName="date-picker-wrapper "
                            customInput={<CustomInput />}
                        />
                    </Box>

                    <Box>
                        <Typography sx={{ mb: '3px' }}>Nationality</Typography>

                        <TextField
                            select
                            fullWidth
                            value={profileData.nationality}
                            onChange={(e) => handleChange("nationality", e.target.value)}
                            sx={{
                                width: "100%",
                                height: "44px",
                                borderRadius: "8px",
                                bgcolor: "#FFFFFF",


                                "& .MuiSelect-select": {
                                    color: "black",
                                },

                                "& .MuiOutlinedInput-root": {
                                    height: "44px",
                                    borderRadius: "8px",
                                },

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
                        >
                            <MenuItem value="India" sx={{ color: "black", height: "44px", }}>
                                India
                            </MenuItem>
                            <MenuItem value="USA" sx={{ color: "black", height: "44px" }}>
                                USA
                            </MenuItem>
                            <MenuItem value="UK" sx={{ color: "black", height: "44px" }}>
                                UK
                            </MenuItem>
                        </TextField>
                    </Box>

                    {/* Gender Section */}
                    <Box>
                        <Typography  >
                            Gender
                        </Typography>
                        <RadioGroup row defaultValue="male" value={profileData.gender}
                            onChange={(e) => handleChange("gender", e.target.value)}>
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
        </Card>
    )   
}

export default PersonalInformation;