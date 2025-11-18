import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

export default function PetCard() {
    return (
        <Card
            sx={{
                borderRadius: "24px",
                boxShadow: "0px 4px 32px rgba(0,0,0,0.06)",
                p: 1,
                // pb:0
            }}
        >
            {/* Image */}
            <CardMedia
                component="img"
                image="/assets/image 2.png"
                alt="Pet"
                sx={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: '20px'
                }}
            />

            {/* Text Content */}
            <CardContent sx={{ px: 1.5, pt: 2 }}>

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#001A30", fontSize: '16px' }}
                >
                    MO231 - Pomeranian White
                </Typography>

                {/* Gene & Age */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: '1px', fontWeight:400, fontSize:'14px' }}>
                    <Typography sx={{ color: "#667479", fontSize: "14px" }}>
                        Gene: Male
                    </Typography>

                    {/* Dot */}
                    <Box
                        sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            backgroundColor: "#5C6A79",
                        }}
                    />

                    <Typography sx={{ color: "#5C6A79", fontSize: "12px", fontWeight:700 }}>
                        Age: 02 months
                    </Typography>
                </Box>

                {/* Price */}
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        mt: '1px',
                        color: "#00171F",
                    }}
                >
                    $199.00
                </Typography>
            </CardContent>
        </Card>
    );
}
