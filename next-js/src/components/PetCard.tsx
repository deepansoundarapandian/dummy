import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type PetCardProps = {
    pData: any;
};

export default function PetCard({ pData }: PetCardProps) {

    const router = useRouter();

    const viewProduct = (id: string) => {
        router.push(`/products/${id}`);
    };

    return (
        <Card
            sx={{
                borderRadius: "24px",
                boxShadow: "0px 4px 32px rgba(0,0,0,0.06)",
                p: 1,
            }}
            onClick={() => viewProduct(pData.id.toString())}
        >
            <CardMedia
                component="img"
                image={pData.image}
                alt="Pet"
                sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "contain",
                    cursor: "pointer",
                    borderRadius: "20px",
                }}
            />

            <CardContent sx={{ px: 1.5, pt: 2 }}>

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#001A30", fontSize: {xs:'14px', md:'16px'} }}
                >
                    {pData.title.slice(0, 20)}

                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: '1px', fontWeight: 400, fontSize: {xs:'12px', md:'14px'} }}>
                    <Typography sx={{ color: "#667479", fontSize: "14px" }}>
                        {pData.category}
                    </Typography>

                    <Box
                        sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            backgroundColor: "#5C6A79",
                        }}
                    />

                    <Typography sx={{ color: "#5C6A79", fontSize: "12px", fontWeight: 700 }}>
                        {pData.rating.rate}
                    </Typography>
                </Box>


                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        mt: '1px',
                        color: "#00171F",
                    }}
                >
                    {pData.price}
                </Typography>
            </CardContent>
        </Card>
    );
}