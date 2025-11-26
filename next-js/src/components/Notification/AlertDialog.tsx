import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ openAlert, setOpenAlert, logOff }: any) {

    const handleClose = () => {
        setOpenAlert(false);
    };

    return (
        <Dialog
            open={openAlert}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            fullWidth          
            maxWidth="xs"     
            PaperProps={{
                sx: {
                    p: 2,
                    borderRadius: 3,
                    minHeight: 180, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }
            }}
        >
            <DialogTitle id="alert-dialog-title" sx={{ color: 'black' }}>
                {"Are You Sure To Logout?"}
            </DialogTitle>

            <DialogActions>
                <Button 
                    onClick={handleClose} 
                    variant="contained" 
                    color="error"
                >
                    Cancel
                </Button>
                <Button 
                    variant='contained' 
                    onClick={logOff} 
                    autoFocus
                >
                    Logout
                </Button>
            </DialogActions>
        </Dialog>
    );
};
