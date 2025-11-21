import { Box, Card, CardMedia } from "@mui/material";
import { useRef, useState} from "react";

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
    const scrollRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const cardWidth = 248 + 24; // 248 width + 24 gap

    // Detect which slide is visible
    const handleScroll = () => {
        const scrollLeft = scrollRef.current?.scrollLeft || 0;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setIndex(newIndex);
    };

    // Smooth scroll to slide when dot is clicked
    const goToSlide = (i: number) => {
        scrollRef.current?.scrollTo({
            left: i * cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Box
                ref={scrollRef}
                onScroll={handleScroll}
                sx={{
                    display: "flex",
                    gap: 1.5,
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    pb: 2,
                    scrollSnapType: "x mandatory",
                }}
            >
                {customerImages.map((img, i) => (
                    <Card
                        key={i}
                        sx={{
                            minWidth: 248,
                            height: 340,
                            borderRadius: "20px",
                            overflow: "hidden",
                            flexShrink: 0,
                            scrollSnapAlign: "start",
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
                ))}
            </Box>

            {/* Pagination Dots */}
            <Box
                sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                }}
            >
                {customerImages.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => goToSlide(i)}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            cursor: "pointer",
                            bgcolor: index === i ? "#001F1F" : "#D9D9D9",
                            transition: "0.3s",
                        }}
                    />
                ))}
            </Box>
        </>
    );
}
