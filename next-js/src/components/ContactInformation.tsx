import {
    Box,
    Typography,
    Card,
    Button,
    OutlinedInput,

} from "@mui/material";


const ContactInformation = () => {

    const title = {
        fontSize: "18px",
        fontWeight: 400,
        color: '#00171F'
    }

    return (
        <Card sx={{ p: 3, mb: 3, bgcolor: '#FDFDFD', borderRadius: '8px', boxShadow: "0 0 5px rgba(0,0,0,0.1)", }} >
            <Typography sx={{ ...title }} mb={2}>
                Contact Information
            </Typography>

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

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <OutlinedInput
                        value="+91 01234567890"
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

                    <Button variant="contained" sx={{ textTransform: "none", borderRadius: '8px' }}>
                        Change
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ContactInformation;