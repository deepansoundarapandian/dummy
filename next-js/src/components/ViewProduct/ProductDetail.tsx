import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { userData } from "@/context/UserData";
import { v4 as uuidv4 } from "uuid";

const ProductDetail = ({ product }: { product: any }) => {
    const { setCart } = userData();

    const addCart = () => {
        const detail = {
            id: uuidv4(),
            title: product.title,
            productType: "Dog Food",
            size: "385gm",
            price: product.price,
            image: product.image,
            qty: 1,
        }
        setCart((prev: any) => ([...prev, detail]));
    }
    
    return (
        <Grid size={{ xs: 12, md: 6 }}>

            <CustomBreadcrumbs title={product.title} gutter="disableGutters" />

            <Typography variant="h3" sx={{ color: '#00171F' }}>
                {product.title}
            </Typography>
            <Typography variant="h4"
                sx={{ color: "#002A48" }}
            >
                ${product.price}
            </Typography>

            {/* Buttons */}
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button variant="contained" sx={{ px: 4, py: 1.5, borderRadius: "30px", flexGrow: { xs: 1, md: 0 } }} onClick={addCart}>
                    Add to Cart
                </Button>
                <Button
                    variant="outlined"
                    sx={{ fontWeight: 700, flexGrow: { xs: 1, md: 0 } }}
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
            {/* Health Tags */}

            <Box
                sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "10px",
                    bgcolor: "#FFF4D9",
                    fontSize: "13px",
                    fontWeight: 700,
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                    mt: 3
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><img src='/assets/Frame2.png' width={30} height={30}></img> 100% health guarantee for pets </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><img src='/assets/Frame3.png' width={30} height={30}></img> 100% guarantee of pet identification </Box>
            </Box>

        </Grid>
    )
}

export default ProductDetail