import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, Typography, Stack, CardMedia, Paper, IconButton } from "@mui/material";


const ProductImage = ({ product, image, setImage }: { product: any, image: any, setImage: any }) => {

    const getImage = (e: any) => {
        setImage(e.target.src);
    };

    return (
        <Grid size={{ xs: 12, md: 6 }} >
            {/* Main Image */}
            <Paper
                elevation={0}
                sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                }}
            >
                <CardMedia
                    component="img"
                    src={image}
                    alt={product.title}
                    sx={{
                        maxWidth: "560px",
                        height: "476px",
                        objectFit: "contain",
                    }}
                />
            </Paper>

            {/* Thumbnails */}
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                {[1, 2, 3, 4, ].map((v) => (
                    <Paper
                        key={v}
                        elevation={0}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            width: "94px",
                            height: "94px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            src='/assets/image 4.png'
                            sx={{ width: "100%", height: "100%", objectFit: "contain", cursor: 'pointer' }}
                            onClick={(e) => getImage(e)}
                        />
                    </Paper>
                ))}
                 <Paper
                        key={product.title}
                        elevation={0}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            width: "94px",
                            height: "94px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={product.image}
                            sx={{ width: "100%", height: "100%", objectFit: "contain", cursor: 'pointer' }}
                            onClick={(e) => getImage(e)}
                        />
                    </Paper>
            </Stack>

            {/* Health Tags */}

            <Box
                sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "10px",
                    bgcolor: "#FFF4D9",
                    fontSize: "13px",
                    fontWeight: 700,
                    display: {xs:'none', md:'flex'},
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                    mt: 3
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><img src='/assets/Frame2.png' width={30} height={30}></img> 100% health guarantee for pets </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><img src='/assets/Frame3.png' width={30} height={30}></img> 100% guarantee of pet identification </Box>
            </Box>
            {/* </Stack> */}
            <Box
                sx={{
                    display:{xs:'none', md:'flex'},
                    alignItems: "center",
                    gap: 2,
                    mt: 2,
                }}
            >
                {/* Share icon */}
                <ShareIcon sx={{ fontSize: 20, color: "#003459" }} />

                {/* Label */}
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#003459",
                    }}
                >
                    Share:
                </Typography>

                {/* Social Icons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <IconButton>
                        <FacebookIcon sx={{ fontSize: 20, color: "#9AA6B2" }} />
                    </IconButton>

                    <IconButton>
                        <TwitterIcon sx={{ fontSize: 20, color: "#9AA6B2" }} />
                    </IconButton>

                    <IconButton>
                        <InstagramIcon sx={{ fontSize: 20, color: "#9AA6B2" }} />
                    </IconButton>

                    <IconButton>
                        <YouTubeIcon sx={{ fontSize: 20, color: "#9AA6B2" }} />
                    </IconButton>
                </Box>
            </Box>

        </Grid>
    )
}

export default ProductImage;