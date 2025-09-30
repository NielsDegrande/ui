import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { t } from "i18next";
import { ErrorBoundary } from "react-error-boundary";

import { Product } from "src/api/data-contracts";
import Sidebar from "src/components/sidebar/Sidebar";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import Error from "src/pages/error/Error";
import { ProductState, useProductStore } from "src/stores/product";
import { api } from "src/utils/axios-instance";
import { QueryKey } from "src/utils/query-keys";

/**
 * Renders the Products page.
 */
const Products: React.FC = () => {
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
    (state: ProductState) => state.removeProduct,
  );

  // Find a single product.
  const [productId, setProductId] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (products) {
      const product = products.find(
        (product) => product.product_id === Number(productId),
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
    <ErrorBoundary fallback={<Error />}>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-4">
            {products?.map((product) => (
              <Card key={product.product_name}>
                <CardHeader>
                  <CardTitle>{product.product_name.toUpperCase()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-sm">Color: {product.color}</li>
                    <li className="text-sm">
                      Price: ${product.price.toFixed(2)}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <Card>
              <CardContent className="pt-6">
                <Select value={productId} onValueChange={setProductId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products?.map((product) => (
                      <SelectItem
                        key={product.product_id}
                        value={product.product_id?.toString() || ""}
                      >
                        {product.product_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedProduct && (
                  <h3 className="text-lg font-semibold mt-4">
                    {selectedProduct.product_name.toUpperCase()}
                  </h3>
                )}
              </CardContent>
            </Card>

            {product && (
              <Card key={product.product_name}>
                <CardContent className="pt-6 space-y-4">
                  <Button onClick={removeProduct}>
                    {t("products.remove")}
                  </Button>
                  <h3 className="text-lg font-semibold">
                    {product.product_name.toUpperCase()}
                  </h3>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default Products;
