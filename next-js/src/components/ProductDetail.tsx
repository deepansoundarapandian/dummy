import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";

const ProductDetail = ({product}:{product: any}) => {
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
                <Button variant="contained" sx={{ px: 4, py: 1.5, borderRadius: "30px", flexGrow: { xs: 1, md: 0 } }}>
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

        </Grid>
    )
}

export default ProductDetail