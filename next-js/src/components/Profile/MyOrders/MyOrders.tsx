"use client";

import { userData } from "@/context/UserData";
import { Box, Typography, Card, useMediaQuery, IconButton } from "@mui/material";
import OrderedProduct from "./OrderedProduct";
import theme from "@/themes/theme";
import { usePathname, useRouter } from "next/navigation";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function MyOrders() {

    const { orders } = userData();
    const pathname = usePathname();
    const router = useRouter();

    const isMobile = useMediaQuery(theme.breakpoints.down("md")) && pathname === "/profile";

    const emptyImage = "/assets/Group 1171276766.png";

    const goHome = () => {
        router.push("/");
        console.log("click");

    }

    return (
        <Box sx={{ flexGrow: 1, width: { xs: '100%' }, mb: { xs: 5, md: 0 }, }}>
            {isMobile && (
                <Box
                    sx={{ display: 'flex', alignItems: 'center', mb: 2, cursor: 'pointer' }}

                >
                    <IconButton onClick={goHome}>
                        <ChevronLeftIcon sx={{ fontSize: "34px" }} />
                    </IconButton>

                    <Typography variant="h3" sx={{ color: '#00171F' }}>
                        My Orders
                    </Typography>
                </Box>
            )}

            <Card
                sx={{
                    width: "100%",
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
                        display: { xs: 'none', md: 'block' }
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
                    <OrderedProduct item={item} />
                ))}
            </Card>
        </Box>
    );
}
