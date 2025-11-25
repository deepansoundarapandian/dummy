import PetCard from "@/components/ProductCard/PetCard";
import CustomerSlider from "@/components/CustomerReview/CustomerSlider";
import { Box, Grid, Typography } from "@mui/material";

const CustomerReview = () => {

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
    };

    const loop = [1, 2, 3, 4];

    return (
        <>
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
        </>
    )
}

export default CustomerReview;