"use client";

import { Box, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const customerImages = [
    "/assets/Frame 121.png",
    "/assets/Frame 118.png",
    "/assets/Frame 120.png",
    "/assets/Frame 121.png",
    "/assets/Frame 118.png",
    "/assets/Frame 121.png",
    "/assets/image 22.png",
    "/assets/Frame 118.png",
    "/assets/Frame 121.png",
    "/assets/Frame 118.png",
    "/assets/Frame 122.png",
];

export default function CustomerSlider() {
    return (
        <Box sx={{ width: "100%", py: 2 }}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={"auto"}
                spaceBetween={20}
                grabCursor={true}  // drag using mouse
                pagination={{ clickable: true }}
                style={{ paddingBottom: "40px", }} // space for dots
            >
                {customerImages.map((img, i) => (
                    <SwiperSlide
                        key={i}
                        style={{
                            width: "248px",  // fixed width for each slide
                        }}
                    >
                        <Card
                            sx={{
                                width: "248px",
                                height: "340px",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                            }}
                        >
                            <CardMedia
                                component="img"
                                src={img}
                                alt={`customer-${i}`}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
