import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../themes/theme'
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";

export default function App({ Component, pageProps }: AppProps) {

  const pathname = usePathname();

  const bgImage =
    pathname === "/"
      ? "/assets/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated 1.png"
      : "";

  const backgroundUrl = {
    height: "695px",
    backgroundImage: `url('${bgImage}')`,
    backgroundColor: "secondary.main",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    overflow: "hidden",
    backgroundSize: "800px auto",
    // border:"1px solid black"
    // px:'50px'
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="xl" 
          sx={backgroundUrl}
        >
          <Navbar />
          <HeroSection />
        </Container>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
