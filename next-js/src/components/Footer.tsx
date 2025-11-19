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
  const media = [{ title: <FacebookRoundedIcon /> }, { title: <InstagramIcon /> }, { title: <TwitterIcon /> }, { title: <YouTubeIcon /> }]
  return (
    <Container disableGutters maxWidth="xl" sx={{ backgroundColor: 'secondary.main', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', mt: '20px', pt: '80px' }}>
      <Container>

        <Box sx={{ pb: '40px' }}>

          <Box sx={{ backgroundColor: 'primary.main', padding: 4, display: 'flex', gap: '60px', borderRadius: 4, }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', textTransform: 'capitalize', fontWeight: 700, lineHeight: '36px' }}>
              Register now so you don't <br /> miss our programs
            </Typography>
            <Box sx={{ backgroundColor: '#FFFFFF', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', height: '72px', borderRadius: '14px', padding: '12px' }}>
              <OutlinedInput placeholder="Enter your Email" sx={{ color: '#99A2A5', borderRadius: '8px', border: '1px', flexGrow: 1, height: '48px', fontSize: '14px', fontWeight: 400 }} />
              <CustomButton props={'Subscribe Now'} />
            </Box>
          </Box>

          <Box sx={{ borderBottom: '1px solid #CCD1D2', display: 'flex', justifyContent: 'space-between', py: '20px', color: 'black' }}>

            <Box sx={{ display: "flex", gap: 4, alignItems: "center", }}>
              <List sx={{ display: "flex", gap: 5 }}>
                {list.map((item) => (
                  <ListItem key={item} sx={{ width: "auto", padding: 0 }}>
                    <Link href='#' underline="none">
                      <ListItemText
                        primary={item}
                        sx={{
                          "& .MuiTypography-root": { fontWeight: 600 },

                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <List sx={{ display: "flex", gap: 5 }}>
                {media.map((item, index) => (
                  <ListItem key={index} sx={{ width: "auto", padding: 0 }}>
                    <Link href='#' underline="none">
                      <ListItemText
                        primary={item.title}
                        sx={{
                          "& .MuiTypography-root": { fontWeight: 600 },
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

          </Box>

        </Box>

        <Box sx={{ color: '#667479', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: '20px' }}>

          <Box>
            <Typography variant="caption" >
              © 2022 Monito. All rights reserved.
            </Typography>
          </Box>

          <Box>
            <Image
              src="/assets/Frame.png"
              alt="Logo"
              width={100}
              height={60}
              style={{
                height: "auto",
              }}
            />
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="caption" >
              <Link href='#' underline="none" sx={{ color: '#667479' }}>Terms of Service</Link>
            </Typography>
            <Typography variant="caption" >
              <Link href='#' underline="none" sx={{ color: '#667479' }}>Privacy Policy</Link>
            </Typography>
          </Box>

        </Box>

      </Container>
    </Container>
  )
}

export default Footer;