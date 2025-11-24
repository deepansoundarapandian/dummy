"use client";

import {
    Box,
    Typography,
    Grid,
    Container,
    Divider
} from "@mui/material";
import Image from "next/image";
import PetCard from "@/components/PetCard";
import CartItems from "@/components/CartItems";
import CartSummary from "@/components/CartSummary";
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

        <Container sx={{ color: 'black', }}>

            <Box sx={{ py: 4 }}>
                <Typography sx={{ fontSize: '28px', fontWeight: 400, mb: 3 }}>
                    Cart <span style={{ fontWeight: 400, color: '#838383', fontSize: '20px' }}>({cart.length} items)</span>
                </Typography>

                {cart.length === 0 && (
                    <Box
                        sx={{
                            width: "100%",
                            height: 400,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/Group 1171276766.png"
                            width={350}
                            height={350}
                            alt="Empty cart"
                        />
                    </Box>
                )}


                {cart.length > 0 && (
                    <Box sx={{ display: "flex", gap: 4, }}>

                        <Box sx={{ flex: 1, boxShadow: "0 0 5px rgba(0,0,0,0.1)", borderRadius: '8px' }}>
                            {cart.map((item: any) => (
                                <>
                                    <CartItems key={item.id} item={item} />
                                    <Divider variant="middle" />
                                </>
                            ))}
                        </Box>

                        <CartSummary />

                    </Box>
                )}
            </Box>

            <Box sx={{ py: 4 }}>
                <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
                    Frequently Bought
                </Typography>
                <Grid container spacing={2}>
                    {loop.map((product: any) => (
                        <Grid key={product} size={{ md: 3, xs: 6 }}>
                            <PetCard pData={dummyData} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
