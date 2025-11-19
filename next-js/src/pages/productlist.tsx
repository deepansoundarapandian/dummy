import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Grid } from "@mui/material";
import PetCard from "@/components/PetCard";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductList = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 5;

  useEffect(() => {
    const fetchAll = async () => {
      let data = await axios("https://fakestoreapi.com/products");
      setAllProducts(data.data);
    };
    fetchAll();
  }, []);

  // Slice data when page changes OR allProducts loaded
  useEffect(() => {
    const start = (page - 1) * limit;
    const end = start + limit;
    const sliced = allProducts.slice(start, end);
    setPaginatedData(sliced);
  }, [page, allProducts]);

  const totalPages = Math.ceil(allProducts.length / limit);

  return (
    <Container maxWidth='xl' sx={{ color: 'black', mt: '30px' }}>

      <Container disableGutters>
        <Box>
          <Grid container spacing={2}>
            {paginatedData.map((product: any) => (
              <Grid key={product.id} size={{ xl: 3, md: 4, sm: 6 }}>
                <PetCard pData={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container sx={{ display:'flex', justifyContent:'center', mt:'40px'}}>
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
      </Container>

    </Container>
  );
};

export default ProductList;

