"use client";
import { Box, Grid, Typography, Button, Stack, CardMedia, Paper, IconButton, Card, Breadcrumbs, Link } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PetCard from "@/components/PetCard";
import CustomerSlider from "@/components/CustomerSlider";
import CustomBreadcrumbs from "@/components/Breadcrumbs";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { productDetail } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [image, setImage] = useState("");



  const dummyData = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }

  const crumb = [" Home", "Dog", "Large Dog", "Shiba Inu Sepia"];

  const loop = [1, 2, 3, 4];

  const getImage = (e: any) => {
    setImage(e.target.src);
  }

  useEffect(() => {
    if (!productDetail) return;
    const getProduct = async () => {
      const res = await axios(`https://fakestoreapi.com/products/${productDetail}`);
      setProduct(res.data);
      setImage(res.data.image);
    }
    getProduct();
  }, [productDetail]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Container sx={{ color: 'black', my: '50px' }}>

        <Box sx={{ mt: 3, mb: 5, border: "1px solid #EEE", borderRadius: '20px', p: 2 }}>
          <Grid container spacing={4}>
            {/* LEFT SIDE: MAIN IMAGE + THUMBNAILS */}
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
                {[1, 2, 3, 4, 5].map((v) => (
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
                  display: 'flex',
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
                  display: "flex",
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

            {/* RIGHT SIDE: DETAILS */}
            <Grid size={{ xs: 12, md: 6 }}>

              <CustomBreadcrumbs title={product.title} gutter="disableGutters"/>

              <Typography variant="h3" sx={{ color: '#00171F' }}>
                {product.title}
              </Typography>
              <Typography variant="h4"
                sx={{ color: "#002A48" }}
              >
                ${product.price}
              </Typography>

              {/* Buttons */}
              <Box sx={{ mt: 3, display:'flex', gap:2 }}>
                <Button variant="contained" sx={{ px: 4, py: 1.5, borderRadius: "30px", flexGrow:{xs:1, md:0} }}>
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  sx={{ fontWeight: 700, flexGrow:{xs:1, md:0} }}
                >
                  Buy Now
                </Button>
              </Box>

              {/* DETAILS LIST */}
              <Paper
                elevation={0}
                sx={{
                  borderBottom: "1px solid #EEE",
                  borderRadius: "16px",
                  p: 3,
                }}
              >
                {[
                  ["SKU", "#1000078"],
                  ["Gender", "Female"],
                  ["Age", "2 Months"],
                  ["Size", "Small"],
                  ["Color", "Apricot & Tan"],
                  ["Vaccinated", "Yes"],
                  ["Dewormed", "Yes"],
                  ["Cert", "Yes (MKA)"],
                  ["Microchip", "Yes"],
                  ["Location", "Vietnam"],
                  ["Published Date", "12-Oct-2022"],
                  ["Additional Information", ": Pure breed Shih Tzu Good body structure. With MKA cert and Microchip. Father from champion lineage."]
                ].map(([label, value]) => (
                  <Grid
                    container
                    sx={{ py: 1, borderBottom: "1px solid #EEE" }}
                    key={label}
                  >
                    <Grid size={{ xs: 5 }}>
                      <Typography sx={{ color: "#667479", fontWeight: 400, fontSize: '14px' }}>{label}</Typography>
                    </Grid>
                    <Grid size={{ xs: 7 }}>
                      <Typography sx={{ color: "#667479", fontWeight: 400, fontSize: '14px' }}>{value}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Paper>

            </Grid>
          </Grid>
        </Box>

        <Box sx={{ overflow: 'hidden' }}>

          <Typography
            variant="h3"
            sx={{
              mb: 2,
            }}
          >
            Our lovely customer
          </Typography>

          <CustomerSlider />

        </Box>

        <Box sx={{ mt: '60px' }}>

          <Box >
            <Typography variant="caption" sx={{ display: 'block', fontWeight: 500, fontSize: '16px' }}>
              Whats new?
            </Typography>
            <Typography variant="h3" sx={{ display: 'block', color: 'primary.main' }}>
              Take a look at some of our pets
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2} >
              {loop.map((product: any) => (
                <Grid size={{ xl: 3, md: 4, sm: 6, xs: 6 }}
                  key={product}
                >
                  <PetCard pData={dummyData} />
                </Grid>
              ))}
            </Grid>
          </Box>

        </Box>
      </Container>
    </>
  );
}