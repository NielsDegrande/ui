import { useEffect, useState } from "react";

import { List, ListItem, MenuItem, Select, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { t } from "i18next";

import { Product } from "src/api/data-contracts";
import { PrimaryButton } from "src/components/primary-button/PrimaryButton";
import Sidebar from "src/components/sidebar/Sidebar";
import {
  Card,
  Container,
  MainContent,
} from "src/pages/products/Products.styled";
import { ProductState, useProductStore } from "src/stores/product";
import { api } from "src/utils/axios-instance";
import { QueryKey } from "src/utils/query-keys";

/**
 * Renders the Products page.
 */
const Products = () => {
  // Fetch all products.
  const { data: products } = useQuery({
    queryKey: QueryKey.products,
    queryFn: () =>
      api.getProductsApiSampleProductGet().then((response) => response.data),
  });

  // Statement management, largely here for exemplary purposes.
  const product = useProductStore((state: ProductState) => state.product);
  const setProduct = useProductStore((state: ProductState) => state.setProduct);
  const removeProduct = useProductStore(
    (state: ProductState) => state.removeProduct
  );

  // Find a single product.
  const [productId, setProductId] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (products) {
      const product = products.find(
        (product) => product.product_id == Number(productId)
      );
      setSelectedProduct(product ?? null);

      if (product) {
        setProduct(product);
      }
    }
  }, [products, productId, setProduct]);

  // // Fetch a single product.
  // // Below is for demo purposes.
  // const { data: selectedProduct } = useQuery({
  //   queryKey: QueryKey.product(productId ?? 0),
  //   queryFn: () =>
  //     api
  //       .getProductApiSampleProductProductIdGet(productId ?? 0)
  //       .then((response) => response.data),
  //   enabled: !!productId,
  // });

  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          {products?.map((product) => (
            <Card key={product.product_name}>
              <Typography variant="h6">
                {product.product_name.toUpperCase()}
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1">
                    Color: {product.color}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    Price: ${product.price.toFixed(2)}
                  </Typography>
                </ListItem>
              </List>
            </Card>
          ))}
          <Card>
            <Select
              value={productId}
              onChange={(event) => {
                setProductId(event.target.value);
              }}
            >
              {products?.map((product) => (
                <MenuItem
                  key={product.product_id}
                  value={product.product_id?.toString()}
                >
                  {product.product_name}
                </MenuItem>
              ))}
            </Select>
            {selectedProduct && (
              <Typography variant="h6">
                {selectedProduct.product_name.toUpperCase()}
              </Typography>
            )}
          </Card>
          {product && (
            <Card key={product.product_name}>
              <PrimaryButton onClick={removeProduct}>
                {t("products.remove")}
              </PrimaryButton>
              <Typography variant="h6">
                {product.product_name.toUpperCase()}
              </Typography>
            </Card>
          )}
        </MainContent>
      </Container>
    </>
  );
};

export default Products;
