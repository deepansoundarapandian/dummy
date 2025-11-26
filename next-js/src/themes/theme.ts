
import { createTheme } from "@mui/material/styles";
import localFont from 'next/font/local'

export const monitoFont = localFont({
    src: [
        {
            path: "../font/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../font/Gilroy-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-gilroy",
});

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
        },
    },
    typography: {
        fontFamily: "var(--font-gilroy)",
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
        h4: {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: 0
        },
        h5: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
        },
        h6: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px'
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
