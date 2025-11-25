import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import GiftIcon from "@mui/icons-material/CardGiftcard";

export default function PetProduct() {
    return (
        <Card
            sx={{
                borderRadius: "24px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                p: 1,
            }}
        >
            <CardMedia
                component="img"
                image="/assets/image 2 (1).png" 
                alt="Pet"
                sx={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: '20px'
                }}
            />

            {/* Content */}
            <CardContent sx={{ px: 1 }}>
                {/* Title */}
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#001A49",
                    }}
                >
                    Reflex Plus Adult Cat Food Salmon
                </Typography>

                {/* Sub Info */}
                <Typography sx={{ fontSize: "12px", color: "#43536A", mt: 1 , fontWeight:400}}>
                    Product: <b>Dog Food</b> • Size: <b>385gm</b>
                </Typography>

                {/* Price */}
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "14px",
                        mt: 1,
                        color: "#001A49",
                    }}
                >
                    $199.00
                </Typography>

                {/* Free Gift Bar */}
                <Box
                    sx={{
                        backgroundColor: "#FEF2DA",
                        borderRadius: "14px",
                        mt: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 2,
                        py: 1.2,
                    }}
                >
                    <GiftIcon sx={{ color: "#FF6B00", height:'20px' }} />
                     <Box
                        sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            backgroundColor: "#003459",
                        }}
                    />
                    <Typography sx={{ fontWeight: 700, fontSize: "14px", color:'#002A48' }}>
                        Free Toy & Free Shaker
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
