import {
    Box,
    Button,
} from "@mui/material";
import ContactInformation from "./ContactInformation";
import PersonalInformation from "./PersonalInformation";

const UpdateProfile = () => {





    return (
        <Box sx={{ flexGrow: 1 }}>

            <ContactInformation/>

            <PersonalInformation/>

            <Button
                variant="contained"
                sx={{
                    mt: 3,
                    width: 200,
                    borderRadius: "10px",
                }}
            >
                Update Profile
            </Button>
            
        </Box>
    )
}

export default UpdateProfile;