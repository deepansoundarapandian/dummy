import {
    AppBar,
    Toolbar,
    Container,
    Box,
    List,
    ListItem,
    ListItemText,
    Button
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const list = ["Home", "Category", "About", "Contact"];

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "primary.main",
                position: 'relative',
            }}
        >                                           
            <Container  disableGutters sx={{ mt: '30px' }} > 
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding:'0px' }}>
                    {/* Logo Section */}
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

                    {/* Navigation + Button */}
                    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>

                        <List sx={{ display: "flex", gap: 5 }}>
                            {list.map((item) => (
                                <ListItem key={item} sx={{ width: "auto", padding: 0 }}>
                                    <Link href='#'>
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
                        <Button
                            variant="contained" sx={{color:'text.primary', fontWeight:700}}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
