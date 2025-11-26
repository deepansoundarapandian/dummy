"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import ProductDetail from "@/components/ViewProduct/ProductDetail";
import ProductImage from "@/components/ViewProduct/ProductImage";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
import { Box, Grid,Container } from "@mui/material";

export default function ProductDetailsPage() {

  const router = useRouter();
   
  const { productDetail } = router.query;

  const [product, setProduct] = useState<any>(null);
  const [image, setImage] = useState("");

  useEffect(() => {

    if (!productDetail) return;
    
    const getProduct = async () => {
      const res = await axios(`https://fakestoreapi.com/products/${productDetail}`);
      setProduct(res.data);
      setImage(res.data.image);
    }
    getProduct();

  }, [productDetail]);

  if (!product) return <ProductSkeleton />;

  return (
    <>
      <Container sx={{ color: 'black', my: '50px' }}>

        <Box sx={{ mt: 3, mb: 5, border: "1px solid #EEE", borderRadius: '20px', p: 2 }}>
          <Grid container spacing={4}>

            {/* LEFT SIDE: MAIN IMAGE + THUMBNAILS */}
            <ProductImage product={product} image={image} setImage={setImage}/>

            {/* RIGHT SIDE: DETAILS */}
            <ProductDetail product={product}/>

          </Grid> 
        </Box>
      
        <CustomerReview/>
        
      </Container>
    </>
  );
};