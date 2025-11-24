import Image from "next/image";
import { Box, Typography } from "@mui/material";

const OrderedProduct = ({ item }: { item: any }) => {

    return (
        <Box
            key={item.id}
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                borderBottom: "1px solid #EDEDED",
                pb: 2,
                mb: 2,
            }}
        >
            {/* ---------- PRODUCT IMAGE ---------- */}
            <Image
                src={item.image}
                alt={item.title}
                width={70}
                height={70}
                style={{ borderRadius: "8px" }}
            />

            {/* ---------- DETAILS ---------- */}
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5"
                    sx={{ color: "#00171F", mb: 0.4 }}
                >
                    {item.title}
                </Typography>

                <Typography sx={{ fontSize: "13px", color: "#667479" }}>
                    Product: <b>{item.product}</b> &nbsp; Size: <b>{item.size}</b>
                </Typography>

                <Typography variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "#00171F",
                        mt: 0.5,
                    }}
                >
                    ${item.price.toFixed(2)}
                </Typography>
            </Box>

            {/* ---------- STATUS ---------- */}
            <Box sx={{ minWidth: "180px", textAlign: "right" }}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 1,
                        color: item.statusColor,
                    }}
                >
                    <span style={{ fontSize: 18 }}>{item.statusIcon}</span>
                    {item.status}
                </Typography>

                <Typography sx={{ fontSize: "12.5px", color: "#667479", mt: 1 }}>
                    Delivered at {item.deliveredAt}
                </Typography>
            </Box>
        </Box>
    )
};

export default OrderedProduct;