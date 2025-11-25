import Image from "next/image";
import { Box, Typography } from "@mui/material";

const OrderedProduct = ({ item }: { item: any }) => {

    return (
        <Box
            key={item.id}
            sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent:'space-between',
                gap: 2,
                borderBottom: "1px solid #EDEDED",
                pb: 2,
                mb: 2,
            }}
        >

            {/* ---------- DETAILS ---------- */}
            <Box sx={{ display: 'flex', flexGrow:1 }}>
                <Box >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={70}
                        height={70}
                        style={{ borderRadius: "8px", }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5"
                        sx={{ color: "#00171F", mb: 0.4, fontSize: { xs: 12, md: 16 } }}
                    >
                        {item.title}
                    </Typography>

                    <Typography sx={{ fontSize: {xs:'8px',md:"13px"}, color: "#667479" }}>
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
                    <Typography sx={{ fontSize: "12px", color: "#667479", mt: 1, display: { xs: 'block', md: 'none' } }}>
                        Delivered at {item.deliveredAt}
                    </Typography>
                </Box>
            </Box>

            {/* ---------- STATUS ---------- */}
            <Box sx={{  textAlign: "right" }}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: 12, md: 15 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 1,
                        color: item.statusColor,
                    }}
                >
                    <Typography sx={{fontSize: { xs: 12, md: 16 }}}>{item.statusIcon}</Typography>
                    {item.status}
                </Typography>

                <Typography sx={{ fontSize: "12.5px", color: "#667479", mt: 1, display: { xs: 'none', md: 'block' } }}>
                    Delivered at {item.deliveredAt}
                </Typography>
            </Box>
        </Box>
    )
};

export default OrderedProduct;