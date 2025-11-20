
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#003459",
        },
        secondary: {
            main: "#FCEED5"
        },
        text: {
            primary: '#FDFDFD',
            // secondary: '#003459'
        },
    },
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: '60px',
            lineHeight: '68px',
            letterSpacing: 0
        },
        h2: {
            fontWeight: 700,
            fontSize: '46px',
            lineHeight: '60px',
            letterSpacing: 0
        },
        h3: {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '36px',
            letterSpacing: 0
        },
        h4:{
             fontWeight: 700,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: 0
        },
        h5:{
            fontWeight: 700,
            fontSize: '16px',
             lineHeight: '24px',
        },
        h6:{
            fontSize:'14px',
            fontWeight:400,
            lineHeight:'20px'
        }

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: "capitalize",
                    fontWeight: 400,
                    padding: "10px 25px",
                },
                outlined: {
                    border: "2px solid #002A48",
                    '&:hover': {
                        border: "2px solid #002A48",
                    }
                },
            },
        },
    },
});

export default theme;
