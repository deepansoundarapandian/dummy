import Container from "@mui/material/Container";
import CustomButton from "./Button";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography, OutlinedInput, List, Link, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";

const Footer = () => {

  const list = ["Home", "Category", "About", "Contact"];

  const media = [
    { title: <FacebookRoundedIcon /> },
    { title: <InstagramIcon /> },
    { title: <TwitterIcon /> },
    { title: <YouTubeIcon /> }
  ];

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        backgroundColor: 'secondary.main',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        pt: { xs: "60px", md: "80px" },
      }}
    >

      <Container>

        {/* ================== REGISTER CARD ================== */}
        <Box sx={{ pb: { xs: 4, md: 6 } }}>

          <Box
            sx={{
              backgroundColor: "primary.main",
              padding: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 6 },
              borderRadius: 4,
            }}
          >

            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "text.primary",
                textTransform: "capitalize",
                fontWeight: 700,
                lineHeight: "36px",
                textAlign: { xs: "center", md: "left" }
              }}
            >
              Register now so you don't <br /> miss our programs
            </Typography>

            {/* Email input + Button */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                flexGrow: 1,
                display: 'flex',
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                height: { xs: "auto", md: "72px" },
                borderRadius: "14px",
                padding: "12px"
              }}
            >
              <OutlinedInput
                placeholder="Enter your Email"
                sx={{
                  color: "#99A2A5",
                  borderRadius: "8px",
                  border: "1px",
                  flexGrow: 1,
                  height: "48px",
                  fontSize: "14px",
                  fontWeight: 400,
                  width: { xs: "100%", md: "auto" }
                }}
              />

              <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                <CustomButton
                  props={"Subscribe Now"}
                // fullWidth
                />
              </Box>
            </Box>

          </Box>

          {/* ================== NAV + SOCIAL ICONS ================== */}
          <Box
            sx={{
              borderBottom: "1px solid #CCD1D2",
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              py: "20px",
              gap: { xs: 2, md: 0 }
            }}
          >

            {/* Nav links */}
            <List
              sx={{
                display: "flex",
                gap: 3,
                flexDirection: { xs: "row", md: "row" },
              }}
            >
              {list.map((item) => (
                <ListItem key={item} sx={{ width: "auto", padding: 0 }}>
                  <Link href="#" underline="none">
                    <ListItemText
                      primary={item}
                      sx={{
                        "& .MuiTypography-root": { fontWeight: 600, fontSize: { xs: "14px", md: "16px" } }
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>

            {/* Social Icons */}
            <List
              sx={{
                display: "flex",
                gap: 3,
                mt: { xs: 1, md: 0 }
              }}
            >
              {media.map((item, index) => (
                <ListItem key={index} sx={{ width: "auto", padding: 0 }}>
                  <Link href="#" underline="none">
                    <ListItemText
                      primary={item.title}
                      sx={{
                        "& .MuiTypography-root": { fontWeight: 600, fontSize: "18px" }
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>

          </Box>

        </Box>

        {/* ================== BOTTOM SECTION ================== */}
        <Box
          sx={{
            color: "#667479",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            pb: "20px",
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 2, md: 0 }
          }}
        >

          {/* Copyright – order 3 on mobile */}
          <Typography
            variant="caption"
            sx={{
              order: { xs: 3, md: 0 }
            }}
          >
            © 2022 Monito. All rights reserved.
          </Typography>

          {/* Logo – order 1 on mobile */}
          <Image
            src="/assets/Frame.png"
            alt="Logo"
            width={100}
            height={60}
            style={{
              height: "auto",
              marginTop: "4px"
            }}
            className="footer-logo"
          />
       

          {/* Terms + Privacy – order 2 on mobile */}
          <Box
            sx={{
              display: "flex",
              flexDirection: 'row',
              gap: { xs: 1, md: 2 },
              order: { xs: 2, md: 0 }
            }}
          >
            <Typography variant="caption">
              <Link href="#" underline="none" sx={{ color: "#667479" }}>
                Terms of Service
              </Link>
            </Typography>

            <Typography variant="caption">
              <Link href="#" underline="none" sx={{ color: "#667479" }}>
                Privacy Policy
              </Link>
            </Typography>
          </Box>

        </Box>

      </Container>

    </Container>
  );
};

export default Footer;
