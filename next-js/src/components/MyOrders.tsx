"use client";

import { userData } from "@/context/UserData";
import { Box, Typography, Card } from "@mui/material";
import OrderedProduct from "./OrderedProduct";

export default function MyOrders() {

    const { orders } = userData();

    const emptyImage = "/assets/Group 1171276766.png";

    return (
        <Box sx={{ flexGrow: 1, width: { xs: '100%' } }}>
            <Card
                sx={{
                    p: 3,
                    borderRadius: "14px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #F0F0F0",
                    boxShadow: "0 0 5px rgba(0,0,0,0.1)"
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "#00171F",
                        mb: 3,
                    }}
                >
                    My Orders
                </Typography>

                {orders.length === 0 && (
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            py: 6,
                        }}
                    >
                        <img
                            src={emptyImage}
                            alt="No Orders"
                            style={{ width: "389px", opacity: 0.9 }}
                        />
                    </Box>
                )}

                {orders.map((item: any) => (
                    <OrderedProduct item={item}/>
                ))}
            </Card>
        </Box>
    );
}
