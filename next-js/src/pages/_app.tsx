import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../themes/theme'
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";

export default function App({ Component, pageProps }: AppProps) {

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
    transform: 'translateX(-50%)'

  }


  const backgroundHome = {
    height: "695px",
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


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ ...bgImage }}></Container>
        <Container maxWidth="xl">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}
