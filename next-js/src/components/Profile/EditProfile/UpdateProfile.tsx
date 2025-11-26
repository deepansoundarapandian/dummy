import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    Alert,
    Snackbar
} from "@mui/material";
import ContactInformation from "./ContactInformation";
import PersonalInformation from "./PersonalInformation";
import { userData } from "@/context/UserData";
import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import theme from "@/themes/theme";
import { useRouter } from "next/router";

const UpdateProfile = () => {

    const { newUser, setNewUser, loggedIn, setLoggedIn } = userData();

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const router = useRouter();

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const currentUser = newUser.find((u: any) => u.id === loggedIn.userId);

    const [profileData, setProfileData] = useState({
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        birthDate: currentUser?.birthDate || null,
        nationality: currentUser?.nationality || "",
        gender: currentUser?.gender || "male",
        image: currentUser?.image || ""
    });

    const handleProfileSave = () => {
        setNewUser((prev: any) =>
            prev.map((user: any) =>
                user.id === loggedIn.userId
                    ? { ...user, ...profileData }
                    : user
            )
        );

        setLoggedIn((prev: any) => ({
            ...prev, userName: profileData.name
        }));

        setSnackbarOpen(true);
    };

    const goHome = () => {
        router.push("/");
        console.log("click");

    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {
                    isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ChevronLeftIcon sx={{ fontSize: "34px" }} onClick={goHome} />
                            <Typography variant="h3" sx={{ color: '#00171F' }}>
                                My Profile
                            </Typography>
                        </Box>
                    )
                }

                <ContactInformation />

                <PersonalInformation
                    profileData={profileData}
                    setProfileData={setProfileData} />

                <Button
                    variant="contained"
                    sx={{
                        my: 3,
                        width: { xs: '100%', md: '200px' },
                        borderRadius: "10px",
                    }}
                    onClick={handleProfileSave}
                >
                    Update Profile
                </Button>

            </Box>

            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                   Profile Updated Successfully !
                </Alert>
            </Snackbar>
        </>
    )
}

export default UpdateProfile;