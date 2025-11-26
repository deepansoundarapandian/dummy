"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Breadcrumbs, Link, Typography, Box, Container } from "@mui/material";

export default function CustomBreadcrumbs({ title = "", gutter="" }: { title?: string, gutter? :string }) {

    const pathname = usePathname(); 

    if (!pathname || pathname === "/") return null;

    const pathParts = pathname.split("/").filter(x => x); 
    // Example: ["products", "2"]

    const breadcrumbLinks = pathParts.map((part, index) => {
        const isLast = index === pathParts.length - 1;

        // 1️⃣ First segment always shown as "Products"
        if (index === 0) {
            return (
                <Link
                    key="products"
                    component={NextLink}
                    href="/products"
                    underline="hover"
                    sx={{ fontWeight: 500, color: "#667479", fontSize: "14px" }}
                >
                    Products
                </Link>
            );
        }

        // 2️⃣ Last item → Show PRODUCT TITLE
        if (isLast) {
            return (
                <Typography key={part} color="#667479" fontSize="14px" fontWeight={500}>
                    {title || part}
                </Typography>
            );
        }

        // (Optional: If you have more levels later)
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        const formatted = part.charAt(0).toUpperCase() + part.slice(1);

        return (
            <Link
                key={href}
                component={NextLink}
                href={href}
                underline="hover"
                sx={{ fontWeight: 500, color: "#667479", fontSize: "14px" }}
            >
                {formatted}
            </Link>
        );  
    });

    const disable = gutter === "disableGutters";

    return (
      <Container disableGutters={disable}>
          <Box sx={{
            mt:'5px',
        }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link
                    component={NextLink}
                    href="/"
                    underline="hover"
                    sx={{ fontWeight: 500, color: "#667479" }}
                >
                    Home
                </Link>

                {breadcrumbLinks}  
            </Breadcrumbs>
        </Box>
      </Container>
    );
}
