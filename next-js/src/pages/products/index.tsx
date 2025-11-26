import CustomBreadcrumbs from "@/components/Breadcrumbs";
import FilterProducts from "@/components/FilterProducts/FilterProducts";
import PaginatedProducts from "@/components/FilterProducts/PaginatedProducts";
import { Container } from "@mui/material";

const ProductList = () => {

  return (
    <>
      <CustomBreadcrumbs />

      <Container maxWidth='lg' disableGutters sx={{ color: 'black', mt: { xs: '20px', md: '430px' }, display: 'flex', }}>

        <FilterProducts />

        <PaginatedProducts />

      </Container>
    </>
  );

};

export default ProductList;

