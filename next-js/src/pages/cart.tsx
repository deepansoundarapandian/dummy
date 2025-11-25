"use client";

import {
    Box,
    Typography,
    Grid,
    Container,
    Divider
} from "@mui/material";
import Image from "next/image";
import PetCard from "@/components/ProductCard/PetCard";
import CartItems from "@/components/Cart/CartItems";
import CartSummary from "@/components/Cart/CartSummary";
import { userData } from "@/context/UserData";

export default function CartPage() {

    const { cart } = userData();

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
        },
        "add": true
    }

    const loop = [1, 2, 3, 4];

    return (

        <Container sx={{ color: 'black', pt: 3 }}>

            <Box sx={{ py: 2 }}>
                <Typography
                    sx={{
                        fontSize: { xs: '22px', md: '28px' },
                        fontWeight: 400,
                        mb: 3,
                    }}
                >
                    Cart
                    <span style={{ color: '#838383', fontSize: '16px',paddingLeft:'7px' }}>
                        ({cart.length} items)
                    </span>
                </Typography>

                {/* EMPTY CART */}
                {cart.length === 0 && (
                    <Box
                        sx={{
                            width: "100%",
                            height: 350,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        No Products Added
                    </Box>
                )}

                {/* NON EMPTY */}
                {cart.length > 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            flexDirection: { xs: "column", md: "row" },   // 🌟 MOBILE FIX
                        }}
                    >
                        {/* CART ITEMS */}
                        <Box
                            sx={{
                                flex: 1,
                                boxShadow: {
                                    md: "0 0 5px rgba(0,0,0,0.1)"
                                },
                                borderRadius: '8px',
                                p: { xs: 0, md: 2 }, 
                            }}
                        >
                            {cart.map((item: any) => (
                                <Box key={item.id}>
                                    <CartItems item={item} />
                                    <Divider variant="middle" />
                                </Box>
                            ))}
                        </Box>

                        {/* SUMMARY (Moves to bottom on mobile) */}
                        <Box sx={{ width: { xs: "100%", md: "350px" } }}>
                            <CartSummary />
                        </Box>
                    </Box>
                )}
            </Box>

            {/* FREQUENTLY BOUGHT */}
            <Box sx={{ py: 3 }}>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 2,
                        fontSize: { xs: "20px", md: "32px" },
                        color: 'primary.main'
                    }}
                >
                    Frequently Bought
                </Typography>

                <Grid container spacing={2}>
                    {loop.map((product: any) => (
                        <Grid
                            key={product}
                            size={{ xs: 6, md: 3 }}   // 🌟 MOBILE 2-COLUMN FIX
                        >
                            <PetCard pData={dummyData} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Container>

    );
}
