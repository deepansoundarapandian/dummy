"use client";

import { Card, CardContent, Box, Skeleton, } from "@mui/material";

export default function PetCardSkeleton() {
    return (
        <Card
            sx={{
                borderRadius: "24px",
                boxShadow: "0px 4px 32px rgba(0,0,0,0.06)",
                p: 1,
            }}
        >
            {/* Image Skeleton */}
            <Box
                sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: "20px",
                    overflow: "hidden",
                }}
            >
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{ height: "100%", width: "100%", bgcolor: "grey.200" }}
                />
            </Box>

            <CardContent sx={{ px: 1.5, pt: 2 }}>

                {/* Title Skeleton */}
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: "70%",
                        height: 24,
                        bgcolor: "grey.200",
                    }}
                />

                {/* Category + Dot + Rating Row */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{ width: "40%", height: 18, bgcolor: "grey.200" }}
                    />

                    <Skeleton
                        variant="circular"
                        animation="wave"
                        width={4}
                        height={4}
                        sx={{ bgcolor: "grey.300" }}
                    />

                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{ width: "15%", height: 18, bgcolor: "grey.200" }}
                    />
                </Box>

                {/* Price Skeleton */}
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: "30%",
                        height: 24,
                        mt: 1,
                        bgcolor: "grey.200",
                    }}
                />

                {/* Add Button Skeleton (if needed) */}
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{
                        width: "50%",
                        height: 40,
                        mt: 2,
                        borderRadius: "8px",
                        bgcolor: "grey.200",
                    }}
                />
            </CardContent>
        </Card>
    );
}
