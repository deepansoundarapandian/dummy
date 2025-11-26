import { Snackbar, Alert } from "@mui/material";

const MiniNotification = ({ content, snackbarOpen, setSnackbarOpen, color, origin={ vertical: "top", horizontal: "center" } }: any) => {
    return (
        <Snackbar open={snackbarOpen} onClose={() => setSnackbarOpen(false)} autoHideDuration={1000} anchorOrigin={{...origin}}>
            <Alert
                severity={color}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {content}
            </Alert>
        </Snackbar>
    )
}

export default MiniNotification;