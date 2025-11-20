import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Grid, Divider, FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";
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
  const petColor = ["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"];

  useEffect(() => {
    const fetchAll = async () => {
      let data = await axios("https://fakestoreapi.com/products");
      setAllProducts(data.data);
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

  let checkBoxColor = { color: '#CCD1D2', borderRadius: "4px", width: '16px', height: '16px', mr: 2, p: 2, ml: 0.5, };

  return (

    <Container maxWidth='lg' disableGutters sx={{ color: 'black', mt: '530px', display: 'flex', }}>

      <Box
        sx={{
          minWidth: "280px",
          p: 2,
          borderRadius: "16px",
          bgcolor: "#fff",
        }}
      >
        <Typography variant="h3"
          sx={{
            color: "primary.main",
            mb: 2,
          }}
        >
          Filter
        </Typography>

        <Typography variant="h5" sx={{ mb: 1 }}>
          Gender
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ ...checkBoxColor }} />}
            label={
              <Typography variant="h6" >
                Male
              </Typography>
            }
          />
          <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
            <Typography variant="h6" >
              FeMale
            </Typography>
          } />
        </FormGroup>

        <Divider sx={{ my: 1, borderBottom: '1px solid #EBEEEF', }} />

        <Typography variant="h5" sx={{ mt: 2 }}>
          Color
        </Typography>

        <FormGroup sx={{ mt: 1 }}>
          {
            petColor.map(color => <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
              <Typography variant="h6" >
                {color}
              </Typography>
            } />)
          }
        </FormGroup>

        <Divider sx={{ my: 2, borderBottom: '1px solid #EBEEEF', }} />

        <Typography variant="h5" sx={{ mb: 1 }}>
          Price
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Typography variant="h6"
            sx={{
              borderBottom: '1px solid #EBEEEF',
              px: 2,
              py: 1,
              width: "100%",
            }}
          >
            Min
          </Typography>
          <Typography variant="h6"
            sx={{
              borderBottom: '1px solid #EBEEEF',
              px: 2,
              py: 1,
              width: "100%",
            }}
          >
            Max
          </Typography>
        </Box>

        <Divider sx={{ my: 2, borderBottom: '1px solid #EBEEEF', }} />

        <Typography variant="h5" sx={{ mb: 1 }}>
          Breed
        </Typography>

        <FormGroup sx={{ borderBottom: '1px solid #EBEEEF', pb: 1 }}>
          <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
            <Typography variant="h6" >
              Small
            </Typography>
          } />
          <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
            <Typography variant="h6" >
              Medium
            </Typography>
          } />
          <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
            <Typography variant="h6" >
              Large
            </Typography>
          } />
        </FormGroup>
      </Box>

      <Box>

        <Box>
          <Grid container spacing={2}>
            {paginatedData.map((product: any) => (
              <Grid key={product.id} size={{ xl: 4, md: 4, sm: 6 }}>
                <PetCard pData={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '40px' }}>
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

    </Container>
  );
};

export default ProductList;

