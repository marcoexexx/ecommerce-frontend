"use client";

import RenderCategoryProducts from "@/components/content/home";
import { useGetProducts } from "@/hooks/product";
import { Pagination } from "@/services/types";
import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 10,
  });

  const { try_data } = useGetProducts({
    pagination,
  });

  const products = try_data.ok_or_throw();

  const handleNextPage = (_: React.MouseEvent<HTMLButtonElement>) => {
    setPagination(prev => ({ ...prev, page: prev.page + 1 }));
  };

  const handleBackPage = (_: React.MouseEvent<HTMLButtonElement>) => {
    setPagination(prev => ({ ...prev, page: prev.page - 1 }));
  };

  return (
    <main>
      <Container maxWidth="lg">
        {/* <Banner /> */}

        {/* ..OtherComponents */}

        {/* Rendering Category's Products */}
        <RenderCategoryProducts />

        <Typography variant="h1">Home Page</Typography>

        <Typography variant="h2">Page: {pagination.page}</Typography>
        <Typography variant="h2">
          Page size: {pagination.pageSize}
        </Typography>
        <Typography variant="h2">Total: {products?.count}</Typography>

        {products?.results.map((product, idx) => (
          <Box key={product.id} sx={{ p: 2 }}>
            <Typography variant="h3">
              [ {idx + 1} ]. {product.title}: {product.price}
            </Typography>
          </Box>
        ))}

        <Button onClick={handleBackPage} disabled={pagination.page <= 1}>
          Back
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={pagination.page * pagination.pageSize
            === (products?.count ?? 0)}
        >
          Next
        </Button>
      </Container>
    </main>
  );
}
