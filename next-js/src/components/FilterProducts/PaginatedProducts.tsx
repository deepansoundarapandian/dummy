import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import PetCard from "@/components/ProductCard/PetCard";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PetCardSkeleton from "../Skeleton/PetCardSkeleton";


const PaginatedProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(false);

    const limit = 5;

    useEffect(() => {
        const fetchAll = async () => {
            setLoader(true);
            try {
                let data = await axios("https://fakestoreapi.com/products");
                setAllProducts(data.data);
            } catch (err) {
                console.log("API Error:", err);
            } finally {
                setLoader(false);
            }
        };
        fetchAll();
    }, []);

    useEffect(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        const sliced = allProducts.slice(start, end);
        setPaginatedData(sliced);
    }, [page, allProducts]);

    const totalPages = Math.ceil(allProducts.length / limit);
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Typography variant="h3" sx={{ color: "primary.main" }}>Small Dog</Typography>
                    <Typography variant="h6" sx={{ color: '#667479' }}>{allProducts.length} puppies</Typography>
                </Box>

                <Grid container spacing={2}>
                    {
                        loader ? [1, 2, 3, 4].map((product: any) => (
                            <Grid key={product} size={{ xl: 4, md: 4, sm: 6, xs: 6 }}>
                                <PetCardSkeleton />
                            </Grid>
                        )) : (
                            paginatedData.map((product: any) => (
                                <Grid key={product.id} size={{ xl: 4, md: 4, sm: 6, xs: 6 }}>
                                    <PetCard pData={product} />
                                </Grid>
                            ))
                        )
                    }
                </Grid>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: '40px' }}>

                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(_, value) => setPage(value)}
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                sx={{
                                    color: "primary.main",
                                    borderRadius: "5px",
                                    fontWeight: 700,
                                    fontSize: '18px',

                                    "&:hover": {
                                        bgcolor: "primary.main",
                                        color: "white",
                                    },
                                    "&.Mui-selected": {
                                        bgcolor: "primary.main",
                                        color: "white",
                                    },
                                }}
                            />
                        )}
                    />
                </Stack>

            </Box>

        </Box>
    )
}

export default PaginatedProducts;