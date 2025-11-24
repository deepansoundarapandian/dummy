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
import { useState, forwardRef  } from "react";


const PersonalInformation = () => {

    const [date, setDate] = useState<Date | null>(null);

    const title = {
        fontSize: "18px",
        fontWeight: 400,
        color: '#00171F'
    }

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

            <Box sx={{ display: 'flex', gap: 2 }}>
                {/* IMAGE + UPLOAD */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                    <AccountCircleIcon sx={{ width: '130px', height: '130px', color: '#CDCDCD', borderRadius: '50%' }} />

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
                <Box sx={{ display: "grid", gap: 2, flexGrow: 1, color: 'black' }}>

                    <Box>
                        <Typography sx={{ mb: '3px' }}>Name</Typography>
                        <OutlinedInput
                            placeholder="Enter Your Name"
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
                            selected={date}
                            onChange={(d) => setDate(d)}
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
        </Card>
    )
}

export default PersonalInformation;