import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../themes/theme'
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";
import LoginModal from "@/components/Login";
import SignupModal from "@/components/Signup";
import { useState } from "react";
import VerifyMail from "../components/VerifyMail";
import { UserDataProvider } from "@/context/UserData";

export default function App({ Component, pageProps }: AppProps) {

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openVerifyMail, setOpenVerifyMail] = useState(false);

  const pathname = usePathname();

  const backgroundProducts = {
    height: "378px",
    backgroundImage: "url('/assets/Banner4.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    overflow: "hidden",
    backgroundSize: "contain",
    position: 'absolute',
    top: '150px',
    left: '50%',
    transform: 'translateX(-50%)',
    display:{xs:'none', md:'block'}

  }


  const backgroundHome = {
    height: {xs:'350px', md:"695px"},
    backgroundImage: "url('/assets/Herro Banner.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    overflow: "hidden",
    backgroundSize: "cover",
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'

  }

  const bgImage =
    pathname === "/"
      ? backgroundHome
      : pathname === "/products" ? backgroundProducts : '';


  const signUp = () => {
    setOpenSignup(true);
    setOpenLogin(false);
  }

  const login = () => {
    setOpenLogin(true);
    setOpenSignup(false);
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ ...bgImage }}></Container>

        <Container maxWidth="xl">

          <UserDataProvider>

            <Navbar onOpenLogin={() => setOpenLogin(true)} />


            <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} onOpenSignup={signUp} />

            <SignupModal open={openSignup} onClose={() => setOpenSignup(false)} onOpenLogin={login} openMail={() => setOpenVerifyMail(true)}/>

            <VerifyMail  open={openVerifyMail} onClose={() => setOpenVerifyMail(false)}/>

            <Component {...pageProps} />

          </UserDataProvider>

          <Footer />

        </Container>
      </ThemeProvider>
    </>
  );
}
