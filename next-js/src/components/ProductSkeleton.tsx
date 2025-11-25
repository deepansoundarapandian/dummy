"use client";

import { Grid, Paper, Skeleton, Stack, Box } from "@mui/material";

export default function ProductSkeleton() {
    return (
        <Box sx={{ mt: 3, mb: 5, border: "1px solid #EEE", borderRadius: '20px', p: 2 }}>
            <Grid container spacing={4}>

                {/* LEFT SIDE (Product Image Section Skeleton) */}
                <Grid size={{ xs: 12, md: 6 }}>
                    {/* Main Image Skeleton */}
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            width: "100%",
                            height: "476px",
                        }}
                    >
                        <Skeleton variant="rectangular" width="100%" height="100%" />
                    </Paper>

                    {/* Thumbnail Skeletons */}
                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        {[1, 2, 3, 4, 5].map((v) => (
                            <Skeleton
                                key={v}
                                variant="rectangular"
                                width={94}
                                height={94}
                                sx={{ borderRadius: "10px" }}
                            />
                        ))}
                    </Stack>

                    {/* Health Tags Skeleton (Desktop Only) */}
                    <Box
                        sx={{
                            mt: 3,
                            display: { xs: "none", md: "flex" },
                            gap: 2,
                            flexDirection: "row",
                        }}
                    >
                        <Skeleton variant="rounded" width="100%" height={40} />
                    </Box>

                    {/* Share Icons Skeleton */}
                    <Box
                        sx={{
                            mt: 2,
                            display: { xs: "none", md: "flex" },
                            gap: 2,
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton variant="text" width={60} height={24} />

                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton variant="circular" width={24} height={24} />
                    </Box>
                </Grid>

                {/* RIGHT SIDE (Product Detail Skeleton) */}
                <Grid size={{ xs: 12, md: 6 }}>
                    {/* Title Skeleton */}
                    <Skeleton variant="text" width="80%" height={40} />

                    {/* Price Skeleton */}
                    <Skeleton variant="text" width="40%" height={35} />

                    {/* Buttons Skeleton */}
                    <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                        <Skeleton variant="rounded" width={120} height={45} sx={{ flexGrow: { xs: 1, md: 0 } }} />
                        <Skeleton variant="rounded" width={120} height={45} sx={{ flexGrow: { xs: 1, md: 0 } }} />
                    </Box>

                    {/* Details List Skeleton */}
                    <Paper elevation={0} sx={{ borderRadius: "16px", mt: 3, p: 3 }}>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    py: 1,
                                    borderBottom: "1px solid #EEE",
                                }}
                            >
                                <Skeleton variant="text" width="40%" height={30} />
                                <Skeleton variant="text" width="50%" height={30} />
                            </Box>
                        ))}
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}
