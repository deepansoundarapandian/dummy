import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/Authentication/Login";
import SignupModal from "@/components/Authentication/Signup";
import VerifyMail from "../components/Authentication/VerifyMail";
import { useState } from "react";
import { UserDataProvider } from "@/context/UserData";
import { usePathname } from "next/navigation";
import theme from '../themes/theme'
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css";
import Container from "@mui/material/Container";

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
    display: { xs: 'none', md: 'block' }
  }

  const backgroundHome = {
    height: { xs: '350px', md: "695px" },
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

  const loginType = (mode: string) => {

    if (mode === "login") {
      setOpenLogin(true);
      setOpenSignup(false);
    } else {
      setOpenSignup(true);
      setOpenLogin(false);
    }
console.log("");

  };

  return (
    <>
      <ThemeProvider theme={theme}>

        <CssBaseline />

        <Container maxWidth="xl" sx={{ ...bgImage }}></Container>

          <Container maxWidth="xl" >

            <UserDataProvider>

              <Navbar onOpenLogin={() => setOpenLogin(true)} />

              <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} onOpenSignup={() => loginType("signup")} />

              <SignupModal open={openSignup} onClose={() => setOpenSignup(false)} onOpenLogin={() => loginType("login")} openMail={() => setOpenVerifyMail(true)} />

              <VerifyMail open={openVerifyMail} onClose={() => setOpenVerifyMail(false)} openLogin={()=>setOpenLogin(true)}/>

              <Component {...pageProps} />

            </UserDataProvider>

            <Footer />

          </Container>

      </ThemeProvider>
    </>
  );
}
